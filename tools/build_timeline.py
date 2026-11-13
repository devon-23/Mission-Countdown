# Generates index.html for the Hail Mary timeline from one data table.
# Edit a panel below (clock, text, readouts, document links), then run:
#     python3 tools/build_timeline.py index.html
# Sol output for every panel comes from lum() so the numbers stay on one curve.
# index.html is plain HTML and can also be edited by hand; rerunning this overwrites it.
import math, html, sys
OUT = sys.argv[1]

def lum(T):
    """Sol output (%) at T years from launch. Gompertz curve through the
    novel's figures: 0.01% lost at disclosure (T-5.8), 1% nine years later,
    5% twenty years later. Taumoeba deployed at T+27.3; full recovery in 13 months."""
    t = T + 5.8
    loss = lambda t: math.exp(2.132 - 6.737*math.exp(-0.1278*t))
    if T <= 27.3: return 100 - loss(t)
    floor = 100 - loss(27.3+5.8)
    k = min(1, (T-27.3)/1.08)
    return floor + (100-floor)*(k*k*(3-2*k))

def fmt(v): return ('%.2f' % v if v > 99 else '%.1f' % v) + '%'

# id, T, clock, place, title, description, (key label, key value), readouts, docs, insert, show_sol
P = []
def panel(*a, insert=None, sol=True): P.append(dict(zip(
    ['id','T','clock','place','title','desc','key','read','docs'], a), insert=insert, sol=sol))

panel('petrova', -6.0, 'T−6.0 YR', 'Pulkovo Observatory, St. Petersburg', 'Infrared glow detected',
 "A faint arc of infrared light runs from the Sun's north pole to Venus. It emits at 25.984 microns and nowhere else. Dr. Irina Petrova asks a public mailing list to tell her what she got wrong.",
 ('Emission wavelength','25.984 µm'), [('Confirmed by','1 observatory'),('Public knowledge','None')],
 [('petrova','Email','The Thin Red Line','I. Petrova to astrocurious')])

panel('address', -5.8, 'T−5.8 YR', 'Washington, D.C.', 'The President addresses the nation',
 "Japan's Amaterasu probe confirms what the observatories suspected. The Sun is getting dimmer, and the Petrova line is getting brighter at exactly the same rate. Governments decide to say so in public.",
 ('Solar output lost so far','0.01%'), [('Projected, +9 yr','99.0%','ir'),('Projected, +20 yr','95.0%','ir'),('Audience','1.4 billion')],
 [('address','Transcript','Address to the nation on the Petrova Line','Office of the Press Secretary')])

panel('taskforce', -5.7, 'T−5.7 YR', 'United Nations, New York', 'Petrova Task Force formed',
 "The General Assembly votes to create the Petrova Task Force and puts Eva Stratt in charge of it, with authority over every member state's laboratories, launch sites and budgets. Her first order is a probe to fly into the line.",
 ('Vote','Unanimous'), [('Director','Eva Stratt'),('Limits on authority','None stated','ir')],
 [('taskforce','Article','U.N. hands one administrator command of the Petrova response','The World Ledger'),
  ('recruitment','Form','Scientific recruitment register','Petrova Task Force')])

panel('arclight', -5.0, 'T−5.0 YR', 'Jet Propulsion Laboratory, Pasadena', 'ArcLight reaches the line',
 "2.8 billion people watch the ArcLight probe slip into orbit around Venus and fly through the Petrova line. Its collector comes back heavier than it left, and on live television the dust starts to move.",
 ('Particles collected','174'), [('Probe','In Venus orbit'),('Watching live','2.8 billion')],
 [('arclight','Transcript','ArcLight orbit insertion','Mission commentary and pool feed')])

panel('astrophage', -4.6, 'T−4.6 YR', 'Petrova Task Force, Biology Division', 'Astrophage identified',
 "The particles are alive. They are single cells that soak up the Sun's energy, fly to Venus to breed, and fly back. A middle-school science teacher named Ryland Grace works out how, and gives them a name: Astrophage, the star eater.",
 ('Cell temperature, always','96.415 °C'), [('Sample','Alive'),('Laboratories at work','347')],
 [('@report.html','Paper','Astrophage reproduction and propagation model','PTF Technical Reports'),
  ('astrophage','Article','What is Astrophage?','The World Ledger')])

panel('projections', -4.0, 'T−4.0 YR', 'Earth Systems Modelling Group, Geneva', 'Sun-dimming projections',
 "Thirty-one climate models are run independently, with different assumptions. All of them end the same way: failed harvests, advancing ice, and wars over what is left.",
 ('Projected deaths within 19 years','Half of humanity'), [('Projected, +9 yr','99.0%','ir'),('Projected, +20 yr','95.0%','ir'),('Models in agreement','31 of 31')],
 [('projections','Report','Solar output decline and its consequences','Summary for policymakers')])

panel('sahara', -3.5, 'T−3.5 YR', 'Sahara Desert', 'The Sahara is paved',
 "Reaching another star will take two million kilograms of Astrophage, and the only way to make it is sunlight. A quarter of the Sahara is covered in black panels to breed it.",
 ('Desert surface converted','25%'), [('Fuel required','2,000,000 kg'),('Host states','Algeria, Libya, Chad')],
 [('sahara','Report','Project Sahara: infrastructure and ethics review','Directorate of Infrastructure')])

panel('hailmary', -3.0, 'T−3.0 YR', 'Petrova Task Force, Geneva', 'Project Hail Mary goes public',
 "Every nearby star is infected and dimming except one. Tau Ceti is surrounded by Astrophage and shining normally. Humanity will build one ship to go and find out why. It carries enough fuel to get there and none to come back.",
 ('Until any answer reaches Earth','26 years'), [('Destination','Tau Ceti, 11.9 ly'),('Crew','3'),('Return for crew','None planned','ir')],
 [('hailmary','Memo','Project Hail Mary: mission briefing','Petrova Task Force')])

panel('antarctica', -2.0, 'T−2.0 YR', 'Western Antarctic ice shelf', 'Antarctica is detonated',
 "Twenty-six years is longer than the models give civilisation. To buy time, the task force breaks the Antarctic ice shelf with nuclear charges, releasing methane to trap what heat the Sun still sends.",
 ('Time bought','3 to 5 years'), [('Reversible','No','ir'),('Authorised by','Director, alone')],
 [('antarctica','Report','Operation Winterfall: Antarctic methane release','Directorate of Climate Intervention')])

panel('crew', -1.0, 'T−1.0 YR', 'Office of Crew Selection', 'The crew is chosen',
 "Three people are picked to fly to Tau Ceti: a commander, an engineer and a scientist. All three carry the rare genes that let a body survive years in a coma. All three know the ship cannot bring them home.",
 ('Planned return for crew','None'), [('Commander','Yao Li-Jie'),('Engineer','Olesya Ilyukhina'),('Science','Martin DuBois')],
 [('crew','Form','Crew member records','Office of Crew Selection')])

panel('preparations', -30/365, 'T−30 DAYS', 'Low Earth orbit', 'Final preparations',
 "After three years of construction by forty-two countries, the Hail Mary is finished: two million kilograms, most of it fuel. Agencies stopped counting the cost somewhere past ten trillion dollars.",
 ('Vessel mass','2,000,000 kg'), [('Vessel','Flight ready'),('Faults accepted, not fixed','175')],
 [('preparations','Memo','Orbital assembly: final status','Orbital Construction Authority')])

panel('disaster', -9/365, 'T−9 DAYS', 'Baikonur Cosmodrome, Kazakhstan', 'Explosion at Baikonur',
 "A test of an Astrophage-powered generator at the Baikonur research centre is loaded with a milligram of fuel where a nanogram was specified. The building is gone in an instant. The mission's science officer and his backup are both inside.",
 ('Science crew remaining','0 of 2'), [('Cause','Dosing error, ×1,000,000','ir'),('Launch','In 9 days')],
 [('disaster','Report','Baikonur research centre explosion','Board of Inquiry')])

panel('grace', -2/365, 'T−2 DAYS', 'Baikonur Cosmodrome, Kazakhstan', 'Dr. Ryland Grace joins the crew',
 "One person is left who knows Astrophage well enough and carries the coma-resistance genes: the schoolteacher who named it. Ryland Grace is assigned as science officer two days before launch. The public record says he volunteered.",
 ('Spaceflight experience','None'), [('Crew','Final'),('Launch','In 48 hours')],
 [('grace','Form','Crew member record: R. Grace','Office of Crew Selection')])

panel('launch', 0, 'T+0', 'Low Earth orbit', 'Hail Mary launches',
 "The engines light on schedule. The crew are already asleep and will stay that way for the whole voyage. Earth will hear nothing from them for at least twenty-six years.",
 ('Destination','Tau Ceti'), [('Crew','In coma'),('Arrival','T+13 yr')],
 [('launch','Transcript','Launch day flight loop','Hail Mary Flight Control')])

panel('stratt', 4/12, 'T+4 MONTHS', 'U.N. Special Tribunal, The Hague', 'Eva Stratt arrested',
 "Stratt's immunity was written to end when the ship left. It did. She is taken into custody and charged with environmental crimes, unlawful military action and the seizure of sovereign assets. She disputes none of the facts.",
 ('Status','Detained'), [('Immunity','Expired at launch'),('Plea','Facts not contested')],
 [('stratt','Transcript','Special Tribunal, trial hearing','Case ST-01/04')])

panel('wars', 1.5, 'T+1.5 YR', 'Worldwide', 'The resource wars begin',
 "Harvests are already short, the Antarctic melt has redrawn coastlines, and everyone has read the projections. Countries stop exporting food and start guarding it. Fighting breaks out over farmland, fuel and the routes migrants take.",
 ('Active conflict zones','114'), [('States rationing food','63'),('International cooperation','Failing','ir')],
 [('wars','Report','Global resource conflict assessment','Resource Observation Network')])

panel('yao', 2.3, 'T+2.3 YR', 'Hail Mary, interstellar space', 'Commander Yao dies in transit',
 "Two years into the voyage the ship's medical computer records the death of Commander Yao Li-Jie. No one aboard is awake to see it. Earth will not find out for decades.",
 ('Crew remaining','2'), [('Ship','En route'),('Crew awake','0 of 3')],
 [('yao','Ship log','Autonomous care log, bed 1','Hail Mary medical')], insert='Added to the record after recovery', sol=False)

panel('ily', 12.0, 'T+12.0 YR', 'Hail Mary, interstellar space', 'Ilyukhina dies in transit',
 "A year short of Tau Ceti the medical computer loses engineer Olesya Ilyukhina. It has one patient left in its care.",
 ('Crew remaining','1'), [('Ship','Approaching Tau Ceti'),('Crew awake','0 of 2')],
 [('ily','Ship log','Autonomous care log, bed 2','Hail Mary medical')], insert='Added to the record after recovery', sol=False)

panel('tau', 13.0, 'T+13.0 YR', 'Tau Ceti system', 'Hail Mary reaches Tau Ceti',
 "The ship slows into orbit around Tau Ceti and wakes its crew. One of them wakes up. Ryland Grace has been asleep for nearly four years of ship time and cannot remember his own name.",
 ('Crew alive','1 of 3'), [('Location','Tau Ceti'),('Time aboard','3 yr 9 mo'),('Memory','Impaired','ir')],
 [('tau','Ship log','Arrival and crew revival record','Hail Mary medical')], insert='Reconstructed from recovered flight data', sol=False)

panel('contact', 13.2, 'T+13.2 YR', 'Tau Ceti system', 'First contact',
 "Another ship is already in orbit at Tau Ceti, and it is not from Earth. Its one surviving crew member has come from 40 Eridani for the same reason Grace has: his star is dying too. Grace calls him Rocky.",
 ('Origin of the other vessel','40 Eridani'), [('Signal','Non-human'),('Contact','Confirmed')],
 [('contact','Memo','Contact file: the Eridian vessel','Recovered mission log')], insert='Recovered from the Beetle archive', sol=False)

panel('adrian', 13.4, 'T+13.4 YR', 'Tau Ceti e, “Adrian”', 'Life on Adrian',
 "Tau Ceti has its own Petrova line, running to a planet Grace names Adrian. High in its atmosphere, where the Astrophage breed, something is eating them.",
 ('Astrophage population at Adrian','Held in check'), [('Biosphere','Confirmed'),('Petrova line','Present')],
 [('adrian','Paper','A complete biosphere in the atmosphere of Tau Ceti e','Recovered science log')], insert='Recovered from the Beetle archive', sol=False)

panel('fishing', 13.8, 'T+13.8 YR', 'Low orbit, Adrian', 'The Adrian dive',
 "To take a sample, the Hail Mary has to fly low enough to drag a ten-kilometre chain through the air where the Astrophage breed. Its own engine exhaust overheats the hull. Two fuel bays rupture, the ship tumbles, and Grace is knocked out. Rocky leaves his own atmosphere to reach him.",
 ('Margin for error','Under 3%'), [('Fuel bays lost','2','ir'),('Pilot','Injured','ir')],
 [('fishing','Report','Atmospheric collection incident','Recovered flight data')], insert='Recovered from the Beetle archive', sol=False)

panel('taumoeba', 13.9, 'T+13.9 YR', 'Hail Mary laboratory', 'Taumoeba discovered',
 "The sample contains a microbe that eats Astrophage. Grace names it Taumoeba. Nitrogen kills it, and the air of Venus has nitrogen in it, so Grace and Rocky breed it, generation after generation, until it survives.",
 ('Final strain','Taumoeba-82.5'), [('Eats Astrophage','Yes'),('Nitrogen tolerance','8.25%')],
 [('taumoeba','Paper','Taumoeba: a natural predator of Astrophage','Recovered science log')], insert='Recovered from the Beetle archive', sol=False)

panel('return', 14.0, 'T+14.0 YR', 'Departing Tau Ceti', 'Hail Mary turns for home',
 "With fuel from Rocky's ship the Hail Mary can do what it was never built to do: go back. Grace sets course for Earth carrying Taumoeba-82.5.",
 ('Ship time to Earth','4 yr 2 mo'), [('Payload','Taumoeba-82.5'),('Crew','1')],
 [('return','Display','Return transit navigation','Hail Mary NAV')], insert='Recovered from the Beetle archive', sol=False)

panel('contaminant', 14.1, 'T+14.1 YR', 'Hail Mary, outbound from Tau Ceti', 'Contaminant detected',
 "Weeks into the trip home the fuel starts to vanish. The Taumoeba that was bred to survive nitrogen has also learned to pass through its container walls. If it is loose on the Hail Mary it is loose on Rocky's ship too, and his fuel tanks are made of the same material.",
 ('Quarantine','Active'), [('Location','Laboratory A'),('Alert level','Critical','ir')],
 [('contaminant','Ship log','Containment alerts, Laboratory A','Hail Mary systems')], insert='Recovered from the Beetle archive', sol=False)

panel('beetles', 14.2, 'T+14.2 YR', 'Interstellar space', 'The Beetles are sent home',
 "Grace cannot both go home and save Rocky. He loads four small probes, John, Paul, George and Ringo, with Taumoeba and everything the mission has learned, fires them at Earth, and turns the Hail Mary around.",
 ('Earliest Earth arrival','T+26.4 yr'), [('Probes released','4'),('Payload','Sealed, alive')],
 [('beetles','Display','Beetle track','Hail Mary NAV')], insert='Recovered from the Beetle archive', sol=False)

panel('collapse', 18.0, 'T+18.0 YR', 'Earth', 'Climate collapse',
 "Harvests have failed on four continents. Famine, forced migration and failing infrastructure spread faster than governments can respond, and several stop trying.",
 ('Projected population loss','25–50%'), [('Food security','Critical','ir'),('Conflict','Escalating','ir')],
 [('collapse','Report','Earth stability assessment, Year 18','United Nations crisis archive')])

panel('lastcontact', 23.0, 'T+23.0 YR', 'Interstellar space', 'Last signal from the Hail Mary',
 "The Beetles record every transmission they receive on the way home. The last one from the Hail Mary reaches them nine years into their flight. By then the ship is far off the road to Sol, heading for 40 Eridani.",
 ('Signal','Lost'), [('Vessel heading','40 Eridani'),('Crew','Unknown')],
 [('lastcontact','Transcript','Final transmission','Recovered from Beetle 1')], insert='Reconstructed from Beetle telemetry', sol=False)

panel('earthwaits', 26.0, 'T+26.0 YR', 'Earth', 'Earth waits for the Beetles',
 "The earliest date a probe from Tau Ceti could reach home has arrived. Nothing has been heard from the Hail Mary since launch. Most people alive have stopped expecting to.",
 ('Deaths attributed to the dimming','3.9 billion'), [('Return window','Open'),('Signals received','None','ir')],
 [('earthwaits','Broadcast','Evening bulletin, Year 26','Rush transcript')])

panel('signalreceived', 26.3, 'T+26.3 YR', 'Deep Space Network, Jupiter relay', 'Four objects inbound',
 "Antennas near Jupiter pick up four small objects braking hard toward the inner Solar System, exactly where and when the Beetles should be. Ceasefires are signed within days. Eva Stratt is released from prison to run the recovery.",
 ('Splashdown in','34 days'), [('Objects','4'),('Signal','Confirmed')],
 [('signalreceived','Article','Four objects, right on time','The World Ledger')])

panel('splashdown', 26.4, 'T+26.4 YR', 'Indian Ocean recovery zone', 'Beetle splashdown and recovery',
 "All four Beetles come down in the Indian Ocean after twelve years in flight. Recovery crews lift out live cultures, the Hail Mary's complete records, and the first evidence that humanity is not the only intelligent species.",
 ('Probes recovered','4 of 4'), [('Payload','Intact'),('Cultures','Alive')],
 [('splashdown','Form','Recovery inventory and chain of custody','Recovery Task Group')])

panel('solution', 26.7, 'T+26.7 YR', 'Earth', 'The solution arrives',
 "Laboratories confirm that Taumoeba-82.5 eats Astrophage under Venus conditions and survives. Every breeding tank left on Earth is switched from growing Astrophage to growing the thing that kills it.",
 ('Loss of solar output','Reversible'), [('Taumoeba','Viable'),('Breeding','Planetary scale')],
 [('solution','Article','It works','The World Ledger')])

panel('arclight2', 27.0, 'T+27.0 YR', 'Venus intercept trajectory', 'ArcLight II launches',
 "Twenty-seven years after the first ArcLight went to look at the Petrova line, a second one leaves to destroy it, carrying tanks of Taumoeba to release over Venus.",
 ('Objective','End the Petrova line'), [('Payload','Taumoeba-82.5'),('Target','Venus')],
 [('arclight2','Memo','ArcLight II mission report','Sol Recovery Initiative')])

panel('solsaved', 27.3, 'T+27.3 YR', 'Petrova Task Force monitoring network', 'Sol is saved',
 "Within weeks of release over Venus, the Astrophage population collapses. The Petrova line fades. For the first time in thirty-three years the Sun's output stops falling.",
 ('Full recovery projected in','13 months'), [('Astrophage density','Collapsing'),('Extinction','Averted')],
 [('solsaved','Report','Sol recovery confirmation','Petrova Task Force, final bulletin')])

panel('earthheals', 28.4, 'T+28.4 YR', 'Earth', 'Earth heals',
 "Temperatures stop falling. Seed vaults are opened, abandoned farmland is planted again, and for the first time in decades people plan for more than the next winter.",
 ('Famine','Receding'), [('Agriculture','Recovering'),('Global temperature','Stabilising')],
 [('earthheals','Report','Earth recovery report','Reconstruction programme')])

panel('celebration', 29.0, 'T+29.0 YR', 'Worldwide', 'The world remembers',
 "With recovery under way, countries honour the crew of the Hail Mary. Memorials, museums and a new public holiday mark the mission that saved the species.",
 ('Sol Day','March 2'), [('Parades','314 cities'),('Crew honoured','Yao, Ilyukhina, Grace')],
 [('celebration','Article','A holiday for three people who never came back','The World Ledger')])

panel('forty', 44.0, 'T+44 YR', 'Deep-space observation network', 'A distant sun brightens',
 "Sixteen light-years away, 40 Eridani begins to brighten. The pattern matches what happened to Sol after Taumoeba. Someone carried the cure to Erid. Earth has no way to know who was flying the ship.",
 ('Status of Dr. Ryland Grace','Unknown'), [('40 Eridani','Recovering'),('Signal from Hail Mary','None')],
 [('forty','Paper','Brightening of 40 Eridani A','Astronomical circular')])

e = html.escape
out = []
for p in P:
    L = lum(p['T'])
    rd = ''
    if p['sol']:
        rd += f'            <div><dt>Sol output</dt><dd class="acc">{fmt(L)}</dd></div>\n'
    for r in p['read']:
        cls = f' class="{r[2]}"' if len(r) > 2 else ''
        rd += f'            <div><dt>{e(r[0])}</dt><dd{cls}>{e(r[1])}</dd></div>\n'
    docs = ''
    for key, ty, ti, src in p['docs']:
        if key.startswith('@'):
            act = f"window.open('{key[1:]}','_blank')"; go = 'Open ↗'
        else:
            act = f"openArchive('{key}')"; go = 'Open →'
        docs += (f'            <button class="doc" type="button" onclick="{act}" data-doc="{key}" data-type="{e(ty)}" data-title="{e(ti)}">'
                 f'<span class="ty">{e(ty)}</span><span class="ti">{e(ti)} <span class="src">· {e(src)}</span></span><span class="go">{go}</span></button>\n')
    ins = f'\n        <p class="insert">{e(p["insert"])}</p>' if p['insert'] else ''
    out.append(f'''
<section class="panel {p['id']}" id="{p['id']}" data-lum="{L:.2f}" data-clock="{e(p['clock'])}" data-title="{e(p['title'])}">
    <div class="content">
        <div class="clock">{e(p['clock'])}<span>{e(p['place'])}</span></div>
        <h1>{e(p['title'])}</h1>
        <p class="description">{e(p['desc'])}</p>
        <div class="key">{e(p['key'][0])}<b>{e(p['key'][1])}</b></div>
        <div class="docs">
{docs}        </div>
    </div>
    <aside class="side">
        <dl class="readout">
{rd}        </dl>{ins}
    </aside>
</section>''')

page = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Hail Mary: Mission Record</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Arimo:wght@400;700&family=B612:wght@400;700&family=B612+Mono:wght@400;700&family=Cousine:wght@400;700&family=Libre+Franklin:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,400..800;1,6..72,400..600&family=Reenie+Beanie&family=STIX+Two+Text:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:ital,wght@0,400;0,700;1,400&family=Tinos:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="docs.css">
</head>

<body>

<!-- TOP BAR -->
<header class="hud">
  <div class="hud-mark">Project Hail Mary<span>Mission record</span></div>
  <div class="hud-sol">Sol output <i id="sol-bar"></i> <b id="sol-val">100%</b></div>
</header>

<!-- TIMELINE RAIL (built by script.js) -->
<nav class="rail" id="rail" aria-label="Timeline"></nav>

<!-- INTRO -->
<section class="panel intro" id="intro" data-lum="100" data-clock="" data-title="Start">
    <div class="content">
        <div class="clock">T−6 YR TO T+44 YR<span>Petrova Task Force</span></div>
        <h1>The Hail Mary mission, as it happened</h1>
        <p class="description">Thirty-seven events, from the night an astronomer noticed a line in the sky to the year a star sixteen light-years away came back to life. Each one links to the papers, transcripts and logs that recorded it.</p>
        <p class="description dim">Scroll to begin. The colour of the readouts follows the Sun.</p>
    </div>
    <aside class="side">
        <img class="patch" src="assets/logo.png" alt="Project Hail Mary mission patch">
    </aside>
</section>
{''.join(out)}

<!-- READING VIEW -->
<div class="viewer" id="viewer" aria-hidden="true">
    <div class="viewer-bar">
        <span class="ty" id="v-type"></span>
        <span class="ti" id="v-title"></span>
        <span class="nav">
            <button type="button" id="v-prev" onclick="stepArchive(-1)">← Prev</button>
            <button type="button" id="v-next" onclick="stepArchive(1)">Next →</button>
            <button type="button" id="v-close" onclick="closeArchive()">Close ✕</button>
        </span>
    </div>
    <div class="viewer-body" id="v-body"></div>
</div>

<script src="docs/kit.js"></script>
<script src="docs/1-before-launch.js"></script>
<script src="docs/2-launch.js"></script>
<script src="docs/3-voyage.js"></script>
<script src="docs/4-return.js"></script>
<script src="script.js"></script>

</body>
</html>
'''
open(OUT, 'w').write(page)
for p in P: print(f"{p['id']:15s} {p['clock']:12s} {fmt(lum(p['T']))}")
