/* ============================================================
   DOCUMENTS, PART 4 — THE WAIT, THE RETURN, THE RECOVERY
   T+18 yr to T+44 yr
   ============================================================ */

/* ---------- Climate collapse ---------- */

DOCS.collapse = {
    html: KIT.report({
        org: 'United Nations &nbsp;·&nbsp; Earth Systems Monitoring',
        title: 'Earth Stability Assessment, Year 18',
        sub: 'Consolidated risk of civilisational failure &nbsp;·&nbsp; T+18.0 yr',
        body: `
            <h2>A. Headline statements</h2>
            ${KIT.hs('A.1', 'Solar output is 6.1% below baseline, in line with the median projection made twenty-two years ago. Glaciers are advancing on three continents.', 'high confidence')}
            ${KIT.hs('A.2', 'Harvests have failed across most of the northern grain belts. Global food production is 41% below the pre-crisis level.', 'high confidence')}
            ${KIT.hs('A.3', 'Between a quarter and a half of the pre-crisis population will be dead before any answer from Tau Ceti can arrive.', 'medium confidence')}
            ${KIT.hs('A.4', 'The Hail Mary remains the only long-term survival strategy on file. Nothing has been heard from it. Nothing can be, for at least eight more years.')}

            <h2>B. Indicators</h2>
            <table>
                <thead><tr><th>Indicator</th><th class="r">T+1.5 yr</th><th class="r">Now</th></tr></thead>
                <tbody>
                    <tr><td>Global harvest, against pre-crisis baseline</td><td class="r">88%</td><td class="r bad">59%</td></tr>
                    <tr><td>People displaced</td><td class="r">310 million</td><td class="r bad">1.8 billion</td></tr>
                    <tr><td>States under permanent emergency rule</td><td class="r">9</td><td class="r bad">71</td></tr>
                    <tr><td>Deaths attributed to the dimming</td><td class="r">under 10 million</td><td class="r bad">1.4 billion</td></tr>
                </tbody>
            </table>

            <h2>C. Active crises</h2>
            <table>
                <thead><tr><th>Region</th><th>Condition</th></tr></thead>
                <tbody>
                    <tr><td>South Asia</td><td class="bad">Water wars; open conflict</td></tr>
                    <tr><td>Northern Africa</td><td class="bad">Famine</td></tr>
                    <tr><td>Arctic territories</td><td>Resource disputes</td></tr>
                    <tr><td>Pacific food corridors</td><td class="bad">Distribution has failed</td></tr>
                    <tr><td>Mediterranean</td><td>Mass migration</td></tr>
                    <tr><td>Health systems, worldwide</td><td class="bad">Overwhelmed</td></tr>
                </tbody>
            </table>

            <figure class="ph">
                <img src="assets/sky.png" alt="">
                <figcaption>Midday, northern mid-latitudes, late summer.</figcaption>
            </figure>

            <h2>D. How it fails</h2>
            <ol>
                <li><b>Agricultural instability.</b> Regional shortages; export contracts stop being honoured.</li>
                <li><b>Migration.</b> Displacement at the scale of continents.</li>
                <li><b>Militarisation.</b> Borders close. Food moves under armed guard or not at all.</li>
                <li><b>Economic collapse.</b> Infrastructure fails; currencies stop clearing.</li>
                <li><b>Terminal.</b> War, famine and epidemic together.</li>
            </ol>
            <p>Most of the world is in phase three. Parts of it are in phase four.</p>
            <blockquote>The projections assume nations cooperate and share resources. They will not. Countries do not watch their populations starve. They go to war.<cite>E. Stratt, note on the original modelling submission, written twenty-two years before this assessment</cite></blockquote>

            <h2>E. Governance</h2>
            <p>Martial law, forced rationing, agricultural conscription and military food distribution are now ordinary instruments of administration. This office continues to report to a General Assembly that has not met in person for six years.</p>`,
        foot: ['UN-ESM/402', 'Risk level: extreme', '7']
    })
};

/* ---------- Final transmission ---------- */

DOCS.lastcontact = {
    html: KIT.loop({
        head: ['BEETLE 1 (JOHN)', 'RECEIVER LOG, HAIL MARY BEACON', 'PAGE 1 OF 1'],
        sub: ['FLIGHT DAYS 0012–3287', 'EARTH FRAME', 'VOICE + CARRIER'],
        rows: [
            ['0012/06:40', 'GRACE', `Beetles, this is Hail Mary. I know you can't answer. I'm going to talk anyway and you're going to carry it. I've turned around. I'm going back for Rocky.`],
            ['0061/19:02', 'GRACE', `Found him. Blip-A was dead in space, right where the math said it would be. His fuel is gone, all of it. He's alive. He was very surprised to see me.`],
            ['0063/03:15', 'GRACE', `For the record, because somebody is going to ask. I had enough fuel to get home, or enough to get the two of us to his home. I could not have both. It was not a hard decision. It should have been, and it was not.`],
            ['0140/11:30', 'GRACE', `We're under way for 40 Eridani. His people get the Taumoeba. That's two stars, if you four do your job. Please do your job.`],
            ['note', 'Carrier only for 1,404 days. Signal strength falling as range opens.'],
            ['1544/22:10', 'GRACE', `Food is the problem now. Mine runs out long before we arrive. Rocky is working on it. He is very offended on my behalf.`],
            ['2710/08:47', 'GRACE', `Still here. Thinner. If anyone ever hears this: tell them it worked out here. Tell them there's a friend in it for them, if they ever build another ship.`],
            ['note', 'Voice below decoding threshold from day 2,904. Carrier intermittent.'],
            ['3287/14:21', 'RX', `Carrier detected, 4 seconds. No modulation.`],
            ['los', 'NO FURTHER SIGNAL FROM HAIL MARY']
        ],
        foot: ['HM-110 / DSN-0002', 'Recovered T+26.4 yr']
    }),
    note: `Day 3,287 of the Beetles' flight is nine years after they were released, or T+23 on Earth's calendar. Nothing was heard after it. The record establishes that Dr. Grace reached the Eridian ship and that both set out for 40 Eridani. It does not establish whether they arrived. He was declared dead in absentia. The file is still open and is reviewed every year on the anniversary of the last signal.`
};

/* ---------- Year 26 broadcast ---------- */

DOCS.earthwaits = {
    html: KIT.remarks({
        rush: true,
        head: ['GLOBAL NEWS NETWORK', 'Evening Bulletin', 'RUSH TRANSCRIPT: NOT CHECKED AGAINST AUDIO'],
        release: ['Year 26, Day 1', 'T+26.0 yr'],
        title: ['THE RETURN WINDOW OPENS'],
        start: '19:00 GMT',
        body: [
            `ANCHOR: Good evening. Tonight is the first night on which a probe from the Hail Mary could, in theory, reach Earth. Twenty-six years ago three people left for Tau Ceti. We have heard nothing from them since. If they found an answer, and if they sent it, this is the earliest it can arrive.`,
            `ANCHOR: Mission analysts were careful with us today. There are, they said, a great many ways for this to have failed. The crew may not have survived the trip. The ship may not have reached the star. There may have been nothing there to find. Silence is what every one of those would sound like.`,
            `(Footage: crowds outside task force buildings in New York, London, Delhi and Shanghai.)`,
            `ANCHOR: Rumours that the mission failed years ago brought people onto the streets in nineteen cities this week. Troops dispersed them in four. The death toll attributed to the dimming now stands above 3.9 billion.`,
            `ANCHOR: Three more governments cut the food ration today.`,
            `(Street interview, recorded this afternoon.)`,
            `REPORTER: Do you still believe the Beetles are coming home?`,
            `WOMAN: I don't know any more. I was a child when they left. We sent them out there to save us. I just hope somebody made it. Even if it's too late for here. I hope somebody out there made it.`,
            `ANCHOR: One more thing before the weather. Every deep-space antenna that was listening on the day of launch is still staffed tonight. In twenty-six years, through all of it, not one has been switched off.`,
            `ANCHOR: We'll be back after this.`
        ],
        end: '19:06 GMT'
    })
};

/* ---------- Signal received ---------- */

DOCS.signalreceived = {
    html: KIT.news({
        edition: 'Special edition &nbsp;·&nbsp; T+26.3 yr',
        section: ['World', 'Hail Mary'],
        headline: 'Four objects, right on time',
        deck: 'Antennas near Jupiter have picked up four small craft braking toward Earth on a line from Tau Ceti. Within three hours of the news, armies that had been fighting for a decade stopped.',
        by: 'Lukas Brandt',
        from: 'Reporting from Geneva',
        img: 'assets/signal.png',
        cap: 'The detection as it appeared on the Deep Space Network at 04:14 UTC.',
        credit: 'Image: Deep Space Network',
        body: `
            <p><span class="dl">GENEVA</span> — They are the size of suitcases and they have been travelling for twelve years. At 04:14 this morning, four of them appeared on the screens of the Deep Space Network, just outside the orbit of Jupiter, slowing down.</p>
            <p>By 04:27 controllers had traced their path backwards. It ends at Tau Ceti. Their heat signature matches the return probes built into the Hail Mary to within a tenth of one percent. The ship carried four. The crew called them Beetles.</p>
            <p>They will reach Earth in thirty-four days and come down in the Indian Ocean.</p>
            <div class="pull">"For twenty-six years we prepared ourselves for silence. Today four small objects came out of the dark between the stars. They came home."<cite>Eva Stratt, on her release</cite></div>
            <h3>The morning, hour by hour</h3>
            <p><b>04:14</b> Four unidentified contacts near Jupiter.<br>
            <b>04:27</b> Origin confirmed as Tau Ceti.<br>
            <b>05:11</b> Emergency session of the United Nations.<br>
            <b>06:43</b> First ceasefires announced.<br>
            <b>09:02</b> Eva Stratt released from prison by emergency order.<br>
            <b>12:18</b> Crowds in the streets of every major city still standing.</p>
            <p>The interval between detection and the first ceasefire was two hours and twenty-nine minutes. Nobody negotiated it. Commanders on both sides of at least six fronts simply told their troops to stop.</p>
            <h3>What is inside</h3>
            <p>Nobody knows. The probes are not transmitting data, only a beacon. They could be carrying a cure, or a record of why there is none. The recovery fleet is already at sea.</p>
            <p>Ms. Stratt, who has served twenty-six years of a life sentence for what she did to get the ship launched, was driven directly from prison to the reactivated Petrova Task Force. Asked whether she was owed an apology, she said she was owed a desk.</p>
            <div class="tag">An estimated 5.7 billion people are following the probes' approach on live tracking feeds.</div>`
    })
};

/* ---------- Recovery inventory ---------- */

DOCS.splashdown = {
    html: KIT.form({
        org: ['United Nations Recovery Command', 'Indian Ocean Recovery Task Group'],
        title: 'Recovery Inventory and Chain of Custody',
        no: ['FORM REC-14', 'OPERATION: BEETLE', 'PAGE 1 OF 1'],
        body:
            KIT.cell(3, '1. Vehicles recovered', '4 OF 4') +
            KIT.cell(3, '2. Payload integrity', '94.3%') +
            KIT.cell(3, '3. Live cultures', 'VIABLE, ALL 4') +
            KIT.cell(3, '4. Decontamination', 'COMPLETE') +
            KIT.band('Part A — Contents by vehicle') +
            KIT.table(['Vehicle', 'Biological', 'Records', 'Received by'], [
                ['1 JOHN',   'Taumoeba-82.5 farm; Astrophage reference sample', 'Ship telemetry; hull repair drawings; xenonite fragments', 'LAB 1, MUMBAI'],
                ['2 PAUL',   'Taumoeba-82.5 farm', 'Video archive; life-support data; crew medical records; Adrian scans', 'LAB 2, PERTH'],
                ['3 GEORGE', 'Taumoeba-82.5 farm', 'Eridian language tables; Blip-A drawings; contact recordings; breeding data', 'LAB 3, NAIROBI'],
                ['4 RINGO',  'Taumoeba-82.5 farm', "Dr. Grace's papers and journals; Taumoeba experiments; final ship logs", 'LAB 4, SINGAPORE']
            ]) +
            KIT.band('Part B — First assessment of records') +
            KIT.cell(12, '', `Archive runs to millions of pages, most written by one man. Subjects include Astrophage biology, the Adrian ecosystem, Taumoeba breeding, xenonite, Eridian mathematics and language, and how to build a ship like theirs. Science team's words: several centuries of progress, delivered overnight.`, 'narr') +
            KIT.band('Part C — Contact') +
            KIT.cell(4, '5. Non-human intelligence', 'CONFIRMED') +
            KIT.cell(4, '6. Species', 'ERIDIAN') +
            KIT.cell(4, '7. Individual', '"ROCKY", ENGINEER') +
            KIT.band('Part D — Not established by anything recovered') +
            KIT.table(['Question', 'Status'], [
                ['Did the Hail Mary reach 40 Eridani?', '!UNKNOWN'],
                ['Did the Eridian engineer survive?', '!UNKNOWN'],
                ['Is Dr. Grace alive?', '!UNKNOWN']
            ]) +
            KIT.cell(8, '8. Remarks', `Capsules are Eridian steel, not xenonite. Note inside each, handwritten: "Steel this time. Long story."`, 'narr') +
            KIT.cell(4, '9. Certified (recovery commander)', 'A. Mwangi', 'hand'),
        foot: ['REC-14 &nbsp; Custody transferred to the Sol Recovery Initiative', 'Plate 5 lost to salt water']
    }),
    note: `Among the files on Beetle 2 was a short piece of video from inside the Hail Mary: Dr. Grace and Rocky at a workbench, building something, not looking at the camera. No speech, no ceremony. Three weeks after its release it was the most watched recording ever made.`
};

/* ---------- The solution arrives ---------- */

DOCS.solution = {
    html: KIT.news({
        edition: 'International edition &nbsp;·&nbsp; T+26.7 yr',
        section: ['Science', 'Sol Recovery'],
        headline: 'It works',
        deck: 'Laboratories on six continents have grown the organism the Beetles brought home and watched it eat Astrophage in a tank of Venus air. The plan now is to make as much of it as possible, and take it to Venus.',
        by: 'Priya Raman',
        from: 'Science correspondent',
        img: 'assets/white.png',
        cap: 'A culture of Taumoeba-82.5, forty hours after it was taken out of a Beetle.',
        credit: 'Photograph: Sol Recovery Initiative',
        body: `
            <p>The organism is called Taumoeba. It is an amoeba, more or less, from a planet twelve light-years away, and it eats the thing that has been eating the Sun.</p>
            <p>Less than forty-eight hours after the four Beetle probes were lifted out of the Indian Ocean, six laboratories working separately had the same result. Put Taumoeba in a sealed tank with Astrophage and an atmosphere matched to Venus, and within hours the Astrophage is gone. The Taumoeba is still there, and there is more of it.</p>
            <p>Permission to breed it at planetary scale was given the same day. There are already 143 sites, most of them the old Astrophage farms run in reverse.</p>
            <h3>Why this strain</h3>
            <p>Natural Taumoeba dies in nitrogen, and the air of Venus is 3.5 percent nitrogen. The files in the probes describe how Dr. Ryland Grace and an Eridian engineer he calls Rocky bred it through dozens of generations until it could survive more than twice that. The number in its name is the result: it tolerates 8.25 percent.</p>
            <div class="pull">"He did the experiment. He wrote it up properly. He put in the controls. All we had to do was read it."<cite>Dr. Mei Zhang, Sol Recovery Initiative</cite></div>
            <h3>What was announced</h3>
            <p>At 19:04 UTC on Tuesday, governments in 112 countries made the same statement at the same moment. Its main points:</p>
            <div class="box">
                <h4>The joint statement</h4>
                <ul>
                    <li>The Hail Mary reached Tau Ceti and completed its mission.</li>
                    <li>Dr. Ryland Grace survived the voyage. Commander Yao Li-Jie and engineer Olesya Ilyukhina did not.</li>
                    <li>A working cure was developed aboard and has been recovered alive.</li>
                    <li>Humanity is not the only intelligent species. We had help.</li>
                </ul>
            </div>
            <p>For anyone under thirty it was the first good news the whole world had ever been given at once.</p>
            <h3>That night</h3>
            <p>Curfews were lifted. In cities that had sounded emergency sirens every night for nineteen years, the sirens stayed quiet. People went outside and stayed there. In a great many places they were still there at dawn, and witnesses from Lagos to Lima describe the same thing: when the Sun came up, the crowd applauded.</p>
            <div class="tag">Parts of the Beetle archive remain under review and have not yet been released.</div>`
    })
};

/* ---------- ArcLight II ---------- */

DOCS.arclight2 = {
    html: KIT.memo({
        cls: 'OPERATION SUNRISE',
        org: 'Sol Recovery Initiative &nbsp;·&nbsp; Deployment Campaign',
        ref: 'REC-041 / MIS-0002',
        to: 'All member states',
        from: 'E. Stratt, Director (reinstated)',
        date: 'T+27.0 yr',
        re: 'ArcLight II: mission report at launch',
        body: `
            <p>ArcLight II left Earth this morning. It is carrying live Taumoeba to Venus. I will keep this short, because the mission is simple.</p>

            <h2>1. Purpose</h2>
            <p>Astrophage breeds in one place in this solar system: the upper atmosphere of Venus. If Taumoeba is established there, every generation of Astrophage that arrives to breed gets eaten. The Petrova line starves from the far end, and the Sun stops losing energy.</p>

            <figure><img src="assets/launch.png" alt=""><figcaption>ArcLight II clearing the tower.</figcaption></figure>

            <h2>2. The vehicle</h2>
            <table>
                <thead><tr><th>Item</th><th>Value</th></tr></thead>
                <tbody>
                    <tr><td>Payload</td><td>8,400 kg of live Taumoeba-82.5, in steel tanks</td></tr>
                    <tr><td>Grown at</td><td>143 breeding sites</td></tr>
                    <tr><td>Propulsion</td><td>Astrophage drive, copied from the Hail Mary</td></tr>
                    <tr><td>Transit to Venus</td><td>41 days</td></tr>
                </tbody>
            </table>

            <h2>3. What we borrowed</h2>
            <ul>
                <li>The drive design, from the Hail Mary's own telemetry.</li>
                <li>Payload temperature control, from Eridian drawings in the Beetle archive.</li>
                <li>Navigation and release timing, from Dr. Grace's notes on how Taumoeba spreads in a thick atmosphere.</li>
                <li>Steel tanks, because of what he learned about xenonite the hard way.</li>
            </ul>

            <h2>4. Sequence</h2>
            <ol>
                <li>Taumoeba production (complete)</li>
                <li>Payload integration (complete)</li>
                <li>Launch (today)</li>
                <li>Venus transfer burn</li>
                <li>Release into the Petrova line</li>
                <li>Monitoring of solar output</li>
            </ol>

            <h2>5. Expected outcome</h2>
            <p>Collapse of the Astrophage population at Venus within weeks of release. An end to the fall in solar output shortly after. A return to full output in a little over a year.</p>
            <p>The first ArcLight went to Venus thirty-two years ago to find out what was killing us. This one is going to kill it.</p>
            <p><i>We spent thirty-three years trying not to die. Now we finally get to fight back.</i></p>`,
        sign: 'E. Stratt',
        role: 'Director, Petrova Task Force and Sol Recovery Initiative'
    })
};

/* ---------- Sol is saved ---------- */

DOCS.solsaved = {
    html: KIT.report({
        kind: 'green',
        org: 'Petrova Task Force &nbsp;·&nbsp; Solar Monitoring Network',
        title: 'Sol Recovery Confirmation',
        sub: 'Final bulletin of the Petrova Task Force &nbsp;·&nbsp; T+27.3 yr and following',
        body: `
            <h2>A. Headline statements</h2>
            ${KIT.hs('A.1', 'The Astrophage population at Venus has fallen by 91.7% since Taumoeba was released. The Petrova line is fading.', 'high confidence')}
            ${KIT.hs('A.2', 'Solar output stopped falling 28 days after release, at 7.6% below baseline. It has risen every day since.', 'high confidence')}
            ${KIT.hs('A.3', 'Full output will be restored about 13 months after release.', 'high confidence')}
            ${KIT.hs('A.4', 'The extinction event is over. This Task Force has nothing further to do and will be dissolved.')}

            <figure>
                <div class="ft">Figure 1 | Solar output after Taumoeba release</div>
                <div class="fs">Percent below baseline. Observed to day 180; projected after.</div>
                <svg viewBox="0 0 730 270" role="img" aria-label="Solar output loss falling from 7.6 percent to zero over 13 months">
                    <g stroke="#d5dbe0" stroke-width="1"><line x1="64" y1="30" x2="694" y2="30"/><line x1="64" y1="80" x2="694" y2="80"/><line x1="64" y1="130" x2="694" y2="130"/><line x1="64" y1="180" x2="694" y2="180"/></g>
                    <line x1="64" y1="230" x2="694" y2="230" stroke="#1a1d21"/>
                    <polyline fill="none" stroke="#1f4a35" stroke-width="2.4" stroke-linejoin="round" points="64,40 108,40 142,46 206,65 269,98 347,122"/>
                    <polyline fill="none" stroke="#1f4a35" stroke-width="2.4" stroke-dasharray="6 5" stroke-linejoin="round" points="347,122 411,157 489,185 568,212 631,226 685,230"/>
                    <circle cx="108" cy="40" r="4.5" fill="#fff" stroke="#1f4a35" stroke-width="2"/>
                    <circle cx="347" cy="122" r="4" fill="#1f4a35"/>
                    <g font-size="12" fill="#1a1d21">
                        <text x="114" y="28">Day 28: decline halts at 7.6%</text>
                        <text x="356" y="118">Day 180: 4.3%</text>
                        <text x="690" y="172" text-anchor="end" fill="#1f4a35">Day 394: baseline restored</text>
                        <g text-anchor="end" fill="#555"><text x="56" y="234">0</text><text x="56" y="184">2</text><text x="56" y="134">4</text><text x="56" y="84">6</text><text x="56" y="34">8%</text></g>
                        <g text-anchor="middle" fill="#555"><text x="64" y="248">0</text><text x="221" y="248">100</text><text x="379" y="248">200</text><text x="536" y="248">300</text><text x="694" y="248">400</text><text x="379" y="266">Days after release at Venus</text></g>
                    </g>
                </svg>
            </figure>

            <h2>B. Sequence</h2>
            <table>
                <thead><tr><th>Day</th><th>Event</th></tr></thead>
                <tbody>
                    <tr><td>0</td><td>ArcLight II releases Taumoeba-82.5 into the Petrova line at Venus.</td></tr>
                    <tr><td>11</td><td>Venus monitoring satellites report the line breaking up. Astrophage density is falling faster than any model predicted.</td></tr>
                    <tr><td>28</td><td>For the first time since Dr. Petrova's email, the Sun's output is not lower than it was the day before.</td></tr>
                    <tr><td>40</td><td>First measured increase.</td></tr>
                    <tr><td>104</td><td>Recovery formally confirmed by all stations of the network.</td></tr>
                </tbody>
            </table>

            <h2>C. On Earth</h2>
            <table>
                <thead><tr><th>Indicator</th><th>Status</th><th>Note</th></tr></thead>
                <tbody>
                    <tr><td>Agriculture</td><td class="good">Recovering</td><td>First planting season under a brightening Sun</td></tr>
                    <tr><td>Conflict zones</td><td class="good">Down 78%</td><td>Since the Beetles were detected</td></tr>
                    <tr><td>Power</td><td class="good">Stable</td><td>Stored Astrophage is now a fuel reserve, not a threat</td></tr>
                    <tr><td>Displaced people</td><td class="good">Returning</td><td>The largest resettlement in history</td></tr>
                    <tr><td>Methane programme</td><td>Ended</td><td>Winterfall measures terminated permanently</td></tr>
                </tbody>
            </table>

            <blockquote>Thirty-three years ago we were counting how many people would die. Today we are counting how many get to live.<cite>E. Stratt, last transmission as Director</cite></blockquote>
            <p>The extinction event formally ended at 08:14 UTC on day 104. People have started calling it the Second Sunrise.</p>`,
        foot: ['PTF-MON/060', 'Final bulletin', 'End of series']
    })
};

/* ---------- Earth heals ---------- */

DOCS.earthheals = {
    html: KIT.report({
        kind: 'green',
        org: 'United Nations &nbsp;·&nbsp; Reconstruction Secretariat',
        title: 'Earth Recovery Report',
        sub: 'First year after the Second Sunrise &nbsp;·&nbsp; T+28.4 yr',
        body: `
            <h2>A. Headline statements</h2>
            ${KIT.hs('A.1', 'Solar output is back at its pre-crisis level. Global temperatures have stopped falling and will take decades to recover fully.', 'high confidence')}
            ${KIT.hs('A.2', 'Food production more than doubled in one year. Rationing is being phased out everywhere.')}
            ${KIT.hs('A.3', 'There is no active war over resources anywhere on Earth, for the first time in twenty-seven years.')}

            <div class="two">
                <figure><img src="assets/farm.png" alt=""><figcaption>Cropland returned to use.</figcaption></figure>
                <figure><img src="assets/ocean.png" alt=""><figcaption>Ocean survey, southern approaches.</figcaption></figure>
            </div>

            <h2>B. Programmes</h2>
            <table>
                <thead><tr><th>Programme</th><th>Status</th><th>Detail</th></tr></thead>
                <tbody>
                    <tr><td>Food</td><td class="good">Seed vaults opened</td><td>Wheat, rice, maize, soy, potato, coffee and fruit stocks sent to every recovering region.</td></tr>
                    <tr><td>Peace</td><td class="good">Treaty signed</td><td>Under the Reykjavik Food and Water Treaty, former enemies share harvests, freshwater works and climate technology.</td></tr>
                    <tr><td>Oceans</td><td>Under way</td><td>Reef rebuilding, protected fisheries, and clean-up of the methane release.</td></tr>
                    <tr><td>Power</td><td class="good">Stable</td><td>The Astrophage farms that fuelled the Hail Mary now power the rebuilding of the regions they displaced.</td></tr>
                </tbody>
            </table>

            <h2>C. Milestones and targets</h2>
            <table>
                <thead><tr><th>When</th><th>Milestone</th></tr></thead>
                <tbody>
                    <tr><td>Reached</td><td>Last major resource conflict formally ended.</td></tr>
                    <tr><td>Year 2</td><td>International shipping fully restored.</td></tr>
                    <tr><td>Year 3</td><td>Rationing below emergency levels worldwide.</td></tr>
                    <tr><td>Year 5</td><td>The first children born after the crisis start school.</td></tr>
                </tbody>
            </table>

            <h2>D. Reconstruction</h2>
            <p>Military supply depots are being turned into farming cooperatives. Refugee camps are becoming towns. Border checkpoints are reopening as trade crossings. Countries that spent two decades fighting over food are exchanging seed stock, water purifiers and farm machinery.</p>
            <p>About 4.1 billion people did not live to see it. This report is dedicated to them.</p>
            <blockquote>For thirty years we prepared for the end of the world. We had forgotten how to prepare for its future.<cite>United Nations recovery broadcast</cite></blockquote>`,
        foot: ['UN-RS/088', 'Extinction status: ended', '9']
    })
};

/* ---------- The world remembers ---------- */

DOCS.celebration = {
    html: KIT.news({
        edition: 'Weekend edition &nbsp;·&nbsp; T+29.0 yr',
        section: ['World', 'Sol Day'],
        headline: 'A holiday for three people who never came back',
        deck: 'On the first Sol Day, 314 cities held parades for the crew of the Hail Mary. In San Francisco, a middle school got a new name, and some former students came back to see it.',
        by: 'Amara Okafor',
        from: 'Reporting from San Francisco',
        img: 'assets/poloroid.jpg',
        cap: 'A photograph left at the memorial outside the former Grover Cleveland Middle School.',
        body: `
            <p><span class="dl">SAN FRANCISCO</span> — March 2 was Ryland Grace's birthday. As of this year it is a public holiday in most of the world, under the name Sol Day.</p>
            <p>Nobody designed how to observe it. People worked that out themselves. In city after city on Saturday, crowds carried paper lanterns shaped like Beetle probes, and children carried cardboard models of the Hail Mary through the streets.</p>
            <h3>The honours</h3>
            <p>China has renamed its orbital training academy for Commander Yao Li-Jie. Russia's aerospace institutes have founded an annual engineering scholarship in the name of Olesya Ilyukhina. Records recovered with the Beetles show that all three crew left their accumulated pay to schools, farm recovery and science academies.</p>
            <p>There are statues now in New York, Moscow, Tokyo, Paris, Nairobi, New Delhi and São Paulo. Most show four figures. The fourth has five legs.</p>
            <div class="pull">"For most of human history, heroes came home. He didn't."<cite>From the first Sol Day broadcast</cite></div>
            <h3>Room 114</h3>
            <p>The school where Dr. Grace taught science is now Ryland Grace Middle School. Several of the children he taught the year the Sun began to dim were there for the renaming. They are in their forties.</p>
            <p>"He made science fun," said Jasmine Tran, 46. "I remember thinking he was just some weird middle-school teacher. Turns out he saved the world."</p>
            <p>"None of us knew what he was working on," said Miguel Ortiz, 47. "He used to tell us science matters because people matter. We're alive because of him."</p>
            <p>Leah Park, 45, came with her daughter, who starts at the school in the autumn. "My kid goes to Ryland Grace Middle School," she said. "That is still an insane thing to say out loud."</p>
            <p>The video of Dr. Grace and Rocky at their workbench, recovered from the Beetles, is now shown in schools everywhere. On Saturday it played on a loop on the wall of the gym. Nobody was really watching it. It was just on, the way you leave a light on.</p>
            <div class="tag">Dr. Grace is officially listed as missing. His file has never been closed.</div>`
    })
};

/* ---------- 40 Eridani ---------- */

DOCS.forty = {
    html: KIT.paper({
        circ: true,
        journal: 'Deep-Space Observation Network Circular',
        issue: 'No. 1140 &nbsp;|&nbsp; T+44 yr',
        kind: 'Observation Report',
        title: 'Brightening of 40 Eridani A consistent with collapse of its Astrophage population',
        authors: 'Deep-Space Observation Network, long-baseline photometry group',
        aff: 'Reported to the Bureau of Historical Records at the request of the Registrar, Petrova Collection.',
        abstract: '',
        body: `
            <p class="first">40 Eridani A, 16.3 light-years from Sol, has been dimming for as long as it has been monitored. It carries a Petrova line. Beginning this season its output is rising.</p>
            <p>The rise was first seen at two stations and has now been confirmed at eleven. It is not instrumental.</p>

            <table>
                <caption><b>Table 1 | Recovery curve, Sol and 40 Eridani A</b></caption>
                <thead><tr><th>Marker</th><th>Sol</th><th>40 Eridani A</th></tr></thead>
                <tbody>
                    <tr><td>Petrova line begins to fade</td><td>Day 11</td><td>Day 11 ± 2</td></tr>
                    <tr><td>Decline halts</td><td>Day 28</td><td>Day 27 ± 3</td></tr>
                    <tr><td>Recovery confirmed</td><td>Day 104</td><td>Day 101 ± 5</td></tr>
                </tbody>
            </table>

            <p>The two curves agree to within the resolution of our instruments. We know of no natural process that produces this shape. We know of one artificial process that does: the release of Taumoeba into a star's breeding planet.</p>

            <h2>Interpretation</h2>
            <p>Light takes 16.3 years to arrive from 40 Eridani. What we are seeing happened around T+28, about a year after the same thing happened here. The Hail Mary was last heard from at T+23, on course for that system, with Taumoeba aboard.</p>
            <p>We conclude with high confidence that the ship arrived and that its cargo was delivered.</p>

            <h2>What this does not tell us</h2>
            <p>A star can be cured by whoever is aboard, or by a ship with nobody alive on it, if those waiting for it know what to do with what it carries. The observation is evidence that the Hail Mary reached Erid. It is not evidence about its pilot. His food would have run out years before arrival. There has been no transmission.</p>
            <div class="note">Status of Dr. Ryland Grace: unchanged. Missing; presumed dead on the arithmetic; not confirmed by anything.</div>
            <p>We record only what the data supports. What it supports is this: the sun at Erid is getting brighter, and someone carried the reason there.</p>
            <p>Two civilisations are alive because one man would not leave his friend behind. Whether he knows it worked, at either end, is beyond the reach of any telescope we have.</p>`,
        meta: 'Circulated to all stations. The Registrar has asked that the file on the Hail Mary remain open. Filed by M. Halloran.'
    })
};
