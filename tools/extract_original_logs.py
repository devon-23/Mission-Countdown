# Pulls the original log text out of the pre-"v2" version of script.js (commit 910b067)
# and writes it, unchanged, as data for the new document templates.
import re, sys, html, json
src = open(sys.argv[1]).read(); out_path = sys.argv[2]
ents = [(m.start(), m.group(1)) for m in re.finditer(r"^\s{0,4}([a-z0-9]+): \{\s*\n\s*title:", src, re.M)]
body = {}
for i, (pos, key) in enumerate(ents):
    body[key] = src[pos:(ents[i+1][0] if i+1 < len(ents) else len(src))]

def clean(s):
    s = re.sub(r'<br\s*/?>', '\n', s)
    s = re.sub(r'<[^>]+>', '', s)
    return html.unescape(s)

def paras(s, sep='<br>'):
    """lines inside a paragraph are joined; blank lines become line breaks"""
    ps = [' '.join(l.strip() for l in p.split('\n') if l.strip()) for p in re.split(r'\n\s*\n', clean(s))]
    return sep.join(p for p in ps if p)

LV = {'': 'ADV', 'warning': 'CAUT', 'critical': 'WARN', 'danger': 'WARN', 'death': 'WARN', 'redacted': 'CAUT', 'final': 'WARN', 'deceased': 'WARN', 'success': 'ADV'}
data = {}; classes = {}

# --- ArcLight: plain-text transcript in a <pre>
b = body['arclight']; a = b.index('[BEGIN NASA/JPL LIVE TRANSCRIPT]'); e = b.index('[END TRANSCRIPT]', a) + len('[END TRANSCRIPT]')
rows = []
for p in re.split(r'\n\s*\n', clean(b[a:e])):
    ls = [l.strip() for l in p.split('\n') if l.strip()]
    if not ls: continue
    m = re.match(r'^([A-Z][A-Z. ]+):$', ls[0])
    if m: rows.append(['line', '', m.group(1), ' '.join(ls[1:]), 'ADV'])
    elif re.match(r'^\[(BEGIN|END)[^\]]*\]$', ' '.join(ls)): rows.append(['mark', ' '.join(ls)[1:-1]])
    else: rows.append(['note', ' '.join(ls)])
data['arclight'] = rows

# --- Yao / Ilyukhina: MARY medical logs
for k in ('yao', 'ily'):
    rows = []
    for cls, head, txt in re.findall(r'<div class="mary-entry\s*([a-z-]*)">\s*<div class="mary-header">(.*?)</div>\s*<div class="mary-body">(.*?)</div>\s*</div>', body[k], re.S):
        classes.setdefault(k, set()).add(cls)
        t = re.sub(r'\s+', ' ', clean(head)).strip()
        t = re.sub(r'^MARY \[(.*?) \| (.*?)\]$', r'\1 \2', t)
        rows.append(['line', t, 'MARY', paras(txt), LV.get(cls, 'WARN')])
    data[k] = rows

# --- Tau Ceti: awakening sequence + three cognitive assessment logs
rows = []
for cls, head, txt in re.findall(r'<div class="medical-log\s*([a-z-]*)">\s*<div class="log-time">(.*?)</div>\s*<div class="log-entry">(.*?)</div>', body['tau'], re.S):
    classes.setdefault('tau', set()).add(cls)
    t = re.search(r'(\d\d:\d\d:\d\d)\]', clean(head)).group(1)
    rows.append(['line', t, 'MARY', paras(txt), LV.get(cls, 'WARN')])
data['tau_awakening'] = rows
chunks = re.split(r'COGNITIVE ASSESSMENT LOG #(\d+)', body['tau'])
for i in range(1, len(chunks), 2):
    rows = []
    for txt in re.findall(r'<div class="assessment-entry[^"]*">\s*<span>(.*?)</span>', chunks[i+1], re.S):
        s = re.sub(r'\s+', ' ', clean(txt)).strip()
        m = re.match(r'^(MARY|GRACE)\[(.*?)\]:\s*(.*)$', s)
        if m: rows.append(['line', m.group(2), m.group(1), m.group(3), 'ADV'])
        else: rows.append(['note', s])
    data['tau_log_' + chunks[i]] = rows

# --- Contaminant: alert log in a <pre>
b = body['contaminant']; pre = clean(re.search(r'<pre class="danger-log">(.*?)</pre>', b, re.S).group(1))
main, tail = pre.split('[END TELEMETRY]')
rows = []
for l in main.split('\n'):
    l = l.strip()
    if not l: continue
    m = re.match(r'^MARY\[(.*?)\]:\s*(.*)$', l)
    if not m: rows.append(['note', l]); continue
    txt = m.group(2); u = txt.upper()
    lv = 'WARN' if re.search(r'WARNING|CONTAMINANT DETECTED|FAILURE|UNSTABLE|SHUTOFF|OFFLINE', u) else 'CAUT' if re.search(r'CAUTION|DEGRADED|DELAYED|OVERRIDE|INSTABILITY|PRESSURE DROP|DEPRESSURIZATION|VENTING', u) else 'ADV'
    rows.append(['line', m.group(1), 'MARY', txt, lv])
rows.append(['note', '[END TELEMETRY]'])
data['contaminant'] = rows
data['contaminant_tail'] = [' '.join(x.strip() for x in p.split('\n') if x.strip()) if not p.strip().startswith('•') else '<br>'.join(x.strip() for x in p.split('\n') if x.strip())
                            for p in re.split(r'\n\s*\n', tail) if p.strip() and p.strip() != '---']

# --- Adrian dive: MARY emergency response
rows = []
for cls, txt in re.findall(r'<div class="hm-mary-log\s*([a-z-]*)">(.*?)</div>', body['fishing'], re.S):
    classes.setdefault('fishing', set()).add(cls)
    s = re.sub(r'\s+', ' ', clean(txt)).strip()
    m = re.match(r'^>?\s*MARY\[(.*?)\]:\s*(.*)$', s)
    rows.append(['line', m.group(1), 'MARY', m.group(2), LV.get(cls, 'WARN')])
data['fishing'] = rows

js = ("/* ============================================================\n"
      "   ORIGINAL LOGS\n"
      "   Log and transcript text carried over unchanged from the\n"
      "   earlier version of the site. Each row is\n"
      "   ['line', time, speaker, text, level] | ['note', text] | ['mark', text].\n"
      "   The documents in docs/1-…, 3-… lay these out; edit wording here.\n"
      "   ============================================================ */\n\n"
      "const ORIGINAL_LOGS = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
open(out_path, 'w').write(js)
print({k: len(v) for k, v in data.items()}); print({k: sorted(v) for k, v in classes.items()})
