/* ============================================================
   DOCUMENTS, PART 2 — CREW SELECTION TO THE RESOURCE WARS
   T−1.0 yr to T+1.5 yr
   ============================================================ */

/* ---------- Crew records ---------- */

(() => {
    const sheet = (o) => KIT.form({
        org: ['Petrova Task Force &nbsp;·&nbsp; Project Hail Mary', 'Office of Crew Selection'],
        title: 'Crew Member Record',
        no: ['FORM HM-12 (REV. B)', 'FILE NO. ' + o.file, 'PRIMARY CREW ' + o.n + ' OF 3'],
        body:
            KIT.cell(5, '1. Name (last, first)', o.name) +
            KIT.cell(4, '2. Crew position', o.pos) +
            KIT.photo(o.img, '3. Photograph') +
            KIT.cell(5, '4. Nationality', o.nat) +
            KIT.cell(4, '5. Assigned', 'T−742 DAYS') +
            KIT.cell(9, '6. Service background', o.service) +
            KIT.cell(9, '7. Authority aboard', o.auth) +
            KIT.cell(3, '8. Flight hours', o.hours) +
            KIT.cell(3, '9. EVA qualification', o.eva) +
            KIT.cell(3, '10. Coma-resistance marker', 'POSITIVE') +
            KIT.cell(3, '11. Basis of assignment', KIT.check(['Volunteer', 'Directed'], 'Volunteer'), 'raw') +
            KIT.band('Part B — Selection board findings') +
            KIT.cell(12, '', o.findings, 'narr') +
            KIT.band('Part C — Board note') +
            KIT.cell(8, '12. Summary', o.note, 'narr') +
            KIT.cell(4, '13. Approved by (director)', 'E. Stratt', 'hand') +
            (o.extra || ''),
        foot: ['HM-12 (Rev. B) &nbsp; Standing Order 4-A applies: primary and reserve crew are never to share a location before launch', 'Handle as crew-confidential']
    });

    DOCS.crew = {
        html:
            sheet({
                n: 1, file: 'HM-004-A', name: 'YAO, LI-JIE', pos: 'COMMANDER / PILOT', nat: 'CHINA', img: 'assets/yao.jpg',
                service: 'PLA AIR FORCE PILOT; LONG-DURATION ORBITAL FLIGHT',
                auth: 'MISSION COMMAND. FINAL DECISION ON ALL FLIGHT OPERATIONS.',
                hours: '6,200+', eva: 'CURRENT',
                findings: `Across 340 hours of failure-mode simulation, subject's measured physiological response never left baseline. The board ran the series a second time because it did not believe the first result. The second result was the same.`,
                note: `Reliable to a fault. Recommended without reservation.`
            }) +
            sheet({
                n: 2, file: 'HM-004-B', name: 'ILYUKHINA, OLESYA', pos: 'ENGINEER', nat: 'RUSSIA', img: 'assets/ily.jpg',
                service: 'COSMONAUT; NUCLEAR SYSTEMS ENGINEER, CLOSED-LOOP LIFE SUPPORT',
                auth: 'PRIMARY ENGINEERING AUTHORITY ABOARD THE VESSEL.',
                hours: '2,900', eva: 'CURRENT',
                findings: `Ranked first of the entire candidate pool in survival adaptation testing. In integrated simulation, subject recovered the vessel from four cascading propulsion and life-support failures that the exercise designers had built to be unrecoverable.`,
                note: `Blunt in manner, exact in method. The combination is not a defect.`
            }) +
            sheet({
                n: 3, file: 'HM-004-C', name: 'DUBOIS, MARTIN', pos: 'SCIENCE (PRIMARY)', nat: 'FRANCE', img: 'assets/dubois.jpg',
                service: 'ESA MISSION SPECIALIST; ASTROPHAGE PROGRAMME SINCE FIRST SAMPLE DISTRIBUTION',
                auth: 'ALL BIOLOGICAL ANALYSIS AND SAMPLE RETRIEVAL AT TAU CETI.',
                hours: '1,150', eva: 'CURRENT',
                findings: `Contributed to early containment methodology and metabolic analysis of Astrophage. Has asked the board, in writing, to confirm that he understands the vessel cannot return. The board confirms that he does.`,
                note: `The most scientifically adaptable candidate reviewed.`,
                extra:
                    KIT.band('Part D — Reserve crew (all remain on Earth)') +
                    KIT.table(['Name', 'Reserve for', 'Location', 'Status'], [
                        ['SHAPIRO, ANNIE', 'SCIENCE', 'BAIKONUR', 'RESERVE'],
                        ['LOKKEN', 'ENGINEER', 'DISPERSED', 'RESERVE'],
                        ['MARTINEZ', 'COMMANDER', 'DISPERSED', 'RESERVE']
                    ])
            }),
        note: `When these assignments were finalised, food rationing had already begun in several contributing countries. Two of the three primary crew were training in states under emergency rationing. Construction of the ship continued without a single day lost to conditions on the ground.`
    };
})();

/* ---------- Orbital assembly: final status ---------- */

DOCS.preparations = {
    html: KIT.memo({
        cls: 'FLIGHT READY',
        org: 'Project Hail Mary &nbsp;·&nbsp; Orbital Construction Authority',
        ref: 'HM-021 / ENG-0044',
        to: 'Director, Petrova Task Force',
        from: 'Chief of Orbital Assembly',
        date: 'T−30 days',
        re: 'Final status of the vessel',
        body: `
            <p>The <i>Hail Mary</i> is complete. Assembly in low Earth orbit took three years of continuous work by forty-two contributing states. I am certifying the vessel flight ready as of today.</p>

            <figure><img src="assets/phm.png" alt=""><figcaption>The vessel at completion, seen from an assembly tug.</figcaption></figure>

            <h2>1. The vessel</h2>
            <table>
                <thead><tr><th>Measure</th><th>International Space Station</th><th>Hail Mary</th></tr></thead>
                <tbody>
                    <tr><td>Mass at completion</td><td>about 420,000 kg</td><td>about 2,000,000 kg, mostly fuel</td></tr>
                    <tr><td>Time to assemble</td><td>about 13 years</td><td>3 years</td></tr>
                    <tr><td>Contributing states</td><td>15</td><td>42</td></tr>
                    <tr><td>Crew</td><td>6 to 7</td><td>3</td></tr>
                </tbody>
            </table>

            <h2>2. Construction</h2>
            <ol>
                <li><b>Year one.</b> Orbital framework; first pressurised sections delivered.</li>
                <li><b>Year two.</b> Fuel bays and the spin habitat installed and pressure-tested.</li>
                <li><b>Year three.</b> Astrophage drives integrated; first static firing; final verification.</li>
            </ol>

            <h2>3. Faults found in final testing</h2>
            <p>ESA astronauts lived aboard through the last test phase. Integrated simulation turned up 509 individual faults.</p>
            <table>
                <thead><tr><th>Fault class</th><th>Count</th><th>Disposition</th></tr></thead>
                <tbody>
                    <tr><td>Navigation synchronisation</td><td>140</td><td>Closed</td></tr>
                    <tr><td>Cryogenic inconsistency</td><td>118</td><td>Closed</td></tr>
                    <tr><td>Spin-gravity calibration drift</td><td>94</td><td>Accepted, within tolerance</td></tr>
                    <tr><td>Radiation shielding anomaly</td><td>81</td><td>Accepted, monitored</td></tr>
                    <tr><td>Astrophage containment fluctuation</td><td>76</td><td>Closed</td></tr>
                </tbody>
            </table>
            <p>None is mission-ending. You should know that two classes, 175 faults in all, were closed by accepting the fault. We do not have the months it would take to correct them.</p>

            <h2>4. Cost</h2>
            <p>The public tracking agencies stopped calculating a total after their estimates passed ten trillion US dollars. Their stated reason was that the figure had stopped being an economic quantity. I have nothing to add to that.</p>

            <h2>5. Conditions on the ground during assembly</h2>
            <ul>
                <li>Food rationing now in force in 31 countries.</li>
                <li>Severe weather more frequent and more violent than the models projected.</li>
                <li>Coastal evacuations continuing since Winterfall.</li>
                <li>Most major governments in continuous emergency session.</li>
            </ul>
            <p>The schedule did not slip by a day. I do not fully understand how.</p>`,
        sign: 'This is happening.',
        role: 'Handwritten on the Director\'s copy'
    })
};

/* ---------- Baikonur explosion ---------- */

DOCS.disaster = {
    html: KIT.form({
        org: ['Petrova Task Force', 'Baikonur Research Centre &nbsp;·&nbsp; Site Safety Office'],
        title: 'Incident Report',
        no: ['FORM PTF-IR-1', 'REPORT NO. PTF-233', 'STATUS: DECLASSIFIED'],
        body:
            KIT.cell(3, '1. Date of incident', 'T−9 DAYS') +
            KIT.cell(3, '2. Time (local)', '04:12') +
            KIT.cell(6, '3. Location', 'LABORATORY SECTOR C, BAIKONUR RESEARCH CENTRE') +
            KIT.cell(8, '4. Type of incident (mark all that apply)',
                KIT.check(['Explosion', 'Fire', 'Containment failure', 'Structural collapse', 'Injury', 'Fatality', 'Near miss'],
                          ['Explosion', 'Fire', 'Containment failure', 'Structural collapse', 'Injury', 'Fatality']), 'raw') +
            KIT.cell(4, '5. Severity', 'CATASTROPHIC', 'red') +
            KIT.cell(8, '6. Activity in progress', 'LIVE ASTROPHAGE TESTING; GENERATOR CONTAINMENT CALIBRATION') +
            KIT.cell(4, '7. Officer in charge', 'DUBOIS, M.') +

            KIT.band('Part A — Description of incident') +
            KIT.cell(12, '', `At approximately 04:12 local time, an Astrophage containment experiment conducted within Laboratory Sector C resulted in a catastrophic energy release event. The explosion caused total destruction of the eastern laboratory wing and severe structural collapse beyond it. Subsequent fires continued for several hours.`, 'narr') +

            KIT.band('Part B — Persons affected') +
            KIT.table(['Name', 'Post', 'Location at time', 'Outcome'], [
                ['DUBOIS, MARTIN', 'First science officer, Hail Mary', 'Inside Sector C, overseeing live test', '!KILLED IN INITIAL BLAST'],
                ['SHAPIRO, ANNIE', 'Alternate science officer, Hail Mary', 'Inside Sector C, assisting calibration', '!KILLED IN INITIAL BLAST'],
                ['DAVIS, JAMIE', 'Physical science technician', 'East wing', '!RESCUED; DIED BEFORE TRANSPORT'],
                ['WANG, [REDACTED]', 'Junior laboratory assistant', 'East wing', '!TRAUMATIC BRAIN INJURY; COMATOSE'],
                ['13 OTHERS', 'Laboratory staff, support staff, emergency responders', 'Various', '!KILLED']
            ]) +

            KIT.band('Part C — Cause') +
            KIT.cell(4, '8. Quantity expected', '1 NANOGRAM') +
            KIT.cell(4, '9. Quantity supplied', '1 MILLIGRAM', 'red') +
            KIT.cell(4, '10. Discrepancy', '× 1,000,000', 'red') +
            KIT.cell(12, '11. Finding', `Energy release exceeded all containment limits. The two quantities cannot be told apart by eye and were issued in identical containers. The presence of both the first and the alternate science officer in one room was a breach of Standing Order 4-A.`, 'narr') +

            KIT.band('Part D — Emergency response') +
            KIT.cell(12, '', `Firefighters battled the blaze on multiple fronts within the communications and laboratory sectors. Several injured personnel were unable to be evacuated through the western corridor due to structural collapse. Emergency triage zones were established externally under active fire conditions.`, 'narr') +

            KIT.band('Part E — Photographs') +
            KIT.pic(6, 'Photo 1. Sector C from the access road', 'assets/explode4.png') +
            KIT.pic(6, 'Photo 2. East wing, structural survey', 'assets/explode3.png') +

            KIT.band('Part F — Mission impact') +
            KIT.cell(3, '12. Primary science team', 'LOST', 'red') +
            KIT.cell(3, '13. Launch window', '9 DAYS') +
            KIT.cell(3, '14. Mission delay estimate', 'MONTHS') +
            KIT.cell(3, '15. Human survival window', 'INSUFFICIENT', 'red') +
            `<div class="c c8"><label>16. Final Task Force directive (issued 04:51)</label><div class="hand big">Hail Mary launches in nine days.<br>Find another scientist.</div></div>` +
            KIT.cell(4, '17. Report filed by', 'NOWAK, K.<br>BOARD OF INQUIRY'),
        foot: ['PTF-IR-1 &nbsp; Inquiry closed', 'Page 1 of 1']
    })
};

/* ---------- Grace personnel file ---------- */

DOCS.grace = {
    html: KIT.form({
        org: ['Petrova Task Force &nbsp;·&nbsp; Project Hail Mary', 'Office of Crew Selection'],
        title: 'Crew Member Record',
        no: ['FORM HM-12 (REV. C)', 'FILE NO. HM-030', 'PAGE 1 OF 3'],
        body:
            KIT.cell(5, '1. Name (last, first)', 'GRACE, RYLAND') +
            KIT.cell(4, '2. Crew position', 'SCIENCE (PRIMARY)') +
            KIT.photo('assets/images-1.jpeg', '3. Photograph') +
            KIT.cell(5, '4. Nationality', 'UNITED STATES') +
            KIT.cell(4, '5. File current at', 'T−48 HOURS') +
            KIT.cell(9, '6. Education', 'PH.D., MOLECULAR BIOLOGY') +
            KIT.cell(9, '7. Occupation at recruitment', 'SCIENCE TEACHER, MIDDLE SCHOOL, SAN FRANCISCO') +
            KIT.cell(3, '8. Flight hours', '0', 'red') +
            KIT.cell(3, '9. EVA qualification', 'NONE', 'red') +
            KIT.cell(3, '10. Coma-resistance marker', 'POSITIVE') +
            KIT.cell(3, '11. Basis of assignment', KIT.check(['Volunteer', 'Directed'], 'Volunteer'), 'raw') +
            KIT.band('Part B — Circumstances of assignment') +
            `<div class="c c12 partb">
                <div class="narr">Primary and reserve science crew killed at Baikonur, T−9 days. No remaining candidate combines coma resistance with working knowledge of Astrophage. Subject has both: first to characterise the organism, originator of its name, and at the Director's side through most of the vessel's design. Subject has no astronaut training. Coma induction to be performed before ascent, at subject's request, on the stated ground that he would panic during launch. Cdr. Yao and Eng. Ilyukhina to secure subject in his medical bed on reaching orbit.</div>
                <div class="margin">There is no alternative.<br>He goes. — ES</div>
            </div>` +
            KIT.band('Part C — Reviewer\'s assessment') +
            KIT.cell(8, '12. Summary', `Exceptional subject knowledge. Adaptive under pressure. Psychological suitability NOT established; concerns recorded and not resolved. Recommend against, absent alternative.`, 'narr') +
            KIT.cell(4, '13. Approved by (director)', 'E. Stratt', 'hand') +
            `<div class="sealed">
                <p><b>ANNEX D — SEALED.</b> Deposition of the Director concerning box 11. Closed at filing. Released 32 years later under the Historical Integrity Act.</p>
                <button type="button" onclick="revealDoc(this)">Open annex</button>
            </div>
            <div class="annex">
                <div class="stampline">Unsealed T+32 yr</div>
                <h3>Annex D — Basis of assignment, corrected</h3>
                <div class="sub">Extract from the deposition of E. Stratt, former Director, with the reviewing board's summary.</div>
                <p>Box 11 of this record states that the subject volunteered. That entry is false and was known to be false when it was typed.</p>
                <p>Asked to take the place of the dead science crew, Dr. Grace refused. The Director's review found no other candidate with a comparable chance of completing the mission. Under emergency authority she ordered him aboard.</p>
                <p>SEQUENCE, AS ESTABLISHED:<br>
                01 &nbsp; Subject sedated under medical supervision. Consent: ABSENT.<br>
                02 &nbsp; Subject moved to launch containment. Consent: ABSENT.<br>
                03 &nbsp; Revival pharmacy amended to include a retrograde amnesia agent, so that subject would wake without memory of having refused. Consent: ABSENT.<br>
                04 &nbsp; Launch proceeded on schedule.</p>
                <p class="qa">Q. &nbsp;Was Dr. Grace's consent obtained at any point?</p>
                <p class="qa">A. &nbsp;No. I needed him more than he needed a choice.</p>
                <p class="qa">Q. &nbsp;Would you make the same decision again?</p>
                <p class="qa">A. &nbsp;Immediately.</p>
                <p>FINDING OF THE REVIEWING BOARD: The order was a grave violation of one man's autonomy. It was also directly connected to the survival of the species. The board records both facts and declines to rank them. No further charge is laid.</p>
            </div>`,
        foot: ['HM-12 (Rev. C) &nbsp; Previous editions obsolete', 'Handle as crew-confidential']
    })
};

/* ---------- Launch day ---------- */

DOCS.launch = {
    html: KIT.loop({
        head: ['HAIL MARY FLIGHT CONTROL', 'DEPARTURE BURN', 'TAPE 01 / PAGE 1 OF 1'],
        sub: ['T−02:15:00', 'LOW EARTH ORBIT', 'FLIGHT LOOP + POOL'],
        rows: [
            ['T−02:15:00', 'POOL', `Good evening from every network at once. Emergency generators in eleven countries are running tonight for no purpose other than to keep this broadcast on the air.`],
            ['T−01:03:10', 'POOL', `The orbital cameras have the ship now, above the night side. You are looking at the most expensive object human beings have ever built.`],
            ['T−00:48:20', 'FLIGHT', `Hail Mary, Flight. Comm check. Commander Yao.`],
            ['T−00:48:26', 'YAO', `Reading you clear.`],
            ['T−00:47:02', 'FLIGHT', `Engineer Ilyukhina.`],
            ['T−00:47:05', 'ILYUKHINA', `Still here.`],
            ['note', 'Dr. Grace entered induced coma earlier in the day. He is aboard and secured and does not appear on the loop.'],
            ['T−00:39:08', 'POOL', `The third member of the crew, Dr. Ryland Grace, joined the mission within days of the accident at Baikonur. Officials describe him as a volunteer. Many people are tonight calling him one of the bravest human beings who ever lived.`],
            ['T−00:11:03', 'POOL', `Church bells across Europe. Crowds in New York, Paris, Lagos, Tokyo, São Paulo. In several cities the street lights have been switched off so people can see the sky.`],
            ['T−00:01:00', 'FLIGHT', `One minute to ignition. All stations go.`],
            ['T−00:00:30', 'YAO', `See you at Tau Ceti.`],
            ['note', 'Last voice transmission from the crew.'],
            ['T+00:00:00', 'PROP', `Ignition. Astrophage drives at full output.`],
            ['T+00:04:12', 'GNC', `Trajectory lock. Acceleration stable, bearing Tau Ceti.`],
            ['T+00:06:40', 'POOL', `There it goes. We have left for the stars.`],
            ['los', 'CREW COMA INDUCTION COMPLETE T+02:40:00']
        ],
        foot: ['HM-040 / TSC-0044', 'END OF TAPE']
    }),
    note: `An estimated 4.2 billion people watched live. The description of Dr. Grace as a volunteer was the official account at the time. See his crew record, Annex D.`
};

/* ---------- Stratt tribunal ---------- */

DOCS.stratt = {
    html: KIT.court({
        top: 'Trial Hearing (Open Session)',
        cap: 'UN Special Tribunal &nbsp; Case No. ST-01/04 &nbsp; Witness: STRATT, Eva',
        ref: 'ST-01/04-T-3-ENG',
        firstPage: 41,
        times: ['(2.04 p.m.)', '(2.16 p.m.)', '(2.22 p.m.)'],
        front: `THE PROSECUTOR v. EVA STRATT

INDICTMENT, AS READ ON DAY 1

Count I     Environmental crimes. Deliberate destruction of
            the Antarctic ice shelf; atmospheric methane
            release.
Count II    Unlawful military action. Direction of naval
            operations without sovereign authorisation.
Count III   Forced conscription of scientific personnel.
Count IV    Seizure of private aerospace, industrial and
            transport assets.
Count V     Emergency detention and forced compliance.
Count VI    Compelled restructuring of national industry
            in eleven states.
Count VII   Violation of civil aviation and maritime
            sovereignty.
Count VIII  SEALED.

The accused has declined counsel. The accused has
entered no plea in mitigation on any count.

Basis of jurisdiction: the instrument establishing the
Petrova Task Force set no expiry other than mission
departure. Immunity lapsed at ignition. The warrant was
executed 118 days later.`,
        speeches: [
            `PRESIDING JUDGE: The witness is reminded that she remains under solemn declaration. Madam Prosecutor.`,
            `MS. ADEYEMI: Thank you, Mr. President.`,
            `Q. Ms. Stratt, do you deny responsibility for the destruction of the Antarctic ice shelf?`,
            `A. No.`,
            `Q. Do you deny authorising military operations inside sovereign territory without consent?`,
            `A. No.`,
            `Q. Do you deny coercing scientists and governments under threat of imprisonment?`,
            `A. No.`,
            `Q. Then on your own evidence you knowingly committed crimes on a global scale.`,
            `A. Yes.`,
            `Q. Do you feel remorse?`,
            `A. No.`,
            `Q. Why not?`,
            `A. Because the ship launched.`,
            `(Pause in the proceedings)`,
            `THE WITNESS: You think people obey laws when extinction is coming. You think nations cooperate because they are good. They cooperated because they were afraid, and I was the thing available to be afraid of.`,
            `MS. ADEYEMI:`,
            `Q. Millions of people suffered because of your decisions.`,
            `A. Billions would have died without them.`,
            `Q. You believe your actions were justified.`,
            `A. I believe humanity is still alive.`,
            `Q. That is not an answer to the question.`,
            `A. It is the only one that matters. Someone had to take responsibility for getting that ship off the ground. So, yes. I stole. I threatened. I destroyed a continent's worth of ice. I made governments work together at gunpoint. If it gives the mission even the smallest additional chance, I would do every one of those things again.`,
            `PRESIDING JUDGE: Does the accused wish to put any question to herself, since she has no counsel to do so?`,
            `THE WITNESS: No, Mr. President. I wrote the clause that brought me here. I knew what it said.`,
            `PRESIDING JUDGE: The Chamber notes for the record that in its experience it has not before conducted a trial in which the defence disputed no fact whatsoever. We will rise.`,
            `(The hearing adjourns at 2.31 p.m.)`
        ]
    }),
    note: `Sentence: life imprisonment, parole denied. It was served for twenty-six years, until the week four objects were detected inbound from Tau Ceti.`
};

/* ---------- Resource wars ---------- */

DOCS.wars = {
    html: KIT.report({
        org: 'United Earth Resource Observation Network',
        title: 'Global Resource Conflict Assessment',
        sub: 'Eighteen months after departure &nbsp;·&nbsp; T+1.5 yr',
        body: `
            <h2>A. Headline statements</h2>
            ${KIT.hs('A.1', 'Solar output is down 0.6%. That alone does not explain what is happening. The conflicts recorded here are driven by what people expect, and by the side effects of the measures taken to get the ship built.')}
            ${KIT.hs('A.2', 'Sixty-three states are rationing food. Most major exporters have closed their borders to grain. World trade in staple crops has fallen by more than half.')}
            ${KIT.hs('A.3', 'There are 114 active conflict zones. Twenty-seven are wars between states.')}
            ${KIT.hs('A.4', 'The cooperation that built the Hail Mary has not survived its departure by two years.')}

            <h2>B. Indicators</h2>
            <table>
                <thead><tr><th>Indicator</th><th class="r">At launch</th><th class="r">Now</th></tr></thead>
                <tbody>
                    <tr><td>Global harvest, against pre-crisis baseline</td><td class="r">96%</td><td class="r bad">88%</td></tr>
                    <tr><td>People displaced</td><td class="r">90 million</td><td class="r bad">310 million</td></tr>
                    <tr><td>States rationing food</td><td class="r">31</td><td class="r bad">63</td></tr>
                    <tr><td>States with grain reserves under 60 days</td><td class="r">4</td><td class="r bad">19</td></tr>
                    <tr><td>Active conflict zones</td><td class="r">22</td><td class="r bad">114</td></tr>
                </tbody>
            </table>
            <p>Most of the lost harvest so far is due to weather. The Antarctic methane release has done what it was meant to do, which is hold temperatures up, and what it was known it would do, which is break the jet stream.</p>

            <figure class="ph">
                <img src="assets/cars.png" alt="">
                <figcaption>A displacement corridor in the northern grain belt.</figcaption>
            </figure>

            <h2>C. Flashpoints</h2>
            <table>
                <thead><tr><th>Region</th><th>Character</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Northern India</td><td>Food riots; border conflict</td><td class="bad">Active</td></tr>
                    <tr><td>Siberia</td><td>Occupation of land expected to stay arable</td><td class="bad">Active</td></tr>
                    <tr><td>Canadian grain belt</td><td>Ration zones enforced by the military</td><td>Contained</td></tr>
                    <tr><td>Mediterranean</td><td>Desalination infrastructure failing</td><td class="bad">Failing</td></tr>
                    <tr><td>South America</td><td>Freshwater disputes escalating</td><td class="bad">Active</td></tr>
                    <tr><td>North Atlantic</td><td>Shipping lanes unsafe</td><td>Degraded</td></tr>
                    <tr><td>Sahara</td><td>Host states contesting control of the idle panel fields</td><td class="bad">Active</td></tr>
                </tbody>
            </table>

            <h2>D. Governance</h2>
            <p>Several governments have dissolved since departure. Those with armies are turning them inward. Northern fisheries are close to collapse, fuel shortages are interrupting what food distribution remains, and refugee movement exceeds every standing projection.</p>
            <blockquote>The thing everyone was afraid of together is now twelve light-years away and no longer visible in the sky. What is left to be afraid of is each other.<cite>Monitoring note appended to this assessment</cite></blockquote>`,
        foot: ['UERON/311', 'Trend: deteriorating', '5']
    })
};
