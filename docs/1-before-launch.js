/* ============================================================
   DOCUMENTS, PART 1 — DETECTION TO THE ANTARCTIC OPERATION
   T−6.0 yr to T−2.0 yr
   ============================================================ */

/* ---------- Petrova's email ---------- */

DOCS.petrova = {
    html: KIT.mail({
        list: 'astrocurious',
        subject: 'The Thin Red Line',
        from: 'Irina Petrova',
        addr: 'ipetrova at gaoran.ru',
        date: 'Tue Apr 3 02:14:07 UTC',
        prev: 'Re: Collimating a 10" Dob in the cold',
        next: 'Re: The Thin Red Line',
        body: `Dear list,

I am Irina Petrova, an astronomer at Pulkovo Observatory in
St. Petersburg. I do not usually post here. I am posting now because
I have a result I cannot explain and, after two weeks of checking,
cannot make go away.

My own work is on infrared emission from nebulae, which means long
exposures in a handful of very narrow bands. In one of those bands
there is a line that should not be there. It is not in a nebula.
It is inside our own solar system.

What I see:

  - a steady emission at 25.984 microns, with no spread in
    wavelength that I can measure;
  - it leaves the Sun at the north pole and climbs for about
    37 million km;
  - it then bends over and runs to Venus, spreading as it goes,
    until it is about as wide as the planet.

It is extremely faint. I only caught it because the instrument was
set up for something much dimmer.

Colleagues at Atacama have kindly repeated the observation on
different equipment. They see the same arc at the same wavelength,
so it is not my detector.

I first thought of particles following a magnetic field. But Venus
has almost no field, and in any case I cannot see why a field would
make anything glow at exactly one wavelength.

So I have two questions. What bends matter toward Venus? And what
shines in one colour only?

My data and some 3D renders are attached. If the mistake is mine
I would honestly be glad to hear it.

With thanks,
Irina Petrova
Pulkovo Observatory, St. Petersburg`,
        attach: [
            ['IR_BAND_SURVEY_FEB-MAR.xlsx', '2516582'],
            ['ARC_RENDER_3D_01.png', '880640'],
            ['ATACAMA_CONFIRMATION.txt', '11264']
        ],
        thread: [
            ['D. Okonkwo, Atacama Observatory, day 2', 'Re: The Thin Red Line (we see it too, same wavelength)'],
            ['K. Nakamura, Mauna Kea, day 9', 'Re: The Thin Red Line (mid-IR imaging agrees)'],
            ['ESA Deep Field Survey, day 14', 'Re: The Thin Red Line (confirmed from orbit)'],
            ['Amaterasu science team, JAXA, day 21', 'Re: The Thin Red Line (Dr. Petrova, please call us)'],
            ['list-admin, day 30', 'ADMIN: thread locked, 3,100 new subscribers this week']
        ]
    }),
    note: `Posted to a public astronomy mailing list of 412 subscribers, with no letterhead and no urgency marking. Within nine days its contents had been confirmed on three continents. Within eleven weeks the Petrova Task Force existed. Every other record in this collection descends from this message.`
};

/* ---------- The President's address ---------- */

DOCS.address = {
    html: KIT.remarks({
        head: ['THE WHITE HOUSE', 'Office of the Press Secretary'],
        release: ['For Immediate Release', 'T−5.8 yr'],
        title: ['ADDRESS BY THE PRESIDENT', 'TO THE NATION', 'ON THE PETROVA LINE'],
        place: 'Oval Office',
        start: '8:42 P.M. EST',
        body: [
            `THE PRESIDENT: My fellow citizens. Tonight the international scientific community has confirmed the existence of a previously unknown phenomenon in our solar system. It has been named the Petrova Line.`,
            `It is an arc of infrared light extending from the Sun to Venus. It has been verified independently by observatories on every inhabited continent. I want to be direct with you about what we know and about what we do not.`,
            `There is no immediate danger to the public. No action is required of you tonight.`,
            `However, data collected by the Japanese space agency, using its Amaterasu solar probe, has revealed something that concerns us deeply. The Sun's energy output is decreasing. At present that decline measures one one-hundredth of one percent. I am aware that this sounds like a small number. I am told it is not.`,
            `The rate of decline is accelerating. If nothing changes, the Sun will lose a full percent of its output within nine years, and five percent within twenty. And the Petrova Line is growing brighter at precisely the rate that our Sun is growing dimmer.`,
            `Our researchers do not yet understand the mechanism. The working hypothesis, and I want to be clear that it is a hypothesis, is that whatever forms that line is drawing energy out of the Sun and carrying it somewhere else.`,
            `Effective immediately, this government is placing its scientific resources under joint international coordination. An emergency task force is being assembled tonight. Its findings will be made public as they are confirmed, and not after.`,
            `I will not stand here and tell you that we understand this. We do not. What I can tell you is that every capable mind on this planet is now pointed at the same problem, together, for the first time in our history.`,
            `Thank you. Good night.`
        ],
        end: '8:48 P.M. EST'
    }),
    note: `Simulcast in 41 languages to an estimated 1.4 billion people. Two phrases in the delivered address appear in no surviving draft: "and not after," and the paragraph that begins "I will not stand here." Speechwriting files show both were added by hand in the last ninety minutes.`
};

/* ---------- ArcLight ---------- */

DOCS.arclight = {
    html: KIT.loop({
        head: ['ARCLIGHT MISSION COMMENTARY', 'VENUS ORBIT INSERTION', 'TAPE 14A / PAGE 1 OF 2'],
        sub: ['GET 187:04:10', 'PASADENA 02:11 PDT', 'NET 1 + PAO'],
        rows: [
            ['187:04:12', 'PAO', `This is ArcLight Control. We are four minutes from loss of signal as the spacecraft passes behind Venus. The insertion burn will happen out of contact. If it goes to plan we hear from ArcLight again in twenty-three minutes.`],
            ['187:05:40', 'FLIGHT', `Okay, all stations, last look before LOS. Go or no-go for insertion. Prop.`],
            ['187:05:44', 'PROP', `Go.`],
            ['187:05:46', 'FLIGHT', `GNC.`],
            ['187:05:47', 'GNC', `Go, Flight.`],
            ['187:05:49', 'FLIGHT', `Sample.`],
            ['187:05:53', 'SAMPLE', `Collector door is armed. We're go.`],
            ['los', 'LOSS OF SIGNAL 187:08:31'],
            ['note', 'No voice on NET 1 for 22 min 48 sec.'],
            ['187:31:19', 'INCO', `Flight, INCO. Carrier lock. We have a downlink.`],
            ['187:31:22', 'FLIGHT', `Copy carrier. GNC, where are we?`],
            ['187:31:58', 'GNC', `Flight, we are in orbit. Apoapsis is eleven kilometers off the plan.`],
            ['note', 'Applause in the room. Unintelligible.'],
            ['187:33:05', 'SAMPLE', `Flight, Sample. The collector is reading mass. That's not in the plan either. We weren't expecting anything you could weigh.`],
            ['187:33:20', 'FLIGHT', `Say again, Sample. Mass?`],
            ['187:33:24', 'SAMPLE', `One hundred seventy-four discrete particles, each about ten microns. The onboard microscope is on them now.`]
        ],
        foot: ['ARCLIGHT / PAO / 14A', 'CONTINUED']
    }) + KIT.loop({
        head: ['ARCLIGHT MISSION COMMENTARY', 'NETWORK POOL FEED', 'TAPE 14A / PAGE 2 OF 2'],
        sub: ['GET 187:41:00', 'PASADENA 02:48 PDT', 'POOL AUDIO'],
        rows: [
            ['187:41:02', 'REPORTER', `We're live from Pasadena, where the first pictures from inside the Petrova line are coming down now. Doctor, what are we looking at?`],
            ['187:41:14', 'BROWNE', `The image on your screen is coming from the probe's internal microscope. It's looking at whatever ArcLight just collected. Magnified ten thousand times. Those dark specks are the sample.`],
            ['note', 'Monochrome microscope image on feed. Dark particles on a pale field.'],
            ['187:41:41', 'REPORTER', `And these are, what, dust? Ice?`],
            ['187:41:44', 'BROWNE', `That's what we're here to find out. The best guess going in was some kind of --`],
            ['note', '4.2 seconds of silence. One particle changes position.'],
            ['187:41:53', 'BROWNE', `Oh my God.`],
            ['187:41:57', 'REPORTER', `Doctor, are those particles moving?`],
            ['note', 'Several particles cross the field, in different directions.'],
            ['187:42:06', 'BROWNE', `I'm sorry. I have to go.`],
            ['note', 'Chair audible. Dr. Browne leaves frame. Studio audio stays open for 51 seconds.'],
            ['los', 'POOL FEED CUT 187:42:58']
        ],
        foot: ['ARCLIGHT / PAO / 14A', 'END OF TAPE']
    }),
    note: `An estimated 2.8 billion people were watching. Crowds in Times Square were reported to fall silent within seconds of the feed being cut. Rail services in Tokyo ran late on eleven lines as passengers stood in front of platform monitors. Fourteen governments convened emergency sessions inside fifteen minutes. Historians date the knowledge that humanity is not alone to 187:41:53.`
};

/* ---------- Task force formed ---------- */

DOCS.taskforce = {
    html: KIT.news({
        edition: 'International edition &nbsp;·&nbsp; T−5.7 yr',
        section: ['World', 'United Nations', 'The Petrova Line'],
        headline: 'U.N. hands one administrator command of the Petrova response',
        deck: 'Eva Stratt, a former European Space Agency official, can now direct any laboratory, launch site or budget on Earth. The vote was unanimous. The limits on her authority were left unwritten.',
        by: 'Amara Okafor and Lukas Brandt',
        from: 'Reporting from New York and Geneva',
        img: 'assets/cars.png',
        cap: 'A convoy carrying task force staff leaves the emergency session on Tuesday night.',
        body: `
            <p><span class="dl">NEW YORK</span> — The General Assembly took eleven minutes on Tuesday to do something it has never done: place the scientific resources of every member state under the direction of a single person.</p>
            <p>That person is Eva Stratt, a Dutch administrator best known inside the space industry for finishing other people's delayed projects. She was confirmed as director of the new Petrova Task Force without a dissenting vote and, delegates said afterwards, without much discussion of what she would be permitted to do.</p>
            <p>The answer, according to the text of the resolution, is nearly anything. The director may requisition transport, manufacturing and personnel, override national regulators on matters connected to the Petrova Line, and spend without a ceiling.</p>
            <div class="pull">"The directorship requires an administrator willing to be disliked. The board is satisfied that the nominee meets this requirement."<cite>Minute of the selection board, read into the record</cite></div>
            <p>Ms. Stratt was nominated by a joint delegation of scientists from 31 countries. Her record at the European Space Agency includes four cross-border infrastructure recoveries, each delivered inside an emergency schedule. People who worked on them describe her, without exception and not always warmly, as someone who does not wait for permission.</p>
            <p>The board's stated criterion was not scientific standing. It wanted, one member said, "the person most able to make governments do something together that none of them would do alone."</p>
            <h3>A question nobody answered</h3>
            <p>Two delegations asked in committee when the powers would expire. The question was struck from the draft both times. A spokesman for the Secretary-General said only that the arrangement would last "for the duration of the emergency."</p>
            <p>The task force's first assignment is already set. It is to design, build and launch a probe, named ArcLight, that can fly through the Petrova Line at Venus and bring back whatever it is made of.</p>
            <div class="box">
                <h4>What the resolution grants</h4>
                <ul>
                    <li>Diplomatic immunity in every cooperating nation</li>
                    <li>Priority on civil and military transport networks</li>
                    <li>Authority to override national regulators on Petrova matters</li>
                    <li>Direction of all Petrova-related research</li>
                    <li>An uncapped budget, with no stated end date</li>
                </ul>
            </div>
            <div class="tag">Resolution A/RES/EMG-1 was adopted without a recorded vote.</div>`
    }),
    note: `The missing expiry clause became the central question of the tribunal convened four months after launch.`
};

/* ---------- Recruitment register ---------- */

DOCS.recruitment = {
    html: KIT.form({
        org: ['Petrova Task Force', 'Directorate of Scientific Personnel'],
        title: 'Scientific Recruitment Register',
        no: ['FORM PTF-88 (REV. A)', 'FIRST INTAKE', 'PAGE 1 OF 1'],
        body:
            KIT.cell(3, '1. Applicants reviewed', '41,882') +
            KIT.cell(3, '2. Selected', '1,204') +
            KIT.cell(3, '3. Nations represented', '87') +
            KIT.cell(3, '4. Granted sample access', '1', 'red') +
            KIT.band('Part A — Sample access') +
            KIT.cell(8, '5. Directive', `General distribution of ArcLight material is suspended. Access is restricted to ONE researcher in ONE room until basic behaviour of the material is characterised. Anything infectious takes time to show itself. Until we know what this is, nobody else touches it. No exceptions delegated.`, 'narr') +
            KIT.cell(4, '6. Authorised (director)', 'E. Stratt', 'hand') +
            KIT.cell(4, '7. Access holder', 'GRACE, RYLAND') +
            KIT.cell(4, '8. Field', 'MOLECULAR BIOLOGY') +
            KIT.cell(4, '9. Current post', 'NONE (SCHOOL TEACHER)', 'red') +
            KIT.cell(12, '10. Basis of selection', `Author of a paper arguing that water is not a prerequisite for life. Paper was poorly received and is the reason subject holds no research post. Subject is therefore available, expendable to no institution, and already thinking about the right problem.`, 'narr') +
            KIT.band('Part B — Molecular biology division (lead: Dr. E. Scyther)') +
            KIT.table(['Researcher', 'State', 'Submitted work', 'Status'], [
                ['GRACE, R.', 'USA', 'Water-based assumptions and recalibration of evolutionary expectation', '!SAMPLE ACCESS'],
                ['ALMEIDA, S.', 'BRA', 'Cellular adaptation in extreme hydrothermal environments', 'CLEARED'],
                ['HASSAN, I.', 'EGY', 'Metabolic stability in high-energy microorganisms', 'CLEARED'],
                ['ZHANG, M.', 'CHN', 'Synthetic evolutionary pathways in closed ecological systems', 'CLEARED'],
                ['ROTH, H.', 'DEU', 'Genetic survivability under catastrophic selection pressure', 'CLEARED']
            ]) +
            KIT.band('Part C — Astrophysics (lead: Dr. V. Petrov) and materials (lead: Dr. N. Volkov)') +
            KIT.table(['Researcher', 'State', 'Division', 'Submitted work'], [
                ['HAMMOND, L.', 'GBR', 'ASTRO', 'Infrared signatures of non-stellar energy migration'],
                ['SATO, R.', 'JPN', 'ASTRO', 'Gravitational modelling of interplanetary energy transfer'],
                ['PATEL, A.', 'IND', 'ASTRO', 'Large-scale analysis of stellar luminosity anomalies'],
                ['LAURENT, P.', 'FRA', 'MATL', 'Ultra-dense carbon structures under extreme thermal load'],
                ["O'CONNELL, L.", 'IRL', 'MATL', 'Failure characteristics of high-energy containment systems']
            ]),
        foot: ['PTF-88 (Rev. A) &nbsp; Rows 6 to 1,204 held on continuation sheets', 'Clearance tier: Omega']
    })
};

/* ---------- What is Astrophage? ---------- */

DOCS.astrophage = {
    html: KIT.news({
        edition: 'International edition &nbsp;·&nbsp; T−4.6 yr',
        section: ['Science', 'Explainer', 'The Petrova Line'],
        headline: 'What is Astrophage?',
        deck: 'It is alive, it is smaller than a grain of pollen, and it is eating the Sun. What 347 laboratories have learned in six weeks about the first organism found beyond Earth.',
        by: 'Priya Raman',
        from: 'Science correspondent',
        img: 'assets/astrophage.png',
        cap: 'Astrophage cells from the ArcLight sample. Each is about ten thousandths of a millimetre across.',
        credit: 'Image: Petrova Task Force',
        body: `
            <p>When the ArcLight probe flew through the Petrova Line and scooped up a sample, most scientists expected dust. What came back was a living thing. The Petrova Task Force published its first full description this week. Here is what it says.</p>
            <h3>Is it really alive?</h3>
            <p>Yes. Astrophage is a single-celled organism. Each cell moves under its own power, feeds, and reproduces. Inside, it is mostly water, and it is built from the same handful of elements as every living thing on Earth: oxygen, carbon, hydrogen and nitrogen make up 96 percent of it.</p>
            <p>"The profile is unremarkable," the report notes. "Whatever Astrophage is, it is not built from anything we did not already have."</p>
            <h3>Why did it take so long to find that out?</h3>
            <p>Because nobody could see inside one. A living Astrophage cell absorbs every kind of light and radiation thrown at it. X-rays, gamma rays, microwaves and more than 190 attempts with visible light all returned nothing. Researchers described a perfect black box: something you could weigh and count but not look into.</p>
            <p>The breakthrough was grim. A dead cell stops absorbing. The first clear image of Astrophage is an image of one that was killed on purpose so that it could be seen.</p>
            <div class="pull">"That is a cell. I am looking at a living cell that did not come from Earth."<cite>Dr. Ryland Grace, laboratory recording, day 14</cite></div>
            <h3>What does it do to the Sun?</h3>
            <p>It feeds on it. Astrophage soaks up energy at the Sun's surface and stores it with an efficiency close to the theoretical limit. It then spends a little of that energy as a beam of infrared light, which pushes it through space like a tiny rocket. That light has one precise wavelength, 25.984 microns. It is the glow Dr. Irina Petrova spotted from St. Petersburg.</p>
            <p>The cells also hold themselves at exactly 96.415 degrees Celsius, whatever is around them. Put one in a furnace and it simply absorbs the extra heat.</p>
            <h3>Why Venus?</h3>
            <p>Astrophage cannot breed at the Sun. It needs carbon dioxide, and the nearest large supply is the atmosphere of Venus. So it commutes: out to Venus to divide, back to the Sun to feed, each generation larger than the last. The Petrova Line is that migration, seen from a distance.</p>
            <p>The dimming of the Sun, in other words, is not something wrong with the Sun. As the task force puts it, it is a measurement of theft.</p>
            <h3>Who named it?</h3>
            <p>Dr. Ryland Grace, a molecular biologist who was teaching middle-school science in San Francisco when the task force recruited him. He was the only person allowed to handle the sample for its first eleven days. He called it Astrophage, "star eater," in his lab notes. The name was in general use within a fortnight. No naming body has ever ratified it, and none has objected.</p>
            <div class="box">
                <h4>Astrophage at a glance</h4>
                <ul>
                    <li>Size: about 10 microns</li>
                    <li>Temperature: 96.415 °C, constant</li>
                    <li>Light emitted: infrared, 25.984 microns</li>
                    <li>Feeds at: the Sun</li>
                    <li>Breeds at: Venus</li>
                    <li>Made of: oxygen 60.9%, carbon 22.9%, hydrogen 9.8%, nitrogen 2.4%, other 4.0%</li>
                </ul>
            </div>
            <div class="tag">The full technical report is linked from the timeline as "Astrophage reproduction and propagation model."</div>`
    })
};

/* ---------- Sun-dimming projections ---------- */

DOCS.projections = {
    html: KIT.report({
        org: 'Petrova Task Force &nbsp;·&nbsp; Earth Systems Modelling Group',
        title: 'Solar Output Decline and Its Consequences for Human Systems',
        sub: 'Summary for Policymakers &nbsp;·&nbsp; First assessment &nbsp;·&nbsp; T−4.0 yr',
        body: `
            <h2>A. Headline statements</h2>
            ${KIT.hs('A.1', 'Solar output has fallen by 0.04% since first measurement and the rate of loss is increasing. It will reach 1% within nine years of disclosure and 5% within twenty.', 'high confidence')}
            ${KIT.hs('A.2', 'A 5% loss is enough to begin a glaciation and to end reliable harvests of wheat, rice and maize outside the tropics.', 'high confidence')}
            ${KIT.hs('A.3', 'On the median pathway, half of the present human population dies within 19 years, mostly from famine and the conflicts that follow it.', 'medium confidence')}
            ${KIT.hs('A.4', 'All 31 contributing models agree on direction. None returns a stable outcome. No mitigation is known.', 'high confidence')}

            <figure>
                <div class="ft">Figure SPM.1 | Projected loss of solar output</div>
                <div class="fs">Percent below baseline. Median of 31 models with 5–95% range.</div>
                <svg viewBox="0 0 730 312" role="img" aria-label="Projected loss of solar output over 32 years, rising from 0.01 percent to a median of 7.5 percent">
                <g stroke="#d5dbe0" stroke-width="1">
                <line x1="64" y1="224" x2="694" y2="224"/><line x1="64" y1="184" x2="694" y2="184"/><line x1="64" y1="144" x2="694" y2="144"/><line x1="64" y1="104" x2="694" y2="104"/><line x1="64" y1="64" x2="694" y2="64"/><line x1="64" y1="24" x2="694" y2="24"/>
                </g>
                <line x1="64" y1="264" x2="694" y2="264" stroke="#1a1d21" stroke-width="1"/>
                <polygon fill="#12324a" fill-opacity=".14" points="64,263.8 103.4,263 142.8,260.8 182.1,255.7 221.5,246.7 260.9,233 300.3,215.1 339.6,194.1 379,170.8 418.4,147.3 457.8,124 497.1,102.1 536.5,81.7 575.9,63.1 615.3,45.9 654.6,30.7 694,24 694,173.6 654.6,172.9 615.3,173.1 575.9,174.8 536.5,177.8 497.1,182.5 457.8,189 418.4,197.5 379,207.5 339.6,219 300.3,230.5 260.9,241.4 221.5,250.6 182.1,257.2 142.8,261.2 103.4,263.1"/>
                <g stroke="#b3261e" stroke-width="1" stroke-dasharray="5 4">
                <line x1="64" y1="244" x2="694" y2="244"/><line x1="64" y1="164" x2="694" y2="164"/>
                </g>
                <polyline fill="none" stroke="#12324a" stroke-width="2.4" stroke-linejoin="round" points="64,263.8 103.4,263.1 142.8,261 182.1,256.6 221.5,249.1 260.9,238.2 300.3,224.6 339.6,209.4 379,193.4 418.4,178.2 457.8,164 497.1,151.6 536.5,140.8 575.9,131.8 615.3,124.2 654.6,118.2 694,113.4"/>
                <circle cx="241.2" cy="244" r="4.5" fill="#fff" stroke="#12324a" stroke-width="2"/>
                <circle cx="457.8" cy="164" r="4.5" fill="#fff" stroke="#12324a" stroke-width="2"/>
                <circle cx="694" cy="113.4" r="4" fill="#12324a"/>
                <line x1="99.4" y1="264" x2="99.4" y2="212" stroke="#1a1d21" stroke-width="1"/>
                <g font-size="12" fill="#1a1d21">
                <text x="104" y="221">This report</text>
                <text x="690" y="258" text-anchor="end" fill="#b3261e">1%: growing seasons shorten at high latitudes</text>
                <text x="72" y="159" fill="#b3261e">5%: glaciation begins; staple crops fail</text>
                <text x="640" y="104" fill="#12324a" font-weight="700">7.5%</text>
                <text x="582" y="40" fill="#12324a">5–95% range</text>
                <g text-anchor="end" fill="#555">
                <text x="56" y="268">0</text><text x="56" y="228">2</text><text x="56" y="188">4</text><text x="56" y="148">6</text><text x="56" y="108">8</text><text x="56" y="68">10</text><text x="56" y="28">12%</text>
                </g>
                <g text-anchor="middle" fill="#555">
                <text x="64" y="282">0</text><text x="142.8" y="282">4</text><text x="221.5" y="282">8</text><text x="300.3" y="282">12</text><text x="379" y="282">16</text><text x="457.8" y="282">20</text><text x="536.5" y="282">24</text><text x="615.3" y="282">28</text><text x="694" y="282">32</text>
                <text x="379" y="304">Years after public disclosure</text>
                </g>
                </g>
                </svg>
                <figcaption>Open circles mark the two projections announced at disclosure. Growth slows after year 20 in most models: other infected stars have been observed to stop dimming at roughly 10%, which suggests breeding is limited by how fast a Petrova line can carry cells home. The upper range shows models where that limit does not hold.</figcaption>
            </figure>

            <h2>B. Expected consequences by decade</h2>
            <table>
                <thead><tr><th>Years</th><th class="r">Output loss</th><th>Food</th><th>Society</th><th>Population</th></tr></thead>
                <tbody>
                    <tr><td>0–10</td><td class="r">up to 1.3%</td><td>Yields fall 5–10%; export bans begin</td><td>Food-exporting economies destabilise; energy demand spikes</td><td>Stable</td></tr>
                    <tr><td>10–20</td><td class="r">1.3–5.0%</td><td>Northern grain belts fail</td><td>Mass migration; shipping unreliable; first wars over farmland</td><td>−15 to −30%</td></tr>
                    <tr><td>20–30</td><td class="r">5.0–7.3%</td><td>Tropics only; trade ceases</td><td>Governments restructure or dissolve</td><td>−50% (median)</td></tr>
                    <tr><td>30–40</td><td class="r">above 7.3%</td><td>Famine and epidemic together</td><td>Irreversible damage to the biosphere</td><td>Not modelled</td></tr>
                </tbody>
            </table>

            <blockquote>We are not talking about ecosystem disruption any more. We are talking about the end of civilisation.<cite>Dr. Harold Kline, modelling group, oral evidence</cite></blockquote>

            <h2>C. Mitigation</h2>
            <p>None is known. The Modelling Group records that it was not asked to identify one, and that it would not have been able to.</p>`,
        foot: ['PTF-ESMG/AR1/SPM', 'Approved line by line by 31 modelling centres', 'SPM-3']
    })
};

/* ---------- Project Sahara ---------- */

DOCS.sahara = {
    html: KIT.report({
        org: 'Petrova Task Force &nbsp;·&nbsp; Directorate of Infrastructure',
        title: 'Project Sahara: Astrophage Cultivation Network',
        sub: 'Construction status and ethical review &nbsp;·&nbsp; T−3.5 yr',
        body: `
            <h2>1. Summary</h2>
            ${KIT.hs('1.1', 'An interstellar mission requires about two million kilograms of Astrophage. Astrophage can only be bred by feeding it energy, and the only source large enough is sunlight.')}
            ${KIT.hs('1.2', 'The project will cover one quarter of the Sahara, about 2.1 million square kilometres, with black collector panels across Algeria, Libya and Chad.')}
            ${KIT.hs('1.3', 'Host governments raised four formal objections. Two were resolved by treaty. Two were not resolved.')}

            <figure class="ph">
                <img src="assets/farm.png" alt="">
                <figcaption>Ground preparation at the Chad cultivation site.</figcaption>
            </figure>

            <h2>2. How it works</h2>
            <p>The panels are not solar cells. They are black foil that turns sunlight into heat, laid over shallow breeding channels. Astrophage in the channels absorbs the heat, and with carbon dioxide piped across it, divides. Each pass roughly doubles the stock.</p>
            <ul>
                <li><b>Algeria:</b> primary collector array</li>
                <li><b>Libya:</b> thermal transfer field</li>
                <li><b>Chad:</b> cultivation and breeding site</li>
            </ul>
            <blockquote>The Sahara is sitting there giving away more energy every hour than we generate in a year. All we had to do was build the plants.<cite>Director E. Stratt, infrastructure committee</cite></blockquote>

            <h2>3. Construction phases</h2>
            <table>
                <thead><tr><th>Phase</th><th>Works</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>01</td><td>Land survey (23,441 km² first tranche)</td><td class="good">Complete</td></tr>
                    <tr><td>02</td><td>Grid foundations</td><td class="good">Complete</td></tr>
                    <tr><td>03</td><td>Black panel deployment</td><td>In progress</td></tr>
                    <tr><td>04</td><td>Astrophage seeding</td><td>Scheduled</td></tr>
                    <tr><td>05</td><td>Full-rate breeding</td><td>Scheduled</td></tr>
                </tbody>
            </table>

            <h2>4. Ethical review</h2>
            <p>The objections are reproduced in the terms in which they were submitted.</p>
            <table>
                <thead><tr><th>Objection</th><th>Raised by</th><th>Disposition</th></tr></thead>
                <tbody>
                    <tr><td>Environmental disruption at continental scale</td><td>3 states</td><td class="bad">Acknowledged, unmitigated</td></tr>
                    <tr><td>Land sovereignty over survey areas</td><td>5 states</td><td>Resolved by treaty</td></tr>
                    <tr><td>Long-term control of what is built</td><td>4 states</td><td>Resolved by treaty</td></tr>
                    <tr><td>Displacement of pastoral populations</td><td>2 states</td><td class="bad">Compensation only</td></tr>
                </tbody>
            </table>
            <p>Under the settlement, host nations take permanent ownership of all infrastructure when emergency operations end. The Task Force keeps operational control for the duration of the emergency and no longer.</p>
            <p>The review board notes that paving a desert this size will change rainfall across a continent, and that no member of the board was able to propose an alternative.</p>`,
        foot: ['PTF-INF/143', 'Ethical review concluded with conditions attached', '4']
    })
};

/* ---------- Hail Mary briefing ---------- */

DOCS.hailmary = {
    html: KIT.memo({
        cls: 'PRIORITY OMEGA — RELEASED TO ALL MEMBER STATES',
        org: 'Petrova Task Force &nbsp;·&nbsp; Office of the Director',
        ref: 'PTF-170 / MIS-0001',
        to: 'Heads of government, 42 contributing states',
        from: 'E. Stratt, Director',
        date: 'T−3.0 yr',
        re: 'Project Hail Mary: approved mission briefing',
        body: `
            <h2>1. Objective</h2>
            <p>Every star within range of our instruments shows a Petrova signature and is dimming. One does not. Tau Ceti, 11.9 light-years away, is surrounded by Astrophage and is as bright as it has always been. The mission exists to find out why and to send the answer home.</p>

            <h2>2. Propagation survey</h2>
            <table>
                <thead><tr><th>System</th><th>Distance</th><th>Petrova signature</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Sol</td><td>—</td><td>Present</td><td>Infected</td></tr>
                    <tr><td>WISE 0855−0714</td><td>7.5 ly</td><td>Present</td><td>Infected</td></tr>
                    <tr><td>Sirius</td><td>8.6 ly</td><td>Present</td><td>Infected</td></tr>
                    <tr><td>Epsilon Eridani</td><td>10.5 ly</td><td>Present</td><td>Infected</td></tr>
                    <tr><td><b>Tau Ceti</b></td><td><b>11.9 ly</b></td><td><b>Present</b></td><td><b>Not dimming</b></td></tr>
                </tbody>
            </table>
            <p>Either Tau Ceti has developed a resistance, or something in that system keeps Astrophage in check. Both possibilities are worth the trip.</p>

            <h2>3. Vessel and transit</h2>
            <p>One ship, the <i>Hail Mary</i>, fuelled entirely by Astrophage and assembled in low Earth orbit. It accelerates continuously to near the speed of light.</p>
            <table>
                <thead><tr><th>Earth time</th><th>Event</th></tr></thead>
                <tbody>
                    <tr><td>T+0</td><td>Departure burn. Crew in induced coma for the whole transit.</td></tr>
                    <tr><td>T+6 yr</td><td>Midpoint. Ship turns and begins to slow.</td></tr>
                    <tr><td>T+13 yr</td><td>Arrival at Tau Ceti. Crew revived. Science programme begins.</td></tr>
                    <tr><td>T+26 yr</td><td>Earliest date findings can reach Earth.</td></tr>
                </tbody>
            </table>
            <p>For the crew, travelling that fast, the outbound trip will last a little under four years.</p>

            <h2>4. Return</h2>
            <p>There is none. Carrying fuel to come back would quadruple the fuel needed to leave, and we cannot breed that much in the time we have. The ship carries four small unmanned probes that can make the journey home with data and samples. The crew cannot. Each of them will be told this before they are asked.</p>

            <h2>5. Crew</h2>
            <ol>
                <li><b>Commander and pilot.</b> Navigation and mission command.</li>
                <li><b>Engineer.</b> Keeps the ship alive, and repairs it when it is not.</li>
                <li><b>Science specialist.</b> Astrophage expert and primary research authority.</li>
            </ol>
            <p>A human body does not survive four years in a coma unless it carries a rare set of genes. Roughly one person in seven thousand does. Crew will be chosen from that group and no other.</p>

            <h2>6. The objection on record</h2>
            <p>Our own models place half of humanity dead at about nineteen years. The earliest an answer can return is twenty-six. This mission was approved in the knowledge that its findings may arrive after half the people it was meant to save are gone. No faster alternative that obeys physics was submitted.</p>
            <p><i>We do not get to choose between good options. We choose between extinction with an answer and extinction without one.</i></p>`,
        sign: 'E. Stratt',
        role: 'Director, Petrova Task Force<br>Approved jointly by 42 contributing states'
    })
};

/* ---------- Antarctica ---------- */

DOCS.antarctica = {
    html: KIT.report({
        org: 'Petrova Task Force &nbsp;·&nbsp; Directorate of Climate Intervention',
        title: 'Operation Winterfall: Antarctic Methane Release',
        sub: 'Authorisation, costing and field record &nbsp;·&nbsp; T−2.0 yr',
        body: `
            <h2>1. Basis for authorisation</h2>
            ${KIT.hs('1.1', 'Half of humanity is projected to die about seven years before the Hail Mary can report. The probability that civil order fails before launch is put at greater than 81%.')}
            ${KIT.hs('1.2', 'Winterfall does not solve the problem. It holds the planet stable long enough to leave it, and delays the worst of the cooling by three to five years.')}
            ${KIT.hs('1.3', 'The intervention cannot be reversed. It was authorised by the Director alone.')}

            <h2>2. Method</h2>
            <p>Nuclear charges are buried along a prepared line in the western ice shelf and fired together. The shelf cleaves at the line, drifts seaward over successive seasons and melts, releasing the methane trapped beneath it. Methane is a powerful greenhouse gas that lasts about a decade in the atmosphere. Here it is used on purpose, as a blanket, to offset falling sunlight.</p>
            <p>Sea level rises about one centimetre in the first month.</p>
            <blockquote>For the next ten years, methane is on our side.<cite>Director E. Stratt, authorisation minute</cite></blockquote>

            <div class="two">
                <figure><img src="assets/ice.png" alt=""><figcaption>Western shelf before the operation.</figcaption></figure>
                <figure><img src="assets/ocean.png" alt=""><figcaption>Ocean temperature monitoring, southern approaches.</figcaption></figure>
            </div>

            <h2>3. Costing</h2>
            <table>
                <thead><tr><th>Expected benefit</th><th>Expected cost</th></tr></thead>
                <tbody>
                    <tr><td>Three to five more years of harvests</td><td class="bad">Destruction of the western shelf biome</td></tr>
                    <tr><td>Delayed collapse of the biosphere</td><td class="bad">Hyperstorms in the southern ocean basins</td></tr>
                    <tr><td>Launch infrastructure preserved</td><td class="bad">Jet stream failure within two seasons</td></tr>
                    <tr><td>Hail Mary data return inside the survival window</td><td class="bad">Coastal flooding worldwide, accelerating</td></tr>
                </tbody>
            </table>
            <p>The fall in ocean temperature alone may set off further ecological failures that this directorate cannot model.</p>

            <h2>4. Operations log (extract)</h2>
            <table>
                <thead><tr><th>Day</th><th>Entry</th></tr></thead>
                <tbody>
                    <tr><td>D−14</td><td>Naval exclusion zone active to 400 km. Enforcement delegated.</td></tr>
                    <tr><td>D−09</td><td>Antarctic research stations evacuated. 340 personnel withdrawn.</td></tr>
                    <tr><td>D−04</td><td>Civilian shipping diverted from southern approaches.</td></tr>
                    <tr><td>D−01</td><td>Detonation synchronisation confirmed across all emplacements.</td></tr>
                    <tr><td>D+00</td><td>Charges fired. Fracture propagating along axis A–A.</td></tr>
                </tbody>
            </table>

            <h2>5. Concluding assessment</h2>
            <p>This buys time. Time is the only resource left that can still be manufactured, and it is being manufactured at the cost of a continent.</p>`,
        foot: ['PTF-CLI/198', 'Sole authority: E. Stratt, Director', '6']
    })
};
