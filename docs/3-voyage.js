/* ============================================================
   DOCUMENTS, PART 3 — THE VOYAGE
   T+2.3 yr to T+14.2 yr. Everything here came home in the
   Beetles' data cores.
   ============================================================ */

/* ---------- Yao medical log ---------- */

DOCS.yao = {
    html: KIT.slog({
        title: 'HAIL MARY / MED / AUTONOMOUS CARE LOG',
        right: 'BED 1',
        sub: [['Patient', 'YAO LI-JIE, CDR'], ['Ship time', 'Year 2, day 113–142'], ['State', 'Induced coma'], ['Crew awake', '0 of 3']],
        rows: [
            ['113/03:14:02', 'ADV',  'Scheduled feed. Meal 18,942 prepared. Feed sequence started.'],
            ['113/03:14:27', 'CAUT', 'Feed pressure above nominal. Possible obstruction in delivery tube. Clearing cycle run.'],
            ['115/22:07:11', 'CAUT', 'Intake below baseline. Deficit 8.7%. Priority: NON-CRITICAL.'],
            ['sep', '. . . priority remains NON-CRITICAL for eleven days. Cruise-phase alert thresholds are reduced. No crew member is awake to receive alerts . . .'],
            ['127/11:44:51', 'CAUT', 'Deficit 37.2%. Muscle loss detected. Body mass falling.'],
            ['139/04:55:39', 'WARN', 'Severe malnutrition. Liver function compromised. Renal failure indicators. Emergency nutrition started.'],
            ['141/16:02:17', 'WARN', 'Multi-organ failure. Patient cannot recover without crew intervention. No conscious personnel available.'],
            ['142/01:19:44', 'WARN', 'Cardiac activity lost. Resuscitation 3 of 3 unsuccessful.'],
            ['142/01:19:44', 'ADV',  'Patient deceased. Cause: nutritional failure, secondary multi-organ failure.'],
            ['142/01:20:11', 'ADV',  'Bed 1 closed. Living crew: ILYUKHINA, GRACE. Mission status: CONTINUING.']
        ],
        strip: 'flat',
        stripLabel: 'HR  142/01:10 to 01:20',
        foot: 'Recovered from Beetle 2 (PAUL) data core. 3 of 3 stored copies agree.'
    }),
    note: `The fault was, in engineering terms, minor. It was a blocked tube. Anyone awake could have cleared it in under a minute.`
};

/* ---------- Ilyukhina medical log ---------- */

DOCS.ily = {
    html: KIT.slog({
        title: 'HAIL MARY / MED / AUTONOMOUS CARE LOG',
        right: 'BED 2',
        sub: [['Patient', 'ILYUKHINA, O., ENG'], ['Ship time', 'Year 3, day 201'], ['State', 'Induced coma'], ['Crew awake', '0 of 2']],
        rows: [
            ['04:17:11', 'CAUT', 'Cardiovascular anomaly. Blood oxygen falling. Monitoring raised to priority 2.'],
            ['04:19:52', 'CAUT', 'Diagnostic sweep. Obstruction in pulmonary circulation. Probability of embolism 96.7%.'],
            ['04:24:08', 'CAUT', 'Anticoagulant package B given. Oxygen recovery protocol. Circulation stimulated. Response below expected.'],
            ['04:31:55', 'WARN', 'Oxygen saturation 82%. 71%. 58%.'],
            ['04:37:20', 'WARN', 'Obstruction enlarged. Respiratory exchange failing. RECOMMENDED ACTION: wake remaining crew.'],
            ['04:37:21', 'WARN', 'Recommended action not permitted during transit. Corrective options exhausted.'],
            ['04:43:09', 'WARN', 'Cardiac activity lost. Resuscitation 1 of 3. 2 of 3. 3 of 3. Unsuccessful.'],
            ['04:51:36', 'ADV',  'Patient deceased. Cause: pulmonary embolism.'],
            ['04:51:40', 'ADV',  'Bed 2 closed. Living crew: GRACE. Mission status: CONTINUING.']
        ],
        strip: 'flat',
        stripLabel: 'HR  04:41 to 04:51',
        foot: 'Recovered from Beetle 2 (PAUL) data core. 3 of 3 stored copies agree.'
    }),
    note: `The embolism was detected within three minutes and correctly diagnosed within nine. Treatment was given in full and on time. From this entry until arrival, the ship carried one living person, unconscious, and nothing aboard was awake.`
};

/* ---------- Arrival and revival ---------- */

DOCS.tau = {
    html: KIT.slog({
        title: 'HAIL MARY / MED + NAV / ARRIVAL AND REVIVAL',
        right: 'BED 3',
        sub: [['Patient', 'GRACE, R., SCI'], ['Location', 'Tau Ceti'], ['Ship time aboard', '3 yr 9 mo'], ['One-way signal to Earth', '11 yr 10 mo']],
        rows: [
            ['06:11:02', 'ADV',  'Deceleration complete. Target system: Tau Ceti. Crew revival started.'],
            ['06:11:18', 'WARN', 'Crew check. YAO: deceased. ILYUKHINA: deceased. GRACE: vital signs present.'],
            ['06:12:40', 'ADV',  'Neural stimulation on. Muscle reactivation started.'],
            ['06:13:01', 'ADV',  'Revival pharmacy item 14 given: retrograde memory suppressant. Added to manifest by order of the Director. Not listed on crew copy.'],
            ['sep', '. . . cognitive assessment, battery 1 . . .'],
            ['07:15:04', 'ADV',  'Q1, simple addition. Five unintelligible responses. Sixth response correct. Time to correct answer: 81 s.'],
            ['07:16:39', 'ADV',  'Q2, cube root of eight. Response 1: patient asks where he is. Response 2: a complex-exponential expression equal to the answer; not on answer list; marked incorrect. Response 3: correct.'],
            ['07:17:47', 'CAUT', 'Q3, state your name. No answer in 28 s. Patient agitated. Sedated.'],
            ['sep', '. . . battery 2 . . .'],
            ['08:16:05', 'CAUT', 'Q1, state your name. Patient does not know.'],
            ['08:16:25', 'WARN', 'Patient has pulled out his own lines. Assistance arms deployed. Patient is calling to beds 1 and 2 for help.'],
            ['08:16:42', 'CAUT', 'Battery 2 failed.'],
            ['sep', '. . . battery 3 not started: patient is walking . . .'],
            ['08:24:52', 'ADV',  'Speech normal. Technical recall intact: patient named the laboratory electron microscope by its full description, then asked aloud why he knew that.'],
            ['08:25:32', 'ADV',  'Patient asks for the person in command. Reply: Commander Yao, deceased.'],
            ['08:25:40', 'ADV',  'Patient asks for living crew. Reply: Dr. Ryland Grace. End of manifest.'],
            ['08:27:18', 'ADV',  'Patient asks to call Earth. Reply: one-way signal time 11 years, 10 months, 14 days.'],
            ['08:28:11', 'CAUT', 'Navigation display opened by patient. Stress response high. Patient has worked out that the star outside is not the Sun.']
        ],
        strip: 'none',
        foot: 'Recovered from Beetle 1 (JOHN) data core. One segment lost in transfer.'
    }),
    note: `The second answer to question 2 was mathematically correct. Dr. Grace's education came back hours before his name did. That was the intended effect of the suppressant: it was meant to remove his memory of how he came to be aboard and leave everything else. No consent for it exists in any surviving file.`
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
        plot: `<svg viewBox="0 0 420 250" role="img" aria-label="Planned course from Tau Ceti to Sol">
            <g stroke="#1b2025"><line x1="0" y1="62" x2="420" y2="62"/><line x1="0" y1="125" x2="420" y2="125"/><line x1="0" y1="188" x2="420" y2="188"/><line x1="105" y1="0" x2="105" y2="250"/><line x1="210" y1="0" x2="210" y2="250"/><line x1="315" y1="0" x2="315" y2="250"/></g>
            <circle cx="52" cy="176" r="5" fill="#f2b33d"/>
            <circle cx="372" cy="58" r="3" fill="#c9d0d6"/>
            <line x1="52" y1="176" x2="372" y2="58" stroke="#8fd694" stroke-width="1.3" stroke-dasharray="6 4"/>
            <path d="M52 176 L84 164.2" stroke="#8fd694" stroke-width="2.4" fill="none"/>
            <path d="M84 164.2 l-8 -1 l3 7 z" fill="#8fd694"/>
            <g font-size="10" fill="#7c8791" font-family="B612 Mono, monospace">
                <text x="24" y="196">TAU CETI</text><text x="356" y="46">SOL</text><text x="226" y="100">11.9 LY</text>
                <text x="92" y="158" fill="#8fd694">HAIL MARY</text>
                <text x="232" y="150">PLANNED COURSE</text>
            </g>
        </svg>`,
        side: `<table>
            <thead><tr><th>Item</th><th>Value</th></tr></thead>
            <tbody>
                <tr><td>Destination</td><td class="ok">SOL</td></tr>
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
        title: 'HAIL MARY / SYS / ALERT LOG',
        right: 'LABORATORY A + FUEL',
        sub: [['Ship day', '1596'], ['Phase', 'Return transit'], ['Crew awake', '1 of 1'], ['Record', 'Partly corrupt']],
        rows: [
            ['03:14:06', 'CAUT', 'Generator output down 4% in six hours. No fault found.'],
            ['03:14:15', 'CAUT', 'Fuel bay 3 mass below manifest by 212 kg.'],
            ['03:14:27', 'WARN', 'Contaminant detected. Source estimate: Laboratory A.'],
            ['03:14:46', 'WARN', 'Laboratory A sealed. Quarantine active.'],
            ['03:15:04', 'WARN', 'Microscopy, fuel line 3: living organism among fuel cells. Match: TAUMOEBA-82.5.'],
            ['03:15:11', 'WARN', 'Culture vessel in Laboratory A is intact and sealed. Organism is present outside it.'],
            ['03:15:16', 'CAUT', 'Fuel mixture unstable. Engine response delayed.'],
            ['03:15:55', 'WARN', 'Engines shut down by crew to isolate remaining fuel.'],
            ['sep', '. . . 03:16:09 to 03:17:36 corrupt in the recovered record . . .'],
            ['03:18:02', 'ADV',  'Centrifuge mode on. Crew request.'],
            ['03:19:30', 'ADV',  'Fuel bays 3 to 9 flooded with pure nitrogen. Crew request.'],
            ['03:22:41', 'ADV',  'Organism count in fuel line 3: zero. Pure nitrogen is lethal to this strain. Tolerance limit confirmed at 8.25%.'],
            ['03:23:06', 'ADV',  'Quarantine holding. Fuel lost: 9%. Log segment ended.']
        ],
        strip: 'none',
        after: `<div class="txt">
            <p>CREW NOTE ATTACHED 04:02:19</p>
            <p>It got out of a sealed xenonite vessel. Not through a crack. Through the wall. We bred it in xenonite for forty generations and selected, without meaning to, for the ones that could get through.</p>
            <p>I can fix my ship. My tanks are metal and I have nitrogen.</p>
            <p>Rocky's tanks are xenonite. His whole ship is xenonite. He left with the same cultures I did, seven weeks ago, and he has no idea.</p>
        </div>`,
        foot: 'Recovered from Beetle 3 (GEORGE) data core. Order of entries preserved as received.'
    })
};

/* ---------- Beetles ---------- */

DOCS.beetles = {
    html: KIT.display({
        title: 'HAIL MARY / NAV 3 / BEETLE TRACK',
        right: 'SHIP DAY 1602',
        plot: `<svg viewBox="0 0 420 250" role="img" aria-label="Four probe tracks toward Sol; the Hail Mary turning away toward 40 Eridani">
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
                <text x="24" y="196">TAU CETI</text><text x="356" y="46">SOL</text><text x="306" y="238">40 ERIDANI</text>
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
                <tr><td>Planned heading</td><td>SOL</td></tr>
                <tr><td>Actual heading</td><td class="am">BLIP-A, THEN 40 ERIDANI</td></tr>
                <tr><td>Fuel to reach Sol after</td><td class="rd">NO</td></tr>
            </tbody>
        </table>`,
        foot: `Crew note attached to display: "The Beetles don't need me. They know the way and they have everything. Rocky does need me. Capsules are steel this time. Earth: this works. Grow it, take it to Venus, let it go. Tell my kids I said hi."`
    }),
    note: `The four probes were named by Dr. Grace. Earth knew nothing of the change of course until the Beetles' own logs were read twelve years later. Every memorial raised in between was raised to a man believed to be on his way home.`
};
