/* ============================================================
   PROJECT HAIL MARY — TIMELINE BEHAVIOUR
   Panels reveal on scroll, the top bar and accent colour follow
   the Sun's output for the panel in view, the rail on the right
   jumps between events, and the reading view opens documents
   registered in docs/*.js.
   ============================================================ */

const panels = [...document.querySelectorAll('.panel')];

/* ---------- reveal ---------- */

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{ threshold:0.25 });

panels.forEach((p) => revealObserver.observe(p));

/* ---------- the Sun: accent colour and top-bar gauge ---------- */

const SUN_STOPS = [          /* output lost (0–1 of the worst case) → colour */
    [0.00, [242,179, 61]],
    [0.35, [217,192,138]],
    [0.62, [179,180,176]],
    [1.00, [143,163,184]]
];
const WORST_OUTPUT = 92.4;   /* lowest Sol output reached on the timeline */

function sunColour(output){
    const x = Math.min(1, Math.max(0, (100 - output) / (100 - WORST_OUTPUT)));
    for(let i = 1; i < SUN_STOPS.length; i++){
        const [x0, c0] = SUN_STOPS[i - 1];
        const [x1, c1] = SUN_STOPS[i];
        if(x <= x1){
            const k = (x - x0) / (x1 - x0);
            const c = c0.map((v, j) => Math.round(v + (c1[j] - v) * k));
            return `rgb(${c[0]},${c[1]},${c[2]})`;
        }
    }
    return 'rgb(143,163,184)';
}

/* Each panel carries its own accent so neighbours do not flash
   when two are on screen; the top bar follows the one in view. */
panels.forEach((p) => {
    p.style.setProperty('--accent', sunColour(parseFloat(p.dataset.lum)));
});

const solVal = document.getElementById('sol-val');
const hud = document.querySelector('.hud');

function setCurrent(panel){
    const output = parseFloat(panel.dataset.lum);
    hud.style.setProperty('--accent', sunColour(output));
    hud.style.setProperty('--lum-bar', Math.max(4, (output - 90) * 10) + '%');
    solVal.textContent = (output > 99 ? output.toFixed(2) : output.toFixed(1)) + '%';

    document.querySelectorAll('.rail a').forEach((a) => {
        a.classList.toggle('now', a.dataset.id === panel.id);
    });
    document.getElementById('rail').style.setProperty('--accent', sunColour(output));
}

const currentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            setCurrent(entry.target);
        }
    });
},{ rootMargin:'-45% 0px -45% 0px' });

/* ---------- timeline rail ---------- */

const rail = document.getElementById('rail');

panels.forEach((p) => {
    const a = document.createElement('a');
    a.href = '#' + p.id;
    a.dataset.id = p.id;
    if(p.id === 'launch'){ a.classList.add('t0'); }
    a.innerHTML = `<span><em>${p.dataset.clock || ''}</em>${p.dataset.title}</span>`;
    a.setAttribute('aria-label', `${p.dataset.clock} ${p.dataset.title}`);
    rail.appendChild(a);
});

panels.forEach((p) => currentObserver.observe(p));
setCurrent(panels[0]);

/* ---------- reading view ---------- */

const viewer   = document.getElementById('viewer');
const vType    = document.getElementById('v-type');
const vTitle   = document.getElementById('v-title');
const vBody    = document.getElementById('v-body');
const vPrev    = document.getElementById('v-prev');
const vNext    = document.getElementById('v-next');

/* Reading order = order of the document buttons on the page. */
const docButtons = [...document.querySelectorAll('.doc[data-doc]')]
    .filter((b) => !b.dataset.doc.startsWith('@'));
const docOrder = docButtons.map((b) => b.dataset.doc);
let currentDoc = null;

function openArchive(key){
    const record = (window.DOCS || {})[key];
    const button = docButtons.find((b) => b.dataset.doc === key);

    if(!record || !button){
        return;
    }

    const panel = button.closest('.panel');
    currentDoc = key;

    vType.textContent  = button.dataset.type;
    vTitle.textContent = button.dataset.title + '  ·  ' + panel.dataset.clock;

    vBody.innerHTML = record.html +
        (record.note ? `<aside class="v-note"><b>Archivist's note</b>${record.note}</aside>` : '');

    const i = docOrder.indexOf(key);
    vPrev.disabled = i <= 0;
    vNext.disabled = i >= docOrder.length - 1;

    viewer.classList.add('show');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    viewer.scrollTop = 0;
}

function stepArchive(direction){
    const i = docOrder.indexOf(currentDoc) + direction;
    if(i < 0 || i >= docOrder.length){
        return;
    }
    openArchive(docOrder[i]);

    /* keep the timeline behind in step with what is being read */
    const panel = docButtons[i].closest('.panel');
    panel.scrollIntoView({ behavior:'auto' });
}

function closeArchive(){
    viewer.classList.remove('show');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentDoc = null;
}

/* Sealed annexes: the button sits directly before the panel it opens. */
function revealDoc(button){
    const panel = button.closest('.sealed').nextElementSibling;
    if(!panel || !panel.classList.contains('annex')){
        return;
    }
    const open = panel.classList.toggle('is-open');
    button.textContent = open ? 'Close annex' : 'Open annex';
}

document.addEventListener('keydown', (e) => {
    if(!viewer.classList.contains('show')){
        return;
    }
    if(e.key === 'Escape'){ closeArchive(); }
    if(e.key === 'ArrowRight'){ stepArchive(1); }
    if(e.key === 'ArrowLeft'){ stepArchive(-1); }
});

vBody.addEventListener('click', (e) => {
    if(e.target === vBody){
        closeArchive();
    }
});
