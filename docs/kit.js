/* ============================================================
   DOCUMENT KIT
   Small template functions, one per kind of document, so the
   files that hold the actual writing (docs/1-…, 2-…, 3-…, 4-…)
   stay readable. Each returns an HTML string for the reading view.

   Register a document with:
       DOCS.key = { html: KIT.news({...}), note: 'optional context' };
   ============================================================ */

window.DOCS = window.DOCS || {};

const KIT = (() => {

    const lines = (a) => (Array.isArray(a) ? a : [a]);

    /* --- Mailing-list archive page --------------------------------
       { list, subject, from, addr, date, prev, next, body, attach:[[name,bytes]], thread:[[who, subject]] } */
    function mail(o){
        const att = (o.attach || []).map(([name, size]) =>
`-------------- next part --------------
A non-text attachment was scrubbed...
Name: ${name}
Size: ${size} bytes
Desc: not available`).join('\n');
        const thread = (o.thread || []).map(([who, what]) =>
            `<li><a>${what}</a> &nbsp; <i>${who}</i></li>`).join('');
        return `<article class="sheet mail">
            <h1>[${o.list}] ${o.subject}</h1>
            <span class="from">${o.from}</span> <a>${o.addr}</a><br>
            <i>${o.date}</i>
            <ul>
                <li>Previous message: <a>[${o.list}] ${o.prev}</a></li>
                <li>Next message: <a>[${o.list}] ${o.next}</a></li>
                <li><b>Messages sorted by:</b> <a>[ date ]</a> <a>[ thread ]</a> <a>[ subject ]</a> <a>[ author ]</a></li>
            </ul>
            <hr>
<pre>${o.body}</pre>
${att ? `<pre>\n${att}</pre>` : ''}
            <hr>
            ${thread ? `<b>Replies in this thread:</b><ul class="thread">${thread}</ul><hr>` : ''}
            <ul><li>More information about the ${o.list} mailing list</li></ul>
        </article>`;
    }

    /* --- Press-office remarks / broadcast rush transcript ---------
       { head:[lines], release:[left,right], title:[lines], place, start, body:[strings], end, rush:bool }
       A body string in (parentheses) is set as a centred direction. */
    function remarks(o){
        const head = lines(o.head);
        const body = o.body.map((p) =>
            /^\(.*\)$/.test(p) || p === '* * *'
                ? `<p class="dir">${p}</p>`
                : `<p>${p}</p>`).join('');
        return `<article class="sheet remarks${o.rush ? ' rush' : ''}">
            <div class="ctr house">${head[0]}</div>
            ${head.slice(1).map((l) => `<div class="ctr">${l}</div>`).join('')}
            <div class="rule"></div>
            <div class="rel"><span>${o.release[0]}</span><span>${o.release[1]}</span></div>
            <h1 class="ttl">${lines(o.title).join('<br>')}</h1>
            ${o.place ? `<div class="ctr" style="margin-bottom:18px;">${o.place}</div>` : ''}
            <p class="time">${o.start}</p>
            ${body}
            <div class="end"><span>END</span><span>${o.end}</span></div>
        </article>`;
    }

    /* --- Control-room loop -----------------------------------------
       { head:[a,b,c], sub:[a,b,c], rows:[ [t, who, text] | ['note', text] | ['los', text] ], foot:[a,b] } */
    function loop(o){
        const rows = o.rows.map((r) => {
            if(r[0] === 'note'){ return `<div class="note">(${r[1]})</div>`; }
            if(r[0] === 'raw'){  return `<div class="note">${r[1]}</div>`; }
            if(r[0] === 'los'){  return `<div class="los">- - - ${r[1]} - - -</div>`; }
            return `<div class="ln"><span class="t">${r[0]}</span><span>${r[1]}</span><span>${r[2]}</span></div>`;
        }).join('');
        return `<article class="sheet loop${o.notime ? ' notime' : ''}">
            <div class="hd"><span>${o.head[0]}</span><span>${o.head[1]}</span><span>${o.head[2]}</span></div>
            <div class="hd hd2"><span>${o.sub[0]}</span><span>${o.sub[1]}</span><span>${o.sub[2]}</span></div>
            ${rows}
            ${o.foot ? `<div class="pf"><span>${o.foot[0]}</span><span>${o.foot[1]}</span></div>` : ''}
        </article>`;
    }

    /* --- Line-numbered tribunal transcript --------------------------
       { top, cap, firstPage, ref, front:'plain text for an unnumbered first page', speeches:[strings] }
       Speeches are hard-wrapped at 56 characters and numbered 25 lines to a page,
       the way court reporters set them. "Q. " and "A. " are indented. */
    function court(o){
        /* narrower measure on phones so numbered lines do not re-wrap */
        const WIDTH = window.innerWidth < 700 ? 36 : 56, PER_PAGE = 25;
        const all = [];
        o.speeches.forEach((s) => {
            const qa = /^[QA]\. /.test(s);
            const words = s.split(' ');
            let line = qa ? '   ' : '';
            words.forEach((w) => {
                if((line + w).length > WIDTH){
                    all.push(line.trimEnd());
                    line = '';
                }
                line += w + ' ';
            });
            all.push(line.trimEnd());
        });

        const pages = [];
        for(let i = 0; i < all.length; i += PER_PAGE){
            pages.push(all.slice(i, i + PER_PAGE));
        }

        const front = o.front ? `<article class="sheet court">
            <div class="top"><span>${o.top}</span><span>Page ${o.firstPage - 1}</span></div>
            <div class="cap">${o.cap}</div>
            <pre>${o.front}</pre>
            <div class="foot"><span>${o.ref}</span><span></span></div>
        </article>` : '';

        return front + pages.map((pg, n) => `<article class="sheet court">
            <div class="top"><span>${o.top}</span><span>Page ${o.firstPage + n}</span></div>
            <div class="cap">${o.cap}</div>
            <ol>${pg.map((l) => `<li>${l}</li>`).join('')}</ol>
            <div class="foot"><span>${o.ref}</span><span>${(o.times || [])[n] || ''}</span></div>
        </article>`).join('');
    }

    /* --- Ship's log --------------------------------------------------
       { title, right, sub:[[label,value] x4], rows:[[t, 'ADV'|'CAUT'|'WARN', msg] | ['sep', text]],
         strip:'flat'|'none', after:'html', foot } */
    function slog(o){
        const cls = { ADV:'adv', CAUT:'caut', WARN:'warn' };
        /* a row whose second item is not a level is a line of speech: [time, 'GRACE', text] */
        const rows = o.rows.map((r) => r[0] === 'sep'
            ? `<div class="r sep">${r[1]}</div>`
            : cls[r[1]]
                ? `<div class="r ${cls[r[1]]}"><span class="t">${r[0]}</span><span class="lv">${r[1]}</span><span class="m">${r[2]}</span></div>`
                : `<div class="r spk ${r[1] === 'MARY' ? 'sys' : 'me'}"><span class="t">${r[0]}</span><span class="lv">${r[1]}</span><span class="m">${r[2]}</span></div>`).join('');
        const strip = o.strip === 'flat' ? `<div class="strip">
            <svg viewBox="0 0 720 70" role="img" aria-label="Heart rate trace ending in a flat line">
                <line x1="0" y1="35" x2="720" y2="35" stroke="#1b2025"/>
                <polyline fill="none" stroke="#c9d0d6" stroke-width="1.3" points="0,38 40,38 46,30 50,38 56,38 60,12 64,52 68,38 110,38 116,30 120,38 126,38 130,12 134,52 138,38 176,38 182,31 186,38 191,38 195,14 199,50 203,38 236,38 241,32 245,38 249,38 253,18 257,48 261,38 288,38 292,33 296,38 299,38 303,22 307,46 311,38 332,38 336,34 340,38 343,38 346,27 350,44 353,38 372,38 378,35 384,41 390,36 396,40 404,37 414,39 426,38 720,38"/>
                <text x="8" y="14" font-size="10" fill="#7c8791" font-family="B612 Mono, monospace">${o.stripLabel || 'HR'}</text>
                <text x="640" y="14" font-size="10" fill="#ff6b57" font-family="B612 Mono, monospace">0 BPM</text>
            </svg></div>` : '';
        return `<article class="slog${o.wide ? ' wide' : ''}">
            <div class="hd"><span>${o.title}</span><span>${o.right || ''}</span></div>
            <div class="sub">${o.sub.map(([l, v]) => `<div><small>${l}</small>${v}</div>`).join('')}</div>
            <div class="rows">${rows}</div>
            ${strip}
            ${o.after || ''}
            <div class="ft">${o.foot}</div>
        </article>`;
    }

    /* --- Flight display ------------------------------------------------
       { title, right, plot:'<svg…>', side:'html', foot:'html' } */
    function display(o){
        return `<article class="fd">
            <div class="hd"><span>${o.title}</span><span>${o.right || ''}</span></div>
            <div class="bd"><div class="plot">${o.plot}</div><div>${o.side}</div></div>
            ${o.foot ? `<div class="txt">${o.foot}</div>` : ''}
        </article>`;
    }

    /* --- Newspaper article ------------------------------------------
       { edition, section:[main, sub…], headline, deck, by, from, img, cap, credit, body:'html' } */
    function news(o){
        return `<article class="sheet news">
            <div class="mast"><b>${o.paper || 'The World Ledger'}</b><span>${o.edition}</span></div>
            <div class="sect">${o.section[0]}${o.section.slice(1).map((s) => `<span>${s}</span>`).join('')}</div>
            <div class="in">
                <h1>${o.headline}</h1>
                <p class="deck">${o.deck}</p>
                <div class="by"><b>By ${o.by}</b><br>${o.from}</div>
                ${o.img ? `<figure><img src="${o.img}" alt=""><figcaption>${o.cap} <span>${o.credit || 'Photograph: The World Ledger'}</span></figcaption></figure>` : ''}
                <div class="txt">${o.body}</div>
            </div>
        </article>`;
    }

    /* --- Journal paper ------------------------------------------------
       { journal, issue, kind, title, authors, aff, abstract, body:'html', meta, circ:bool } */
    function paper(o){
        return `<article class="sheet paper${o.circ ? ' circ' : ''}">
            <div class="run"><span>${o.journal}</span><span>${o.issue}</span></div>
            <div class="kind">${o.kind}</div>
            <h1>${o.title}</h1>
            <div class="auth">${o.authors}</div>
            <div class="aff">${o.aff}</div>
            ${o.abstract ? `<div class="abs">${o.abstract}</div>` : ''}
            <div class="cols${o.circ ? ' one' : ''}">${o.body}</div>
            <div class="meta">${o.meta}</div>
        </article>`;
    }

    /* --- Assessment / investigation report -----------------------------
       { org, title, sub, body:'html', foot:[a,b,c], kind:'inq'|'green'|'' } */
    function report(o){
        return `<article class="sheet rep ${o.kind || ''}">
            <div class="cov"><small>${o.org}</small><h1>${o.title}</h1><p>${o.sub}</p></div>
            <div class="in">${o.body}</div>
            <div class="pg"><span>${o.foot[0]}</span><span>${o.foot[1]}</span><span>${o.foot[2]}</span></div>
        </article>`;
    }

    /* headline statement for reports: hs('A.1', 'text', 'high confidence') */
    const hs = (n, text, conf) =>
        `<div class="hs"><b class="n">${n}</b>${text}${conf ? ` <i>(${conf})</i>` : ''}</div>`;

    /* --- Memo ------------------------------------------------------------
       { org, ref, cls, to, from, date, re, body:'html', sign, role } */
    function memo(o){
        return `<article class="sheet memo">
            ${o.cls ? `<div class="cls">${o.cls}</div>` : ''}
            <div class="lh"><span>${o.org}</span><span>${o.ref}</span></div>
            <div class="mh">MEMORANDUM</div>
            <dl>
                <dt>TO:</dt><dd>${o.to}</dd>
                <dt>FROM:</dt><dd>${o.from}</dd>
                <dt>DATE:</dt><dd>${o.date}</dd>
                <dt>SUBJECT:</dt><dd>${o.re}</dd>
            </dl>
            ${o.body}
            ${o.sign ? `<div class="sig"><div class="hand">${o.sign}</div>${o.role || ''}</div>` : ''}
            ${o.cls ? `<div class="cls bot">${o.cls}</div>` : ''}
        </article>`;
    }

    /* --- Government form ---------------------------------------------------
       form({ org:[lines], title, no:[lines], body:'cells', foot:[a,b] })
       cell(span, label, value, 'red'|'narr'|'hand')   band('PART B — …') */
    function form(o){
        return `<article class="sheet form">
            <div class="fh">
                <div><div class="org">${lines(o.org).join('<br>')}</div><h1>${o.title}</h1></div>
                <div class="no">${lines(o.no).join('<br>')}</div>
            </div>
            <div class="grid">${o.body}</div>
            <div class="ff"><span>${o.foot[0]}</span><span>${o.foot[1]}</span></div>
        </article>`;
    }

    function cell(span, label, value, mod){
        const v = mod === 'narr' ? `<div class="narr">${value}</div>`
                : mod === 'hand' ? `<div class="hand">${value}</div>`
                : mod === 'raw'  ? value
                : `<div class="v${mod ? ' ' + mod : ''}">${value}</div>`;
        return `<div class="c c${span}">${label ? `<label>${label}</label>` : ''}${v}</div>`;
    }

    const band  = (text) => `<div class="band">${text}</div>`;
    const photo = (src, label) => `<div class="photo"><label>${label}</label><img src="${src}" alt=""></div>`;
    const check = (options, on) => `<div class="chk">${options.map((x) =>
        `<span${[].concat(on).includes(x) ? ' class="on"' : ''}>${x}</span>`).join('')}</div>`;

    /* photograph inside a form cell: pic(6, 'Photo 1. Caption', 'assets/x.png') */
    const pic = (span, label, src) => `<div class="c c${span} pic"><label>${label}</label><img src="${src}" alt=""></div>`;

    /* Rows from docs/0-original-logs.js, laid out for a loop transcript or a ship's log */
    const old = {
        loop: (rows) => rows.map((r) =>
            r[0] === 'line' ? [r[1], r[2], r[3]]
          : r[0] === 'mark' ? ['los', r[1]]
          : ['raw', r[1]]),
        slog: (rows, speakers) => rows.map((r) =>
            r[0] === 'line' ? [r[1], speakers ? r[2] : r[4], r[3]]
          : ['sep', r[1]])
    };

    /* table inside a form: table(['Head',…], [[cell,…],…]); a cell starting with "!" is red */
    function table(head, rows){
        return `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${
            rows.map((r) => `<tr>${r.map((c) => String(c).startsWith('!')
                ? `<td class="red">${String(c).slice(1)}</td>` : `<td>${c}</td>`).join('')}</tr>`).join('')
        }</tbody></table></div>`;
    }

    return { mail, remarks, loop, court, slog, display, news, paper, report, hs, memo, form, cell, band, photo, check, table, pic, old };
})();
