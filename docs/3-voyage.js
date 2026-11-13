/* ============================================================
   DOCUMENTS, PART 3 — THE VOYAGE
   T+2.3 yr to T+14.2 yr. Everything here came home in the
   Beetles' data cores.
   ============================================================ */

/* ---------- Yao medical log ---------- */

DOCS.yao = {
    html: KIT.slog({
        wide: true,
        title: 'HAIL MARY / RECOVERED MARY MEDICAL LOGS',
        right: 'COMMANDER YAO LI-JIE',
        sub: [['Time into transit', '2.3 years'], ['Cause of death', 'Nutritional failure'], ['Crew status', 'All crew comatose'], ['Witnesses', 'None']],
        rows: KIT.old.slog(ORIGINAL_LOGS.yao),
        strip: 'flat',
        stripLabel: 'HR  02Y 142D',
        after: `<div class="tail">
            <p><b>SHIP STATUS FOLLOWING INCIDENT</b></p>
            <p>Commander Yao Li-Jie: DECEASED<br>Olesya Ilyukhina: ALIVE (COMATOSE)<br>Dr. Ryland Grace: ALIVE (COMATOSE)<br>Human crew awake: 0<br>Mission continuation: AUTHORIZED</p>
        </div>`,
        foot: 'Archival reconstruction. Recovered from Hail Mary flight data.'
    }),
    note: `Recovered medical telemetry indicates that Commander Yao Li-Jie died during long-duration transit after a failure within the automated nutritional delivery system. A blockage developed inside the feeding assembly responsible for delivering slurry meals to crewmembers in medically induced coma. Because all crewmembers remained unconscious and ship monitoring thresholds had been lowered for cruise operations, the issue progressed unnoticed until irreversible organ damage had already occurred.`
};

/* ---------- Ilyukhina medical log ---------- */

DOCS.ily = {
    html: KIT.slog({
        wide: true,
        title: 'HAIL MARY / RECOVERED MARY MEDICAL LOGS',
        right: 'OLESYA ILYUKHINA',
        sub: [['Time into transit', '12.1 years'], ['Cause of death', 'Pulmonary embolism'], ['Crew status', 'Last active crew'], ['Witnesses', 'None']],
        rows: KIT.old.slog(ORIGINAL_LOGS.ily),
        strip: 'flat',
        stripLabel: 'HR  12Y 031D',
        after: `<div class="tail">
            <p><b>SHIP STATUS AFTER INCIDENT</b></p>
            <p>Commander Yao Li-Jie: DECEASED<br>Olesya Ilyukhina: DECEASED<br>Dr. Ryland Grace: ALIVE (COMATOSE)<br>Human crew awake: 0<br>Mission continuation: AUTHORIZED</p>
        </div>`,
        foot: 'Archival reconstruction. Recovered from Hail Mary flight data.'
    }),
    note: `Recovered telemetry indicates Crewmember Olesya Ilyukhina suffered a catastrophic pulmonary embolism during long-duration medically induced coma operations. At the time of the incident Commander Yao Li-Jie had already expired, Dr. Ryland Grace remained unconscious, and no conscious human beings were aboard Hail Mary. All medical actions were performed autonomously by MARY.`
};

/* ---------- Arrival and revival ---------- */

DOCS.tau = {
    html:
        KIT.slog({
            title: 'HAIL MARY / MISSION AWAKENING SEQUENCE',
            right: 'T+13 YEARS · TAU CETI ARRIVAL',
            sub: [['Surviving crew', 'Dr. Ryland Grace'], ['Astrophage fuel', '38% remaining'], ['Ship velocity', '0.92c'], ['Communication', 'No Earth contact']],
            rows: KIT.old.slog(ORIGINAL_LOGS.tau_awakening),
            foot: 'Recovered medical logs. Ship date 13Y:04M:17D. Automated system: MARY online.'
        }) +
        KIT.slog({
            title: 'COGNITIVE ASSESSMENT LOG #001',
            right: 'AUTOMATED RECOVERY PROTOCOL',
            sub: [['System', 'MARY'], ['Subject', 'Grace, R.'], ['Battery', '001'], ['Outcome', 'Sedated']],
            rows: KIT.old.slog(ORIGINAL_LOGS.tau_log_001, true),
            foot: 'End of log #001.'
        }) +
        KIT.slog({
            title: 'COGNITIVE ASSESSMENT LOG #002',
            right: 'AUTOMATED RECOVERY PROTOCOL',
            sub: [['System', 'MARY'], ['Subject', 'Grace, R.'], ['Battery', '002'], ['Outcome', 'Assessment failure']],
            rows: KIT.old.slog(ORIGINAL_LOGS.tau_log_002, true),
            foot: 'End of log #002.'
        }) +
        KIT.slog({
            title: 'COGNITIVE ASSESSMENT LOG #003',
            right: 'AUTOMATED RECOVERY PROTOCOL',
            sub: [['System', 'MARY'], ['Subject', 'Grace, R.'], ['Battery', '003'], ['Outcome', 'Subject mobile']],
            rows: KIT.old.slog(ORIGINAL_LOGS.tau_log_003, true),
            foot: 'End of recovered record.'
        })
};

/* ---------- Contact file ---------- */

DOCS.contact = {
    html: KIT.memo({
        cls: 'CONTACT PROTOCOL ALPHA-1 — RELEASED AFTER RECOVERY',
        org: 'Petrova Task Force &nbsp;·&nbsp; Xenology Division',
        ref: 'XEN-001 / CON-0001',
        to: 'Sol Recovery Initiative, all member states',
        from: 'Xenology Division',
        date: 'Compiled T+26.5 yr from the Hail Mary log for T+13.2 yr',
        re: 'Contact file: the vessel "Blip-A" and its occupant',
        body: `
            <h2>1. Detection</h2>
            <p>Shortly after arriving at Tau Ceti, the Hail Mary's sensors locked onto an object under controlled thrust. It matched nothing in any catalogue aboard. Dr. Grace logged it as "Blip-A," and the name has stuck. It was a ship, several times the size of his own, and it was already manoeuvring to meet him.</p>

            <figure><img src="assets/ships.png" alt=""><figcaption>Blip-A (right) holding station beside the Hail Mary. Image from the Hail Mary's exterior camera.</figcaption></figure>

            <h2>2. Why it was there</h2>
            <p>Blip-A came from the 40 Eridani system. Its home star is infected with Astrophage and dimming, as ours is. Its builders had noticed, as we had, that Tau Ceti was the one nearby star that was not. Two civilisations that knew nothing of each other sent a ship to the same place to ask the same question, and arrived close enough in time to meet.</p>
            <p>Neither crew was equipped for diplomacy. Both were equipped for engineering, which turned out to be enough.</p>

            <h2>3. The occupant</h2>
            <p>Blip-A left home with a crew of twenty-three. One was alive on arrival: the ship's engineer. Dr. Grace calls him Rocky.</p>
            <table>
                <thead><tr><th>Characteristic</th><th>Finding</th></tr></thead>
                <tbody>
                    <tr><td>Species</td><td>Eridian (Dr. Grace's term)</td></tr>
                    <tr><td>Homeworld</td><td>Erid, 40 Eridani system</td></tr>
                    <tr><td>Body plan</td><td>Five limbs arranged around a central carapace</td></tr>
                    <tr><td>Biochemistry</td><td>Ammonia atmosphere, about 29 times Earth's air pressure, very hot</td></tr>
                    <tr><td>Senses</td><td>No eyes. Perceives by sound</td></tr>
                    <tr><td>Speech</td><td>Musical chords; translated by a software table Dr. Grace built in the first weeks</td></tr>
                </tbody>
            </table>

            <h2>4. What they can do that we cannot, and the reverse</h2>
            <ul>
                <li>Eridians build in <b>xenonite</b>, a material stronger than anything we make. Rocky made tools, tanks and a tunnel between the ships out of it on request.</li>
                <li>They reached another star without computers as we understand them, and without knowing about radiation or relativity. That is very likely what killed the rest of Rocky's crew.</li>
                <li>Dr. Grace had the physics and the biology. Rocky had the materials and could build anything. Every result in the files that follow belongs to both of them.</li>
            </ul>

            <h2>5. Assessment</h2>
            <p>Contact status: friendly, and sustained for the whole of the Hail Mary's time at Tau Ceti. The translated logs show the two working shifts side by side, arguing about method, and on more than one occasion each risking his life for the other.</p>
            <p>The Division's recommendation is that the people of Earth be told all of this, in full.</p>`
    })
};

/* ---------- Adrian biosphere ---------- */

DOCS.adrian = {
    html: KIT.paper({
        journal: 'Hail Mary Science Log',
        issue: 'Entry 31 &nbsp;|&nbsp; Recovered from Beetle archive',
        kind: 'Field Report',
        title: 'A complete biosphere in the atmosphere of Tau Ceti e',
        authors: 'R. Grace<sup>1</sup>, with Rocky<sup>2</sup>',
        aff: '<sup>1</sup>Science specialist, <i>Hail Mary</i>. <sup>2</sup>Engineer, Eridian vessel "Blip-A".',
        abstract: 'Tau Ceti has a Petrova line. It runs from the star to the third planet, which we have named Adrian. Samples taken from inside the line contain Astrophage and, with it, several other kinds of organism, at least one of which eats Astrophage. Astrophage is not a lone invader here. It is one member of a food web, and at Adrian that food web keeps its numbers in check. This is why Tau Ceti is not dimming.',
        body: `
            <h2>The line at Adrian</h2>
            <p>Adrian is a little larger than Earth, with a thick carbon-dioxide atmosphere. Astrophage from Tau Ceti travels to it to breed, exactly as Astrophage from the Sun travels to Venus. Seen in infrared at 25.984 µm, the line is as bright as the one at home.</p>
            <p>The difference is in the star. Tau Ceti's output is steady. Something limits the population.</p>

            <h2>Sampling</h2>
            <p>A first sample was taken by hand on EVA-04, using a collector Rocky built, from the outer edge of the line where it meets Adrian's upper atmosphere (Table 1).</p>

            <table>
                <caption><b>Table 1 | EVA-04 event log</b></caption>
                <thead><tr><th>Ship time</th><th>Event</th></tr></thead>
                <tbody>
                    <tr><td>07:14</td><td>Airlock open</td></tr>
                    <tr><td>07:21</td><td>Motion visible in the line by eye</td></tr>
                    <tr><td>07:39</td><td>Collector closed, sample secured</td></tr>
                    <tr><td>08:02</td><td>Back aboard</td></tr>
                </tbody>
            </table>

            <figure class="photo">
                <img src="assets/protozoa.png" alt="">
                <figcaption><b>Fig. 1 | Sample field, optical microscope.</b> Astrophage are the opaque dots. The larger, translucent bodies are something else.</figcaption>
            </figure>

            <h2>Findings</h2>
            <ul>
                <li>Several distinct kinds of microbe, not one.</li>
                <li>Some are made of more than one cell.</li>
                <li>Feeding seen directly: a larger organism closes around an Astrophage cell, and the Astrophage is gone.</li>
                <li>Energy passes up through at least three levels of who-eats-whom.</li>
            </ul>
            <p>Out in the line it was like swimming through glowing plankton. Under the microscope it is unmistakable. There is life on Adrian, a whole ecology of it, and Astrophage sits in the middle of the food chain.</p>

            <h2>What this means</h2>
            <p>Astrophage did not come from nowhere and it is not a weapon. It evolved here, alongside the things that eat it. When it spread to other stars it left them behind.</p>
            <div class="note">If we can find the predator, grow it, and take it home, the Sun has a chance. The predators live deeper in the atmosphere than I can reach on a tether. We need another way to get a sample. Rocky has an idea. He says it is like fishing.</div>`,
        meta: 'Written aboard the <i>Hail Mary</i> in orbit of Tau Ceti e. Recovered T+26.4 yr. One microscopy plate lost in transfer.'
    })
};

/* ---------- Atmospheric collection incident ---------- */

DOCS.fishing = {
    html: KIT.report({
        kind: 'inq',
        org: 'Sol Recovery Initiative &nbsp;·&nbsp; Flight Data Review Board',
        title: 'Atmospheric Collection Incident at Adrian',
        sub: 'Reconstruction from recovered flight data &nbsp;·&nbsp; Event at 03:14:10 ship time, T+13.8 yr',
        body: `
            <h2>Summary</h2>
            ${KIT.hs('1', 'To sample the layer of Adrian\'s atmosphere where Astrophage breeds, the Hail Mary flew a powered pass just above it, trailing a ten-kilometre xenonite chain with a collector on the end.')}
            ${KIT.hs('2', 'The ship\'s own engine exhaust heated the air beneath it past what the hull could take. Two fuel bays ruptured. The ship went into a tumble with its pilot unconscious.')}
            ${KIT.hs('3', 'The ship, the pilot and the sample all survived. The pilot survived because the Eridian engineer left his own environment to reach him.')}

            <h2>The manoeuvre</h2>
            <p>Adrian's breeding layer sits about 91 kilometres up. The ship could not orbit that low, so it had to hold itself there on thrust, tilted so the engines pointed partly downward, while the chain dragged through the air below. It was flown by hand by Dr. Grace, who held no pilot's certificate of any kind. The computed margin for error was under three percent.</p>

            <h2>Sequence of events</h2>
            <table>
                <thead><tr><th>Ship time</th><th>Event</th><th>Source</th></tr></thead>
                <tbody>
                    <tr><td>03:03:02</td><td>Manual flight mode engaged</td><td>Pilot</td></tr>
                    <tr><td>03:14:05</td><td>Altitude warning; exterior temperature rising</td><td>Automatic</td></tr>
                    <tr><td>03:14:10</td><td class="bad">Hull breach, port fuel bays 11 and 12</td><td>Automatic</td></tr>
                    <tr><td>03:14:16</td><td>Fuel bay 12 jettisoned</td><td>Pilot confirmed</td></tr>
                    <tr><td>03:14:20</td><td>Fuel bay 11 jettisoned</td><td>Pilot confirmed</td></tr>
                    <tr><td>03:14:40</td><td class="bad">Ship tumbling. Pilot loses consciousness under load</td><td>Medical</td></tr>
                    <tr><td>03:15:02</td><td class="bad">Ammonia detected in crew compartment</td><td>Automatic</td></tr>
                    <tr><td>03:15:09</td><td>Spin stabilised; centrifuge mode</td><td>Not the pilot</td></tr>
                    <tr><td>03:18:25</td><td>Automated medical treatment begins</td><td>Automatic</td></tr>
                </tbody>
            </table>

            <h2>The ammonia</h2>
            <p>The board spent some time on the entry at 03:15:02. Nothing aboard the Hail Mary contains ammonia. The Eridian's atmosphere does. The only explanation consistent with the data is that he broke the seal between his quarters and the human side of the ship, entered air that is cold, thin and poisonous to him, moved the unconscious pilot, and stopped the spin. His own injuries from doing so are described in later log entries as severe.</p>

            <h2>Injuries to the pilot</h2>
            <table>
                <thead><tr><th>Injury</th><th>Treatment</th></tr></thead>
                <tbody>
                    <tr><td>Broken nose; cut above the eye</td><td>Closed by medical arms</td></tr>
                    <tr><td>Third-degree burns, arm and back</td><td>Burn protocol</td></tr>
                    <tr><td>Oxygen starvation</td><td>Oxygen stabilisation</td></tr>
                    <tr><td>Pressure injury, both ears</td><td>Recovery cycle</td></tr>
                </tbody>
            </table>

            <h2>Board observation</h2>
            <p>The pass was flown by an untrained pilot inside a three percent margin and, on the evidence, flown correctly. The breach came from heat nobody had modelled. The collector came back full.</p>`,
        foot: ['HM-078 / INQ-0004', 'External camera destroyed in the event', '3']
    }) + KIT.slog({
        title: 'HAIL MARY / MARY EMERGENCY RESPONSE',
        right: 'ADRIAN ATMOSPHERIC COLLECTION',
        sub: [['Event type', 'Catastrophic'], ['Location', 'Adrian upper atmosphere'], ['Primary personnel', 'Dr. Ryland Grace'], ['Outcome', 'Survived']],
        rows: KIT.old.slog(ORIGINAL_LOGS.fishing),
        foot: 'Recovered Hail Mary telemetry. Level 4 review.'
    })
};

/* ---------- Taumoeba ---------- */

DOCS.taumoeba = {
    html: KIT.paper({
        journal: 'Hail Mary Science Log',
        issue: 'Entries 38–61 &nbsp;|&nbsp; Recovered from Beetle archive',
        kind: 'Research Report',
        title: 'Taumoeba: a natural predator of Astrophage, and its adaptation to nitrogen',
        authors: 'R. Grace<sup>1</sup>, with Rocky<sup>2</sup>',
        aff: '<sup>1</sup>Science specialist, <i>Hail Mary</i>. <sup>2</sup>Engineer, Eridian vessel "Blip-A".',
        abstract: 'The sample recovered from 91 km above Adrian contains an amoeba-like organism that eats Astrophage. We call it Taumoeba. It is the reason Tau Ceti is not dimming. In its natural form it dies in the presence of even a trace of nitrogen, which rules out both Venus (3.5% nitrogen) and the equivalent planet in Rocky\'s system (8%). By breeding survivors through successive generations we raised its tolerance to 8.25%. The resulting strain, Taumoeba-82.5, clears Astrophage from a tank of simulated Venus air in hours.',
        body: `
            <h2>Identification</h2>
            <p>Taumoeba is a single cell that engulfs Astrophage whole. Under the microscope the result is quick and complete: where there was an opaque dot there is, a few seconds later, a slightly fatter amoeba.</p>
            <p>The surprise is how familiar it is. It has DNA. It has mitochondria. It stores energy as glucose and runs a Krebs cycle. In every way I can test, it is an amoeba that happens to come from another star.</p>

            <figure class="photo">
                <img src="assets/tau2.png" alt="">
                <figcaption><b>Fig. 1 | Taumoeba in culture.</b> The dark inclusion at centre is an Astrophage cell being digested.</figcaption>
            </figure>

            <h2>The nitrogen problem</h2>
            <p>Adrian's atmosphere has no nitrogen. Taumoeba has never met it, and the first time it does, it dies. Every culture I exposed was dead within seconds.</p>
            <p>Almost every culture. In tank three, at 0.6% nitrogen, a few cells lived.</p>

            <h2>Breeding</h2>
            <p>Rocky built ten breeder tanks from xenonite, each able to hold a set fraction of nitrogen. We raised the survivors of one tank, moved them to a slightly harsher one, and repeated (Fig. 2). Strains are named for ten times the nitrogen percentage they survive.</p>

            <figure>
                <svg viewBox="0 0 360 190" role="img" aria-label="Nitrogen tolerance by strain, rising from 0.6 percent to 8.25 percent">
                    <g font-family="Arimo, Arial, sans-serif" font-size="9" fill="#161616">
                        <line x1="96" y1="10" x2="96" y2="160" stroke="#161616"/>
                        <line x1="96" y1="160" x2="350" y2="160" stroke="#161616"/>
                        <g fill="#161616">
                            <rect x="96" y="16"  width="16.8" height="13"/>
                            <rect x="96" y="36"  width="28"   height="13"/>
                            <rect x="96" y="56"  width="56"   height="13"/>
                            <rect x="96" y="76"  width="98"   height="13"/>
                            <rect x="96" y="96"  width="140"  height="13"/>
                            <rect x="96" y="116" width="224"  height="13"/>
                            <rect x="96" y="136" width="231"  height="13" fill="#a3231b"/>
                        </g>
                        <g text-anchor="end">
                            <text x="90" y="26">Taumoeba-06</text><text x="90" y="46">Taumoeba-10</text><text x="90" y="66">Taumoeba-20</text><text x="90" y="86">Taumoeba-35</text><text x="90" y="106">Taumoeba-50</text><text x="90" y="126">Taumoeba-80</text><text x="90" y="146" font-weight="700">Taumoeba-82.5</text>
                        </g>
                        <line x1="194" y1="10" x2="194" y2="160" stroke="#161616" stroke-dasharray="3 3"/>
                        <line x1="320" y1="10" x2="320" y2="160" stroke="#161616" stroke-dasharray="3 3"/>
                        <text x="198" y="18">Venus 3.5%</text>
                        <text x="316" y="18" text-anchor="end">Threeworld 8%</text>
                        <g text-anchor="middle">
                            <text x="96" y="172">0</text><text x="152" y="172">2</text><text x="208" y="172">4</text><text x="264" y="172">6</text><text x="320" y="172">8</text>
                            <text x="223" y="186">Nitrogen tolerated (%)</text>
                        </g>
                    </g>
                </svg>
                <figcaption><b>Fig. 2 | Nitrogen tolerance by strain.</b> Dashed lines mark the nitrogen content of the two atmospheres the organism has to survive in. The final strain carries a small margin above both.</figcaption>
            </figure>

            <h2>Result</h2>
            <table>
                <caption><b>Table 1 | Taumoeba-82.5</b></caption>
                <thead><tr><th>Property</th><th>Value</th></tr></thead>
                <tbody>
                    <tr><td>Nitrogen tolerance</td><td>8.25%</td></tr>
                    <tr><td>Survives at pressure of</td><td>0.02 atm</td></tr>
                    <tr><td>Survives Venus-analogue tank</td><td>Yes</td></tr>
                    <tr><td>Consumes Astrophage</td><td>Yes, sustained</td></tr>
                </tbody>
            </table>
            <p>Live cultures of Taumoeba-82.5 are loaded into both ships and into the four return probes.</p>
            <div class="note">Notebook, same day. Rocky asked the tolerance figure three times to be sure of it, then told me to be happy now. I said we were done. I should have asked what else forty generations inside xenonite tanks might have taught it.</div>`,
        meta: 'Written aboard the <i>Hail Mary</i>, T+13.5 to T+14.0 yr. Recovered T+26.4 yr.'
    })
};

/* ---------- Return transit ---------- */

DOCS.return = {
    html: KIT.display({
        title: 'HAIL MARY / NAV 1 / RETURN TRANSIT',
        right: 'SHIP DAY 1560',
        plot: `<svg viewBox="0 0 420 250" role="img" aria-label="Planned course from Tau Ceti to Earth">
            <g stroke="#1b2025"><line x1="0" y1="62" x2="420" y2="62"/><line x1="0" y1="125" x2="420" y2="125"/><line x1="0" y1="188" x2="420" y2="188"/><line x1="105" y1="0" x2="105" y2="250"/><line x1="210" y1="0" x2="210" y2="250"/><line x1="315" y1="0" x2="315" y2="250"/></g>
            <circle cx="52" cy="176" r="5" fill="#f2b33d"/>
            <circle cx="372" cy="58" r="3" fill="#c9d0d6"/>
            <line x1="52" y1="176" x2="372" y2="58" stroke="#8fd694" stroke-width="1.3" stroke-dasharray="6 4"/>
            <path d="M52 176 L84 164.2" stroke="#8fd694" stroke-width="2.4" fill="none"/>
            <path d="M84 164.2 l-8 -1 l3 7 z" fill="#8fd694"/>
            <g font-size="10" fill="#7c8791" font-family="B612 Mono, monospace">
                <text x="24" y="196">TAU CETI</text><text x="350" y="46">EARTH</text><text x="226" y="100">11.9 LY</text>
                <text x="70" y="146" fill="#8fd694">HAIL MARY</text>
                <text x="232" y="150">PLANNED COURSE</text>
            </g>
        </svg>`,
        side: `<table>
            <thead><tr><th>Item</th><th>Value</th></tr></thead>
            <tbody>
                <tr><td>Destination</td><td class="ok">EARTH</td></tr>
                <tr><td>Time to go, ship</td><td>4 YR 2 MO</td></tr>
                <tr><td>Arrival, Earth frame</td><td>T+27.2 YR</td></tr>
                <tr><td>Fuel aboard</td><td class="am">61% OF BAYS</td></tr>
                <tr><td>Fuel source</td><td>BLIP-A TRANSFER</td></tr>
                <tr><td>Payload</td><td class="ok">TAUMOEBA-82.5</td></tr>
                <tr><td>Crew</td><td>1</td></tr>
            </tbody>
        </table>
        <div class="cap">Bays 11 and 12 lost at Adrian. Remaining bays filled from the Eridian vessel before separation.</div>`,
        foot: `Crew note attached to display: "Rocky gave me enough Astrophage to get home. I didn't ask how much that left him. He said enough. Course is set. I'm going to see Earth again."`
    }),
    note: `The Hail Mary was built to go one way. It could turn for home only because the Eridian engineer shared his own fuel. The course shown here was flown for about seven weeks.`
};

/* ---------- Contaminant ---------- */

DOCS.contaminant = {
    html: KIT.slog({
        title: 'HAIL MARY / INTERNAL ALERT LOG',
        right: 'ACTIVE BIOHAZARD CONTAINMENT',
        sub: [['Compartment', 'Cleanroom'], ['Substance', 'Unknown'], ['Oxygen levels', '100% → 42%'], ['Containment', 'Active']],
        rows: KIT.old.slog(ORIGINAL_LOGS.contaminant),
        after: `<div class="tail">${ORIGINAL_LOGS.contaminant_tail.map((p) => `<p>${p}</p>`).join('')}</div>`,
        foot: 'Recovered ship telemetry. Entries shown in the order received.'
    })
};

/* ---------- Beetles ---------- */

DOCS.beetles = {
    html: KIT.display({
        title: 'HAIL MARY / NAV 3 / BEETLE TRACK',
        right: 'SHIP DAY 1602',
        plot: `<svg viewBox="0 0 420 250" role="img" aria-label="Four probe tracks toward Earth; the Hail Mary turning away toward 40 Eridani">
            <g stroke="#1b2025"><line x1="0" y1="62" x2="420" y2="62"/><line x1="0" y1="125" x2="420" y2="125"/><line x1="0" y1="188" x2="420" y2="188"/><line x1="105" y1="0" x2="105" y2="250"/><line x1="210" y1="0" x2="210" y2="250"/><line x1="315" y1="0" x2="315" y2="250"/></g>
            <circle cx="52" cy="176" r="5" fill="#f2b33d"/>
            <circle cx="372" cy="58" r="3" fill="#c9d0d6"/>
            <circle cx="300" cy="222" r="3" fill="#c9d0d6"/>
            <line x1="52" y1="176" x2="372" y2="58" stroke="#3a424a" stroke-dasharray="3 5"/>
            <g fill="none" stroke="#8fd694" stroke-width="1.3"><path d="M96 160 L152 139"/><path d="M96 160 L146 141"/><path d="M96 160 L140 143"/><path d="M96 160 L134 145"/></g>
            <g fill="#8fd694"><rect x="150" y="137" width="4" height="4"/><rect x="144" y="139" width="4" height="4"/><rect x="138" y="141" width="4" height="4"/><rect x="132" y="143" width="4" height="4"/></g>
            <path d="M52 176 L96 160 Q120 152 150 196" fill="none" stroke="#f2b33d" stroke-width="1.3"/>
            <path d="M150 196 l-7 -3 l1 -6 z" fill="#f2b33d"/>
            <line x1="150" y1="196" x2="300" y2="222" stroke="#f2b33d" stroke-dasharray="3 5"/>
            <g font-size="10" fill="#7c8791" font-family="B612 Mono, monospace">
                <text x="24" y="196">TAU CETI</text><text x="350" y="46">EARTH</text><text x="306" y="238">40 ERIDANI</text>
                <text x="158" y="132" fill="#8fd694">BEETLES x4</text><text x="160" y="186" fill="#f2b33d">HAIL MARY</text>
            </g>
        </svg>`,
        side: `<table>
            <thead><tr><th>Probe</th><th>v/c</th><th>Farm</th><th>Link</th></tr></thead>
            <tbody>
                <tr><td>1 JOHN</td><td>0.41</td><td class="ok">ALIVE</td><td class="ok">OK</td></tr>
                <tr><td>2 PAUL</td><td>0.41</td><td class="ok">ALIVE</td><td class="ok">OK</td></tr>
                <tr><td>3 GEORGE</td><td>0.40</td><td class="ok">ALIVE</td><td class="am">WEAK</td></tr>
                <tr><td>4 RINGO</td><td>0.40</td><td class="ok">ALIVE</td><td class="ok">OK</td></tr>
            </tbody>
        </table>
        <div class="cap">Coast speed 0.93 c. Earth arrival, Earth frame: T+26.4 yr.<br>Each probe: Taumoeba-82.5 farm in a steel capsule; Astrophage reference sample; full ship archive, 91 TB.</div>
        <table>
            <thead><tr><th>Own ship</th><th>Value</th></tr></thead>
            <tbody>
                <tr><td>Planned heading</td><td>EARTH</td></tr>
                <tr><td>Actual heading</td><td class="am">BLIP-A, THEN 40 ERIDANI</td></tr>
                <tr><td>Fuel to reach Earth after</td><td class="rd">NO</td></tr>
            </tbody>
        </table>`,
        foot: `Crew note attached to display: "The Beetles don't need me. They know the way and they have everything. Rocky does need me. Capsules are steel this time. Earth: this works. Grow it, take it to Venus, let it go. Tell my kids I said hi."`
    }),
    note: `Earth knew nothing of the change of course until the Beetles' own logs were read twelve years later. Every memorial raised in between was raised to a man believed to be on his way home.`
};
