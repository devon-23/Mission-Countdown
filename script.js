const sections = document.querySelectorAll('.content');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.4
});

sections.forEach((section) => {
    observer.observe(section);
});

const archiveModal = document.getElementById('archive-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

const archiveEntries = {

    /* ========================================================
       001 — PETROVA CORRESPONDENCE
       ======================================================== */

    petrova: {

        title: 'ACCESSION PTF-001 — RECOVERED CORRESPONDENCE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">DECLASSIFIED</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations Bureau of Historical Records &middot; Petrova Collection</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">The Thin Red Line</h1>
                <p class="doc-sub">Private correspondence entering the record as the first written notice of the Petrova Line.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Date Recorded</span>
                <span class="val">03 APR &middot; MY &minus;13</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-001 / MAIL-0004</div>
        </div>
        <div>
            <div class="lbl">Originating Body</div>
            <div class="val">Pulkovo Observatory</div>
        </div>
        <div>
            <div class="lbl">Custody</div>
            <div class="val">Complete &mdash; Unaltered</div>
        </div>
        <div>
            <div class="lbl">Preservation</div>
            <div class="val val--gold">Stable / Encapsulated</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Archivist's Note</h3>
        </div>

        <p class="doc-lead">
            The message reproduced below was posted to a public astronomy mailing list
            of roughly four hundred subscribers. It carried no classification, no urgency
            marking, and no institutional letterhead. It was, by every formal measure,
            an ordinary request for help.
        </p>

        <p>
            Within nine days its contents had been independently verified on three continents.
            Within eleven weeks the Petrova Task Force existed. The Bureau preserves this item
            as Accession 001 not because of its authority, but because every subsequent record
            in this collection descends from it.
        </p>
    </section>

    <section class="doc-sec">

        <div class="mail">

            <div class="mail-hd">Incoming Message &mdash; SCI-LISTS Relay &mdash; Archived Copy</div>

            <div class="mail-fields">
                <div class="mail-row">
                    <div class="k">From</div>
                    <div class="v">Dr. Irina Petrova &lt;ipetrova@gaoran.ru&gt;</div>
                </div>
                <div class="mail-row">
                    <div class="k">To</div>
                    <div class="v">Astronomy Curiosities &lt;astrocurious@scilists.org&gt;</div>
                </div>
                <div class="mail-row">
                    <div class="k">Subject</div>
                    <div class="v subject">The Thin Red Line</div>
                </div>
                <div class="mail-row">
                    <div class="k">Date</div>
                    <div class="v">03 APR &middot; 02:14 UTC</div>
                </div>
                <div class="mail-row">
                    <div class="k">Recipients</div>
                    <div class="v">412 subscribers</div>
                </div>
            </div>

            <div class="mail-body">

                <p>Hello, professionals.</p>

                <p>
                    My name is Doctor Irina Petrova. I work at the Pulkovo Observatory
                    in St. Petersburg. I am writing to ask for help, because I have spent
                    two weeks trying to find my own mistake and I cannot find it.
                </p>

                <p>
                    For the past two years I have been studying infrared emissions from
                    nebulae, which required me to make very careful observations in a few
                    narrow IR bands. In the course of that work I found something odd.
                    Not in any nebula. Here, in our own solar system.
                </p>

                <div class="callout callout--gold">
                    <div class="hd">Detected</div>
                    <p>
                        A continuous infrared emission line at 25.984 microns, with no
                        measurable variance in wavelength, tracing an arc between Sol and Venus.
                    </p>
                </div>

                <p>
                    The line rises straight up from the Sun's north pole for roughly
                    37 million kilometres. From that apex it angles sharply down and away,
                    toward Venus, widening as it goes. At Venus the arc's cross-section is
                    about as wide as the planet itself.
                </p>

                <p>
                    The glow is very faint. I detected it only because I happened to be
                    using extremely sensitive equipment for an unrelated purpose. I would
                    not have found it if I had been looking for it.
                </p>

                <p>
                    To rule out an instrument fault I contacted the Atacama Observatory
                    in Chile. They observed independently, with different hardware, and
                    confirmed the same line at the same wavelength.
                </p>

                <p>
                    My first hypothesis was charged particles travelling along magnetic
                    field lines. But Venus has no magnetic field remotely strong enough
                    to account for this, and a magnetic explanation would not hold the
                    emission to a single wavelength so precisely.
                </p>

                <div class="callout callout--note">
                    <div class="hd">Question put to the list</div>
                    <p>
                        What force would bend particles toward Venus &mdash; and why would
                        those particles glow at one exact wavelength and no other?
                    </p>
                </div>

                <p>
                    Attached are my spreadsheets and several renders of the data as a
                    three-dimensional model. Any suggestions or theories would be welcome.
                    I would genuinely be relieved to be told I am wrong.
                </p>

                <div class="mail-sig">
                    &mdash; Irina Petrova
                    <span class="role">Pulkovo Observatory &middot; St. Petersburg</span>
                </div>

                <div class="mail-attach">
                    <div class="hd">Attachments carried into the record</div>
                    <ul>
                        <li><span>IR_BAND_SURVEY_FEB-MAR.xlsx</span><span>2.4 MB</span></li>
                        <li><span>ARC_RENDER_3D_01.png</span><span>860 KB</span></li>
                        <li><span>ARC_RENDER_3D_02.png</span><span>844 KB</span></li>
                        <li><span>ATACAMA_CONFIRMATION.txt</span><span>11 KB</span></li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 02</span>
            <h3>Verification Chain</h3>
        </div>

        <table class="ledger">
            <caption>Independent confirmations logged in the first thirty days</caption>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Institution</th>
                    <th>Instrument</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>D+00</td><td>Pulkovo Observatory</td><td>IR spectrometry</td><td class="gold">Original detection</td></tr>
                <tr><td>D+02</td><td>Atacama Observatory</td><td>Submillimetre array</td><td class="green">Confirmed</td></tr>
                <tr><td>D+09</td><td>Mauna Kea</td><td>Mid-IR imaging</td><td class="green">Confirmed</td></tr>
                <tr><td>D+14</td><td>ESA Deep Field Survey</td><td>Orbital IR platform</td><td class="green">Confirmed</td></tr>
                <tr><td>D+21</td><td>JAXA &mdash; Amaterasu</td><td>Solar probe telemetry</td><td class="red">Confirmed + luminosity anomaly</td></tr>
                <tr><td>D+30</td><td>Joint review board</td><td>Aggregate</td><td class="red">Phenomenon designated: Petrova Line</td></tr>
            </tbody>
        </table>
    </section>

    <div class="doc-sign">
        <div>
            <div class="lbl">Entered into the record by</div>
            <div class="name">M. Halloran</div>
            <div class="role">Registrar, Petrova Collection</div>
        </div>
        <div class="seal seal--navy">ARCHIVE<br>SEAL</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-001</span>
    </div>

</div>
`
    },

    /* ========================================================
       002 — PRESIDENTIAL ADDRESS
       ======================================================== */

    address: {

        title: 'ACCESSION PTF-014 — EMERGENCY ADDRESS TRANSCRIPT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">PUBLIC RECORD</div>

    <header class="doc-head">
        <div class="doc-agency">Executive Office &middot; Deposited with the Bureau of Historical Records</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Emergency Address<br>To The Nation</h1>
                <p class="doc-sub">The disclosure broadcast &mdash; verbatim transcript prepared from the master recording.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Recorded</span>
                <span class="val">20:42 EST &middot; MY &minus;12</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-014 / TSC-0001</div>
        </div>
        <div>
            <div class="lbl">Medium</div>
            <div class="val">National Broadcast</div>
        </div>
        <div>
            <div class="lbl">Runtime</div>
            <div class="val">00:06:41</div>
        </div>
        <div>
            <div class="lbl">Transcript Status</div>
            <div class="val val--gold">Certified Verbatim</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame">
                    <img src="assets/sun.png" alt="Solar observation plate">
                </div>
                <div class="fig-cap">
                    <span>Plate I &mdash; Sol, disclosure week</span>
                    <span class="no">#14-A01</span>
                </div>
            </div>

            <div class="stats" style="grid-template-columns:1fr;">
                <div class="stat">
                    <span class="lbl">Solar Deviation at Broadcast</span>
                    <span class="val val--red">&minus;0.34%</span>
                    <span class="sub">Below expected luminosity</span>
                    <div class="meter meter--red"><span style="width:34%"></span></div>
                </div>
                <div class="stat">
                    <span class="lbl">Estimated Audience</span>
                    <span class="val">1.4B</span>
                    <span class="sub">Simulcast in 41 languages</span>
                </div>
            </div>

            <div class="callout callout--warn" style="margin-top:20px;">
                <div class="hd">Declared this broadcast</div>
                <p>Global Scientific Emergency. Coordination of national research assets became mandatory at the close of transmission.</p>
            </div>
        </aside>

        <div class="doc-main">

            <div class="tsc">

                <div class="tsc-hd">
                    <span>Master Recording &mdash; Certified Transcript</span>
                    <span>Reel 01 / 01</span>
                </div>

                <div class="tsc-line">
                    <span class="t">00:00:04</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">My fellow citizens.</span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:00:11</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            Tonight the international scientific community has confirmed the
                            existence of a previously unknown interplanetary phenomenon. It has
                            been designated the Petrova Line.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:00:29</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            It is an infrared structure extending from the Sun toward Venus.
                            It has been verified independently by observatories on every
                            inhabited continent. I want to be direct with you about what we
                            know and about what we do not.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:00:52</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            There is no immediate danger to the public. No action is required
                            of you tonight.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">[Pause. 3 seconds.]</div>

                <div class="tsc-line">
                    <span class="t">00:01:07</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            However. Data collected by the Japanese Aerospace Exploration Agency,
                            using the Amaterasu solar probe, has revealed something that concerns
                            us deeply. The Sun's energy output is decreasing.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:01:34</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            At present that decline measures approximately one third of one
                            percent below expected levels. I am aware that this sounds like a
                            small number. I am told it is not.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:02:01</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            The rate of decline is accelerating. And the Petrova Line is
                            growing brighter in the infrared at precisely the same rate that
                            our Sun is growing dimmer.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">[Pause. 4 seconds.]</div>

                <div class="tsc-line">
                    <span class="t">00:02:28</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            Our researchers do not yet understand the mechanism. The working
                            hypothesis &mdash; and I want to be clear that it is a hypothesis &mdash;
                            is that whatever forms that line is drawing energy out of the Sun
                            and carrying it somewhere else.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:03:15</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            Effective immediately, this government is placing its scientific
                            resources under joint international coordination. An emergency task
                            force is being assembled tonight. Its findings will be made public
                            as they are confirmed, and not after.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:04:02</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">
                            I will not stand here and tell you that we understand this. We do
                            not. What I can tell you is that every capable mind on this planet
                            is now pointed at the same problem, together, for the first time in
                            our history.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">00:06:33</span>
                    <div>
                        <span class="who">The President</span>
                        <span class="said">Thank you. Good night.</span>
                    </div>
                </div>

                <div class="tsc-break">End of transmission &mdash; 20:48:41 EST</div>

            </div>

            <div class="callout callout--note">
                <div class="hd">Archivist's annotation</div>
                <p>
                    Two phrases in the delivered address do not appear in any surviving
                    draft: "and not after," and the closing paragraph in full. Speechwriting
                    files indicate both were added by hand in the final ninety minutes.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-014</span>
    </div>

</div>
`
    },

    /* ========================================================
       003 — ARCLIGHT INSERTION
       ======================================================== */

    arclight: {

        title: 'ACCESSION PTF-062 — ARCLIGHT INSERTION BROADCAST',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">FIRST CONTACT EVENT</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Project ArcLight &middot; Broadcast Archive</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">ArcLight<br>Venus Insertion</h1>
                <p class="doc-sub">The live science broadcast during which humanity observed extraterrestrial life for the first time.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Broadcast</span>
                <span class="val">MY &minus;11 &middot; 14:06 UTC</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-062 / TSC-0009</div>
        </div>
        <div>
            <div class="lbl">Source Feed</div>
            <div class="val">NASA / JPL Pool</div>
        </div>
        <div>
            <div class="lbl">Signal Delay</div>
            <div class="val">14m 32s</div>
        </div>
        <div>
            <div class="lbl">Historical Designation</div>
            <div class="val val--red">First Contact Event</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat">
                <span class="lbl">Live Audience</span>
                <span class="val">6.8B</span>
                <span class="sub">Largest simultaneous broadcast in human history</span>
            </div>
            <div class="stat">
                <span class="lbl">Magnification</span>
                <span class="val">10,000&times;</span>
                <span class="sub">Onboard biological imaging</span>
            </div>
            <div class="stat">
                <span class="lbl">Sample Temperature</span>
                <span class="val val--gold">96.415&deg;C</span>
                <span class="sub">Constant, non-varying</span>
            </div>
            <div class="stat">
                <span class="lbl">Mission Outcome</span>
                <span class="val val--green">Success</span>
                <span class="sub">Sample return achieved</span>
            </div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="doc-h4">Onboard plate archive</div>

            <div class="gallery">
                <div class="fig fig--clean">
                    <div class="fig-frame"><img src="assets/arc1.png" alt="ArcLight plate 1"></div>
                    <div class="fig-cap"><span>Approach</span><span class="no">#62-01</span></div>
                </div>
                <div class="fig fig--clean">
                    <div class="fig-frame"><img src="assets/arc2.png" alt="ArcLight plate 2"></div>
                    <div class="fig-cap"><span>Line entry</span><span class="no">#62-02</span></div>
                </div>
                <div class="fig fig--clean">
                    <div class="fig-frame"><img src="assets/arc3.png" alt="ArcLight plate 3"></div>
                    <div class="fig-cap"><span>Collection</span><span class="no">#62-03</span></div>
                </div>
                <div class="fig fig--clean">
                    <div class="fig-frame"><img src="assets/arc4.png" alt="ArcLight plate 4"></div>
                    <div class="fig-cap"><span>Microscope</span><span class="no">#62-04</span></div>
                </div>
            </div>

            <div class="plate">
                <div class="plate-hd">Insertion Geometry</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Flyby altitude</div><div class="v">2,140 km</div></div>
                        <div class="kv-row"><div class="k">Line density</div><div class="v">Extreme</div></div>
                        <div class="kv-row"><div class="k">Collection window</div><div class="v">00:00:19</div></div>
                        <div class="kv-row"><div class="k">Biological movement</div><div class="v">Confirmed</div></div>
                    </div>
                </div>
                <div class="plate-foot">Dwg. AL-114-C &mdash; not to scale.</div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Broadcast Transcript</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd">
                    <span>NASA / JPL Live Pool Feed</span>
                    <span>Segment 04 &mdash; Insertion</span>
                </div>

                <div class="tsc-line">
                    <span class="t">14:06:02</span>
                    <div>
                        <span class="who">Reporter</span>
                        <span class="said">
                            We're minutes from the flyby through the Petrova Line near Venus.
                            Doctor, what should we expect to see?
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">14:06:14</span>
                    <div>
                        <span class="who">Dr. Browne</span>
                        <span class="said">
                            The image on your screen is coming from the probe's onboard
                            microscope. It's looking at whatever ArcLight just collected.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">
                    [Feed switches to monochrome microscope image. Dark particulate matter
                    visible against a pale field.]
                </div>

                <div class="tsc-line">
                    <span class="t">14:06:41</span>
                    <div>
                        <span class="who">Reporter</span>
                        <span class="said">What are we looking at?</span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">14:06:44</span>
                    <div>
                        <span class="who">Dr. Browne</span>
                        <span class="said">
                            That's the internal microscope. Magnified ten thousand times.
                            Those dark specks are the sample.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">[4.2 seconds of silence. One particle changes position.]</div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">14:06:53</span>
                    <div>
                        <span class="who">Dr. Browne</span>
                        <span class="said">Oh my God.</span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">14:06:57</span>
                    <div>
                        <span class="who">Reporter</span>
                        <span class="said">Doctor &mdash; are those particles moving?</span>
                    </div>
                </div>

                <div class="tsc-note">[Multiple particles visibly translate across the field.]</div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">14:07:06</span>
                    <div>
                        <span class="who">Dr. Browne</span>
                        <span class="said">I'm sorry. I have to go.</span>
                    </div>
                </div>

                <div class="tsc-note">
                    [Chair audible. Doctor Browne leaves frame. Studio audio remains open
                    for a further 51 seconds before the pool feed is cut.]
                </div>

                <div class="tsc-break">Feed terminated &mdash; 14:07:58 UTC</div>

            </div>

            <div class="doc-h" style="margin-top:30px;">
                <span class="num">§ 02</span>
                <h3>Contemporaneous Response</h3>
            </div>

            <div class="kv">
                <div class="kv-row">
                    <div class="k">New York</div>
                    <div class="v">Crowds in Times Square reported to fall silent within seconds of the feed cut.</div>
                </div>
                <div class="kv-row">
                    <div class="k">Tokyo</div>
                    <div class="v">Rail delays across eleven lines; passengers stationary before platform monitors.</div>
                </div>
                <div class="kv-row">
                    <div class="k">London</div>
                    <div class="v">All scheduled programming suspended for continuous coverage.</div>
                </div>
                <div class="kv-row">
                    <div class="k">Civilian networks</div>
                    <div class="v">Largest traffic spike ever recorded; regional outages in six countries.</div>
                </div>
                <div class="kv-row">
                    <div class="k">Governments</div>
                    <div class="v">Fourteen national emergency sessions convened within fifteen minutes.</div>
                </div>
            </div>

            <div class="doc-quote">
                Historians have since fixed this transmission as the precise moment at
                which humanity learned it was not alone &mdash; a discovery delivered
                not by an announcement, but by a single particle moving four seconds
                too deliberately to be dust.
                <cite>Bureau of Historical Records &mdash; Introduction to the Petrova Collection</cite>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series III</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-062</span>
    </div>

</div>
`
    },

    /* ========================================================
       004 — STRATT APPOINTMENT
       ======================================================== */

    taskforce: {

        title: 'ACCESSION PTF-070 — APPOINTMENT RECORD: E. STRATT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">ACTIVE CLEARANCE</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations &middot; Office of the Secretary-General</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Appointment Record</h1>
                <p class="doc-sub">Instrument establishing the Petrova Task Force and vesting its directorship.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Instrument Dated</span>
                <span class="val">MY &minus;12</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-070 / PERS-0001</div>
        </div>
        <div>
            <div class="lbl">Instrument</div>
            <div class="val">Res. A/RES/EMG-1</div>
        </div>
        <div>
            <div class="lbl">Vote</div>
            <div class="val val--gold">Unanimous</div>
        </div>
        <div>
            <div class="lbl">Term</div>
            <div class="val">Until mission departure</div>
        </div>
    </section>

    <div class="pfile">

        <div class="pfile-id">
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/mugshot.webp" alt="Identification photograph, E. Stratt"></div>
                <div class="fig-cap"><span>ID plate</span><span class="no">#70-A</span></div>
            </div>

            <div class="pfile-idbox">
                <div class="row"><span class="k">File</span><span class="v">PTF-070</span></div>
                <div class="row"><span class="k">Authority</span><span class="v">International</span></div>
                <div class="row"><span class="k">Status</span><span class="v">Diplomatic immunity</span></div>
                <div class="row"><span class="k">Access</span><span class="v">Unrestricted</span></div>
                <div class="row"><span class="k">Reports to</span><span class="v">Secretary-General</span></div>
            </div>
        </div>

        <div>
            <div class="pfile-name">
                <h2>Eva Stratt</h2>
                <div class="role">Director &mdash; Petrova Task Force</div>
            </div>

            <div class="doc-h4">Service history</div>

            <div class="kv">
                <div class="kv-row">
                    <div class="k">Prior post</div>
                    <div class="v">Senior administrator, European Space Agency</div>
                </div>
                <div class="kv-row">
                    <div class="k">Specialism</div>
                    <div class="v">Coordination of multinational emergency engineering programmes</div>
                </div>
                <div class="kv-row">
                    <div class="k">Notable</div>
                    <div class="v">Directed four cross-border infrastructure recoveries; all delivered inside emergency schedule</div>
                </div>
                <div class="kv-row">
                    <div class="k">Nominated by</div>
                    <div class="v">Joint scientific delegation, 31 member states</div>
                </div>
            </div>

            <p style="margin-top:18px;">
                The appointment followed confirmation that the Petrova Line correlated with a
                measurable decline in solar luminosity. The selection board's stated criterion
                was not scientific standing but the capacity to compel cooperation between
                governments that had never previously subordinated a national programme to an
                international one.
            </p>

            <div class="callout callout--note">
                <div class="hd">Selection board minute</div>
                <p>
                    "The Directorship requires an administrator willing to be disliked.
                    The Board is satisfied that the nominee meets this requirement."
                </p>
            </div>
        </div>
    </div>

    <section class="doc-sec" style="margin-top:34px;">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Mandate</h3>
        </div>

        <ol class="doc-clauses">
            <li>
                <strong>Scientific coordination.</strong>
                Place observatories, laboratories, aerospace agencies and universities of
                participating states under a single operational structure for the duration
                of the emergency.
            </li>
            <li>
                <strong>Planetary survival.</strong>
                Prevent biosphere collapse arising from accelerated solar dimming, by any
                means the Director judges proportionate to the threat.
            </li>
            <li>
                <strong>Project ArcLight.</strong>
                Design, construct and launch a probe capable of retrieving physical samples
                from the Petrova Line in Venusian orbit.
            </li>
            <li>
                <strong>Requisition.</strong>
                Direct infrastructure, transport, manufacturing capacity and personnel from
                all participating nations as required.
            </li>
        </ol>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 02</span>
            <h3>Powers Conferred</h3>
        </div>

        <table class="ledger">
            <thead>
                <tr><th>Power</th><th>Scope</th><th>Limit</th></tr>
            </thead>
            <tbody>
                <tr><td>Diplomatic immunity</td><td>All cooperating nations</td><td class="red">None stated</td></tr>
                <tr><td>Transport priority</td><td>Global civil and military networks</td><td>Emergency traffic only</td></tr>
                <tr><td>Administrative override</td><td>National regulatory process</td><td>Petrova-related matters</td></tr>
                <tr><td>Research direction</td><td>All Petrova-related programmes</td><td class="red">None stated</td></tr>
                <tr><td>Budget</td><td>Research, transport, logistics, information</td><td class="red">Uncapped</td></tr>
            </tbody>
        </table>

        <div class="callout callout--warn">
            <div class="hd">Note on the record</div>
            <p>
                No expiry condition was written into the instrument other than mission
                departure. The omission was raised twice in committee and struck from the
                draft on both occasions. It became the central question of the tribunal
                convened four months after launch.
            </p>
        </div>
    </section>

    <div class="doc-sign">
        <div>
            <div class="lbl">Certified</div>
            <div class="name">Office of the Secretary-General</div>
            <div class="role">United Nations</div>
        </div>
        <div class="seal seal--navy">UN<br>SEAL</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series IV</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-070</span>
    </div>

</div>
`
    },

    /* ========================================================
       005 — RECRUITMENT REGISTER
       ======================================================== */

    recruitment: {

        title: 'ACCESSION PTF-088 — SCIENTIFIC RECRUITMENT REGISTER',

        body: `
<div class="doc doc--dense">

    <div class="stamp stamp-tr stamp--gold stamp--sm">CLEARANCE OMEGA</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Directorate of Scientific Personnel</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Recruitment Register</h1>
                <p class="doc-sub">Initial Astrophage analysis cadre &mdash; global clearance database, first intake.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Register Opened</span>
                <span class="val">MY &minus;11</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-088 / REG-0001</div>
        </div>
        <div>
            <div class="lbl">Clearance Tier</div>
            <div class="val val--gold">Omega</div>
        </div>
        <div>
            <div class="lbl">Authorising Officer</div>
            <div class="val">Director E. Stratt</div>
        </div>
        <div>
            <div class="lbl">Status</div>
            <div class="val">Closed &mdash; superseded</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat">
                <span class="lbl">Applicants Reviewed</span>
                <span class="val">41,882</span>
                <span class="sub">Across 87 nations</span>
            </div>
            <div class="stat">
                <span class="lbl">Selected</span>
                <span class="val val--gold">1,204</span>
                <span class="sub">2.9% of applicants</span>
            </div>
            <div class="stat">
                <span class="lbl">Nations Represented</span>
                <span class="val">87</span>
                <span class="sub">All contributing states</span>
            </div>
            <div class="stat">
                <span class="lbl">Sample Access Granted</span>
                <span class="val val--red">1</span>
                <span class="sub">By directorial order</span>
            </div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Single-Scientist Access Protocol</h3>
        </div>

        <div class="doc-cols">

            <aside>
                <div class="fig fig--portrait">
                    <div class="fig-frame"><img src="assets/ryland.png" alt="Identification photograph, R. Grace"></div>
                    <div class="fig-cap"><span>First access holder</span><span class="no">#88-A</span></div>
                </div>

                <div class="pfile-idbox">
                    <div class="row"><span class="k">Name</span><span class="v">R. Grace</span></div>
                    <div class="row"><span class="k">Field</span><span class="v">Molecular biology</span></div>
                    <div class="row"><span class="k">State</span><span class="v">United States</span></div>
                    <div class="row"><span class="k">Access</span><span class="v green">Granted</span></div>
                </div>
            </aside>

            <div class="doc-main">

                <p>
                    The Director suspended general distribution of ArcLight material pending
                    preliminary biological, chemical and radiological assessment. Access was
                    restricted to a single researcher until the organism's basic behaviour
                    was characterised.
                </p>

                <div class="doc-quote">
                    Most deadly diseases have a minimum incubation period. Until we know what
                    this is, the samples stay with one person in one room.
                    <cite>Directorial minute &mdash; sample access</cite>
                </div>

                <p>
                    Priority was assigned to Dr. Ryland Grace on the basis of published work
                    in evolutionary biology and non-standard life chemistry &mdash; specifically
                    a paper arguing that the assumption of water as a prerequisite for life had
                    been adopted without adequate justification. That paper had been poorly
                    received on publication and was, at the time of this register, the reason
                    its author held no active research post.
                </p>

                <div class="callout callout--gold">
                    <div class="hd">Directive</div>
                    <p>
                        Additional researchers receive access only upon completion of
                        preliminary characterisation. No exceptions delegated.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 02</span>
            <h3>Molecular Biology Division</h3>
        </div>

        <table class="ledger">
            <caption>Division lead: Dr. Eleanor Scyther</caption>
            <thead>
                <tr><th>Researcher</th><th>State</th><th>Submitted Work</th><th>Status</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dr. Ryland Grace</td><td>United States</td>
                    <td>Water-based assumptions and recalibration of evolutionary expectation</td>
                    <td class="gold">Sample access</td>
                </tr>
                <tr>
                    <td>Dr. Sofia Almeida</td><td>Brazil</td>
                    <td>Cellular adaptation in extreme hydrothermal environments</td>
                    <td class="green">Cleared</td>
                </tr>
                <tr>
                    <td>Dr. Ibrahim Hassan</td><td>Egypt</td>
                    <td>Metabolic stability in high-energy microorganisms</td>
                    <td class="green">Cleared</td>
                </tr>
                <tr>
                    <td>Dr. Mei Zhang</td><td>China</td>
                    <td>Synthetic evolutionary pathways in closed ecological systems</td>
                    <td class="green">Cleared</td>
                </tr>
                <tr>
                    <td>Dr. Hannah Roth</td><td>Germany</td>
                    <td>Genetic survivability under catastrophic selection pressure</td>
                    <td class="green">Cleared</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 03</span>
            <h3>Astrophysics &amp; Materials Divisions</h3>
        </div>

        <table class="ledger">
            <caption>Division leads: Dr. Viktor Petrov (astrophysics) &middot; Dr. Nadia Volkov (materials)</caption>
            <thead>
                <tr><th>Researcher</th><th>State</th><th>Division</th><th>Submitted Work</th></tr>
            </thead>
            <tbody>
                <tr><td>Dr. Lucas Hammond</td><td>United Kingdom</td><td>Astrophysics</td><td>Infrared signatures of non-stellar energy migration</td></tr>
                <tr><td>Dr. Rina Sato</td><td>Japan</td><td>Astrophysics</td><td>Gravitational modelling of interplanetary energy transfer</td></tr>
                <tr><td>Dr. Arjun Patel</td><td>India</td><td>Astrophysics</td><td>Large-scale analysis of stellar luminosity anomalies</td></tr>
                <tr><td>Dr. Pierre Laurent</td><td>France</td><td>Materials</td><td>Ultra-dense carbon structures under extreme thermal load</td></tr>
                <tr><td>Dr. Liam O'Connell</td><td>Ireland</td><td>Materials</td><td>Failure characteristics of high-energy containment systems</td></tr>
            </tbody>
        </table>
    </section>

    <div class="doc-sign">
        <div>
            <div class="lbl">Authorised</div>
            <div class="name">Eva Stratt</div>
            <div class="role">Director, Petrova Task Force</div>
        </div>
        <div class="seal">TASK<br>FORCE</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series IV</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-088</span>
    </div>

</div>
`
    },

    /* ========================================================
       006 — ASTROPHAGE CHARACTERISATION
       ======================================================== */

    astrophage: {

        title: 'ACCESSION PTF-101 — ORGANISM CHARACTERISATION REPORT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">CLASSIFICATION: EXISTENTIAL</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Biological Analysis Division</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Astrophage</h1>
                <p class="doc-sub">Characterisation of the first confirmed extraterrestrial organism, from ArcLight return material.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Report Issued</span>
                <span class="val">MY &minus;11 &middot; Rev. 4</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-101 / SCI-0012</div>
        </div>
        <div>
            <div class="lbl">Containment</div>
            <div class="val val--red">Maximum</div>
        </div>
        <div>
            <div class="lbl">Contributing Labs</div>
            <div class="val">347 across 21 states</div>
        </div>
        <div>
            <div class="lbl">Priority</div>
            <div class="val val--red">Species Survival</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/astro-ball.png" alt="Astrophage cell, reconstructed"></div>
                <div class="fig-cap"><span>Fig. 1 &mdash; Cell, reconstructed</span><span class="no">#101-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/astrophage.png" alt="Astrophage sample under magnification"></div>
                <div class="fig-cap"><span>Fig. 2 &mdash; Sample field</span><span class="no">#101-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/astro-lab.png" alt="Containment laboratory"></div>
                <div class="fig-cap"><span>Fig. 3 &mdash; Containment lab</span><span class="no">#101-03</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Plate withdrawn<br>Ref. #101-04<br>[ Restricted &mdash; Annex C ]
                </div>
                <div class="fig-cap"><span>Fig. 4 &mdash; Withdrawn</span><span class="no">#101-04</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Organism Profile</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Designation</div><div class="v">Astrophage</div></div>
                        <div class="kv-row"><div class="k">Type</div><div class="v">Extraterrestrial microorganism</div></div>
                        <div class="kv-row"><div class="k">Energy source</div><div class="v">Stellar radiation</div></div>
                        <div class="kv-row"><div class="k">Propulsion</div><div class="v">IR photon emission</div></div>
                        <div class="kv-row"><div class="k">Composition</div><div class="v">Water-dominant</div></div>
                        <div class="kv-row"><div class="k">Recovered by</div><div class="v">Project ArcLight</div></div>
                    </div>
                </div>
                <div class="plate-foot">Profile PTF-101-P &mdash; revision 4.</div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Imaging Failure</h3>
            </div>

            <div class="doc-prose">
                <p>
                    When ArcLight material reached participating laboratories, standard
                    identification protocols were applied in sequence. Every one of them
                    returned nothing. The organism absorbed or reflected essentially all
                    incident energy across the tested spectrum, yielding no internal structure.
                </p>
                <p class="noindent">
                    Researchers described the sample as behaving like a perfect black box:
                    an object that could be weighed and counted but not looked into.
                </p>
            </div>

            <table class="ledger">
                <caption>Imaging attempts &mdash; first fourteen days</caption>
                <thead>
                    <tr><th>Method</th><th>Passes</th><th>Result</th></tr>
                </thead>
                <tbody>
                    <tr><td>X-ray diffraction</td><td class="num">44</td><td class="red">No return</td></tr>
                    <tr><td>Gamma analysis</td><td class="num">17</td><td class="red">No return</td></tr>
                    <tr><td>Microwave imaging</td><td class="num">23</td><td class="red">No return</td></tr>
                    <tr><td>Visible light</td><td class="num">190+</td><td class="red">No return</td></tr>
                    <tr><td>Post-mortem sectioning</td><td class="num">1</td><td class="green">Internal structure resolved</td></tr>
                </tbody>
            </table>

            <div class="callout callout--gold">
                <div class="hd">Breakthrough</div>
                <p>
                    Structure was resolved only after a controlled sample death event.
                    A dead Astrophage stops absorbing. The first usable image of the
                    organism was therefore also the first image of one that had been killed
                    deliberately in order to be seen.
                </p>
            </div>

            <div class="doc-quote">
                It's a cell. It's a tiny alien cell.
                <cite>Dr. Ryland Grace &mdash; laboratory recording, day 14</cite>
            </div>

            <div class="doc-h" style="margin-top:30px;">
                <span class="num">§ 02</span>
                <h3>Confirmed Properties</h3>
            </div>

            <ul class="doc-list">
                <li>Emits infrared radiation at 25.984 microns &mdash; the exact Petrova frequency.</li>
                <li>Stores energy at an efficiency approaching theoretical maximum.</li>
                <li>Uses directed infrared photon emission as propulsion.</li>
                <li>Is internally almost entirely water.</li>
                <li>Migrates toward stellar bodies to feed and toward Venus to breed.</li>
            </ul>

            <p>
                Taken together these findings support a single mechanism: Astrophage absorbs
                energy directly from a star, carries that energy across interplanetary
                distance, and expends it elsewhere. The decline in solar luminosity is not a
                property of the Sun. It is a measurement of theft.
            </p>

            <div class="doc-h" style="margin-top:30px;">
                <span class="num">§ 03</span>
                <h3>Elemental Composition</h3>
            </div>

            <div class="fig fig--wide">
                <div class="fig-frame"><img src="assets/madeof.png" alt="Compositional assay plate"></div>
                <div class="fig-cap"><span>Fig. 5 &mdash; Compositional assay</span><span class="no">#101-05</span></div>
            </div>

            <table class="ledger">
                <thead><tr><th>Element</th><th>Fraction</th><th>Element</th><th>Fraction</th></tr></thead>
                <tbody>
                    <tr><td>Oxygen</td><td class="num">60.93%</td><td>Phosphorus</td><td class="num">1.08%</td></tr>
                    <tr><td>Carbon</td><td class="num">22.85%</td><td>Argon</td><td class="num">0.76%</td></tr>
                    <tr><td>Hydrogen</td><td class="num">9.84%</td><td>Sulfur</td><td class="num">0.19%</td></tr>
                    <tr><td>Nitrogen</td><td class="num">2.44%</td><td>Potassium</td><td class="num">0.19%</td></tr>
                    <tr><td>Calcium</td><td class="num">1.40%</td><td>Sodium</td><td class="num">0.14%</td></tr>
                    <tr><td>Chlorine</td><td class="num">0.13%</td><td>Magnesium</td><td class="num">0.04%</td></tr>
                </tbody>
            </table>

            <div class="callout callout--note">
                <div class="hd">Observation entered by the division</div>
                <p>
                    The profile is unremarkable. These are the same elements, in broadly the
                    same proportions, as terrestrial life. Whatever Astrophage is, it is not
                    built from anything we did not already have.
                </p>
            </div>

        </div>
    </div>

    <section class="doc-sec" style="margin-top:34px;">
        <div class="doc-h">
            <span class="num">§ 04</span>
            <h3>Attribution</h3>
        </div>

        <div class="pfile">
            <div class="pfile-id">
                <div class="fig fig--portrait">
                    <div class="fig-frame"><img src="assets/ryland-lab.png" alt="R. Grace, laboratory"></div>
                    <div class="fig-cap"><span>San Francisco</span><span class="no">#101-06</span></div>
                </div>
            </div>
            <div>
                <div class="pfile-name">
                    <h2>Dr. Ryland Grace</h2>
                    <div class="role">Molecular Biologist &mdash; Petrova Task Force</div>
                </div>
                <p>
                    Credited with the first successful biological characterisation of ArcLight
                    material and with proposing the designation "Astrophage" &mdash; star-eater &mdash;
                    which entered general scientific use within a fortnight and has never been
                    formally ratified by any naming body.
                </p>
                <p class="fine">
                    The Bureau notes that the term appears in this division's records eleven days
                    before it appears in any published paper.
                </p>
            </div>
        </div>
    </section>

    <div class="doc-sign">
        <div>
            <div class="lbl">Approved for the record</div>
            <div class="name">E. Scyther</div>
            <div class="role">Head, Biological Analysis Division</div>
        </div>
        <div class="seal seal--navy">VERIFIED</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series V</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-101</span>
    </div>

</div>
`
    },

    /* ========================================================
       007 — IMPACT PROJECTIONS
       ======================================================== */

    projections: {

        title: 'ACCESSION PTF-119 — CIVILIZATION STABILITY ANALYSIS',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">CLEARANCE OMEGA</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Earth Systems Modelling Group</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Human Impact<br>Forecast</h1>
                <p class="doc-sub">Convergent projection of civilization stability under continued solar luminosity decline.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Issued</span>
                <span class="val">MY &minus;10</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-119 / MOD-0003</div>
        </div>
        <div>
            <div class="lbl">Contributing Models</div>
            <div class="val">31 independent</div>
        </div>
        <div>
            <div class="lbl">Convergence</div>
            <div class="val val--red">Total</div>
        </div>
        <div>
            <div class="lbl">Mitigation On File</div>
            <div class="val val--red">None</div>
        </div>
    </section>

    <div class="callout callout--warn">
        <div class="hd">Finding</div>
        <p>
            Every participating climate and biosphere simulation, run independently and with
            differing assumptions, converges on large-scale collapse of human civilization.
            No submitted model returns a stable outcome.
        </p>
    </div>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat">
                <span class="lbl">Projected Mortality</span>
                <span class="val val--red">26.5%</span>
                <span class="sub">Within 30 years</span>
                <div class="meter meter--red"><span style="width:26.5%"></span></div>
            </div>
            <div class="stat">
                <span class="lbl">Extended Projection</span>
                <span class="val val--red">50%</span>
                <span class="sub">Within 40 years</span>
                <div class="meter meter--red"><span style="width:50%"></span></div>
            </div>
            <div class="stat">
                <span class="lbl">Luminosity Loss Origin</span>
                <span class="val val--gold">Non-natural</span>
                <span class="sub">Biological extraction</span>
            </div>
            <div class="stat">
                <span class="lbl">Known Mitigations</span>
                <span class="val val--red">0</span>
                <span class="sub">As of issue date</span>
            </div>
        </div>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Collapse Progression</h3>
            </div>

            <div class="tl">

                <div class="tl-item">
                    <div class="tl-when">Year 1 &ndash; 10</div>
                    <div class="tl-what">Early Instability</div>
                    <p>
                        Measurable reductions in crop efficiency. Regional climate disruption
                        begins. Food-export economies destabilise as yields fall below contract
                        volumes. Global energy demand spikes against a shrinking supply.
                    </p>
                </div>

                <div class="tl-item">
                    <div class="tl-when">Year 10 &ndash; 20</div>
                    <div class="tl-what">Systemic Failure</div>
                    <p>
                        Continental-scale crop collapse. Mass migration away from equatorial
                        regions. Global supply chains fail as shipping becomes unreliable.
                        First armed conflicts over arable land.
                    </p>
                </div>

                <div class="tl-item">
                    <div class="tl-when">Year 20 &ndash; 30</div>
                    <div class="tl-what">Global Collapse</div>
                    <p>
                        Widespread famine. International trade ceases to function. Climate
                        compensation systems exceed their design envelope and fail. Governments
                        begin restructuring or dissolve.
                    </p>
                </div>

                <div class="tl-item">
                    <div class="tl-when">Year 30 &ndash; 40</div>
                    <div class="tl-what">Termination Event</div>
                    <p>
                        Fifty percent population mortality. Infrastructure collapse. Famine and
                        epidemic disease in combination. Irreversible destabilisation of the
                        biosphere.
                    </p>
                </div>

            </div>

            <div class="doc-quote">
                We are not talking about ecosystem disruption any more. We are talking about
                civilization termination.
                <cite>Dr. Harold Kline &mdash; modelling group, oral evidence</cite>
            </div>

        </div>

        <aside>
            <div class="fig fig--wide">
                <div class="fig-frame"><img src="assets/sun2.png" alt="Solar output observation plate"></div>
                <div class="fig-cap"><span>Solar output trend</span><span class="no">#119-01</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Modelled Luminosity</div>
                <div class="plate-body">
                    <table class="ledger" style="border:0;">
                        <thead><tr><th>Horizon</th><th>Output</th></tr></thead>
                        <tbody>
                            <tr><td>Baseline</td><td class="num">100.0%</td></tr>
                            <tr><td>Year 10</td><td class="num gold">96.2%</td></tr>
                            <tr><td>Year 20</td><td class="num red">88.7%</td></tr>
                            <tr><td>Year 30</td><td class="num red">79.4%</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="plate-foot">Median of 31 submitted models.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/ice.png" alt="Cooling onset observation"></div>
                <div class="fig-cap"><span>Cooling onset</span><span class="no">#119-02</span></div>
            </div>
        </aside>
    </div>

    <div class="callout callout--warn">
        <div class="hd">Concluding statement of the group</div>
        <p>
            No known mitigation strategy exists. The Modelling Group records that it was
            not asked to identify one, and that it would not have been able to.
        </p>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series VI</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-119</span>
    </div>

</div>
`
    },

    /* ========================================================
       008 — PROJECT SAHARA
       ======================================================== */

    sahara: {

        title: 'ACCESSION PTF-143 — PROJECT SAHARA: INFRASTRUCTURE & ETHICS',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">ACTIVE CONSTRUCTION</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Directorate of Infrastructure</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Project Sahara</h1>
                <p class="doc-sub">North African solar collection and Astrophage cultivation network &mdash; construction and ethical review.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Phase Report</span>
                <span class="val">MY &minus;9</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-143 / INF-0007</div>
        </div>
        <div>
            <div class="lbl">Host States</div>
            <div class="val">Algeria &middot; Libya &middot; Chad</div>
        </div>
        <div>
            <div class="lbl">Phase</div>
            <div class="val">Ground preparation</div>
        </div>
        <div>
            <div class="lbl">Ethical Review</div>
            <div class="val val--gold">Concluded &mdash; conditions attached</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat">
                <span class="lbl">Projected Coverage</span>
                <span class="val">2.1T m&sup2;</span>
                <span class="sub">At full deployment</span>
            </div>
            <div class="stat">
                <span class="lbl">Initial Phase</span>
                <span class="val">23,441</span>
                <span class="sub">km&sup2; under survey</span>
            </div>
            <div class="stat">
                <span class="lbl">Construction Start</span>
                <span class="val val--gold">T+482</span>
                <span class="sub">Days from authorisation</span>
            </div>
            <div class="stat">
                <span class="lbl">Projected Output</span>
                <span class="val val--green">&gt;100%</span>
                <span class="sub">Of all current global production</span>
            </div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="plate">
                <div class="plate-hd">Deployment Map &mdash; North Africa</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Algeria</div><div class="v">Primary collector array</div></div>
                        <div class="kv-row"><div class="k">Libya</div><div class="v">Thermal transfer field</div></div>
                        <div class="kv-row"><div class="k">Chad</div><div class="v">Cultivation / breeding site</div></div>
                    </div>
                </div>
                <div class="plate-foot">Dwg. SAH-002-A &mdash; not to scale.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Survey plate unrecovered<br>Ref. #143-01<br>[ Original lost in transit ]
                </div>
                <div class="fig-cap"><span>Site survey</span><span class="no">#143-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/farm.png" alt="Ground preparation, cultivation site"></div>
                <div class="fig-cap"><span>Ground preparation</span><span class="no">#143-02</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Objectives</h3>
            </div>

            <ol class="doc-clauses">
                <li>Construct high-density collection arrays optimised for Astrophage energy absorption rather than photovoltaic conversion.</li>
                <li>Establish controlled breeding zones capable of cultivating Astrophage at industrial scale.</li>
                <li>Redirect harvested energy into emergency infrastructure grids serving participating states.</li>
            </ol>

            <div class="doc-quote">
                The Sahara is sitting there giving away more energy every hour than we
                generate in a year. All we had to do was build the plants.
                <cite>Director E. Stratt &mdash; infrastructure committee</cite>
            </div>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 02</span>
                <h3>Ethical Review</h3>
            </div>

            <p>
                Multiple host governments raised objections during consultation. The
                objections were recorded formally and are reproduced here in the terms
                in which they were submitted.
            </p>

            <table class="ledger">
                <thead><tr><th>Objection</th><th>Raised By</th><th>Disposition</th></tr></thead>
                <tbody>
                    <tr><td>Environmental disruption at continental scale</td><td>3 states</td><td class="gold">Acknowledged &mdash; unmitigated</td></tr>
                    <tr><td>Land sovereignty over survey areas</td><td>5 states</td><td class="green">Resolved by treaty</td></tr>
                    <tr><td>Long-term control of generated capacity</td><td>4 states</td><td class="green">Resolved by treaty</td></tr>
                    <tr><td>Displacement of pastoral populations</td><td>2 states</td><td class="red">Compensation only</td></tr>
                </tbody>
            </table>

            <div class="callout callout--gold">
                <div class="hd">Settlement</div>
                <p>
                    Agreements signed in the following quarter granted host nations permanent
                    ownership of all constructed infrastructure upon conclusion of emergency
                    operations. The Task Force retains operational control for the duration
                    of the emergency and no longer.
                </p>
            </div>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 03</span>
                <h3>Construction Phases</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Phase</th><th>Works</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>01</td><td>Land survey</td><td class="green">Complete</td></tr>
                    <tr><td>02</td><td>Grid foundations</td><td class="green">Complete</td></tr>
                    <tr><td>03</td><td>Black panel deployment</td><td class="gold">In progress</td></tr>
                    <tr><td>04</td><td>Astrophage seeding</td><td>Scheduled</td></tr>
                    <tr><td>05</td><td>Energy harvest online</td><td>Scheduled</td></tr>
                </tbody>
            </table>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series VII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-143</span>
    </div>

</div>
`
    },

    /* ========================================================
       009 — HAIL MARY MISSION BRIEFING
       ======================================================== */

    hailmary: {

        title: 'ACCESSION PTF-170 — PROJECT HAIL MARY: MISSION BRIEFING',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">PRIORITY OMEGA</div>

    <header class="doc-head">
        <div class="doc-agency">Global Space Coalition &middot; Petrova Task Force</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Project<br>Hail Mary</h1>
                <p class="doc-sub">Interstellar response mission to the Tau Ceti system &mdash; approved mission briefing.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Approved</span>
                <span class="val">MY &minus;8</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-170 / MIS-0001</div>
        </div>
        <div>
            <div class="lbl">Destination</div>
            <div class="val">Tau Ceti &mdash; 11.9 ly</div>
        </div>
        <div>
            <div class="lbl">Transit</div>
            <div class="val">~13 years each way</div>
        </div>
        <div>
            <div class="lbl">Status</div>
            <div class="val val--green">Approved</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/logo.png" alt="Mission insignia"></div>
                <div class="fig-cap"><span>Mission insignia</span><span class="no">#170-01</span></div>
            </div>

            <div class="fig">
                <div class="fig-frame"><img src="assets/design.jpg" alt="Early vessel design study"></div>
                <div class="fig-cap"><span>Early design study</span><span class="no">#170-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/tauceti.png" alt="Tau Ceti observation plate"></div>
                <div class="fig-cap"><span>Tau Ceti</span><span class="no">#170-03</span></div>
            </div>

            <p class="fine">
                Early fusion-spin habitat concepts explored artificial gravity rings,
                Astrophage containment, and long-duration cryogenic transit modules.
                None of the three surviving design studies resembles the vessel as built.
            </p>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Objective</h3>
            </div>

            <p>
                Determine why the stellar luminosity of Tau Ceti has not been affected by
                the chain of dimming observed throughout the surveyed neighbourhood. Every
                star within range shows infection. Tau Ceti does not. The mission exists to
                establish the reason.
            </p>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 02</span>
                <h3>Propagation Survey</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>System</th><th>Distance</th><th>Petrova Signature</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Sol</td><td class="num">&mdash;</td><td>Present</td><td class="red">Infected</td></tr>
                    <tr><td>WISE 0855&ndash;0714</td><td class="num">7.5 ly</td><td>Present</td><td class="red">Infected</td></tr>
                    <tr><td>Sirius</td><td class="num">8.6 ly</td><td>Present</td><td class="red">Infected</td></tr>
                    <tr><td>Epsilon Eridani</td><td class="num">10.5 ly</td><td>Present</td><td class="red">Infected</td></tr>
                    <tr><td>Tau Ceti</td><td class="num">11.9 ly</td><td>Absent</td><td class="green">Uninfected</td></tr>
                </tbody>
            </table>

            <div class="callout callout--gold">
                <div class="hd">Inference</div>
                <p>
                    No propagation source is identifiable beyond Tau Ceti. Either the
                    infection originates there and the system has developed a resistance,
                    or something in that system stops it. Both possibilities are worth
                    twenty-six years.
                </p>
            </div>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 03</span>
                <h3>Transit Schedule</h3>
            </div>

            <div class="tl">
                <div class="tl-item">
                    <div class="tl-when">T+0</div>
                    <div class="tl-what">Departure Burn</div>
                    <p>Astrophage ignition from low Earth orbit; crew in induced coma throughout acceleration.</p>
                </div>
                <div class="tl-item">
                    <div class="tl-when">T+6 years</div>
                    <div class="tl-what">Deep Interstellar Cruise</div>
                    <p>Coast phase at approximately 0.92c. No scheduled crew activity.</p>
                </div>
                <div class="tl-item">
                    <div class="tl-when">T+13 years</div>
                    <div class="tl-what">Tau Ceti Arrival</div>
                    <p>Deceleration, crew revival, and commencement of the science programme.</p>
                </div>
            </div>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 04</span>
                <h3>The Strategic Objection</h3>
            </div>

            <div class="callout callout--warn">
                <div class="hd">Recorded at approval</div>
                <p>
                    Collapse projections place fifty percent mortality at approximately
                    nineteen years. A return mission cannot deliver findings before that
                    point. The mission was approved in the explicit knowledge that its
                    answers may arrive after half of the population it was meant to save
                    is already dead.
                </p>
            </div>

            <div class="doc-quote">
                We do not get to choose between good options. We choose between extinction
                with an answer and extinction without one.
                <cite>Director E. Stratt &mdash; approval session</cite>
            </div>

            <p class="fine">
                No faster physics-compliant alternative was submitted, then or since.
            </p>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 05</span>
                <h3>Crew Requirement</h3>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Science Officer</div><div class="v">Astrophage specialist &mdash; primary research authority</div></div>
                <div class="kv-row"><div class="k">Engineer</div><div class="v">Systems survival and in-flight repair</div></div>
                <div class="kv-row"><div class="k">Pilot</div><div class="v">Interstellar navigation and mission command</div></div>
            </div>

        </div>
    </div>

    <div class="doc-sign">
        <div>
            <div class="lbl">Mission approved</div>
            <div class="name">Global Space Coalition</div>
            <div class="role">Joint approval, 42 contributing states</div>
        </div>
        <div class="seal seal--navy">APPROVED</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-170</span>
    </div>

</div>
`
    },

    /* ========================================================
       010 — OPERATION WINTERFALL
       ======================================================== */

    antarctica: {

        title: 'ACCESSION PTF-198 — OPERATION WINTERFALL',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">CLIMATE INTERVENTION AUTHORISED</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Directorate of Climate Intervention</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Operation<br>Winterfall</h1>
                <p class="doc-sub">Antarctic methane release initiative &mdash; authorisation, costing and field record.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Authorised</span>
                <span class="val">MY &minus;6</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-198 / CLI-0002</div>
        </div>
        <div>
            <div class="lbl">Objective</div>
            <div class="val">Delay cooling to preserve launch</div>
        </div>
        <div>
            <div class="lbl">Reversibility</div>
            <div class="val val--red">None</div>
        </div>
        <div>
            <div class="lbl">Authority</div>
            <div class="val">Directorial &mdash; sole</div>
        </div>
    </section>

    <div class="callout callout--warn">
        <div class="hd">Basis for authorisation</div>
        <p>
            Updated models placed the probability of mission failure through civil collapse
            before launch at greater than 81%. Winterfall was authorised not to solve the
            crisis but to hold the planet stable long enough to leave it.
        </p>
    </div>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/ice.png" alt="Western shelf, pre-operation"></div>
                <div class="fig-cap"><span>Western shelf, pre-op</span><span class="no">#198-01</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Detonation Zone</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Sector</div><div class="v">Western shelf</div></div>
                        <div class="kv-row"><div class="k">Line</div><div class="v">Fracture axis A&ndash;A</div></div>
                        <div class="kv-row"><div class="k">Exclusion</div><div class="v">Naval, 400 km</div></div>
                    </div>
                </div>
                <div class="plate-foot">Dwg. WF-009-B &mdash; not to scale.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Aerial plate withheld<br>Ref. #198-02<br>[ Sealed &mdash; sovereignty annex ]
                </div>
                <div class="fig-cap"><span>Aerial survey</span><span class="no">#198-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/ocean.png" alt="Ocean temperature monitoring"></div>
                <div class="fig-cap"><span>Thermal monitoring</span><span class="no">#198-03</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Method</h3>
            </div>

            <div class="doc-prose">
                <p>
                    Controlled fracture of the western ice shelf along a prepared explosion
                    line, releasing trapped methane deposits into the atmosphere. Methane's
                    short-term forcing is used deliberately as a warming agent to offset
                    declining insolation.
                </p>
                <p class="noindent">
                    The shelf cleaves at the explosion line, works its way seaward over
                    successive seasons, and melts. Sea level rises approximately one
                    centimetre within the first month.
                </p>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Costing</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Expected Benefit</th><th>Expected Cost</th></tr></thead>
                <tbody>
                    <tr><td class="green">Extended agricultural viability</td><td class="red">Biome destruction, western shelf</td></tr>
                    <tr><td class="green">Delayed biosphere collapse</td><td class="red">Extreme weather instability</td></tr>
                    <tr><td class="green">Preservation of launch infrastructure</td><td class="red">Sea level acceleration</td></tr>
                    <tr><td class="green">Additional launch window</td><td class="red">Ocean temperature collapse</td></tr>
                </tbody>
            </table>

            <div class="doc-quote">
                Methane is now our friend.
                <cite>Director E. Stratt &mdash; authorisation minute</cite>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Projected Instability</h3>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Hyperstorms</div><div class="v">Likely &mdash; southern ocean basins</div></div>
                <div class="kv-row"><div class="k">Jet stream</div><div class="v">Failure projected within 2 seasons</div></div>
                <div class="kv-row"><div class="k">Flood events</div><div class="v">Escalating, coastal, worldwide</div></div>
                <div class="kv-row"><div class="k">Secondary ecological</div><div class="v">Ocean temperature drop alone may trigger cascade</div></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Naval Operation Log</h3>
            </div>

            <div class="tsc">
                <div class="tsc-hd"><span>Operations Log &mdash; Winterfall</span><span>Extract</span></div>
                <div class="tsc-line"><span class="t">D&minus;14</span><div><span class="who">Ops</span><span class="said">Naval exclusion zone active. Enforcement delegated.</span></div></div>
                <div class="tsc-line"><span class="t">D&minus;09</span><div><span class="who">Ops</span><span class="said">Antarctic research stations evacuated. 340 personnel withdrawn.</span></div></div>
                <div class="tsc-line"><span class="t">D&minus;04</span><div><span class="who">Ops</span><span class="said">Civilian shipping diverted from southern approaches.</span></div></div>
                <div class="tsc-line"><span class="t">D&minus;01</span><div><span class="who">Ops</span><span class="said">Detonation synchronisation confirmed across all emplacements.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">D+00</span><div><span class="who">Ops</span><span class="said">Global climate intervention executed. Fracture propagating.</span></div></div>
            </div>

            <div class="callout callout--note">
                <div class="hd">Concluding assessment</div>
                <p>
                    This does not solve the problem. It buys time. Time is the only resource
                    remaining that can still be manufactured, and it is being manufactured
                    at the cost of a continent.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-sign">
        <div>
            <div class="lbl">Authorised by</div>
            <div class="name">Eva Stratt</div>
            <div class="role">Director, Petrova Task Force</div>
        </div>
        <div class="seal">SOLE<br>AUTHORITY</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series VII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-198</span>
    </div>

</div>
`
    },

    /* ========================================================
       011 — CREW REGISTER
       ======================================================== */

    crew: {

        title: 'ACCESSION HM-004 — CREW REGISTER, PRIMARY & RESERVE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">PERSONNEL RECORD</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Office of Crew Selection</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Crew Register</h1>
                <p class="doc-sub">Primary and reserve assignments as finalised 742 days before the launch window.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Register Closed</span>
                <span class="val">T&minus;742 days</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-004 / PERS-0010</div>
        </div>
        <div>
            <div class="lbl">Primary Crew</div>
            <div class="val">3 assigned</div>
        </div>
        <div>
            <div class="lbl">Reserve</div>
            <div class="val">3 assigned</div>
        </div>
        <div>
            <div class="lbl">Standing Order</div>
            <div class="val val--red">Dispersal enforced</div>
        </div>
    </section>

    <div class="callout callout--warn">
        <div class="hd">Standing Order 4-A</div>
        <p>
            No two members of the primary or reserve crew shall occupy the same location
            at any time prior to launch. The order was issued without stated justification
            and was never rescinded.
        </p>
    </div>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Primary Crew</h3>
        </div>

        <div class="pfile" style="margin-bottom:30px;">
            <div class="pfile-id">
                <div class="fig fig--portrait">
                    <div class="fig-frame"><img src="assets/yao.jpg" alt="Identification photograph, Yao Li-Jie"></div>
                    <div class="fig-cap"><span>ID plate</span><span class="no">#004-A</span></div>
                </div>
                <div class="pfile-idbox">
                    <div class="row"><span class="k">Role</span><span class="v">Commander</span></div>
                    <div class="row"><span class="k">State</span><span class="v">China</span></div>
                    <div class="row"><span class="k">Assigned</span><span class="v">T&minus;742d</span></div>
                    <div class="row"><span class="k">Status</span><span class="v green">Active</span></div>
                </div>
            </div>
            <div>
                <div class="pfile-name">
                    <h2>Yao Li-Jie</h2>
                    <div class="role">Mission Commander &mdash; Pilot</div>
                </div>
                <p>
                    Former People's Liberation Army Air Force pilot with extensive
                    long-duration orbital experience. Holds command authority over the
                    mission and final decision on all flight operations.
                </p>
                <p>
                    Selection board assessments repeatedly identified an unusual steadiness
                    under sustained stress: across 340 hours of failure-mode simulation his
                    measured physiological response never left baseline. The board recorded
                    the finding twice because it did not believe it the first time.
                </p>
                <div class="callout callout--note">
                    <div class="hd">Board note</div>
                    <p>Reliable to a fault. Recommended without reservation.</p>
                </div>
            </div>
        </div>

        <div class="pfile" style="margin-bottom:30px;">
            <div class="pfile-id">
                <div class="fig fig--portrait">
                    <div class="fig-frame"><img src="assets/ily.jpg" alt="Identification photograph, O. Ilyukhina"></div>
                    <div class="fig-cap"><span>ID plate</span><span class="no">#004-B</span></div>
                </div>
                <div class="pfile-idbox">
                    <div class="row"><span class="k">Role</span><span class="v">Engineer</span></div>
                    <div class="row"><span class="k">State</span><span class="v">Russia</span></div>
                    <div class="row"><span class="k">Assigned</span><span class="v">T&minus;742d</span></div>
                    <div class="row"><span class="k">Status</span><span class="v green">Active</span></div>
                </div>
            </div>
            <div>
                <div class="pfile-name">
                    <h2>Olesya Ilyukhina</h2>
                    <div class="role">Systems Specialist &mdash; Engineering Authority</div>
                </div>
                <p>
                    Nuclear systems engineer and cosmonaut specialising in closed-loop
                    spacecraft survival systems. Holds primary engineering authority aboard
                    the vessel.
                </p>
                <p>
                    Ranked first overall in survival adaptation testing across the entire
                    candidate pool. During integrated simulation she resolved four cascading
                    propulsion and life-support failures that the exercise designers had
                    intended to be unrecoverable.
                </p>
                <div class="callout callout--note">
                    <div class="hd">Board note</div>
                    <p>Blunt in manner, exact in method. The combination is not a defect.</p>
                </div>
            </div>
        </div>

        <div class="pfile">
            <div class="pfile-id">
                <div class="fig fig--portrait">
                    <div class="fig-frame"><img src="assets/dubois.jpg" alt="Identification photograph, M. DuBois"></div>
                    <div class="fig-cap"><span>ID plate</span><span class="no">#004-C</span></div>
                </div>
                <div class="pfile-idbox">
                    <div class="row"><span class="k">Role</span><span class="v">Science Officer</span></div>
                    <div class="row"><span class="k">State</span><span class="v">France</span></div>
                    <div class="row"><span class="k">Assigned</span><span class="v">T&minus;742d</span></div>
                    <div class="row"><span class="k">Status</span><span class="v green">Active</span></div>
                </div>
            </div>
            <div>
                <div class="pfile-name">
                    <h2>Martin DuBois</h2>
                    <div class="role">First Science Officer &mdash; Xenobiology</div>
                </div>
                <p>
                    ESA mission specialist and xenobiology researcher attached to the
                    Astrophage programme since the first sample distribution. Contributed
                    substantially to early containment methodology and metabolic analysis.
                </p>
                <p>
                    Assigned to oversee biological analysis at Tau Ceti and to conduct
                    interstellar sample retrieval.
                </p>
                <div class="callout callout--note">
                    <div class="hd">Board note</div>
                    <p>The most scientifically adaptable candidate reviewed.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 02</span>
            <h3>Reserve Assignments</h3>
        </div>

        <table class="ledger">
            <thead><tr><th>Name</th><th>Assignment</th><th>Location</th><th>Status</th></tr></thead>
            <tbody>
                <tr><td>A. Shapiro</td><td>Navigation &amp; flight systems</td><td>Kraków</td><td class="green">Reserve</td></tr>
                <tr><td>Lokken</td><td>Planetary systems</td><td>Dispersed</td><td class="green">Reserve</td></tr>
                <tr><td>Martinez</td><td>Engineering reserve</td><td>Dispersed</td><td class="green">Reserve</td></tr>
            </tbody>
        </table>

        <p class="fine" style="margin-top:12px;">
            All reserve crew remained on Earth throughout launch preparation.
        </p>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 03</span>
            <h3>Conditions at Register Close</h3>
        </div>

        <div class="doc-cols">
            <aside>
                <div class="fig">
                    <div class="fig-frame"><img src="assets/preperations.png" alt="Training and preparation"></div>
                    <div class="fig-cap"><span>Crew preparation</span><span class="no">#004-04</span></div>
                </div>
            </aside>
            <div class="doc-main">
                <p>
                    At the time these assignments were finalised, global weather instability
                    and food rationing had already begun to affect multiple contributing
                    nations. Two of the three primary crew were training in states operating
                    under emergency rationing.
                </p>
                <p>
                    Construction of the vessel continued without interruption throughout.
                    No schedule slip attributable to terrestrial conditions appears anywhere
                    in the programme record.
                </p>
                <div class="stats" style="margin-top:18px;">
                    <div class="stat">
                        <span class="lbl">Mission Clock</span>
                        <span class="val">742</span>
                        <span class="sub">Days to launch window</span>
                    </div>
                    <div class="stat">
                        <span class="lbl">Crew Complement</span>
                        <span class="val">3 + 3</span>
                        <span class="sub">Primary and reserve</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-004</span>
    </div>

</div>
`
    },

    /* ========================================================
       012 — ORBITAL PREPARATION
       ======================================================== */

    preparations: {

        title: 'ACCESSION HM-021 — ORBITAL ASSEMBLY: FINAL STATUS',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">FLIGHT READY</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Orbital Construction Authority</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Final Orbital<br>Status Report</h1>
                <p class="doc-sub">Completion of assembly in low Earth orbit after four years of continuous multinational construction.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Reported</span>
                <span class="val">T&minus;9 days</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-021 / ENG-0044</div>
        </div>
        <div>
            <div class="lbl">Vessel Status</div>
            <div class="val val--green">Flight Ready</div>
        </div>
        <div>
            <div class="lbl">Build Duration</div>
            <div class="val">~4 years</div>
        </div>
        <div>
            <div class="lbl">Earth Conditions</div>
            <div class="val val--red">Deteriorating</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Mass</span><span class="val">2.0M</span><span class="sub">kilograms, final</span></div>
            <div class="stat"><span class="lbl">Height</span><span class="val">114</span><span class="sub">metres</span></div>
            <div class="stat"><span class="lbl">Crew</span><span class="val">3</span><span class="sub">Astronauts</span></div>
            <div class="stat"><span class="lbl">Fuel</span><span class="val val--gold">Astrophage</span><span class="sub">Sole propellant</span></div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/phm.png" alt="Hail Mary, orbital assembly"></div>
                <div class="fig-cap"><span>Vessel, assembled</span><span class="no">#021-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/ships.png" alt="Assembly traffic in low Earth orbit"></div>
                <div class="fig-cap"><span>Assembly traffic</span><span class="no">#021-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Plate degraded<br>Ref. #021-03<br>[ Emulsion loss &mdash; 60% ]
                </div>
                <div class="fig-cap"><span>Spin habitat</span><span class="no">#021-03</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Systems at Report</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Cryogenics</div><div class="v">Stable</div></div>
                        <div class="kv-row"><div class="k">Rotational gravity</div><div class="v">Minor drift</div></div>
                        <div class="kv-row"><div class="k">Astrophage storage</div><div class="v">Secure</div></div>
                        <div class="kv-row"><div class="k">Earth stability</div><div class="v">Critical</div></div>
                    </div>
                </div>
                <div class="plate-foot">Status board HM-021-S.</div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Assembly</h3>
            </div>

            <p>
                The interstellar vessel <em>Hail Mary</em> completed assembly in low Earth
                orbit following approximately four years of continuous construction by
                forty-two contributing states. Final mass exceeded two million kilograms,
                making it the largest crewed spacecraft ever assembled.
            </p>

            <table class="ledger">
                <caption>Comparison &mdash; International Space Station</caption>
                <thead><tr><th>Measure</th><th>ISS</th><th>Hail Mary</th></tr></thead>
                <tbody>
                    <tr><td>Assembled mass</td><td class="num">~420,000 kg</td><td class="num gold">~2,000,000 kg</td></tr>
                    <tr><td>Assembly period</td><td class="num">~13 years</td><td class="num gold">~4 years</td></tr>
                    <tr><td>Contributing states</td><td class="num">15</td><td class="num">42</td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Construction Timeline</h3>
            </div>

            <div class="tl">
                <div class="tl-item"><div class="tl-when">Year 1</div><div class="tl-what">Framework</div><p>Orbital framework assembly begins; first pressurised sections delivered.</p></div>
                <div class="tl-item"><div class="tl-when">Year 2</div><div class="tl-what">Fuel &amp; Habitat</div><p>Fuel systems and spin habitats installed and pressure-tested.</p></div>
                <div class="tl-item"><div class="tl-when">Year 3</div><div class="tl-what">Propulsion</div><p>Astrophage drives integrated and first static firing conducted.</p></div>
                <div class="tl-item"><div class="tl-when">Year 4</div><div class="tl-what">Verification</div><p>Final systems verification complete; vessel certified flight ready.</p></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Cost</h3>
            </div>

            <div class="callout callout--gold">
                <div class="hd">Accounting note</div>
                <p>
                    Public tracking agencies ceased calculating a total after estimates
                    passed the equivalent of ten trillion USD. The figure was abandoned
                    rather than reported, on the stated grounds that it had stopped being
                    an economic quantity.
                </p>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Final System Testing</h3>
            </div>

            <p>
                ESA astronauts remained aboard throughout the final operational testing
                phase. More than 500 individual system faults were identified during
                integrated simulation.
            </p>

            <table class="ledger">
                <thead><tr><th>Fault Class</th><th>Count</th><th>Disposition</th></tr></thead>
                <tbody>
                    <tr><td>Cryogenic inconsistency</td><td class="num">118</td><td class="green">Closed</td></tr>
                    <tr><td>Rotational gravity calibration drift</td><td class="num">94</td><td class="gold">Accepted &mdash; within tolerance</td></tr>
                    <tr><td>Astrophage containment fluctuation</td><td class="num">76</td><td class="green">Closed</td></tr>
                    <tr><td>Navigation synchronisation failure</td><td class="num">140</td><td class="green">Closed</td></tr>
                    <tr><td>Radiation shielding anomaly</td><td class="num">81</td><td class="gold">Accepted &mdash; monitored</td></tr>
                </tbody>
            </table>

            <p class="fine" style="margin-top:12px;">
                None was classified as mission-ending. Two classes were closed by accepting
                the fault rather than correcting it.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 05</span>
                <h3>Terrestrial Conditions During Assembly</h3>
            </div>

            <ul class="doc-list">
                <li>Global food rationing expanded to 31 countries.</li>
                <li>Severe weather events exceeded projection models in frequency and intensity.</li>
                <li>Coastal evacuations continued following the Winterfall interventions.</li>
                <li>Major governments entered continuous emergency operating status.</li>
            </ul>

            <div class="doc-quote">
                This is happening. Hail Mary is going to launch.
                <cite>Internal Task Force note appended to the status board</cite>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series III</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-021</span>
    </div>

</div>
`
    },

    /* ========================================================
       013 — KRAKÓW INCIDENT
       ======================================================== */

    disaster: {

        title: 'ACCESSION PTF-233 — KRAKÓW INCIDENT REPORT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">DECLASSIFIED</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Board of Inquiry</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Kraków<br>Incident Report</h1>
                <p class="doc-sub">Catastrophic containment failure, Laboratory Sector C &mdash; final classification release.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Incident</span>
                <span class="val">04:12 local &middot; T&minus;3 days</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-233 / INQ-0001</div>
        </div>
        <div>
            <div class="lbl">Location</div>
            <div class="val">Kraków Research Facility</div>
        </div>
        <div>
            <div class="lbl">Fatalities</div>
            <div class="val val--red">3 named &middot; further unnamed</div>
        </div>
        <div>
            <div class="lbl">Cause</div>
            <div class="val val--red">Dosing error &mdash; 10⁶&times;</div>
        </div>
    </section>

    <div class="callout callout--warn">
        <div class="hd">Summary of finding</div>
        <p>
            At approximately 04:12 local time an Astrophage containment experiment in
            Laboratory Sector C produced an energy release exceeding all containment
            limits. The eastern laboratory wing collapsed. Fires burned for several hours.
        </p>
    </div>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/explode.png" alt="Sector C, post-incident"></div>
                <div class="fig-cap"><span>Sector C, post-incident</span><span class="no">#233-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/fire.png" alt="Fire suppression operations"></div>
                <div class="fig-cap"><span>Suppression ops</span><span class="no">#233-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/explode3.png" alt="Eastern wing collapse"></div>
                <div class="fig-cap"><span>Eastern wing</span><span class="no">#233-03</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/explode4.png" alt="Structural survey"></div>
                <div class="fig-cap"><span>Structural survey</span><span class="no">#233-04</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Cause of Incident</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Quantity supplied</div><div class="v">1 milligram</div></div>
                        <div class="kv-row"><div class="k">Quantity specified</div><div class="v">1 nanogram</div></div>
                        <div class="kv-row"><div class="k">Discrepancy</div><div class="v">One million fold</div></div>
                    </div>
                </div>
                <div class="plate-foot">Energy release exceeded all containment limits.</div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Fatalities</h3>
            </div>

            <div class="pfile" style="margin-bottom:22px;">
                <div class="pfile-id">
                    <div class="fig fig--portrait">
                        <div class="fig-frame"><img src="assets/dubois.jpg" alt="M. DuBois"></div>
                        <div class="fig-cap"><span>Personnel plate</span><span class="no">#233-A</span></div>
                    </div>
                    <div class="pfile-idbox">
                        <div class="row"><span class="k">Status</span><span class="v red">Deceased</span></div>
                    </div>
                </div>
                <div>
                    <div class="pfile-name">
                        <h2>Martin DuBois</h2>
                        <div class="role">First Science Officer &mdash; Project Hail Mary</div>
                    </div>
                    <p>
                        Present inside Laboratory Sector C conducting live Astrophage
                        interaction testing. Fatal injuries sustained in the initial blast wave.
                    </p>
                </div>
            </div>

            <div class="pfile" style="margin-bottom:22px;">
                <div class="pfile-id">
                    <div class="fig fig--portrait">
                        <div class="fig-missing">Plate<br>unrecovered<br>#233-B</div>
                        <div class="fig-cap"><span>Personnel plate</span><span class="no">#233-B</span></div>
                    </div>
                    <div class="pfile-idbox">
                        <div class="row"><span class="k">Status</span><span class="v red">Deceased</span></div>
                    </div>
                </div>
                <div>
                    <div class="pfile-name">
                        <h2>Anne Shapiro</h2>
                        <div class="role">Alternate Science Officer &mdash; Project Hail Mary</div>
                    </div>
                    <p>
                        Assisting DuBois during containment calibration. Killed immediately
                        upon containment rupture. Her presence in Sector C was itself a breach
                        of Standing Order 4-A, which required the primary and alternate science
                        officers to remain separated at all times.
                    </p>
                </div>
            </div>

            <table class="ledger">
                <thead><tr><th>Name</th><th>Post</th><th>Outcome</th></tr></thead>
                <tbody>
                    <tr><td>M. DuBois</td><td>First Science Officer</td><td class="red">Killed in blast</td></tr>
                    <tr><td>A. Shapiro</td><td>Alternate Science Officer</td><td class="red">Killed in blast</td></tr>
                    <tr><td>J. Davis</td><td>Physical Science Technician</td><td class="red">Died before transport</td></tr>
                    <tr><td>[Redacted] Wang</td><td>Junior laboratory assistant</td><td class="gold">Comatose at report date</td></tr>
                    <tr><td>Unnamed</td><td>Responders &amp; support staff</td><td class="red">Additional casualties</td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Response Conditions</h3>
            </div>

            <div class="doc-prose">
                <p>
                    Firefighting proceeded on multiple fronts across the communications and
                    laboratory sectors. Structural collapse of the western corridor prevented
                    evacuation of several injured personnel by the intended route.
                </p>
                <p class="noindent">
                    Triage was established externally, under active fire conditions, and
                    remained so for the duration of the operation.
                </p>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Mission Impact</h3>
            </div>

            <div class="stats">
                <div class="stat"><span class="lbl">Science Team</span><span class="val val--red">Lost</span><span class="sub">Primary and alternate</span></div>
                <div class="stat"><span class="lbl">Launch Window</span><span class="val val--gold">72h</span><span class="sub">Remaining</span></div>
                <div class="stat"><span class="lbl">Delay Estimate</span><span class="val val--red">Months</span><span class="sub">If replacement trained</span></div>
                <div class="stat"><span class="lbl">Survival Window</span><span class="val val--red">Insufficient</span><span class="sub">For any delay</span></div>
            </div>

            <div class="doc-quote">
                Hail Mary launches in three days. Find another scientist.
                <cite>Directorial instruction issued 04:51, thirty-nine minutes after the blast</cite>
            </div>

        </div>
    </div>

    <div class="doc-sign">
        <div>
            <div class="lbl">Board of Inquiry</div>
            <div class="name">K. Nowak</div>
            <div class="role">Presiding, Board of Inquiry</div>
        </div>
        <div class="seal">INQUIRY<br>CLOSED</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series IV</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-233</span>
    </div>

</div>
`
    },

    /* ========================================================
       014 — PERSONNEL FILE: R. GRACE
       ======================================================== */

    grace: {

        title: 'ACCESSION HM-030 — PERSONNEL FILE: DR. R. GRACE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">LEVEL 4 CLEARANCE</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Office of Crew Selection</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Personnel File</h1>
                <p class="doc-sub">Primary Science Officer &mdash; assignment, reassignment and sealed annex.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">File Current At</span>
                <span class="val">T&minus;48 hours</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-030 / PERS-0021</div>
        </div>
        <div>
            <div class="lbl">Clearance</div>
            <div class="val">Level 4</div>
        </div>
        <div>
            <div class="lbl">Annex</div>
            <div class="val val--red">Sealed &mdash; 32 years</div>
        </div>
        <div>
            <div class="lbl">Status</div>
            <div class="val val--gold">Active at close</div>
        </div>
    </section>

    <div class="pfile">

        <div class="pfile-id">
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/images-1.jpeg" alt="Identification photograph, R. Grace"></div>
                <div class="fig-cap"><span>ID plate</span><span class="no">#030-A</span></div>
            </div>

            <div class="pfile-idbox">
                <div class="row"><span class="k">Mission status</span><span class="v green">Active</span></div>
                <div class="row"><span class="k">Launch window</span><span class="v">T&minus;48h</span></div>
                <div class="row"><span class="k">Astrophage tier</span><span class="v">Level 5</span></div>
                <div class="row"><span class="k">Psych profile</span><span class="v red">Flagged</span></div>
                <div class="row"><span class="k">Flight hours</span><span class="v red">0</span></div>
            </div>

            <div class="fig fig--square" style="margin-top:14px;">
                <div class="fig-frame"><img src="assets/grace.jpeg" alt="Service photograph"></div>
                <div class="fig-cap"><span>Service plate</span><span class="no">#030-B</span></div>
            </div>
        </div>

        <div>
            <div class="pfile-name">
                <h2>Dr. Ryland Grace</h2>
                <div class="role">Primary Science Officer &mdash; Astrophage Biology</div>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Nationality</div><div class="v">United States</div></div>
                <div class="kv-row"><div class="k">Education</div><div class="v">Doctorate, molecular biology</div></div>
                <div class="kv-row"><div class="k">Prior occupation</div><div class="v">Science teacher &mdash; Grover Cleveland Middle School, San Francisco</div></div>
                <div class="kv-row"><div class="k">Joined Task Force</div><div class="v">Early Astrophage analysis phase</div></div>
            </div>

            <div class="doc-h" style="margin-top:24px;">
                <span class="num">§ 01</span>
                <h3>Background</h3>
            </div>

            <p>
                Dr. Grace joined the Petrova Task Force during the first analysis phase and
                conducted the initial biological characterisation of ArcLight material. He
                proposed the designation "Astrophage," which entered general use within a
                fortnight.
            </p>

            <p>
                Over the following years he became one of the foremost authorities on
                Astrophage biology, energy behaviour and reproductive mechanism. Programme
                records place him in close working proximity to the Director throughout the
                majority of Hail Mary's development.
            </p>

            <div class="doc-h" style="margin-top:24px;">
                <span class="num">§ 02</span>
                <h3>Reassignment</h3>
            </div>

            <p>
                Following the Kraków incident, with both the first and alternate science
                officers dead and the launch window 72 hours from closing, Grace was
                assigned as Primary Science Officer. Leadership approved the reassignment
                approximately 43 hours before launch.
            </p>

            <div class="callout callout--note">
                <div class="hd">Assessment at reassignment</div>
                <p>
                    Exceptional Astrophage expertise. No astronautics experience. Strong
                    adaptive problem-solving. Psychological compatibility concerns recorded
                    and not resolved. No alternative candidate possessed comparable
                    mission-critical knowledge.
                </p>
            </div>

            <div class="doc-h" style="margin-top:24px;">
                <span class="num">§ 03</span>
                <h3>Mission Plan Addendum</h3>
            </div>

            <p>
                Owing to the absence of flight training, coma induction was scheduled early
                &mdash; before launch rather than after orbital insertion. The stated
                justification on file is the subject's own concern that he would panic
                during ascent.
            </p>

            <p>
                Commander Yao and Specialist Ilyukhina were tasked with securing Dr. Grace
                into the medical bed on reaching orbit and continuing coma-cycle
                stabilisation.
            </p>
        </div>
    </div>

    <section class="doc-sec" style="margin-top:34px;">
        <div class="doc-h">
            <span class="num">§ 04</span>
            <h3>Sealed Annex</h3>
        </div>

        <p class="fine" style="margin-bottom:14px;">
            The following material was sealed at the time of filing and released
            thirty-two years later under the Historical Integrity Act.
        </p>

        <button class="doc-reveal-btn"
                data-show="UNSEAL ANNEX &mdash; RESTRICTED"
                data-hide="RESEAL ANNEX"
                onclick="revealDoc(this)">UNSEAL ANNEX &mdash; RESTRICTED</button>

        <div class="doc-reveal">

            <div class="doc-head" style="border-bottom-width:1px;">
                <div class="doc-agency">Declassified Archive Record</div>
                <div class="doc-head-row">
                    <div>
                        <h3 style="font-family:var(--a-display);font-size:24px;color:var(--a-navy);margin:0;">
                            Mission Assignment Disclosure
                        </h3>
                    </div>
                    <div class="doc-dateblock">
                        <span class="lbl">Unsealed</span>
                        <span class="val">MY +32</span>
                    </div>
                </div>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Source</div><div class="v">Deposition testimony &mdash; E. Stratt, former Director</div></div>
                <div class="kv-row"><div class="k">Status</div><div class="v">Fully declassified</div></div>
            </div>

            <p style="margin-top:18px;">
                Public records released during the early recovery era stated that Dr. Ryland
                Grace volunteered for assignment to Project Hail Mary. Testimony subsequently
                given by Eva Stratt established that this account was knowingly inaccurate.
            </p>

            <p>
                During final mission preparations Dr. Grace declined deployment. Internal
                review concluded that no alternative candidate possessed the required
                combination of Astrophage expertise, mission familiarity and survival
                probability. Under emergency authority, the Director ordered compulsory
                induction.
            </p>

            <table class="ledger">
                <caption>Confirmed sequence of actions</caption>
                <thead><tr><th>#</th><th>Action</th><th>Consent</th></tr></thead>
                <tbody>
                    <tr><td>01</td><td>Subject sedated under medical supervision</td><td class="red">Absent</td></tr>
                    <tr><td>02</td><td>Subject transferred to launch containment</td><td class="red">Absent</td></tr>
                    <tr><td>03</td><td>Launch authorisation proceeded</td><td class="red">Absent</td></tr>
                    <tr><td>04</td><td>Departure occurred as scheduled</td><td class="red">Absent</td></tr>
                </tbody>
            </table>

            <div class="doc-quote">
                No. Humanity needed him more than he needed a choice.
                <cite>E. Stratt &mdash; deposition, in answer to whether consent had been obtained</cite>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 05</span>
                <h3>Post-Mission Review</h3>
            </div>

            <p>
                Following confirmation of mission success, multiple international
                investigations examined the legality of the emergency actions taken. Review
                boards determined that the Director had acted within authorities granted by
                survival accords enacted during the crisis. No criminal charges were filed
                in any participating nation.
            </p>

            <p>
                Tribunal findings concluded that while the decision constituted a severe
                violation of individual autonomy, it was directly linked to the successful
                execution of the mission and the preservation of human civilization.
            </p>

            <div class="callout callout--gold">
                <div class="hd">Final finding</div>
                <p>
                    Director Eva Stratt formally absolved of criminal liability under the
                    Emergency Continuity Statutes.
                </p>
            </div>

            <p class="fine">
                Asked in closing testimony whether she would make the same decision again,
                the witness answered: "Immediately."
            </p>

        </div>
    </section>

    <div class="doc-sign">
        <div>
            <div class="lbl">Filed by</div>
            <div class="name">Office of Crew Selection</div>
            <div class="role">Project Hail Mary</div>
        </div>
        <div class="seal seal--navy">SEALED<br>32 YRS</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-030</span>
    </div>

</div>
`
    },

    /* ========================================================
       015 — LAUNCH TRANSCRIPT
       ======================================================== */

    launch: {

        title: 'ACCESSION HM-040 — LAUNCH DAY TRANSCRIPT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">PUBLIC RECORD</div>

    <header class="doc-head">
        <div class="doc-agency">Global Live Transmission Archive &middot; Deposited by the Broadcast Pool</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Launch Day</h1>
                <p class="doc-sub">Humanity's first interstellar departure &mdash; consolidated transcript from pool and mission-control feeds.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Departure</span>
                <span class="val">MY 0 &middot; T+00:00:00</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-040 / TSC-0044</div>
        </div>
        <div>
            <div class="lbl">Destination</div>
            <div class="val">Tau Ceti</div>
        </div>
        <div>
            <div class="lbl">Transit</div>
            <div class="val">~13 years</div>
        </div>
        <div>
            <div class="lbl">Audience</div>
            <div class="val val--gold">4.2 billion</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Crew Aboard at Departure</h3>
        </div>

        <div class="gallery">
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/yao.jpg" alt="Commander Yao Li-Jie"></div>
                <div class="fig-cap"><span>Yao Li-Jie &mdash; Commander</span><span class="no">#040-A</span></div>
            </div>
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/ily.jpg" alt="Specialist Olesya Ilyukhina"></div>
                <div class="fig-cap"><span>O. Ilyukhina &mdash; Engineer</span><span class="no">#040-B</span></div>
            </div>
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/images-1.jpeg" alt="Dr. Ryland Grace"></div>
                <div class="fig-cap"><span>R. Grace &mdash; Science</span><span class="no">#040-C</span></div>
            </div>
        </div>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 02</span>
                <h3>Consolidated Transcript</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd">
                    <span>Pool feed &amp; mission control, merged</span>
                    <span>Reel 01 / 03</span>
                </div>

                <div class="tsc-break">T&minus;02:15:00 &mdash; Global broadcasts begin</div>

                <div class="tsc-line">
                    <span class="t">T&minus;02:15</span>
                    <div>
                        <span class="who">Pool commentary</span>
                        <span class="said">
                            Emergency generators in eleven countries are being run tonight for
                            no purpose other than to keep the coverage on air.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">T&minus;01:03</span>
                    <div>
                        <span class="who">Pool commentary</span>
                        <span class="said">
                            Orbital arrays have visual acquisition above the night-side horizon.
                            You are looking at the most expensive object humanity has ever built.
                        </span>
                    </div>
                </div>

                <div class="tsc-break">T&minus;00:48:20 &mdash; Crew communications check</div>

                <div class="tsc-line">
                    <span class="t">T&minus;00:48</span>
                    <div><span class="who">Mission Control</span><span class="said">Commander Yao, comms check.</span></div>
                </div>
                <div class="tsc-line">
                    <span class="t">T&minus;00:48</span>
                    <div><span class="who">Yao</span><span class="said">Reading you clear.</span></div>
                </div>
                <div class="tsc-line">
                    <span class="t">T&minus;00:47</span>
                    <div><span class="who">Mission Control</span><span class="said">Specialist Ilyukhina.</span></div>
                </div>
                <div class="tsc-line">
                    <span class="t">T&minus;00:47</span>
                    <div><span class="who">Ilyukhina</span><span class="said">Still here.</span></div>
                </div>

                <div class="tsc-break">T&minus;00:39:08 &mdash; Science officer status</div>

                <div class="tsc-note">
                    [Dr. Ryland Grace entered medically induced coma procedures earlier in the
                    day. He is aboard, secured, and does not appear on the voice loop.]
                </div>

                <div class="tsc-line">
                    <span class="t">T&minus;00:39</span>
                    <div>
                        <span class="who">News feed</span>
                        <span class="said">
                            Grace was assigned to the mission within hours of the deaths of the
                            original science officers. Many now consider him one of the bravest
                            individuals in human history.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">
                    [Archivist's note: this characterisation was the official account at the
                    time of broadcast. See Accession HM-030, sealed annex.]
                </div>

                <div class="tsc-break">T&minus;00:11:03 &mdash; World response</div>

                <div class="tsc-line">
                    <span class="t">T&minus;00:11</span>
                    <div>
                        <span class="who">Pool commentary</span>
                        <span class="said">
                            Church bells across Europe. Crowds in New York, Paris, Lagos, Tokyo,
                            São Paulo. In several cities the street lighting has been shut off so
                            people can see the sky.
                        </span>
                    </div>
                </div>

                <div class="tsc-break">T&minus;00:01:00 &mdash; Astrophage ignition ready</div>

                <div class="tsc-line">
                    <span class="t">T&minus;00:01</span>
                    <div><span class="who">Mission Control</span><span class="said">One minute to ignition. All stations go.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">T&minus;00:00:30</span>
                    <div><span class="who">Yao</span><span class="said">See you in Tau Ceti.</span></div>
                </div>

                <div class="tsc-note">[Final voice transmission from the crew.]</div>

                <div class="tsc-break">T+00:00:00 &mdash; Ignition</div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">T+00:00</span>
                    <div><span class="who">Mission Control</span><span class="said">Astrophage ignition confirmed. Departure burn initiated.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">T+00:04</span>
                    <div>
                        <span class="who">Mission Control</span>
                        <span class="said">
                            Trajectory lock confirmed. Stable interstellar acceleration toward
                            Tau Ceti.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">T+00:06</span>
                    <div><span class="who">Pool commentary</span><span class="said">Humanity has left for the stars.</span></div>
                </div>

                <div class="tsc-break">End of consolidated transcript</div>

            </div>

        </div>

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/launch.png" alt="Departure burn"></div>
                <div class="fig-cap"><span>Departure burn</span><span class="no">#040-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/leaving.png" alt="Vessel departing"></div>
                <div class="fig-cap"><span>Outbound</span><span class="no">#040-02</span></div>
            </div>

            <div class="stats" style="grid-template-columns:1fr;">
                <div class="stat"><span class="lbl">Mission Status</span><span class="val val--green">Active</span></div>
                <div class="stat"><span class="lbl">Travel Time</span><span class="val">13 yr</span><span class="sub">To Tau Ceti</span></div>
                <div class="stat"><span class="lbl">World Viewers</span><span class="val">4.2B</span><span class="sub">Live at ignition</span></div>
            </div>

            <div class="fig fig--square" style="margin-top:20px;">
                <div class="fig-missing">
                    Plate unrecovered<br>Ref. #040-03<br>[ Pool camera 6 &mdash; failed ]
                </div>
                <div class="fig-cap"><span>Ground crowds</span><span class="no">#040-03</span></div>
            </div>
        </aside>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series V</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-040</span>
    </div>

</div>
`
    },

    /* ========================================================
       016 — TRIBUNAL
       ======================================================== */

    stratt: {

        title: 'ACCESSION UN-4427 — SPECIAL TRIBUNAL: E. STRATT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">DETAINED</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations &middot; Emergency Special Tribunal</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Special Tribunal<br>Eva Stratt</h1>
                <p class="doc-sub">Proceedings convened four months after departure, on expiry of emergency immunity.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Convened</span>
                <span class="val">MY +0 &middot; T+4 months</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Case</div>
            <div class="val">UN-PTF-4427-A</div>
        </div>
        <div>
            <div class="lbl">Former Title</div>
            <div class="val">Director, Petrova Task Force</div>
        </div>
        <div>
            <div class="lbl">Disposition</div>
            <div class="val val--red">Life sentence</div>
        </div>
        <div>
            <div class="lbl">Parole</div>
            <div class="val val--red">Denied</div>
        </div>
    </section>

    <div class="callout callout--warn">
        <div class="hd">Basis of proceedings</div>
        <p>
            The instrument establishing the Task Force set no expiry other than mission
            departure. Immunity therefore lapsed automatically at ignition. The warrant was
            executed 118 days later.
        </p>
    </div>

    <div class="doc-cols">

        <aside>
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/mugshot.webp" alt="Custody photograph"></div>
                <div class="fig-cap"><span>Custody plate</span><span class="no">#4427-A</span></div>
            </div>

            <div class="pfile-idbox">
                <div class="row"><span class="k">Case ID</span><span class="v">UN-PTF-4427-A</span></div>
                <div class="row"><span class="k">Status</span><span class="v red">Life sentence</span></div>
                <div class="row"><span class="k">Parole</span><span class="v red">Denied</span></div>
                <div class="row"><span class="k">Risk level</span><span class="v">Global</span></div>
                <div class="row"><span class="k">Counsel</span><span class="v">Declined</span></div>
            </div>

            <div class="fig fig--square" style="margin-top:14px;">
                <div class="fig-frame"><img src="assets/stratt.png" alt="Tribunal chamber"></div>
                <div class="fig-cap"><span>Chamber</span><span class="no">#4427-B</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Transcript Extract</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd">
                    <span>Official transcript &mdash; declassified</span>
                    <span>Day 3, afternoon session</span>
                </div>

                <div class="tsc-line">
                    <span class="t">14:02</span>
                    <div><span class="who">Tribunal</span><span class="said">Do you deny responsibility for the destruction of the Antarctic ice shelves?</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:02</span><div><span class="who">Stratt</span><span class="said">No.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:04</span>
                    <div><span class="who">Tribunal</span><span class="said">Do you deny authorising military operations within sovereign territory without consent?</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:04</span><div><span class="who">Stratt</span><span class="said">No.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:07</span>
                    <div><span class="who">Tribunal</span><span class="said">Do you deny coercing scientists and governments under threat of imprisonment?</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:07</span><div><span class="who">Stratt</span><span class="said">No.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:09</span>
                    <div><span class="who">Tribunal</span><span class="said">Then by your own testimony you knowingly committed crimes on a global scale.</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:09</span><div><span class="who">Stratt</span><span class="said">Yes.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:11</span>
                    <div><span class="who">Tribunal</span><span class="said">Do you feel remorse?</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:11</span><div><span class="who">Stratt</span><span class="said">No.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:12</span>
                    <div><span class="who">Tribunal</span><span class="said">Why?</span></div>
                </div>
                <div class="tsc-line tsc-line--alert">
                    <span class="t">14:12</span>
                    <div><span class="who">Stratt</span><span class="said">Because the ship launched.</span></div>
                </div>

                <div class="tsc-note">[Silence recorded, approximately 12 seconds.]</div>

                <div class="tsc-line">
                    <span class="t">14:13</span>
                    <div>
                        <span class="who">Stratt</span>
                        <span class="said">
                            You think people obey laws when extinction is coming. You think
                            nations cooperate because they are good. They cooperated because
                            they were afraid, and I was the thing available to be afraid of.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">14:16</span>
                    <div><span class="who">Tribunal</span><span class="said">Millions suffered because of your decisions.</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:16</span><div><span class="who">Stratt</span><span class="said">Billions would have died without them.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:18</span>
                    <div><span class="who">Tribunal</span><span class="said">You believe your actions were justified.</span></div>
                </div>
                <div class="tsc-line"><span class="t">14:18</span><div><span class="who">Stratt</span><span class="said">I believe humanity is still alive.</span></div></div>

                <div class="tsc-line">
                    <span class="t">14:22</span>
                    <div>
                        <span class="who">Stratt</span>
                        <span class="said">
                            Someone had to take responsibility for getting that ship off the
                            ground. So yes. I stole. I threatened. I destroyed ecosystems.
                            I forced governments to cooperate. And if it gives the mission even
                            the smallest additional chance, I would commit every one of those
                            crimes again.
                        </span>
                    </div>
                </div>

                <div class="tsc-break">End of extract</div>

            </div>

            <div class="doc-h" style="margin-top:28px;">
                <span class="num">§ 02</span>
                <h3>Charge Record</h3>
            </div>

            <button class="doc-reveal-btn"
                    data-show="VIEW FULL CHARGE RECORD"
                    data-hide="HIDE CHARGE RECORD"
                    onclick="revealDoc(this)">VIEW FULL CHARGE RECORD</button>

            <div class="doc-reveal">

                <table class="ledger">
                    <caption>International charge database &mdash; case UN-PTF-4427-A</caption>
                    <thead><tr><th>Count</th><th>Charge</th><th>Particulars</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>I</td><td>Environmental crimes</td>
                            <td>Deliberate destruction of Antarctic ice shelves and atmospheric methane release.</td>
                        </tr>
                        <tr>
                            <td>II</td><td>Military misuse</td>
                            <td>Direction of multinational naval operations without sovereign authorisation.</td>
                        </tr>
                        <tr>
                            <td>III</td><td>Forced conscription</td>
                            <td>Coercion of scientific personnel under emergency wartime authority.</td>
                        </tr>
                        <tr>
                            <td>IV</td><td>Property seizure</td>
                            <td>Confiscation of private aerospace, industrial and transport assets.</td>
                        </tr>
                        <tr>
                            <td>V</td><td>Human rights violations</td>
                            <td>Emergency detention and forced compliance under Petrova authority statutes.</td>
                        </tr>
                        <tr>
                            <td>VI</td><td>Economic coercion</td>
                            <td>Compelled restructuring of national industry in eleven states.</td>
                        </tr>
                        <tr>
                            <td>VII</td><td>Aviation &amp; maritime law</td>
                            <td>Systematic violation of civil aviation and maritime sovereignty.</td>
                        </tr>
                        <tr>
                            <td>VIII</td><td class="red">Sealed</td>
                            <td class="red">Additional counts sealed under post-collapse continuity law.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="callout callout--note">
                    <div class="hd">Note appended on release</div>
                    <p>
                        The accused entered no plea in mitigation on any count, declined counsel,
                        and did not contest a single particular of fact. The tribunal recorded
                        that it had never previously conducted proceedings in which the defence
                        raised no dispute whatsoever.
                    </p>
                </div>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Tribunal &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Case UN-PTF-4427-A</span>
    </div>

</div>
`
    },

    /* ========================================================
       017 — RESOURCE COLLAPSE
       ======================================================== */

    wars: {

        title: 'ACCESSION PTF-311 — GLOBAL RESOURCE COLLAPSE REPORT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">EARTH SYSTEM CRITICAL</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Earth Systems Monitoring</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Resource<br>Collapse Report</h1>
                <p class="doc-sub">Condition of global food, water and governance systems eighteen months after departure.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Reporting Period</span>
                <span class="val">MY +1.5</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-311 / MON-0018</div>
        </div>
        <div>
            <div class="lbl">Condition</div>
            <div class="val val--red">Critical</div>
        </div>
        <div>
            <div class="lbl">Trend</div>
            <div class="val val--red">Deteriorating</div>
        </div>
        <div>
            <div class="lbl">Intervention</div>
            <div class="val">Winterfall &mdash; insufficient</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat">
                <span class="lbl">Global Crop Loss</span>
                <span class="val val--red">41%</span>
                <span class="sub">Against pre-crisis baseline</span>
                <div class="meter meter--red"><span style="width:41%"></span></div>
            </div>
            <div class="stat">
                <span class="lbl">Displaced Population</span>
                <span class="val val--red">1.8B</span>
                <span class="sub">And rising</span>
            </div>
            <div class="stat">
                <span class="lbl">States Rationing</span>
                <span class="val val--gold">63</span>
                <span class="sub">Emergency measures active</span>
            </div>
            <div class="stat">
                <span class="lbl">Active Conflicts</span>
                <span class="val val--red">27</span>
                <span class="sub">Resource-linked</span>
            </div>
        </div>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Active Flashpoints</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Region</th><th>Character</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Northern India</td><td>Food riots, border conflict</td><td class="red">Active</td></tr>
                    <tr><td>Siberia</td><td>Occupation of newly arable land</td><td class="red">Active</td></tr>
                    <tr><td>Canadian grain belt</td><td>Military-enforced ration zones</td><td class="gold">Contained</td></tr>
                    <tr><td>Mediterranean</td><td>Desalination infrastructure collapse</td><td class="red">Failing</td></tr>
                    <tr><td>South America</td><td>Freshwater disputes escalating</td><td class="red">Active</td></tr>
                    <tr><td>North Atlantic</td><td>Shipping lane instability</td><td class="gold">Degraded</td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Conditions Summary</h3>
            </div>

            <div class="doc-h4">Solar and climate</div>
            <p>
                Average surface temperatures continue falling despite methane intervention.
                Marine ecosystems report widespread collapse; northern fisheries are now
                considered functionally extinct.
            </p>

            <div class="doc-h4">Food distribution</div>
            <ul class="doc-list">
                <li>Emergency rationing active in 63 nations.</li>
                <li>Grain reserves approaching depletion in 19 of those.</li>
                <li>Fuel shortages disrupting overland distribution.</li>
                <li>Refugee movement exceeds all standing projections.</li>
            </ul>

            <div class="doc-h4">Governance</div>
            <p>
                Several governments dissolved during the first eighteen months after
                departure. Remaining military powers increasingly redirect resources toward
                internal stabilisation rather than external commitment. International
                cooperation continues to deteriorate from its wartime peak.
            </p>

            <div class="callout callout--warn">
                <div class="hd">Monitoring note</div>
                <p>
                    The cooperation achieved during construction of the vessel has not
                    survived its departure by two years. The organising threat is now
                    twelve light-years away and no longer visible in the sky.
                </p>
            </div>

        </div>

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/farm.png" alt="Failed cropland"></div>
                <div class="fig-cap"><span>Failed cropland</span><span class="no">#311-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/cars.png" alt="Displacement corridor"></div>
                <div class="fig-cap"><span>Displacement</span><span class="no">#311-02</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Indices at Report</div>
                <div class="plate-body">
                    <div class="doc-h4" style="margin-top:0;">Food stability</div>
                    <div class="meter meter--red"><span style="width:32%"></span></div>
                    <div class="doc-h4">Ocean health</div>
                    <div class="meter meter--red"><span style="width:18%"></span></div>
                    <div class="doc-h4">Global cooperation</div>
                    <div class="meter meter--gold"><span style="width:44%"></span></div>
                    <div class="doc-h4">Survival index</div>
                    <div class="meter meter--red"><span style="width:27%"></span></div>
                </div>
                <div class="plate-foot">Indexed against pre-crisis baseline = 100.</div>
            </div>

            <div class="plate">
                <div class="plate-hd">Trend Series</div>
                <div class="plate-body">
                    <table class="ledger" style="border:0;">
                        <thead><tr><th>Horizon</th><th>Crop</th><th>Displaced</th></tr></thead>
                        <tbody>
                            <tr><td>T+0</td><td class="num">100%</td><td class="num">0</td></tr>
                            <tr><td>T+5y</td><td class="num gold">78%</td><td class="num">0.4B</td></tr>
                            <tr><td>T+10y</td><td class="num red">59%</td><td class="num">1.1B</td></tr>
                            <tr><td>T+15y</td><td class="num red">41%</td><td class="num">1.8B</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="plate-foot">Series PTF-311-T.</div>
            </div>
        </aside>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series VIII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-311</span>
    </div>

</div>
`
    },

    /* ========================================================
       018 — MEDICAL LOG: YAO
       ======================================================== */

    yao: {

        title: 'ACCESSION HM-052 — MEDICAL LOG: CDR. YAO LI-JIE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">DECEASED IN TRANSIT</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Recovered Flight Data &middot; Medical Series</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Medical Log &mdash; Cdr. Yao Li-Jie</h1>
                <p class="doc-sub">Archival reconstruction from flight data recovered by the Beetle probes.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Ship Time</span>
                <span class="val">02Y 142D</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-052 / MED-0001</div>
        </div>
        <div>
            <div class="lbl">Time Into Transit</div>
            <div class="val">2.3 years</div>
        </div>
        <div>
            <div class="lbl">Cause of Death</div>
            <div class="val val--red">Nutritional failure</div>
        </div>
        <div>
            <div class="lbl">Witnesses</div>
            <div class="val val--red">None</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/yao-dead.png" alt="Medical bay plate"></div>
                <div class="fig-cap"><span>Medical bay</span><span class="no">#052-01</span></div>
            </div>

            <div class="pfile-idbox">
                <div class="row"><span class="k">Crewmember</span><span class="v">Yao Li-Jie</span></div>
                <div class="row"><span class="k">Role</span><span class="v">Commander</span></div>
                <div class="row"><span class="k">Status</span><span class="v red">Deceased</span></div>
                <div class="row"><span class="k">Ship time</span><span class="v">02Y 142D</span></div>
            </div>

            <div class="callout callout--warn" style="margin-top:18px;">
                <div class="hd">Contributing condition</div>
                <p>
                    Monitoring thresholds had been lowered for cruise operations. All three
                    crew were unconscious. No alert generated by this fault reached a
                    conscious observer at any point.
                </p>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Finding</h3>
            </div>

            <div class="doc-prose">
                <p>
                    Recovered telemetry indicates that Commander Yao Li-Jie died during
                    long-duration transit following a failure in the automated nutritional
                    delivery system. An obstruction developed within the feeding assembly
                    responsible for delivering slurry meals to crew in induced coma.
                </p>
                <p class="noindent">
                    Because all crew remained unconscious and cruise-phase alert thresholds
                    had been reduced, the deficit progressed unobserved until organ damage
                    was irreversible. The fault was, in engineering terms, minor. It was a
                    blocked tube.
                </p>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Recovered Medical Log</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Automated medical system &mdash; MARY</span><span>Extract, 29 days</span></div>

                <div class="tsc-line">
                    <span class="t">113D<br>03:14:02</span>
                    <div><span class="who">MARY</span><span class="said">Scheduled nutritional cycle initiated. Subject: YAO LI-JIE. Slurry meal #18,942 prepared. Feeding sequence started.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">113D<br>03:14:27</span>
                    <div><span class="who">MARY</span><span class="said">Feeding pressure above nominal. Possible obstruction within delivery tube assembly. Attempting automated clearing cycle.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">115D<br>22:07:11</span>
                    <div><span class="who">MARY</span><span class="said">Nutritional intake below mission baseline. Deficit 8.7%. Alert priority: NON-CRITICAL.</span></div>
                </div>

                <div class="tsc-note">[Alert priority remains non-critical for a further eleven days.]</div>

                <div class="tsc-line">
                    <span class="t">127D<br>11:44:51</span>
                    <div><span class="who">MARY</span><span class="said">Nutritional deficit increasing. Deficit 37.2%. Muscle degradation detected. Body mass trending downward.</span></div>
                </div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">139D<br>04:55:39</span>
                    <div><span class="who">MARY</span><span class="said">CRITICAL MEDICAL CONDITION. Severe malnutrition. Liver function compromised. Renal failure indicators present. Emergency nutritional restoration initiated.</span></div>
                </div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">141D<br>16:02:17</span>
                    <div><span class="who">MARY</span><span class="said">Multi-organ failure confirmed. Subject unable to recover without active crew intervention. No conscious personnel available.</span></div>
                </div>

                <div class="tsc-break">Pronouncement</div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">142D<br>01:19:44</span>
                    <div><span class="who">MARY</span><span class="said">Crewmember: COMMANDER YAO LI-JIE. Status: DECEASED. Cause: nutritional failure, secondary multi-organ failure. Time of death 01:19:44 ship time.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">142D<br>01:20:11</span>
                    <div><span class="who">MARY</span><span class="said">Medical bay occupancy updated. Remaining living crew: ILYUKHINA, GRACE. Mission status: CONTINUING.</span></div>
                </div>

                <div class="tsc-break">End of extract</div>

            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Ship Status Following Incident</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Crewmember</th><th>Status</th><th>Conscious</th></tr></thead>
                <tbody>
                    <tr><td>Cdr. Yao Li-Jie</td><td class="red">Deceased</td><td class="red">&mdash;</td></tr>
                    <tr><td>O. Ilyukhina</td><td class="green">Alive</td><td class="red">No &mdash; coma</td></tr>
                    <tr><td>Dr. R. Grace</td><td class="green">Alive</td><td class="red">No &mdash; coma</td></tr>
                    <tr><td colspan="2">Human crew awake</td><td class="red">0</td></tr>
                    <tr><td colspan="2">Mission continuation</td><td class="gold">Authorised</td></tr>
                </tbody>
            </table>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series VI</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-052</span>
    </div>

</div>
`
    },

    /* ========================================================
       019 — MEDICAL LOG: ILYUKHINA
       ======================================================== */

    ily: {

        title: 'ACCESSION HM-053 — MEDICAL LOG: O. ILYUKHINA',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">DECEASED IN TRANSIT</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Recovered Flight Data &middot; Medical Series</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Medical Log &mdash; O. Ilyukhina</h1>
                <p class="doc-sub">Archival reconstruction from flight data recovered by the Beetle probes.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Ship Time</span>
                <span class="val">12Y 031D</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-053 / MED-0002</div>
        </div>
        <div>
            <div class="lbl">Time Into Transit</div>
            <div class="val">12.1 years</div>
        </div>
        <div>
            <div class="lbl">Cause of Death</div>
            <div class="val val--red">Pulmonary embolism</div>
        </div>
        <div>
            <div class="lbl">Witnesses</div>
            <div class="val val--red">None</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig fig--portrait">
                <div class="fig-frame"><img src="assets/ily-dead.png" alt="Medical bay plate"></div>
                <div class="fig-cap"><span>Medical bay</span><span class="no">#053-01</span></div>
            </div>

            <div class="pfile-idbox">
                <div class="row"><span class="k">Crewmember</span><span class="v">O. Ilyukhina</span></div>
                <div class="row"><span class="k">Role</span><span class="v">Engineer</span></div>
                <div class="row"><span class="k">Status</span><span class="v red">Deceased</span></div>
                <div class="row"><span class="k">Ship time</span><span class="v">12Y 031D</span></div>
            </div>

            <div class="callout callout--warn" style="margin-top:18px;">
                <div class="hd">Conditions at incident</div>
                <p>
                    Commander Yao had already expired. Dr. Grace remained unconscious. No
                    conscious human being was aboard. Every action in the log below was taken
                    autonomously by the ship.
                </p>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Finding</h3>
            </div>

            <div class="doc-prose">
                <p>
                    Recovered telemetry indicates Specialist Olesya Ilyukhina suffered a
                    catastrophic pulmonary embolism during long-duration induced coma. The
                    obstruction was detected within three minutes of onset and correctly
                    diagnosed within nine.
                </p>
                <p class="noindent">
                    Treatment was administered on schedule and in full. It was insufficient.
                    Mission protocol prohibited waking the remaining crew, and the automated
                    system exhausted its available options in thirty-four minutes.
                </p>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Recovered Medical Log</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Automated medical system &mdash; MARY</span><span>Extract, 34 minutes</span></div>

                <div class="tsc-line">
                    <span class="t">04:17:11</span>
                    <div><span class="who">MARY</span><span class="said">Cardiovascular anomaly detected. Subject: ILYUKHINA, OLESYA. Blood oxygen saturation decreasing below baseline. Monitoring elevated to Priority 2.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">04:19:52</span>
                    <div><span class="who">MARY</span><span class="said">Diagnostic sweep initiated. Obstruction detected within pulmonary circulation. Probability of embolism 96.7%. Corrective protocol activated.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">04:24:08</span>
                    <div><span class="who">MARY</span><span class="said">Administering anticoagulant package B, oxygen saturation recovery protocol, emergency circulation stimulation. Response below expected values.</span></div>
                </div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">04:31:55</span>
                    <div><span class="who">MARY</span><span class="said">WARNING. Oxygen saturation 82% → 71% → 58%. Neurological preservation threshold approaching.</span></div>
                </div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">04:37:20</span>
                    <div><span class="who">MARY</span><span class="said">CRITICAL EVENT. Pulmonary obstruction expanded. Respiratory exchange failure. Emergency revival sequence recommended. Mission protocol prohibits awakening remaining crew. Corrective options exhausted.</span></div>
                </div>

                <div class="tsc-note">
                    [The system recommends an action it is not permitted to take, and then
                    proceeds without it.]
                </div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">04:43:09</span>
                    <div><span class="who">MARY</span><span class="said">Cardiac activity lost. Attempting autonomous resuscitation. Attempt 1 — FAILED. Attempt 2 — FAILED. Attempt 3 — FAILED.</span></div>
                </div>

                <div class="tsc-break">Pronouncement</div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">04:51:36</span>
                    <div><span class="who">MARY</span><span class="said">Crewmember: OLESYA ILYUKHINA. Status: DECEASED. Cause: pulmonary embolism. Time of death 04:51:36 ship time. Crew remaining alive: 1. Mission status: CONTINUING.</span></div>
                </div>

                <div class="tsc-break">End of extract</div>

            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Ship Status Following Incident</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Crewmember</th><th>Status</th><th>Conscious</th></tr></thead>
                <tbody>
                    <tr><td>Cdr. Yao Li-Jie</td><td class="red">Deceased</td><td class="red">&mdash;</td></tr>
                    <tr><td>O. Ilyukhina</td><td class="red">Deceased</td><td class="red">&mdash;</td></tr>
                    <tr><td>Dr. R. Grace</td><td class="green">Alive</td><td class="red">No &mdash; coma</td></tr>
                    <tr><td colspan="2">Human crew awake</td><td class="red">0</td></tr>
                    <tr><td colspan="2">Mission continuation</td><td class="gold">Authorised</td></tr>
                </tbody>
            </table>

            <div class="callout callout--note">
                <div class="hd">Archivist's note</div>
                <p>
                    From this entry until arrival at Tau Ceti, eleven months later, the
                    <em>Hail Mary</em> carried one living human being, unconscious, and two
                    who were not. Nothing aboard was awake to record it.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series VI</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-053</span>
    </div>

</div>
`
    },

    /* ========================================================
       020 — ARRIVAL & REVIVAL
       ======================================================== */

    tau: {

        title: 'ACCESSION HM-061 — ARRIVAL & CREW REVIVAL RECORD',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">ARRIVED</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Recovered Flight Data &middot; Navigation &amp; Medical</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Tau Ceti<br>Arrival Record</h1>
                <p class="doc-sub">Deceleration, revival of the surviving crewmember, and the cognitive assessment battery.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Ship Time</span>
                <span class="val">13Y 04M 17D</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-061 / NAV-0009</div>
        </div>
        <div>
            <div class="lbl">Distance Travelled</div>
            <div class="val">11.9 light years</div>
        </div>
        <div>
            <div class="lbl">Surviving Crew</div>
            <div class="val val--gold">1 &mdash; Dr. R. Grace</div>
        </div>
        <div>
            <div class="lbl">Earth Contact</div>
            <div class="val val--red">None &mdash; 11y 10m delay</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Astrophage Fuel</span><span class="val val--gold">38%</span><span class="sub">Remaining at arrival</span><div class="meter meter--gold"><span style="width:38%"></span></div></div>
            <div class="stat"><span class="lbl">Cruise Velocity</span><span class="val">0.92c</span><span class="sub">Pre-deceleration</span></div>
            <div class="stat"><span class="lbl">Crew Alive</span><span class="val val--red">1 of 3</span><span class="sub">Two lost in transit</span></div>
            <div class="stat"><span class="lbl">Automated System</span><span class="val val--green">Online</span><span class="sub">MARY nominal</span></div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/tau.png" alt="Tau Ceti on approach"></div>
                <div class="fig-cap"><span>Tau Ceti, approach</span><span class="no">#061-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/tau2.png" alt="System survey plate"></div>
                <div class="fig-cap"><span>System survey</span><span class="no">#061-02</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Navigation at Arrival</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Origin</div><div class="v">Sol</div></div>
                        <div class="kv-row"><div class="k">Destination</div><div class="v">Tau Ceti</div></div>
                        <div class="kv-row"><div class="k">Status</div><div class="v">Arrived</div></div>
                        <div class="kv-row"><div class="k">Signal delay</div><div class="v">11y 10m 14d</div></div>
                    </div>
                </div>
                <div class="plate-foot">Nav board HM-061-N.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Plate corrupt<br>Ref. #061-03<br>[ Beetle transfer loss ]
                </div>
                <div class="fig-cap"><span>Deceleration</span><span class="no">#061-03</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Revival Sequence</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Automated system &mdash; MARY</span><span>Arrival log</span></div>

                <div class="tsc-line">
                    <span class="t">06:11:02</span>
                    <div><span class="who">MARY</span><span class="said">Arrival deceleration complete. Target system: Tau Ceti. Crew awakening protocol initiated.</span></div>
                </div>

                <div class="tsc-line tsc-line--alert">
                    <span class="t">06:11:18</span>
                    <div><span class="who">MARY</span><span class="said">Crew status check complete. Commander Yao Li-Jie — DECEASED. Specialist Ilyukhina — DECEASED. Dr. Ryland Grace — vital signs present.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">06:12:40</span>
                    <div><span class="who">MARY</span><span class="said">Neural stimulation protocol engaged. Muscle reactivation sequence started.</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">06:13:01</span>
                    <div><span class="who">MARY</span><span class="said">Administering DGSE-47 retrograde memory suppression compound.</span></div>
                </div>

            </div>

            <div class="callout callout--warn">
                <div class="hd">Redaction lifted &mdash; compound DGSE-47</div>
                <p>
                    <strong>Purpose:</strong> temporary memory inhibition during post-coma
                    cognitive recovery.<br>
                    <strong>Source:</strong> French intelligence service archives.<br>
                    <strong>Expected effect:</strong> long-term retrograde amnesia without loss
                    of education, language retention or technical knowledge.<br>
                    <strong>Authorisation:</strong> E. Stratt.
                </p>
            </div>

            <p class="fine">
                The compound was loaded aboard as part of the standard revival pharmacy.
                Its presence was not disclosed to the crew, and no consent record exists
                in any surviving file.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Cognitive Assessment &mdash; Battery 001</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Automated recovery protocol</span><span>Log #001</span></div>

                <div class="tsc-line"><span class="t">05:15:04</span><div><span class="who">MARY</span><span class="said">Question 001. What is two plus two?</span></div></div>
                <div class="tsc-line"><span class="t">05:15:12</span><div><span class="who">Grace</span><span class="said">Lrmln.</span></div></div>
                <div class="tsc-line"><span class="t">05:15:13</span><div><span class="who">MARY</span><span class="said">Incorrect.</span></div></div>
                <div class="tsc-line"><span class="t">05:15:27</span><div><span class="who">Grace</span><span class="said">Hlllch.</span></div></div>
                <div class="tsc-line"><span class="t">05:15:51</span><div><span class="who">Grace</span><span class="said">Glunn!</span></div></div>
                <div class="tsc-line"><span class="t">05:16:04</span><div><span class="who">Grace</span><span class="said">Fffr.</span></div></div>
                <div class="tsc-line"><span class="t">05:16:13</span><div><span class="who">Grace</span><span class="said">Fffr… oooh… rrrr.</span></div></div>
                <div class="tsc-line"><span class="t">05:16:24</span><div><span class="who">Grace</span><span class="said">Fffoouurr.</span></div></div>
                <div class="tsc-line"><span class="t">05:16:25</span><div><span class="who">MARY</span><span class="said">Correct.</span></div></div>

                <div class="tsc-note">[Six attempts. Elapsed time to first correct answer: 81 seconds.]</div>

                <div class="tsc-line">
                    <span class="t">05:16:30</span>
                    <div><span class="who">MARY</span><span class="said">You have been in an induced coma. You may experience memory loss and difficulty speaking.</span></div>
                </div>

                <div class="tsc-line"><span class="t">05:16:39</span><div><span class="who">MARY</span><span class="said">Question 002. What is the cube root of eight?</span></div></div>
                <div class="tsc-line"><span class="t">05:16:45</span><div><span class="who">Grace</span><span class="said">Where am I?</span></div></div>
                <div class="tsc-line"><span class="t">05:16:46</span><div><span class="who">MARY</span><span class="said">Incorrect.</span></div></div>
                <div class="tsc-line"><span class="t">05:16:55</span><div><span class="who">Grace</span><span class="said">Two times e to the two-i-pi.</span></div></div>
                <div class="tsc-line"><span class="t">05:16:57</span><div><span class="who">MARY</span><span class="said">Incorrect.</span></div></div>
                <div class="tsc-line"><span class="t">05:17:08</span><div><span class="who">Grace</span><span class="said">Two.</span></div></div>
                <div class="tsc-line"><span class="t">05:17:09</span><div><span class="who">MARY</span><span class="said">Correct.</span></div></div>

                <div class="tsc-note">
                    [Archivist's note: the rejected answer is mathematically equivalent to the
                    accepted one. Technical knowledge is intact well before identity returns.]
                </div>

                <div class="tsc-line"><span class="t">05:17:47</span><div><span class="who">MARY</span><span class="said">Question 003. What is your name?</span></div></div>
                <div class="tsc-line"><span class="t">05:17:54</span><div><span class="who">Grace</span><span class="said">Pfft. Seriously?</span></div></div>
                <div class="tsc-line"><span class="t">05:18:03</span><div><span class="who">Grace</span><span class="said">Uh…</span></div></div>
                <div class="tsc-line"><span class="t">05:18:12</span><div><span class="who">Grace</span><span class="said">Um.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">05:18:15</span><div><span class="who">MARY</span><span class="said">Initiating sedation protocol.</span></div></div>

            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Cognitive Assessment &mdash; Battery 002</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Automated recovery protocol</span><span>Log #002</span></div>

                <div class="tsc-line"><span class="t">06:16:05</span><div><span class="who">MARY</span><span class="said">Question 001. What is your name?</span></div></div>
                <div class="tsc-line"><span class="t">06:16:09</span><div><span class="who">Grace</span><span class="said">I still don't know that.</span></div></div>
                <div class="tsc-line"><span class="t">06:16:16</span><div><span class="who">Grace</span><span class="said">J… John?</span></div></div>
                <div class="tsc-line"><span class="t">06:16:21</span><div><span class="who">Grace</span><span class="said">Bite me.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">06:16:25</span><div><span class="who">MARY</span><span class="said">Warning. Life support connections compromised.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">06:16:28</span><div><span class="who">Grace</span><span class="said">AAAAAAAAAAAH!</span></div></div>
                <div class="tsc-line"><span class="t">06:16:31</span><div><span class="who">MARY</span><span class="said">Deploying assistance arms.</span></div></div>
                <div class="tsc-line"><span class="t">06:16:34</span><div><span class="who">Grace</span><span class="said">Hey! One of you, wake up!</span></div></div>
                <div class="tsc-line"><span class="t">06:16:39</span><div><span class="who">Grace</span><span class="said">One of you humans, wake up. Please.</span></div></div>
                <div class="tsc-line"><span class="t">06:16:42</span><div><span class="who">MARY</span><span class="said">Cognitive assessment failure.</span></div></div>

            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Cognitive Assessment &mdash; Battery 003</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Automated recovery protocol</span><span>Log #003</span></div>

                <div class="tsc-line"><span class="t">06:24:11</span><div><span class="who">Grace</span><span class="said">Where am I?!</span></div></div>
                <div class="tsc-line"><span class="t">06:24:27</span><div><span class="who">Grace</span><span class="said">People! Hello?!</span></div></div>
                <div class="tsc-note">[Internal log: subject displaying disorientation.]</div>
                <div class="tsc-line"><span class="t">06:24:44</span><div><span class="who">Grace</span><span class="said">Red leather. Yellow leather. Red leather. Yellow leather…</span></div></div>
                <div class="tsc-line"><span class="t">06:24:52</span><div><span class="who">Grace</span><span class="said">Why is there an atomic resolution scanning electron microscope?</span></div></div>
                <div class="tsc-line"><span class="t">06:24:58</span><div><span class="who">Grace</span><span class="said">Why do I know that?</span></div></div>
                <div class="tsc-line"><span class="t">06:25:01</span><div><span class="who">Grace</span><span class="said">Am I smart?!</span></div></div>
                <div class="tsc-note">[Internal log: speech function improving. Knowledge retention detected.]</div>

                <div class="tsc-line"><span class="t">06:25:27</span><div><span class="who">Grace</span><span class="said">Can I speak to the person in charge? The captain.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">06:25:32</span><div><span class="who">MARY</span><span class="said">Captain Yáo Li-Jie. Deceased.</span></div></div>
                <div class="tsc-line"><span class="t">06:25:39</span><div><span class="who">Grace</span><span class="said">Okay… where are the living people?</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">06:25:40</span><div><span class="who">MARY</span><span class="said">Doctor Ryland Grace. End of manifest.</span></div></div>
                <div class="tsc-line"><span class="t">06:25:48</span><div><span class="who">Grace</span><span class="said">I can't be the only person here.</span></div></div>
                <div class="tsc-line"><span class="t">06:25:49</span><div><span class="who">MARY</span><span class="said">Pilot detected.</span></div></div>
                <div class="tsc-line"><span class="t">06:25:54</span><div><span class="who">Grace</span><span class="said">No. No no no. Not the pilot.</span></div></div>

                <div class="tsc-line"><span class="t">06:26:01</span><div><span class="who">Grace</span><span class="said">Call Houston.</span></div></div>
                <div class="tsc-line"><span class="t">06:26:02</span><div><span class="who">MARY</span><span class="said">Unknown command.</span></div></div>
                <div class="tsc-line"><span class="t">06:26:10</span><div><span class="who">Grace</span><span class="said">Operation Go Home. In effect.</span></div></div>
                <div class="tsc-line"><span class="t">06:26:11</span><div><span class="who">MARY</span><span class="said">Invalid operation.</span></div></div>

                <div class="tsc-line"><span class="t">06:27:04</span><div><span class="who">Grace</span><span class="said">That's the Sun. There it is. So we're… Neptune-ish?</span></div></div>
                <div class="tsc-line"><span class="t">06:27:17</span><div><span class="who">Grace</span><span class="said">Let's call Earth.</span></div></div>
                <div class="tsc-line tsc-line--alert">
                    <span class="t">06:27:18</span>
                    <div><span class="who">MARY</span><span class="said">Current transmission time to Earth is 11 years, 10 months, 14 days, 6 hours.</span></div>
                </div>
                <div class="tsc-line"><span class="t">06:27:29</span><div><span class="who">Grace</span><span class="said">Oh. No. You're wrong.</span></div></div>
                <div class="tsc-line"><span class="t">06:27:40</span><div><span class="who">Grace</span><span class="said">I need a map.</span></div></div>

                <div class="tsc-note">[Internal log: navigational display accessed. Elevated stress response detected.]</div>

                <div class="tsc-line"><span class="t">06:28:11</span><div><span class="who">Grace</span><span class="said">Oh… That's far. That's really far.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">06:28:36</span><div><span class="who">Grace</span><span class="said">That's not our Sun.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">06:28:47</span><div><span class="who">Grace</span><span class="said">That's not our Sun.</span></div></div>

                <div class="tsc-break">End of revival record</div>

            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series VII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-061</span>
    </div>

</div>
`
    },

    /* ========================================================
       021 — CONTACT FILE
       ======================================================== */

    contact: {

        title: 'ACCESSION XEN-001 — EXTRATERRESTRIAL CONTACT FILE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">CONTACT PROTOCOL ALPHA-1</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Xenology Division</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Contact File<br>Blip-A</h1>
                <p class="doc-sub">Detection, identification and classification of the first non-human vessel encountered by humanity.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Mission Elapsed</span>
                <span class="val">T+13.2 years</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">XEN-001 / CON-0001</div>
        </div>
        <div>
            <div class="lbl">Star System</div>
            <div class="val">Tau Ceti</div>
        </div>
        <div>
            <div class="lbl">Signal Designation</div>
            <div class="val val--gold">Blip-A</div>
        </div>
        <div>
            <div class="lbl">Threat Status</div>
            <div class="val">Undetermined at detection</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/signal.png" alt="Initial detection plate"></div>
                <div class="fig-cap"><span>Initial detection</span><span class="no">#001-01</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Initial Scan Results</div>
                <div class="plate-body">
                    <ul class="doc-list" style="margin:0;">
                        <li>Artificial structure detected</li>
                        <li>Controlled propulsion signature</li>
                        <li>Non-human engineering profile</li>
                        <li>Unknown energy architecture</li>
                        <li>No database match found</li>
                    </ul>
                </div>
                <div class="plate-foot">Sweep XEN-001-S, first pass.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/ships.png" alt="Vessel comparison plate"></div>
                <div class="fig-cap"><span>Vessel comparison</span><span class="no">#001-02</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Detection</h3>
            </div>

            <div class="doc-prose">
                <p>
                    An unknown active signal source was detected within the Tau Ceti system
                    at mission elapsed time 13.2 years. Initial scans returned an artificial
                    structure under controlled movement, of non-human origin, matching no
                    entry in any catalogue carried aboard.
                </p>
                <p class="noindent">
                    Recovered telemetry confirms this as humanity's first encounter with
                    intelligent extraterrestrial life. The vessel was designated Blip-A by
                    the surviving crewmember at the moment of detection, and the designation
                    has been retained.
                </p>
            </div>

            <div class="tsc">
                <div class="tsc-hd"><span>Sensor sweep &mdash; sequence log</span><span>Extract</span></div>
                <div class="tsc-line"><span class="t">01</span><div><span class="who">System</span><span class="said">Active sensor sweep complete.</span></div></div>
                <div class="tsc-line"><span class="t">02</span><div><span class="who">System</span><span class="said">Object lock acquired.</span></div></div>
                <div class="tsc-line"><span class="t">03</span><div><span class="who">System</span><span class="said">Trajectory analysis complete.</span></div></div>
                <div class="tsc-line"><span class="t">04</span><div><span class="who">System</span><span class="said">Technological origin confirmed.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">05</span><div><span class="who">System</span><span class="said">First non-human vessel detected.</span></div></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Sealed Xenological Material</h3>
            </div>

            <p class="fine" style="margin-bottom:14px;">
                Material below was restricted under Interstellar Contact Protocol Alpha-1
                and released on completion of the recovery programme.
            </p>

            <button class="doc-reveal-btn"
                    data-show="DECLASSIFY XENOLOGICAL FILES"
                    data-hide="RESEAL XENOLOGICAL FILES"
                    onclick="revealDoc(this)">DECLASSIFY XENOLOGICAL FILES</button>

            <div class="doc-reveal">

                <div class="gallery" style="margin-bottom:20px;">
                    <div class="fig fig--square">
                        <div class="fig-frame"><img src="assets/rainbow.png" alt="Specimen R-01"></div>
                        <div class="fig-cap"><span>Specimen R-01</span><span class="no">#001-A</span></div>
                    </div>
                    <div class="fig fig--square">
                        <div class="fig-frame"><img src="assets/ships.png" alt="Eridian interstellar vessel"></div>
                        <div class="fig-cap"><span>Eridian vessel</span><span class="no">#001-B</span></div>
                    </div>
                </div>

                <div class="doc-h4" style="margin-top:0;">Contact profile</div>

                <div class="kv">
                    <div class="kv-row"><div class="k">Designation</div><div class="v">Rocky</div></div>
                    <div class="kv-row"><div class="k">Species</div><div class="v">Eridian</div></div>
                    <div class="kv-row"><div class="k">Homeworld</div><div class="v">Erid &mdash; 40 Eridani system</div></div>
                    <div class="kv-row"><div class="k">Contact status</div><div class="v">Friendly &mdash; sustained cooperation</div></div>
                    <div class="kv-row"><div class="k">Occupation</div><div class="v">Engineer</div></div>
                </div>

                <div class="doc-h4">Biological data</div>

                <table class="ledger">
                    <thead><tr><th>Characteristic</th><th>Finding</th></tr></thead>
                    <tbody>
                        <tr><td>Biochemistry</td><td>Ammonia-based</td></tr>
                        <tr><td>Pressure adaptation</td><td>Extreme &mdash; ~29 atm native</td></tr>
                        <tr><td>Perception</td><td>Echolocation</td></tr>
                        <tr><td>Visual organs</td><td class="red">None</td></tr>
                        <tr><td>Structure</td><td>Metallic exoskeleton</td></tr>
                        <tr><td>Body plan</td><td>Five-limbed, radially arranged</td></tr>
                    </tbody>
                </table>

                <div class="doc-h4">Technological assessment</div>

                <ul class="doc-list">
                    <li>Interstellar-capable spacecraft, independently developed.</li>
                    <li>Advanced materials science &mdash; xenonite and related compounds.</li>
                    <li>Mechanical rather than electronic computation.</li>
                    <li>Astrophage energy utilisation, arrived at independently.</li>
                    <li>An active stellar-dimming research programme, running in parallel to our own and for the same reason.</li>
                </ul>

                <div class="callout callout--gold">
                    <div class="hd">Assessment</div>
                    <p>
                        Two civilisations, unaware of one another, dispatched a vessel to the
                        same system to investigate the same threat, and arrived close enough
                        in time to meet. Neither delegation was equipped for contact. Both
                        were equipped for engineering.
                    </p>
                </div>

                <div class="doc-h4">Recovered communications</div>

                <div class="tsc">
                    <div class="tsc-hd"><span>Translated exchange &mdash; early contact period</span><span>Extract</span></div>
                    <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Rocky</span><span class="said">Grace, question?</span></div></div>
                    <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Rocky</span><span class="said">Rocky help.</span></div></div>
                    <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Rocky</span><span class="said">You are friend, Grace.</span></div></div>
                </div>

            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Xenology &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession XEN-001</span>
    </div>

</div>
`
    },

    /* ========================================================
       022 — ADRIAN BIOSPHERE
       ======================================================== */

    adrian: {

        title: 'ACCESSION XEN-014 — ADRIAN BIOSPHERE ANALYSIS',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">CONFIRMED BIOSPHERE</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Xenology Division &middot; Recovered Dataset</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Adrian<br>Biosphere Analysis</h1>
                <p class="doc-sub">Sampling within the Adrian Petrova Line &mdash; the first confirmed non-terrestrial ecosystem.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Survey Period</span>
                <span class="val">T+13.4 years</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">XEN-014 / BIO-0003</div>
        </div>
        <div>
            <div class="lbl">Location</div>
            <div class="val">Adrian &mdash; Petrova Line</div>
        </div>
        <div>
            <div class="lbl">Primary Researcher</div>
            <div class="val">Dr. R. Grace</div>
        </div>
        <div>
            <div class="lbl">Assisting</div>
            <div class="val val--gold">Rocky (Eridian)</div>
        </div>
    </section>

    <div class="callout callout--gold">
        <div class="hd">Executive summary</div>
        <p>
            Sampling within Adrian's Petrova Line confirmed a complete extraterrestrial
            ecosystem. Astrophage had been classified as an isolated organism; it is in
            fact one member of an interacting community occupying distinct ecological
            niches. Adrian supports the first confirmed non-terrestrial biosphere ever
            documented.
        </p>
    </div>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/adrian.png" alt="Adrian, orbital"></div>
                <div class="fig-cap"><span>Adrian, orbital</span><span class="no">#014-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/line.png" alt="Petrova Line, Adrian"></div>
                <div class="fig-cap"><span>Petrova Line</span><span class="no">#014-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/protozoa.png" alt="Microscopy, sample field"></div>
                <div class="fig-cap"><span>Microscopy I</span><span class="no">#014-03</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/live.png" alt="Microscopy, live organisms"></div>
                <div class="fig-cap"><span>Microscopy II</span><span class="no">#014-04</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Plate unrecovered<br>Ref. #014-05<br>[ Sample lost in transfer ]
                </div>
                <div class="fig-cap"><span>Microscopy III</span><span class="no">#014-05</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Sample Findings</h3>
            </div>

            <ul class="doc-list">
                <li>Multiple distinct microbial organisms identified.</li>
                <li>Multicellular structures observed.</li>
                <li>Predatory feeding behaviour documented directly.</li>
                <li>Stable energy transfer between trophic levels confirmed.</li>
                <li>Astrophage occupies a position within the food chain rather than standing outside it.</li>
            </ul>

            <div class="doc-quote">
                Which means… there's life on Adrian.
                <cite>Dr. Ryland Grace &mdash; sample log, first predation observed</cite>
            </div>

            <p>
                The finding reframes the entire crisis. Astrophage is not an anomaly, a
                weapon, or a construct. It is a species with predators, and predators are
                the only thing in this record that has ever been useful to us.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>EVA-04 Sampling Mission</h3>
            </div>

            <button class="doc-reveal-btn"
                    data-show="OPEN EVA RESEARCH LOG"
                    data-hide="CLOSE EVA RESEARCH LOG"
                    onclick="revealDoc(this)">OPEN EVA RESEARCH LOG</button>

            <div class="doc-reveal">

                <div class="gallery" style="margin-bottom:20px;">
                    <div class="fig fig--square">
                        <div class="fig-frame"><img src="assets/eva.png" alt="EVA, tether camera"></div>
                        <div class="fig-cap"><span>Tether cam</span><span class="no">#014-A</span></div>
                    </div>
                    <div class="fig fig--square">
                        <div class="fig-frame"><img src="assets/astro.png" alt="Sample collection"></div>
                        <div class="fig-cap"><span>Collection</span><span class="no">#014-B</span></div>
                    </div>
                    <div class="fig fig--square">
                        <div class="fig-frame"><img src="assets/poloroid.jpg" alt="EVA record photograph"></div>
                        <div class="fig-cap"><span>EVA record</span><span class="no">#014-C</span></div>
                    </div>
                </div>

                <table class="ledger">
                    <caption>EVA-04 &mdash; event log</caption>
                    <thead><tr><th>UTC</th><th>Event</th></tr></thead>
                    <tbody>
                        <tr><td>07:14</td><td>Airlock opened</td></tr>
                        <tr><td>07:16</td><td>EVA commenced</td></tr>
                        <tr><td>07:21</td><td class="gold">Biological activity observed directly</td></tr>
                        <tr><td>07:39</td><td>Sample collection complete</td></tr>
                        <tr><td>08:02</td><td>Return to vessel</td></tr>
                    </tbody>
                </table>

                <div class="doc-h4">Field notes</div>

                <p>
                    Visual observation confirmed dense biological activity throughout the
                    Petrova Line. Numerous microscopic organisms exhibited autonomous movement
                    and appeared to occupy specialised ecological roles rather than drifting
                    passively.
                </p>

                <div class="doc-quote">
                    Like swimming through glowing alien plankton.
                    <cite>Dr. Ryland Grace &mdash; EVA-04 field note</cite>
                </div>

            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Xenology &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession XEN-014</span>
    </div>

</div>
`
    },

    /* ========================================================
       023 — ATMOSPHERIC COLLECTION ACCIDENT
       ======================================================== */

    fishing: {

        title: 'ACCESSION HM-078 — INCIDENT REPORT: ATMOSPHERIC COLLECTION',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">LEVEL 4 REVIEW</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Incident Investigation</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Atmospheric<br>Collection Accident</h1>
                <p class="doc-sub">Hull breach and contamination event during atmospheric sampling at Adrian.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Event</span>
                <span class="val">03:14:10 ship time</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-078 / INQ-0004</div>
        </div>
        <div>
            <div class="lbl">Event Type</div>
            <div class="val val--red">Catastrophic &mdash; in flight</div>
        </div>
        <div>
            <div class="lbl">Location</div>
            <div class="val">Adrian upper atmosphere</div>
        </div>
        <div>
            <div class="lbl">Outcome</div>
            <div class="val val--green">Survived</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/fuel.png" alt="Fuel compartment area"></div>
                <div class="fig-cap"><span>Fuel compartments</span><span class="no">#078-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/contaminent.png" alt="Contamination survey"></div>
                <div class="fig-cap"><span>Contamination</span><span class="no">#078-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    External plate lost<br>Ref. #078-03<br>[ Camera destroyed in event ]
                </div>
                <div class="fig-cap"><span>External view</span><span class="no">#078-03</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Mission Plan Review</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Manoeuvre</div><div class="v">Atmospheric skim, powered</div></div>
                        <div class="kv-row"><div class="k">Flown by</div><div class="v">Dr. R. Grace</div></div>
                        <div class="kv-row"><div class="k">Certification</div><div class="v">None held</div></div>
                        <div class="kv-row"><div class="k">Failure margin</div><div class="v">&lt; 3%</div></div>
                    </div>
                </div>
                <div class="plate-foot">Review board HM-078-R.</div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>The Manoeuvre</h3>
            </div>

            <div class="doc-quote">
                Hello Earth. Plan is like fishing.
                <cite>Rocky &mdash; recovered translation, mission planning</cite>
            </div>

            <p>
                The collection required the vessel to enter Adrian's upper atmosphere while
                holding precise velocity, orientation and altitude, trailing a collection
                chain through the sampling layer. The spacecraft was flown manually by
                Dr. Grace, who held no pilot certification of any kind. Computed failure
                margin was under three percent.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Critical Event Timeline</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Ship Time</th><th>Event</th><th>Actor</th></tr></thead>
                <tbody>
                    <tr><td>03:14:10</td><td class="red">Hull breach detected &mdash; portside compartments 11 &amp; 12</td><td>Automatic</td></tr>
                    <tr><td>03:14:16</td><td>Fuel compartment twelve jettisoned</td><td>Confirmed</td></tr>
                    <tr><td>03:14:20</td><td>Fuel compartment eleven jettisoned</td><td>Confirmed</td></tr>
                    <tr><td>03:15:02</td><td class="red">Ammonia contamination detected</td><td>Automatic</td></tr>
                    <tr><td>03:15:09</td><td>Centrifuge mode activated</td><td>Confirmed</td></tr>
                    <tr><td>03:18:25</td><td class="gold">Automated medical response initiated</td><td>Automatic</td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Recovered Alarm Sequence</h3>
            </div>

            <div class="tsc">
                <div class="tsc-hd"><span>MARY &mdash; alarm and confirmation log</span><span>Extract</span></div>
                <div class="tsc-line"><span class="t">03:03:02</span><div><span class="who">MARY</span><span class="said">Manual mode activated.</span></div></div>
                <div class="tsc-line"><span class="t">03:14:05</span><div><span class="who">MARY</span><span class="said">Altitude warning.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:06</span><div><span class="who">MARY</span><span class="said">Exterior temperature elevated.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:08</span><div><span class="who">MARY</span><span class="said">Hull pressure anomaly detected.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:10</span><div><span class="who">MARY</span><span class="said">Hull breach detected. Location: portside fuel compartments eleven and twelve.</span></div></div>
                <div class="tsc-line"><span class="t">03:14:12</span><div><span class="who">MARY</span><span class="said">Jettison port fuel tank compartment twelve. Confirm?</span></div></div>
                <div class="tsc-line"><span class="t">03:14:16</span><div><span class="who">MARY</span><span class="said">Jettison confirmed: compartment twelve.</span></div></div>
                <div class="tsc-line"><span class="t">03:14:16</span><div><span class="who">MARY</span><span class="said">Jettison port fuel tank compartment eleven. Confirm?</span></div></div>
                <div class="tsc-line"><span class="t">03:14:20</span><div><span class="who">MARY</span><span class="said">Jettison confirmed: compartment eleven.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:15:02</span><div><span class="who">MARY</span><span class="said">Contaminant detected. Ammonia.</span></div></div>
                <div class="tsc-line"><span class="t">03:15:09</span><div><span class="who">MARY</span><span class="said">Centrifuge mode activated.</span></div></div>
                <div class="tsc-line"><span class="t">03:18:25</span><div><span class="who">MARY</span><span class="said">Automated medical response initiated.</span></div></div>
                <div class="tsc-break">Subject unconscious from this point</div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Post-Incident Medical</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Injuries Sustained</th><th>Treatment Administered</th></tr></thead>
                <tbody>
                    <tr><td class="red">Fractured nasal bone</td><td class="green">Emergency sedation</td></tr>
                    <tr><td class="red">Orbital laceration</td><td class="green">Automated injection series</td></tr>
                    <tr><td class="red">Third-degree thermal burns</td><td class="green">Burn treatment protocol</td></tr>
                    <tr><td class="red">Hypoxia exposure</td><td class="green">Oxygen stabilisation</td></tr>
                    <tr><td class="red">Pressure trauma</td><td class="green">Pressure recovery cycle</td></tr>
                </tbody>
            </table>

            <div class="callout callout--note">
                <div class="hd">Board observation</div>
                <p>
                    Every element of the automated response performed to specification. The
                    manoeuvre itself was flown by an untrained pilot inside a three percent
                    margin and, on the evidence, flown correctly. The breach originated in a
                    structural tolerance, not in the flying.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series VIII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-078</span>
    </div>

</div>
`
    },

    /* ========================================================
       024 — TAUMOEBA DOSSIER
       ======================================================== */

    taumoeba: {

        title: 'ACCESSION XEN-022 — TAUMOEBA RESEARCH DOSSIER',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">PROGRAMME SUCCESSFUL</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Xenology Division &middot; Beetle Archive</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Taumoeba</h1>
                <p class="doc-sub">Identification, characterisation and directed breeding of the first known Astrophage predator.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Programme</span>
                <span class="val">T+13.5 &ndash; 14.1 years</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">XEN-022 / BIO-0011</div>
        </div>
        <div>
            <div class="lbl">Origin</div>
            <div class="val">Adrian &mdash; 91.2 km altitude</div>
        </div>
        <div>
            <div class="lbl">Classification</div>
            <div class="val">Amoeboid microorganism</div>
        </div>
        <div>
            <div class="lbl">Food Source</div>
            <div class="val val--gold">Astrophage</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/protozoa.png" alt="Taumoeba microscopy"></div>
                <div class="fig-cap"><span>Taumoeba</span><span class="no">#022-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/live.png" alt="Live feeding observation"></div>
                <div class="fig-cap"><span>Feeding, live</span><span class="no">#022-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/white.png" alt="Culture plate"></div>
                <div class="fig-cap"><span>Culture plate</span><span class="no">#022-03</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Biological Findings</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">DNA</div><div class="v">Present</div></div>
                        <div class="kv-row"><div class="k">Mitochondria</div><div class="v">Present</div></div>
                        <div class="kv-row"><div class="k">Energy storage</div><div class="v">Glucose</div></div>
                        <div class="kv-row"><div class="k">Krebs cycle</div><div class="v">Active</div></div>
                        <div class="kv-row"><div class="k">Cell type</div><div class="v">Eukaryotic</div></div>
                    </div>
                </div>
                <div class="plate-foot">Assay XEN-022-B.</div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Identification</h3>
            </div>

            <p>
                Taumoeba is the first confirmed extraterrestrial predator identified by
                humanity. Samples were recovered from Adrian's upper atmosphere at
                approximately 91.2 kilometres above the surface, during the collection
                operation recorded at Accession HM-078.
            </p>

            <p>
                Analysis confirmed that despite originating on an alien world the organism
                shares a substantial set of cellular characteristics with terrestrial life:
                DNA, mitochondria, glucose metabolism, an active Krebs cycle, eukaryotic
                organisation.
            </p>

            <div class="doc-quote">
                It's alive. It has DNA. It has mitochondria. It's just an amoeba from
                another planet.
                <cite>Dr. Ryland Grace &mdash; characterisation log</cite>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Nitrogen Resistance Programme</h3>
            </div>

            <div class="kv">
                <div class="kv-row">
                    <div class="k">Objective</div>
                    <div class="v">Develop a strain able to survive Venusian atmospheric conditions</div>
                </div>
                <div class="kv-row">
                    <div class="k">Method</div>
                    <div class="v">Successive breeding cycles in xenonite breeder tanks supplied by Eridian engineering</div>
                </div>
                <div class="kv-row">
                    <div class="k">Constraint</div>
                    <div class="v">Native tolerance approximately zero; Venus requires 8.0% N₂</div>
                </div>
            </div>

            <table class="ledger" style="margin-top:18px;">
                <caption>Breeding progression &mdash; nitrogen tolerance</caption>
                <thead><tr><th>Strain</th><th>N₂ Tolerance</th><th>Progress to Target</th></tr></thead>
                <tbody>
                    <tr><td>Taumoeba-06</td><td class="num">0.6%</td><td><div class="meter"><span style="width:7.5%"></span></div></td></tr>
                    <tr><td>Taumoeba-10</td><td class="num">1.0%</td><td><div class="meter"><span style="width:12.5%"></span></div></td></tr>
                    <tr><td>Taumoeba-20</td><td class="num">2.0%</td><td><div class="meter"><span style="width:25%"></span></div></td></tr>
                    <tr><td>Taumoeba-35</td><td class="num gold">3.5%</td><td><div class="meter meter--gold"><span style="width:44%"></span></div></td></tr>
                    <tr><td>Target</td><td class="num red">8.0%</td><td><div class="meter meter--red"><span style="width:100%"></span></div></td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Recovered Laboratory Log</h3>
            </div>

            <div class="tsc">
                <div class="tsc-hd"><span>Laboratory exchange &mdash; translated</span><span>Extract</span></div>
                <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Grace</span><span class="said">Every time I introduce nitrogen, it dies.</span></div></div>
                <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Rocky</span><span class="said">Current nitrogen tolerance, question?</span></div></div>
                <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Grace</span><span class="said">Tank three had survivors at 0.6 percent. I'm breeding them up now.</span></div></div>
                <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Rocky</span><span class="said">You. Be happy now.</span></div></div>
                <div class="tsc-line"><span class="t">&mdash;</span><div><span class="who">Grace</span><span class="said">We still need eight percent. Until then we're not done.</span></div></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Taumoeba-35 &mdash; Final Strain</h3>
            </div>

            <div class="stats">
                <div class="stat"><span class="lbl">Nitrogen Tolerance</span><span class="val val--gold">3.5%</span><span class="sub">Achieved</span></div>
                <div class="stat"><span class="lbl">Pressure Tolerance</span><span class="val">0.02</span><span class="sub">atmospheres</span></div>
                <div class="stat"><span class="lbl">Venus Compatible</span><span class="val val--green">Yes</span><span class="sub">Verified in tank</span></div>
                <div class="stat"><span class="lbl">Astrophage Predation</span><span class="val val--green">Confirmed</span><span class="sub">Sustained</span></div>
            </div>

            <div class="callout callout--gold">
                <div class="hd">Mission significance</div>
                <p>
                    Taumoeba-35 is the first known organism capable of consuming Astrophage
                    under conditions compatible with deployment inside the Sol system.
                    Cultures were loaded into all four Beetle return probes prior to departure.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Xenology &middot; Series III</span>
        <span>Sheet 1 of 1</span>
        <span>Accession XEN-022</span>
    </div>

</div>
`
    },

    /* ========================================================
       025 — RETURN TRANSIT
       ======================================================== */

    return: {

        title: 'ACCESSION HM-090 — RETURN TRANSIT & COURSE DIVERGENCE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">COURSE MODIFIED</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Navigation Reconstruction</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Return Transit<br>&amp; Divergence</h1>
                <p class="doc-sub">Departure from Tau Ceti, and the trajectory correction that was not discovered for twenty-three years.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Departure</span>
                <span class="val">T+14.2 years</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-090 / NAV-0021</div>
        </div>
        <div>
            <div class="lbl">Vessel</div>
            <div class="val">Hail Mary</div>
        </div>
        <div>
            <div class="lbl">Original Trajectory</div>
            <div class="val">Sol &mdash; direct return</div>
        </div>
        <div>
            <div class="lbl">Actual Destination</div>
            <div class="val val--red">40 Eridani</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Mission Outcome</span><span class="val val--green">Success</span><span class="sub">Primary objectives met</span></div>
            <div class="stat"><span class="lbl">Crew Survivors</span><span class="val">01</span><span class="sub">Of three</span></div>
            <div class="stat"><span class="lbl">Projected Earth ETA</span><span class="val val--gold">4.2 yr</span><span class="sub">Under original solution</span></div>
            <div class="stat"><span class="lbl">Beetle Payload</span><span class="val val--green">Verified</span><span class="sub">Taumoeba stable</span></div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/beetles.png" alt="Beetle probes at deployment"></div>
                <div class="fig-cap"><span>Beetle deployment</span><span class="no">#090-01</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Navigation Solution</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Origin</div><div class="v">Tau Ceti</div></div>
                        <div class="kv-row"><div class="k">Planned</div><div class="v">Sol system</div></div>
                        <div class="kv-row"><div class="k">Executed</div><div class="v">40 Eridani</div></div>
                        <div class="kv-row"><div class="k">Autonomous range</div><div class="v">4.2 years</div></div>
                    </div>
                </div>
                <div class="plate-foot">Reconstructed from Beetle telemetry.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/wait.png" alt="Deep space observation"></div>
                <div class="fig-cap"><span>Departure corridor</span><span class="no">#090-02</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Departure</h3>
            </div>

            <div class="doc-prose">
                <p>
                    Following successful deployment of Taumoeba cultures into all four Beetle
                    probes, the <em>Hail Mary</em> departed the Tau Ceti system under full
                    propulsion. Initial navigation solutions placed the vessel on a direct
                    return trajectory toward Earth, with arrival projected approximately four
                    years after Beetle deployment.
                </p>
                <p class="noindent">
                    At departure Dr. Ryland Grace was the only surviving member of the crew
                    and the first human being to complete an interstellar transit.
                </p>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Navigation Anomaly</h3>
            </div>

            <p>
                Telemetry later recovered from the Beetles established that the Earth-bound
                return was abandoned. The vessel executed a major trajectory correction and
                left the Sol return corridor entirely.
            </p>

            <table class="ledger">
                <thead><tr><th>Parameter</th><th>Planned</th><th>Executed</th></tr></thead>
                <tbody>
                    <tr><td>Destination</td><td>Sol</td><td class="red">40 Eridani</td></tr>
                    <tr><td>Transit duration</td><td class="num">4.2 years</td><td class="num red">Undetermined</td></tr>
                    <tr><td>Return of crew</td><td class="green">Yes</td><td class="red">No</td></tr>
                    <tr><td>Fuel reserve at burn</td><td class="num">Nominal</td><td class="num gold">Committed</td></tr>
                </tbody>
            </table>

            <div class="callout callout--warn">
                <div class="hd">Archive note</div>
                <p>
                    At the time this manoeuvre occurred, Earth had no knowledge that it had
                    taken place. For nearly twenty-three years humanity believed Dr. Grace
                    was still coming home. Every memorial raised in that period was raised
                    for a man travelling in the opposite direction.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series IX</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-090</span>
    </div>

</div>
`
    },

    /* ========================================================
       026 — CONTAMINATION ALERT LOGS
       ======================================================== */

    contaminant: {

        title: 'ACCESSION HM-084 — INTERNAL ALERT LOGS: CONTAINMENT EVENT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">BIOHAZARD CONTAINMENT</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Recovered Ship Telemetry</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Internal Alert Logs &mdash; Containment Event</h1>
                <p class="doc-sub">Cleanroom breach, atmospheric loss and engine shutdown. Partially corrupt on recovery.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Log Window</span>
                <span class="val">03:14 &ndash; 03:23</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-084 / TEL-0033</div>
        </div>
        <div>
            <div class="lbl">Source Compartment</div>
            <div class="val val--red">Cleanroom</div>
        </div>
        <div>
            <div class="lbl">Atmosphere</div>
            <div class="val val--red">Unstable</div>
        </div>
        <div>
            <div class="lbl">Record Integrity</div>
            <div class="val val--gold">Partial &mdash; corrupt segments</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/contaminent.png" alt="Cleanroom, post-event"></div>
                <div class="fig-cap"><span>Cleanroom</span><span class="no">#084-01</span></div>
            </div>

            <div class="stats" style="grid-template-columns:1fr;">
                <div class="stat">
                    <span class="lbl">Oxygen at Event Start</span>
                    <span class="val val--green">100%</span>
                    <div class="meter meter--green"><span style="width:100%"></span></div>
                </div>
                <div class="stat">
                    <span class="lbl">Oxygen at Log End</span>
                    <span class="val val--red">42%</span>
                    <div class="meter meter--red"><span style="width:42%"></span></div>
                </div>
            </div>

            <div class="callout callout--warn" style="margin-top:18px;">
                <div class="hd">Substance</div>
                <p>
                    Never conclusively identified in the recovered record. Contemporaneous
                    entries name only "contaminant."
                </p>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Recovered Telemetry</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>MARY &mdash; internal alert log</span><span>Condensed extract</span></div>

                <div class="tsc-line tsc-line--alert"><span class="t">03:14:06</span><div><span class="who">MARY</span><span class="said">Warning. Contaminant detected.</span></div></div>
                <div class="tsc-note">[Detection repeats a further six times over 21 seconds.]</div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:15</span><div><span class="who">MARY</span><span class="said">Environmental sensors offline. Attempting backup analysis.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:27</span><div><span class="who">MARY</span><span class="said">Contaminant source estimated: cleanroom.</span></div></div>
                <div class="tsc-line"><span class="t">03:14:29</span><div><span class="who">MARY</span><span class="said">Hatch open. Confirm?</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:42</span><div><span class="who">MARY</span><span class="said">Manual override required. Caution.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:46</span><div><span class="who">MARY</span><span class="said">Depressurisation in progress. Warning.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:49</span><div><span class="who">MARY</span><span class="said">Containment failure.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:14:50</span><div><span class="who">MARY</span><span class="said">Pressure drop detected: cleanroom.</span></div></div>

                <div class="tsc-break">Atmosphere unstable &mdash; 03:15:02</div>

                <div class="tsc-line"><span class="t">03:15:04</span><div><span class="who">MARY</span><span class="said">Venting in progress.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:15:11</span><div><span class="who">MARY</span><span class="said">Engine performance degraded.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:15:16</span><div><span class="who">MARY</span><span class="said">Caution: fuel mixture instability.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:15:50</span><div><span class="who">MARY</span><span class="said">Engine control response delayed.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:15:55</span><div><span class="who">MARY</span><span class="said">Engine shutoff.</span></div></div>
                <div class="tsc-line tsc-line--alert"><span class="t">03:19:30</span><div><span class="who">MARY</span><span class="said">Engine systems offline.</span></div></div>

                <div class="tsc-note">
                    [Timestamp discontinuity in source. Entries at 03:16 follow 03:19 in the
                    recovered stream; the Bureau has preserved the order as received.]
                </div>

                <div class="tsc-line"><span class="t">03:18:02</span><div><span class="who">MARY</span><span class="said">Centrifugal mode activate? Confirm?</span></div></div>
                <div class="tsc-line"><span class="t">03:18:11</span><div><span class="who">MARY</span><span class="said">Centrifugal mode activated.</span></div></div>
                <div class="tsc-line"><span class="t">03:23:06</span><div><span class="who">MARY</span><span class="said">Log segment ended.</span></div></div>

                <div class="tsc-break">End of recovered telemetry</div>

            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Automated Response</h3>
            </div>

            <ul class="doc-list">
                <li>Laboratory decompression executed.</li>
                <li>Internal atmosphere purged.</li>
                <li>Medical monitoring initiated.</li>
                <li>Rotational stabilisation enabled.</li>
            </ul>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Record Integrity</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Segment</th><th>Condition</th><th>Disposition</th></tr></thead>
                <tbody>
                    <tr><td>03:14:06 &ndash; 03:15:02</td><td class="green">Intact</td><td>Reproduced in full</td></tr>
                    <tr><td>03:15:02 &ndash; 03:16:09</td><td class="gold">Sequence disordered</td><td>Preserved as received</td></tr>
                    <tr><td>03:16:09 &ndash; 03:17:36</td><td class="red">Corrupt</td><td>Omitted</td></tr>
                    <tr><td>03:18:02 &ndash; 03:23:06</td><td class="green">Intact</td><td>Reproduced in full</td></tr>
                </tbody>
            </table>

            <div class="callout callout--note">
                <div class="hd">Archival note</div>
                <p>
                    The recovered logs do not conclusively identify the nature of the
                    contaminant event. Several telemetry sections were determined corrupt
                    during transmission recovery and cannot be reconstructed.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series VIII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-084</span>
    </div>

</div>
`
    },

    /* ========================================================
       027 — BEETLE PROBES
       ======================================================== */

    beetles: {

        title: 'ACCESSION HM-095 — BEETLE RETURN PROBE REGISTER',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">PROBES ACTIVE</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Return Vehicle Register</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Beetle<br>Return Probes</h1>
                <p class="doc-sub">Four autonomous relativistic probes despatched to Sol carrying the mission archive.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Deployed</span>
                <span class="val">T+14.2 years</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-095 / VEH-0004</div>
        </div>
        <div>
            <div class="lbl">Destination</div>
            <div class="val">Sol system</div>
        </div>
        <div>
            <div class="lbl">Payload</div>
            <div class="val val--gold">Taumoeba-35</div>
        </div>
        <div>
            <div class="lbl">Transit</div>
            <div class="val">~13 years</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Vehicle Register</h3>
        </div>

        <div class="gallery">
            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/john.png" alt="Probe John"></div>
                <div class="fig-cap"><span>John</span><span class="no">1,480 kg</span></div>
            </div>
            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/paul.png" alt="Probe Paul"></div>
                <div class="fig-cap"><span>Paul</span><span class="no">1,477 kg</span></div>
            </div>
            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/george.png" alt="Probe George"></div>
                <div class="fig-cap"><span>George</span><span class="no">1,481 kg</span></div>
            </div>
            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/ringo.png" alt="Probe Ringo"></div>
                <div class="fig-cap"><span>Ringo</span><span class="no">1,479 kg</span></div>
            </div>
        </div>

        <table class="ledger" style="margin-top:20px;">
            <thead><tr><th>Vehicle</th><th>Mass</th><th>Velocity</th><th>Storage</th><th>ETA</th></tr></thead>
            <tbody>
                <tr><td>John</td><td class="num">1,480 kg</td><td class="num">0.93c</td><td class="num">91 TB</td><td class="num">13 yr</td></tr>
                <tr><td>Paul</td><td class="num">1,477 kg</td><td class="num">0.93c</td><td class="num">91 TB</td><td class="num">13 yr</td></tr>
                <tr><td>George</td><td class="num">1,481 kg</td><td class="num">0.93c</td><td class="num">91 TB</td><td class="num">13 yr</td></tr>
                <tr><td>Ringo</td><td class="num">1,479 kg</td><td class="num">0.93c</td><td class="num">91 TB</td><td class="num">13 yr</td></tr>
            </tbody>
        </table>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 02</span>
                <h3>Carried Payload</h3>
            </div>

            <ul class="doc-list">
                <li>Taumoeba-35 cultures &mdash; live, in sealed xenonite vessels.</li>
                <li>Astrophage reference samples.</li>
                <li>Complete Hail Mary telemetry archive.</li>
                <li>Scientific records authored in transit.</li>
                <li>Crew memory and medical logs.</li>
            </ul>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Divergence from Assumption</h3>
            </div>

            <p>
                Earth telemetry at the time of deployment indicated the <em>Hail Mary</em>
                remained on a direct return trajectory. Navigation reconstruction subsequently
                established that a course change was executed shortly after the probes departed.
            </p>

            <div class="kv">
                <div class="kv-row"><div class="k">Revised destination</div><div class="v">40 Eridani system</div></div>
                <div class="kv-row"><div class="k">Stated cause</div><div class="v">Critical Astrophage shortage aboard the Eridian vessel Blip-A</div></div>
                <div class="kv-row"><div class="k">Action taken</div><div class="v">Fuel transfer from Hail Mary reserves</div></div>
                <div class="kv-row"><div class="k">Effect</div><div class="v">Alien crew survivability preserved; return capability surrendered</div></div>
            </div>

            <div class="callout callout--warn">
                <div class="hd">Archive note</div>
                <p>
                    At the time of Beetle arrival, Earth classified Dr. Grace as deceased.
                    The full extent of the mission's divergence remained unknown for decades.
                </p>
            </div>

        </div>

        <aside>
            <div class="plate">
                <div class="plate-hd">Propulsion Model</div>
                <div class="plate-body">
                    <table class="ledger" style="border:0;">
                        <tbody>
                            <tr><td>Acceleration</td><td class="num">5,000 m/s²</td></tr>
                            <tr><td>Dry mass</td><td class="num">5 kg</td></tr>
                            <tr><td>Fuel mass</td><td class="num">180 kg</td></tr>
                            <tr><td>Start mass</td><td class="num">185 kg</td></tr>
                            <tr><td>Pressure</td><td class="num">3.10 × 10⁷ Pa</td></tr>
                            <tr><td>Surface area</td><td class="num">0.03 m²</td></tr>
                            <tr><td>Thrust</td><td class="num">9.30 × 10⁵ N</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="plate-foot">Model HM-095-P.</div>
            </div>

            <div class="plate">
                <div class="plate-hd">Relativistic Check</div>
                <div class="plate-body">
                    <table class="ledger" style="border:0;">
                        <tbody>
                            <tr><td>M/m ratio</td><td class="num">5.5208</td></tr>
                            <tr><td>Gamma</td><td class="num">7.5369</td></tr>
                            <tr><td>Coast velocity</td><td class="num gold">0.931c</td></tr>
                            <tr><td>Coast time (Earth)</td><td class="num">4.02 × 10⁸ s</td></tr>
                            <tr><td>Mission time</td><td class="num">~621 days</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="plate-foot">Derived coefficients a = 27.604, b = 152.396.</div>
            </div>

            <div class="plate">
                <div class="plate-hd">Combined Impulse</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Four probes</div><div class="v">2.79 × 10⁶ N</div></div>
                        <div class="kv-row"><div class="k">Ship mass</div><div class="v">120,000 kg</div></div>
                        <div class="kv-row"><div class="k">Net accel.</div><div class="v">16.44 m/s²</div></div>
                    </div>
                </div>
                <div class="plate-foot">Deployment burn, aggregate.</div>
            </div>
        </aside>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series IX</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-095</span>
    </div>

</div>
`
    },

    /* ========================================================
       028 — COLLAPSE PROJECTIONS
       ======================================================== */

    collapse: {

        title: 'ACCESSION PTF-402 — EARTH STABILITY ASSESSMENT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">FAILURE RISK EXTREME</div>

    <header class="doc-head">
        <div class="doc-agency">Petrova Task Force &middot; Earth Systems Monitoring</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Earth Stability<br>Assessment</h1>
                <p class="doc-sub">Consolidated civilization failure risk during the long wait.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Assessment</span>
                <span class="val">MY +16</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">PTF-402 / MON-0061</div>
        </div>
        <div>
            <div class="lbl">Risk Level</div>
            <div class="val val--red">Extreme</div>
        </div>
        <div>
            <div class="lbl">Governance</div>
            <div class="val val--red">Permanent emergency</div>
        </div>
        <div>
            <div class="lbl">Known Strategy</div>
            <div class="val val--gold">Hail Mary only</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Projected Mortality</span><span class="val val--red">50%</span><span class="sub">Within 19 years</span><div class="meter meter--red"><span style="width:50%"></span></div></div>
            <div class="stat"><span class="lbl">Displaced</span><span class="val val--red">1.8B</span><span class="sub">And rising</span></div>
            <div class="stat"><span class="lbl">Crop Failure</span><span class="val val--red">41%</span><span class="sub">Global output loss</span></div>
            <div class="stat"><span class="lbl">States Rationing</span><span class="val val--gold">63</span><span class="sub">Emergency measures</span></div>
        </div>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Active Crises</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Region</th><th>Condition</th></tr></thead>
                <tbody>
                    <tr><td>South Asia</td><td class="red">Water wars &mdash; active conflict</td></tr>
                    <tr><td>Northern Africa</td><td class="red">Famine conditions</td></tr>
                    <tr><td>Arctic territories</td><td class="gold">Resource disputes</td></tr>
                    <tr><td>Pacific food corridors</td><td class="red">System failure</td></tr>
                    <tr><td>Mediterranean</td><td class="gold">Mass migration</td></tr>
                    <tr><td>Global health systems</td><td class="red">Overwhelmed</td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Failure Cascade</h3>
            </div>

            <div class="tl">
                <div class="tl-item"><div class="tl-when">Phase I</div><div class="tl-what">Agricultural Instability</div><p>Regional food shortages; export contracts begin to fail.</p></div>
                <div class="tl-item"><div class="tl-when">Phase II</div><div class="tl-what">Migration</div><p>Global displacement events begin at continental scale.</p></div>
                <div class="tl-item"><div class="tl-when">Phase III</div><div class="tl-what">Militarisation</div><p>Resource conflict and border closure become general.</p></div>
                <div class="tl-item"><div class="tl-when">Phase IV</div><div class="tl-what">Economic Collapse</div><p>Infrastructure failure; currencies cease to clear.</p></div>
                <div class="tl-item"><div class="tl-when">Phase V</div><div class="tl-what">Terminal</div><p>War, famine, epidemic disease, mass mortality.</p></div>
            </div>

            <div class="doc-quote">
                The projections assume nations cooperate and share resources. They will not.
                Countries do not watch their populations starve. They go to war.
                <cite>E. Stratt &mdash; annotation on the modelling group's submission</cite>
            </div>

        </div>

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/cars.png" alt="Displacement corridor"></div>
                <div class="fig-cap"><span>Displacement</span><span class="no">#402-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/cttv.png" alt="Civil monitoring"></div>
                <div class="fig-cap"><span>Civil monitoring</span><span class="no">#402-02</span></div>
            </div>

            <div class="callout callout--warn">
                <div class="hd">Archival assessment</div>
                <p>
                    Multiple governments entered permanent emergency status. Martial law,
                    forced rationing, agricultural conscription and military food distribution
                    became ordinary instruments of administration. Analysts concluded that
                    Project Hail Mary represented the only known long-term survival strategy
                    available to the species.
                </p>
            </div>
        </aside>
    </div>

    <div class="doc-foot">
        <span>Fond: Petrova &middot; Series VIII</span>
        <span>Sheet 1 of 1</span>
        <span>Accession PTF-402</span>
    </div>

</div>
`
    },

    /* ========================================================
       029 — LAST CONTACT
       ======================================================== */

    lastcontact: {

        title: 'ACCESSION HM-110 — FINAL COMMUNICATION & LOSS OF SIGNAL',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">SIGNAL LOST</div>

    <header class="doc-head">
        <div class="doc-agency">Project Hail Mary &middot; Deep Space Network &middot; Case File</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Final<br>Communication</h1>
                <p class="doc-sub">Loss of signal, trajectory divergence, and the questions the record cannot answer.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Last Contact</span>
                <span class="val">MY +23</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">HM-110 / DSN-0002</div>
        </div>
        <div>
            <div class="lbl">Vessel Status</div>
            <div class="val val--red">Off course</div>
        </div>
        <div>
            <div class="lbl">Communications</div>
            <div class="val val--red">Lost</div>
        </div>
        <div>
            <div class="lbl">Case Status</div>
            <div class="val val--red">Unresolved</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/signal.png" alt="Final signal trace"></div>
                <div class="fig-cap"><span>Final trace</span><span class="no">#110-01</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Trajectory Divergence</div>
                <div class="plate-body">
                    <div class="kv">
                        <div class="kv-row"><div class="k">Beetle probes</div><div class="v">Trajectory locked &mdash; Sol</div></div>
                        <div class="kv-row"><div class="k">Hail Mary</div><div class="v">Course change &mdash; 40 Eridani</div></div>
                        <div class="kv-row"><div class="k">Separation</div><div class="v">Permanent</div></div>
                    </div>
                </div>
                <div class="plate-foot">Reconstructed post hoc.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    No further imagery<br>Ref. #110-02<br>[ No signal after MY +23 ]
                </div>
                <div class="fig-cap"><span>Post-divergence</span><span class="no">#110-02</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Divergence</h3>
            </div>

            <p>
                The Beetle probes continued on a locked trajectory toward Sol carrying the
                mission archive, scientific data, Astrophage samples, Taumoeba cultures and
                the complete telemetry record. The <em>Hail Mary</em> departed the return
                path and accelerated toward the 40 Eridani system.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Post-Event Analysis</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Established</th><th>Unresolved</th></tr></thead>
                <tbody>
                    <tr><td class="green">Rocky suffered fuel loss</td><td class="red">Did Grace reach Blip-A?</td></tr>
                    <tr><td class="green">Blip-A was stranded</td><td class="red">Did Rocky survive?</td></tr>
                    <tr><td class="green">Grace altered course</td><td class="red">Did Hail Mary arrive?</td></tr>
                    <tr><td class="green">Fuel transfer operations began</td><td class="red">Was the transfer completed?</td></tr>
                    <tr><td class="green">Communication quality deteriorated</td><td class="red">Did either vessel survive?</td></tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Official Status</h3>
            </div>

            <p>
                Following decades without further telemetry, Dr. Ryland Grace was formally
                declared deceased in absentia. No confirmed sighting, transmission or
                recovery of the vessel has been recorded.
            </p>

            <div class="callout callout--warn">
                <div class="hd">Case status</div>
                <p>
                    Unresolved. The file remains open by standing order of the Bureau and
                    is reviewed on each anniversary of loss of signal.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Hail Mary &middot; Series X</span>
        <span>Sheet 1 of 1</span>
        <span>Accession HM-110</span>
    </div>

</div>
`
    },

    /* ========================================================
       030 — YEAR 24 BROADCASTS
       ======================================================== */

    earthwaits: {

        title: 'ACCESSION BRD-024 — BROADCAST ARCHIVE, YEAR 24',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">PLANETARY CONDITION CRITICAL</div>

    <header class="doc-head">
        <div class="doc-agency">Bureau of Historical Records &middot; Broadcast Collection</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title doc-title--sm">Broadcast Archive &mdash; Year 24</h1>
                <p class="doc-sub">Recovered news transmissions from the opening of the Beetle return window.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Period</span>
                <span class="val">MY +24</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">BRD-024 / TSC-0180</div>
        </div>
        <div>
            <div class="lbl">Source</div>
            <div class="val">Global News Network</div>
        </div>
        <div>
            <div class="lbl">Signal Watch</div>
            <div class="val val--gold">Active</div>
        </div>
        <div>
            <div class="lbl">Deaths To Date</div>
            <div class="val val--red">&gt; 3.9 billion</div>
        </div>
    </section>

    <div class="callout callout--warn">
        <div class="hd">Conditions at time of broadcast</div>
        <p>
            Food riots reported in 19 major cities &middot; martial law extended in multiple
            regions &middot; global death toll exceeds 3.9 billion &middot; no signals received
            from the Hail Mary &middot; Beetle return window now open.
        </p>
    </div>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/cttv.png" alt="Broadcast still"></div>
                <div class="fig-cap"><span>Broadcast still</span><span class="no">#024-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/wait.png" alt="Monitoring array"></div>
                <div class="fig-cap"><span>Monitoring array</span><span class="no">#024-02</span></div>
            </div>

            <div class="doc-h4">Failure scenarios cited on air</div>
            <ul class="doc-list">
                <li>Crew mortality during transit</li>
                <li>Astrophage containment failure</li>
                <li>Probe launch malfunction</li>
                <li>Radiation exposure</li>
                <li>Mechanical system collapse</li>
                <li>Failure to reach Tau Ceti</li>
                <li>Failure to find a solution</li>
                <li>Fuel depletion</li>
                <li>Communication loss</li>
            </ul>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Recovered Transcript</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Global News Network &mdash; live feed archive</span><span>Year 24</span></div>

                <div class="tsc-line">
                    <span class="t">&mdash;</span>
                    <div>
                        <span class="who">Anchor</span>
                        <span class="said">
                            Tonight marks the first possible return window for the Beetle probes
                            launched from the Hail Mary mission more than two decades ago.
                            Humanity continues to wait for any sign that the mission succeeded.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">&mdash;</span>
                    <div>
                        <span class="who">Anchor</span>
                        <span class="said">
                            Mission analysts caution that there are a great many ways the
                            operation could have failed, and that the absence of a signal is
                            consistent with almost all of them.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">&mdash;</span>
                    <div>
                        <span class="who">Anchor</span>
                        <span class="said">
                            No signals have been received from the Hail Mary since Year 23.
                            Public confidence in the mission has deteriorated significantly.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">
                    [Footage: crowds outside Petrova Task Force facilities in multiple cities.
                    Riots followed rumours that the mission had failed years earlier. Military
                    forces dispersed demonstrations in New York, London, Delhi and Shanghai.]
                </div>

                <div class="tsc-line">
                    <span class="t">&mdash;</span>
                    <div>
                        <span class="who">Anchor</span>
                        <span class="said">
                            Global agricultural output continues to decline. Several governments
                            confirmed additional emergency ration reductions this week.
                        </span>
                    </div>
                </div>

                <div class="tsc-break">Street interview &mdash; recovered segment</div>

                <div class="tsc-line">
                    <span class="t">&mdash;</span>
                    <div><span class="who">Reporter</span><span class="said">Do you still believe the Beetles are coming home?</span></div>
                </div>

                <div class="tsc-line">
                    <span class="t">&mdash;</span>
                    <div>
                        <span class="who">Civilian</span>
                        <span class="said">
                            …I don't know any more. We sent them out there to save us.
                            I just hope someone made it.
                        </span>
                    </div>
                </div>

                <div class="tsc-break">End of recovered transcript</div>

            </div>

            <div class="callout callout--note">
                <div class="hd">Archival note</div>
                <p>
                    Despite worsening planetary conditions, deep-space monitoring arrays
                    remained staffed and operational worldwide throughout this period, in
                    continuous search for Beetle telemetry signatures. Not one array was
                    decommissioned during the twenty-four year wait.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Broadcast &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession BRD-024</span>
    </div>

</div>
`
    },

    /* ========================================================
       031 — BEETLE ARRIVAL
       ======================================================== */

    signalreceived: {

        title: 'ACCESSION REC-001 — BEETLE ARRIVAL CONFIRMATION',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">CONTACT RE-ESTABLISHED</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations Recovery Command &middot; Deep Space Network</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Signal<br>Confirmed</h1>
                <p class="doc-sub">First objects from Tau Ceti detected beyond Jupiter orbit.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Detection</span>
                <span class="val">04:14 UTC &middot; MY +24</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">REC-001 / DSN-0009</div>
        </div>
        <div>
            <div class="lbl">Objects</div>
            <div class="val val--gold">4 &mdash; Beetle probes</div>
        </div>
        <div>
            <div class="lbl">Thermal Match</div>
            <div class="val val--green">99.92%</div>
        </div>
        <div>
            <div class="lbl">Recovery Zone</div>
            <div class="val">Indian Ocean</div>
        </div>
    </section>

    <div class="callout callout--gold">
        <div class="hd">Deep Space Network alert</div>
        <p>
            Four relativistic contacts detected beyond Jupiter orbital space. Trajectory
            analysis confirms an origin vector consistent with Project Hail Mary return
            architecture.
        </p>
    </div>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Objects Detected</span><span class="val">04</span><span class="sub">Identified as Beetle probes</span></div>
            <div class="stat"><span class="lbl">Thermal Match</span><span class="val val--green">99.92%</span><span class="sub">Hail Mary design signature</span></div>
            <div class="stat"><span class="lbl">ETA to Earth</span><span class="val val--gold">34</span><span class="sub">Days</span></div>
            <div class="stat"><span class="lbl">Public Viewers</span><span class="val">5.7B</span><span class="sub">Live tracking feeds</span></div>
        </div>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Event Log</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>UTC</th><th>Event</th></tr></thead>
                <tbody>
                    <tr><td>04:14</td><td>Four unidentified contacts detected near Jupiter.</td></tr>
                    <tr><td>04:27</td><td class="gold">Tau Ceti origin vector confirmed.</td></tr>
                    <tr><td>05:11</td><td>Emergency session of the United Nations convened.</td></tr>
                    <tr><td>06:43</td><td class="green">Active military conflicts announce temporary ceasefires.</td></tr>
                    <tr><td>09:02</td><td class="gold">Eva Stratt released under emergency executive order.</td></tr>
                    <tr><td>12:18</td><td class="green">Global celebrations begin across major population centres.</td></tr>
                </tbody>
            </table>

            <p class="fine" style="margin-top:12px;">
                The interval between detection and the first ceasefire announcement was
                two hours and twenty-nine minutes.
            </p>

            <div class="doc-quote">
                For twenty-four years humanity prepared itself for silence. Today four small
                objects appeared out of the dark between the stars. They came home.
                <cite>E. Stratt &mdash; statement on release</cite>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Recovery Operation Status</h3>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Recovery fleet</div><div class="v">Deployed</div></div>
                <div class="kv-row"><div class="k">Indian Ocean zone</div><div class="v">Secured</div></div>
                <div class="kv-row"><div class="k">Science teams</div><div class="v">Standing by</div></div>
                <div class="kv-row"><div class="k">Petrova Task Force</div><div class="v">Reactivated</div></div>
            </div>

        </div>

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/signal.png" alt="Detection trace"></div>
                <div class="fig-cap"><span>Detection trace</span><span class="no">#001-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/retreival.png" alt="Recovery fleet"></div>
                <div class="fig-cap"><span>Recovery fleet</span><span class="no">#001-02</span></div>
            </div>

            <div class="callout callout--gold">
                <div class="hd">First confirmed return</div>
                <p>
                    The first objects ever to return to Earth from another star system.
                    Whatever survived Tau Ceti is thirty-four days away.
                </p>
            </div>
        </aside>
    </div>

    <div class="doc-foot">
        <span>Fond: Recovery &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession REC-001</span>
    </div>

</div>
`
    },

    /* ========================================================
       032 — BEETLE RECOVERY INVENTORY
       ======================================================== */

    splashdown: {

        title: 'ACCESSION REC-014 — BEETLE RECOVERY INVENTORY',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">RECOVERY SUCCESSFUL</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations Recovery Command &middot; Indian Ocean Operation</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Recovery<br>Inventory</h1>
                <p class="doc-sub">Contents of the four Beetle probes, catalogued on retrieval and decontamination.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Recovered</span>
                <span class="val">MY +24</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">REC-014 / INV-0001</div>
        </div>
        <div>
            <div class="lbl">Vehicles Recovered</div>
            <div class="val val--green">4 of 4</div>
        </div>
        <div>
            <div class="lbl">Payload Integrity</div>
            <div class="val val--green">94.3%</div>
        </div>
        <div>
            <div class="lbl">Decontamination</div>
            <div class="val">Complete</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Recovery Status</span><span class="val val--green">Successful</span><span class="sub">All vehicles</span></div>
            <div class="stat"><span class="lbl">Payload Integrity</span><span class="val val--green">94.3%</span><span class="sub">Above projection</span><div class="meter meter--green"><span style="width:94.3%"></span></div></div>
            <div class="stat"><span class="lbl">First Contact</span><span class="val val--gold">Confirmed</span><span class="sub">Species: Eridian</span></div>
            <div class="stat"><span class="lbl">Mission Outcome</span><span class="val val--green">Sol Saved</span><span class="sub">Solution recovered</span></div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Manifest by Vehicle</h3>
        </div>

        <table class="ledger">
            <thead><tr><th>Vehicle</th><th>Contents</th></tr></thead>
            <tbody>
                <tr>
                    <td><strong>John</strong></td>
                    <td>Astrophage samples &middot; Taumoeba-35 cultures &middot; Hail Mary telemetry logs &middot; xenonite fragments &middot; hull repair schematics</td>
                </tr>
                <tr>
                    <td><strong>Paul</strong></td>
                    <td>Shipboard video archives &middot; life support diagnostics &middot; crew medical records &middot; navigation telemetry &middot; Adrian biosphere scans</td>
                </tr>
                <tr>
                    <td><strong>George</strong></td>
                    <td>Eridian language files &middot; Blip-A schematics &middot; first contact recordings &middot; Rocky communication logs &middot; Astrophage breeding data</td>
                </tr>
                <tr>
                    <td><strong>Ringo</strong></td>
                    <td>Scientific papers by Grace &middot; Adrian ecosystem research &middot; Taumoeba experiments &middot; personal mission journals &middot; final Hail Mary logs</td>
                </tr>
            </tbody>
        </table>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/splash.png" alt="Splashdown, Indian Ocean"></div>
                <div class="fig-cap"><span>Splashdown</span><span class="no">#014-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/retreival.png" alt="Retrieval operations"></div>
                <div class="fig-cap"><span>Retrieval</span><span class="no">#014-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/beetles.png" alt="Beetle probe, recovered"></div>
                <div class="fig-cap"><span>Probe, recovered</span><span class="no">#014-03</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/rainbow.png" alt="Grace and Rocky, recovered footage still"></div>
                <div class="fig-cap"><span>Recovered footage</span><span class="no">#014-04</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Plate degraded<br>Ref. #014-05<br>[ Salt water ingress ]
                </div>
                <div class="fig-cap"><span>Interior, Blip-A</span><span class="no">#014-05</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 02</span>
                <h3>Scientific Recovery</h3>
            </div>

            <p>
                Mission archives contained millions of pages of documentation authored by
                Dr. Ryland Grace across the transit and the Tau Ceti residency. Recovered
                fields include Astrophage biology, Adrian ecosystem analysis, Taumoeba
                genetic adaptation, xenonite materials science, Eridian mathematics,
                interstellar engineering, alien linguistics and alien sociology.
            </p>

            <div class="doc-quote">
                Equivalent to receiving several centuries of scientific advancement overnight.
                <cite>Recovery science team &mdash; preliminary assessment</cite>
            </div>

            <div class="doc-h4">Recovered file classes</div>
            <ul class="doc-list">
                <li>Complete Hail Mary telemetry</li>
                <li>Crew medical archives</li>
                <li>Adrian ecosystem research</li>
                <li>Astrophage studies</li>
                <li>Taumoeba breeding records</li>
                <li>Eridian mathematics</li>
                <li>Xenonite engineering data</li>
                <li>Personal journals</li>
            </ul>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>First Contact Confirmed</h3>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Species</div><div class="v">Eridian</div></div>
                <div class="kv-row"><div class="k">Primary individual</div><div class="v">Rocky</div></div>
                <div class="kv-row"><div class="k">Occupation</div><div class="v">Engineer</div></div>
                <div class="kv-row"><div class="k">Status</div><div class="v">Unknown</div></div>
                <div class="kv-row"><div class="k">Relationship to mission</div><div class="v">Co-author of the solution</div></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>The Recording</h3>
            </div>

            <p>
                Among the recovered archives was a short piece of footage taken aboard the
                <em>Hail Mary</em>: Dr. Grace and Rocky working side by side in a shared
                engineering compartment. No speeches. No ceremony. No announcement of
                contact. Two engineers solving a problem together.
            </p>

            <p>
                Within three weeks of release it had become the most viewed piece of media
                ever created.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 05</span>
                <h3>Unresolved</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Confirmed by the record</th><th>Not confirmed</th></tr></thead>
                <tbody>
                    <tr><td class="green">Grace survived arrival at Tau Ceti</td><td class="red">Whether Hail Mary reached Erid</td></tr>
                    <tr><td class="green">Grace met Rocky</td><td class="red">Whether the fuel transfer completed</td></tr>
                    <tr><td class="green">Grace produced the solution</td><td class="red">Whether Rocky survived</td></tr>
                    <tr><td class="green">Grace altered course to 40 Eridani</td><td class="red">Whether Grace died</td></tr>
                </tbody>
            </table>

            <div class="callout callout--note">
                <div class="hd">Archival status</div>
                <p>
                    <strong>Missing.</strong> For many historians the final question of Project
                    Hail Mary is not whether humanity survived. It is whether the man who
                    ensured it did.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-sign">
        <div>
            <div class="lbl">Inventory certified</div>
            <div class="name">Recovery Command</div>
            <div class="role">Indian Ocean Operation</div>
        </div>
        <div class="seal seal--navy">CERTIFIED</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Recovery &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession REC-014</span>
    </div>

</div>
`
    },

    /* ========================================================
       033 — SOL RECOVERY OPERATIONS
       ======================================================== */

    solution: {

        title: 'ACCESSION REC-030 — PLANETARY RESTORATION BULLETIN',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">RESTORATION ACTIVE</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations Recovery Command &middot; Restoration Programme</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Sol Recovery<br>Operations</h1>
                <p class="doc-sub">Replication and planetary-scale cultivation of Taumoeba-35 for deployment at Venus.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Bulletin</span>
                <span class="val">MY +24, D+2</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">REC-030 / RST-0001</div>
        </div>
        <div>
            <div class="lbl">Cultures</div>
            <div class="val val--green">8.7 billion +</div>
        </div>
        <div>
            <div class="lbl">Breeding Sites</div>
            <div class="val">143</div>
        </div>
        <div>
            <div class="lbl">Prognosis</div>
            <div class="val val--green">Recoverable</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Restoration Sequence</h3>
        </div>

        <div class="tl">
            <div class="tl-item"><div class="tl-when">Stage 01</div><div class="tl-what">Beetle Recovery</div><p>All four vehicles retrieved from the Indian Ocean zone.</p></div>
            <div class="tl-item"><div class="tl-when">Stage 02</div><div class="tl-what">Sample Verification</div><p>Live cultures confirmed viable in six independent laboratories.</p></div>
            <div class="tl-item"><div class="tl-when">Stage 03</div><div class="tl-what">Taumoeba Scale-Up</div><p>Emergency authorisation for planetary-scale breeding operations.</p></div>
            <div class="tl-item"><div class="tl-when">Stage 04</div><div class="tl-what">Venus Release</div><p>Delivery into the Petrova Line in Venusian orbit.</p></div>
            <div class="tl-item"><div class="tl-when">Stage 05</div><div class="tl-what">Petrova Collapse</div><p>Astrophage population consumed; line degrades.</p></div>
            <div class="tl-item"><div class="tl-when">Stage 06</div><div class="tl-what">Sol Recovery</div><p>Solar output returns to natural growth pattern.</p></div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/white.png" alt="Culture facility"></div>
                <div class="fig-cap"><span>Culture facility</span><span class="no">#030-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/sun.png" alt="Sol, monitoring"></div>
                <div class="fig-cap"><span>Sol, monitoring</span><span class="no">#030-02</span></div>
            </div>

            <div class="callout callout--gold">
                <div class="hd">Expected outcome</div>
                <p>
                    Rapid Astrophage consumption &middot; Petrova Line collapse &middot; solar
                    energy restoration &middot; atmospheric recovery &middot; long-term climate
                    stabilisation.
                </p>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 02</span>
                <h3>Replication</h3>
            </div>

            <p>
                Less than forty-eight hours after recovery, laboratories across six continents
                successfully replicated live Taumoeba-35 cultures. Emergency authorisation for
                planetary-scale breeding was granted the same day.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Public Disclosure</h3>
            </div>

            <p>
                At 19:04 UTC, world governments jointly announced that Project Hail Mary had
                succeeded. The statement was broadcast simultaneously in 112 nations. For a
                substantial part of the population it was the first positive global
                announcement in more than two decades.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Declassified Findings</h3>
            </div>

            <ul class="doc-list">
                <li>Dr. Ryland Grace survived arrival at Tau Ceti.</li>
                <li>The Hail Mary completed its primary objectives.</li>
                <li>A viable Taumoeba solution was developed in flight.</li>
                <li>Humanity received proof of intelligent alien life.</li>
            </ul>

            <p class="fine">Several portions of the archive remained under review at bulletin date.</p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 05</span>
                <h3>World Response</h3>
            </div>

            <p>
                Spontaneous celebrations occurred worldwide. Curfews were suspended.
                Emergency sirens were silenced in cities that had run them nightly for
                nineteen years. In many places people gathered outdoors before dawn.
                Witnesses describe crowds applauding the sunrise.
            </p>

            <div class="stats" style="margin-top:20px;">
                <div class="stat"><span class="lbl">Sol Status</span><span class="val val--green">Stabilisation possible</span></div>
                <div class="stat"><span class="lbl">Extinction Projection</span><span class="val val--green">Revoked</span></div>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Recovery &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession REC-030</span>
    </div>

</div>
`
    },

    /* ========================================================
       034 — ARCLIGHT II
       ======================================================== */

    arclight2: {

        title: 'ACCESSION REC-041 — ARCLIGHT II: OPERATION SUNRISE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">OPERATION SUNRISE</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations Recovery Command &middot; Deployment Campaign</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">ArcLight II</h1>
                <p class="doc-sub">Delivery of engineered Taumoeba-35 into the Petrova Line at Venus.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Launch</span>
                <span class="val">MY +25</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">REC-041 / MIS-0002</div>
        </div>
        <div>
            <div class="lbl">Payload</div>
            <div class="val">8.4M kg Taumoeba</div>
        </div>
        <div>
            <div class="lbl">Target</div>
            <div class="val">Venusian Petrova Line</div>
        </div>
        <div>
            <div class="lbl">Transit</div>
            <div class="val val--gold">41 days</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Taumoeba Mass</span><span class="val">8.4M</span><span class="sub">kilograms</span></div>
            <div class="stat"><span class="lbl">Breeding Facilities</span><span class="val">143</span><span class="sub">Worldwide</span></div>
            <div class="stat"><span class="lbl">Astrophage Fuel</span><span class="val val--green">100%</span><span class="sub">Full load</span></div>
            <div class="stat"><span class="lbl">Target ETA</span><span class="val val--gold">41</span><span class="sub">Days</span></div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/preperations.png" alt="ArcLight II on pad"></div>
                <div class="fig-cap"><span>ArcLight II on pad</span><span class="no">#041-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/launch.png" alt="Launch"></div>
                <div class="fig-cap"><span>Launch</span><span class="no">#041-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/white.png" alt="Culture facility"></div>
                <div class="fig-cap"><span>Culture facility</span><span class="no">#041-03</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    Plate pending<br>Ref. #041-04<br>[ Watch parties &mdash; unfiled ]
                </div>
                <div class="fig-cap"><span>Global watch</span><span class="no">#041-04</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Purpose</h3>
            </div>

            <p>
                Deliver engineered Taumoeba-35 cultures directly into the Petrova Line
                surrounding Venus. Once released, the organisms are expected to consume the
                Astrophage populations responsible for extracting energy from Sol.
            </p>

            <div class="doc-h4">Expected outcome</div>
            <ul class="doc-list">
                <li>Petrova Line degradation</li>
                <li>Astrophage population collapse</li>
                <li>Solar luminosity recovery</li>
                <li>Climate stabilisation</li>
                <li>Withdrawal of extinction projections</li>
            </ul>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Technology Integrated from Mission Archives</h3>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Xenonite containment</div><div class="v">Eridian material science &mdash; culture vessels</div></div>
                <div class="kv-row"><div class="k">Eridian thermal systems</div><div class="v">Payload temperature management</div></div>
                <div class="kv-row"><div class="k">Astrophage propulsion</div><div class="v">Derived from Hail Mary drive data</div></div>
                <div class="kv-row"><div class="k">Beetle data archives</div><div class="v">Navigation and release sequencing</div></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Campaign Sequence</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Stage</th><th>Activity</th></tr></thead>
                <tbody>
                    <tr><td>01</td><td>Global Taumoeba production</td></tr>
                    <tr><td>02</td><td>Payload integration</td></tr>
                    <tr><td>03</td><td>ArcLight II launch</td></tr>
                    <tr><td>04</td><td>Venus transfer burn</td></tr>
                    <tr><td>05</td><td class="gold">Petrova Line release</td></tr>
                    <tr><td>06</td><td>Solar recovery monitoring</td></tr>
                </tbody>
            </table>

            <div class="callout callout--gold">
                <div class="hd">Archival note</div>
                <p>
                    ArcLight II launched exactly twenty-five years after the original ArcLight
                    probe first identified living extraterrestrial organisms within the
                    Petrova Line. The anniversary was not coincidental; the launch window was
                    selected to fall on it.
                </p>
            </div>

            <div class="doc-quote">
                We spent twenty-five years trying not to die. Now we finally get to fight back.
                <cite>E. Stratt &mdash; launch remarks</cite>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Recovery &middot; Series II</span>
        <span>Sheet 1 of 1</span>
        <span>Accession REC-041</span>
    </div>

</div>
`
    },

    /* ========================================================
       035 — SOL RECOVERY CONFIRMATION
       ======================================================== */

    solsaved: {

        title: 'ACCESSION REC-060 — SOL RECOVERY CONFIRMATION',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">THREAT TERMINATED</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations Recovery Command &middot; Solar Monitoring Network</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">The Second<br>Sunrise</h1>
                <p class="doc-sub">Confirmation of solar luminosity recovery and formal termination of the extinction event.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Terminated</span>
                <span class="val">08:14 UTC &middot; MY +25</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">REC-060 / MON-0100</div>
        </div>
        <div>
            <div class="lbl">Solar Output</div>
            <div class="val val--green">+0.84%</div>
        </div>
        <div>
            <div class="lbl">Astrophage Population</div>
            <div class="val val--green">&minus;91.7%</div>
        </div>
        <div>
            <div class="lbl">Extinction Risk</div>
            <div class="val val--green">Removed</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat">
                <span class="lbl">Solar Output</span><span class="val val--green">+0.84%</span>
                <span class="sub">First positive growth in 25 years</span>
                <div class="meter meter--green"><span style="width:84%"></span></div>
            </div>
            <div class="stat">
                <span class="lbl">Astrophage Population</span><span class="val val--green">&minus;91.7%</span>
                <span class="sub">Venus orbit monitoring network</span>
                <div class="meter meter--green"><span style="width:91.7%"></span></div>
            </div>
            <div class="stat">
                <span class="lbl">Extinction Risk</span><span class="val val--green">Removed</span>
                <span class="sub">Formally ended by Task Force</span>
            </div>
            <div class="stat">
                <span class="lbl">Conflict Zones</span><span class="val val--green">&minus;78%</span>
                <span class="sub">Resource conflicts declining</span>
            </div>
        </div>
    </section>

    <div class="doc-cols doc-cols--wide">

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Recovery Trend</h3>
            </div>

            <div class="tl">
                <div class="tl-item">
                    <div class="tl-when">Day 11</div>
                    <div class="tl-what">Astrophage Collapse Detected</div>
                    <p>Venus monitoring satellites report widespread Petrova Line degradation. Population density falls beyond all predictive models.</p>
                </div>
                <div class="tl-item">
                    <div class="tl-when">Day 28</div>
                    <div class="tl-what">Solar Dimming Halted</div>
                    <p>For the first time since the Petrova discovery, the rate of luminosity decline reaches zero.</p>
                </div>
                <div class="tl-item">
                    <div class="tl-when">Day 104</div>
                    <div class="tl-what">Positive Solar Growth</div>
                    <p>Solar output begins increasing. Recovery officially confirmed by the monitoring network.</p>
                </div>
                <div class="tl-item">
                    <div class="tl-when">Year 4</div>
                    <div class="tl-what">Climate Stabilisation</div>
                    <p>Global temperature trends normalise. Emergency methane interventions terminated permanently.</p>
                </div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Secondary Indicators</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Indicator</th><th>Status</th><th>Note</th></tr></thead>
                <tbody>
                    <tr><td>Agriculture</td><td class="green">Recovering</td><td>Yields improving across all major production regions</td></tr>
                    <tr><td>Conflict zones</td><td class="green">&minus;78%</td><td>Active resource conflicts rapidly declining</td></tr>
                    <tr><td>Global power</td><td class="green">Stable</td><td>Astrophage energy reserves remain online through recovery</td></tr>
                    <tr><td>Displaced persons</td><td class="green">Returning</td><td>Largest resettlement operation in human history</td></tr>
                </tbody>
            </table>

            <div class="doc-quote">
                Twenty-five years ago we were counting how many people would die.
                Today we are counting how many get to live.
                <cite>E. Stratt &mdash; final Task Force transmission</cite>
            </div>

        </div>

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/sun2.png" alt="Sol, recovery"></div>
                <div class="fig-cap"><span>Sol, recovering</span><span class="no">#060-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/sky.png" alt="Sky, post-recovery"></div>
                <div class="fig-cap"><span>Sky, post-recovery</span><span class="no">#060-02</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Luminosity Series</div>
                <div class="plate-body">
                    <table class="ledger" style="border:0;">
                        <thead><tr><th>Point</th><th>Output</th></tr></thead>
                        <tbody>
                            <tr><td>Deployment</td><td class="num red">&minus;8.3%</td></tr>
                            <tr><td>Day 30</td><td class="num gold">&minus;8.3%</td></tr>
                            <tr><td>Day 90</td><td class="num gold">&minus;7.9%</td></tr>
                            <tr><td>Day 180</td><td class="num green">&minus;6.4%</td></tr>
                            <tr><td>Year 1</td><td class="num green">&minus;4.1%</td></tr>
                            <tr><td>Year 2</td><td class="num green">&minus;1.8%</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="plate-foot">Against pre-crisis baseline.</div>
            </div>
        </aside>
    </div>

    <div class="callout callout--gold">
        <div class="hd">Termination of the extinction event</div>
        <p>
            Following deployment of Taumoeba-35 into the Petrova Line, solar output returned
            to a natural growth pattern. The extinction event formally ended at 08:14 UTC.
            Historians have since recorded the moment as the Second Sunrise.
        </p>
    </div>

    <div class="doc-foot">
        <span>Fond: Recovery &middot; Series III</span>
        <span>Sheet 1 of 1</span>
        <span>Accession REC-060</span>
    </div>

</div>
`
    },

    /* ========================================================
       036 — EARTH RECOVERY
       ======================================================== */

    earthheals: {

        title: 'ACCESSION REC-088 — EARTH RECOVERY REPORT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--gold stamp--sm">RECONSTRUCTION ERA</div>

    <header class="doc-head">
        <div class="doc-agency">United Nations &middot; Reconstruction Secretariat</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Earth<br>Recovery Report</h1>
                <p class="doc-sub">Agricultural, ecological and political recovery in the years following the Second Sunrise.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Reporting Period</span>
                <span class="val">MY +25 &ndash; +30</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">REC-088 / RST-0044</div>
        </div>
        <div>
            <div class="lbl">Crop Output</div>
            <div class="val val--green">+214% YoY</div>
        </div>
        <div>
            <div class="lbl">Active Conflicts</div>
            <div class="val val--green">0</div>
        </div>
        <div>
            <div class="lbl">Extinction Status</div>
            <div class="val val--green">Terminated</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="stats">
            <div class="stat"><span class="lbl">Crop Output</span><span class="val val--green">+214%</span><span class="sub">Year over year</span></div>
            <div class="stat"><span class="lbl">Active Conflicts</span><span class="val val--green">0</span><span class="sub">First time in 19 years</span></div>
            <div class="stat"><span class="lbl">Rationing</span><span class="val val--gold">Ending</span><span class="sub">Worldwide phase-out</span></div>
            <div class="stat"><span class="lbl">Power Grid</span><span class="val val--green">Stable</span><span class="sub">Astrophage reserves</span></div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/farm.png" alt="Cropland, restored"></div>
                <div class="fig-cap"><span>Cropland restored</span><span class="no">#088-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/ocean.png" alt="Ocean restoration"></div>
                <div class="fig-cap"><span>Ocean restoration</span><span class="no">#088-02</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/rainbow.png" alt="Reconstruction"></div>
                <div class="fig-cap"><span>Reconstruction</span><span class="no">#088-03</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Recovery Programmes</h3>
            </div>

            <table class="ledger">
                <thead><tr><th>Programme</th><th>Status</th><th>Detail</th></tr></thead>
                <tbody>
                    <tr>
                        <td>Global food initiative</td><td class="green">Seed vaults opened</td>
                        <td>Protected genetic archives distributed to recovering regions. Wheat, rice, corn, soybean, potato, coffee and fruit species returned to cultivation.</td>
                    </tr>
                    <tr>
                        <td>International peace accords</td><td class="green">Resource wars ended</td>
                        <td>Remaining governments signed the Reykjavik Food &amp; Water Treaty. Former belligerents now share production, freshwater infrastructure and climate technology.</td>
                    </tr>
                    <tr>
                        <td>Ocean restoration</td><td class="gold">Active recovery</td>
                        <td>Reef reconstruction, fisheries protection and methane cleanup underway across multiple oceans.</td>
                    </tr>
                    <tr>
                        <td>Global power grid</td><td class="green">Stable</td>
                        <td>Former emergency Astrophage facilities now support reconstruction in previously devastated regions.</td>
                    </tr>
                </tbody>
            </table>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Milestones</h3>
            </div>

            <div class="tl">
                <div class="tl-item"><div class="tl-when">Year 1</div><div class="tl-what">Last Conflict Ends</div><p>The final major resource conflict formally concludes.</p></div>
                <div class="tl-item"><div class="tl-when">Year 2</div><div class="tl-what">Shipping Restored</div><p>International shipping networks return to full operation.</p></div>
                <div class="tl-item"><div class="tl-when">Year 3</div><div class="tl-what">Rationing Reduced</div><p>Global rationing falls below emergency thresholds.</p></div>
                <div class="tl-item"><div class="tl-when">Year 5</div><div class="tl-what">A New Generation</div><p>The first generation born after the crisis enters school.</p></div>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Reconstruction Era</h3>
            </div>

            <p>
                Former military supply depots were converted into farming cooperatives.
                Refugee camps became permanent towns. Border checkpoints became trade
                crossings. Nations that had spent decades competing for food now exchange
                seed stock, water purification systems, farming equipment and climate
                recovery expertise.
            </p>

            <p>
                The largest coordinated rebuilding effort in human history remains ongoing.
            </p>

            <div class="doc-quote">
                For twenty-five years humanity prepared for the end of the world.
                We had forgotten how to prepare for its future.
                <cite>United Nations recovery broadcast</cite>
            </div>

            <div class="callout callout--gold">
                <div class="hd">Extinction status</div>
                <p>Terminated. Sunrise is no longer feared.</p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Recovery &middot; Series III</span>
        <span>Sheet 1 of 1</span>
        <span>Accession REC-088</span>
    </div>

</div>
`
    },

    /* ========================================================
       037 — COMMEMORATION
       ======================================================== */

    celebration: {

        title: 'ACCESSION MEM-001 — GLOBAL COMMEMORATION ARCHIVE',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--navy stamp--sm">MEMORIAL ACTIVE</div>

    <header class="doc-head">
        <div class="doc-agency">Bureau of Historical Records &middot; Memorial Collection</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">Commemoration<br>Archive</h1>
                <p class="doc-sub">Memorials, holidays and recovered testimony from the years after the recovery.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Period</span>
                <span class="val">MY +27 onward</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">MEM-001 / MEM-0001</div>
        </div>
        <div>
            <div class="lbl">Parades</div>
            <div class="val">314 cities</div>
        </div>
        <div>
            <div class="lbl">Public Approval</div>
            <div class="val val--green">98%</div>
        </div>
        <div>
            <div class="lbl">Holiday</div>
            <div class="val val--gold">Sol Day &mdash; 2 March</div>
        </div>
    </section>

    <section class="doc-sec">
        <div class="doc-h">
            <span class="num">§ 01</span>
            <h3>Honours Conferred</h3>
        </div>

        <table class="ledger">
            <thead><tr><th>Honouree</th><th>Commemoration</th></tr></thead>
            <tbody>
                <tr><td><strong>Cdr. Yao Li-Jie</strong></td><td>Military academies and orbital facilities renamed in his honour.</td></tr>
                <tr><td><strong>O. Ilyukhina</strong></td><td>Russian aerospace institutions established annual engineering scholarships in her name.</td></tr>
                <tr><td><strong>Dr. R. Grace</strong></td><td>Grover Cleveland Middle School officially renamed Ryland Grace Middle School.</td></tr>
                <tr><td><strong>Rocky</strong></td><td>Statues honouring the Eridian engineer erected worldwide, beside the Hail Mary crew.</td></tr>
            </tbody>
        </table>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/poloroid.jpg" alt="Memorial photograph"></div>
                <div class="fig-cap"><span>Memorial</span><span class="no">#001-01</span></div>
            </div>

            <div class="fig fig--square">
                <div class="fig-frame"><img src="assets/sky.png" alt="Sol Day observance"></div>
                <div class="fig-cap"><span>Sol Day</span><span class="no">#001-02</span></div>
            </div>

            <div class="doc-h4">Memorial sites</div>
            <ul class="doc-list">
                <li>New York City</li>
                <li>Moscow</li>
                <li>Tokyo</li>
                <li>Paris</li>
                <li>Nairobi</li>
                <li>New Delhi</li>
                <li>São Paulo</li>
                <li>San Francisco</li>
            </ul>

            <div class="callout callout--note">
                <div class="hd">Estate note</div>
                <p>
                    Recovered financial records show the crew's accumulated salaries were
                    donated posthumously to public schools, agricultural recovery programmes,
                    climate restoration initiatives and international science academies.
                </p>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 02</span>
                <h3>Sol Day</h3>
            </div>

            <p>
                Multiple nations declared 2 March &mdash; Dr. Ryland Grace's birthday &mdash;
                an international holiday, under the official designation Sol Day. Recovered
                mission footage of Grace and Rocky became mandatory curriculum material in
                schools worldwide.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Recovered Testimony</h3>
            </div>

            <div class="tsc">

                <div class="tsc-hd"><span>Oral history programme &mdash; former students</span><span>Extract</span></div>

                <div class="tsc-line">
                    <span class="t">40</span>
                    <div>
                        <span class="who">Jasmine Tran</span>
                        <span class="said">
                            He made science fun. I remember thinking he was just some weird
                            middle-school teacher. Turns out he saved the world.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">41</span>
                    <div>
                        <span class="who">Miguel Ortiz</span>
                        <span class="said">
                            None of us knew he was working on the Petrova problem. He used to
                            tell us science matters because people matter. Now we're alive
                            because of him.
                        </span>
                    </div>
                </div>

                <div class="tsc-line">
                    <span class="t">39</span>
                    <div>
                        <span class="who">Leah Park</span>
                        <span class="said">
                            My daughter goes to Ryland Grace Middle School now. That's still
                            insane to say out loud.
                        </span>
                    </div>
                </div>

                <div class="tsc-note">[Ages given as at date of interview.]</div>

            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 04</span>
                <h3>Observance</h3>
            </div>

            <p>
                Crowds gather during annual celebrations carrying lanterns shaped like Beetle
                probes. Children carry models of the <em>Hail Mary</em> through city streets.
                The observance has no fixed liturgy and was never formally designed.
            </p>

            <div class="doc-quote">
                For most of human history, heroes returned home. Ryland Grace never did.
                <cite>Recovered public broadcast &mdash; first Sol Day</cite>
            </div>

            <div class="callout callout--gold">
                <div class="hd">Final entry in the collection</div>
                <p>
                    Humanity survived because three astronauts boarded a ship and flew
                    into the dark.
                </p>
            </div>

        </div>
    </div>

    <div class="doc-foot">
        <span>Fond: Memorial &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession MEM-001</span>
    </div>

</div>
`
    },

    /* ========================================================
       038 — 40 ERIDANI
       ======================================================== */

    forty: {

        title: 'ACCESSION OBS-140 — 40 ERIDANI OBSERVATION REPORT',

        body: `
<div class="doc">

    <div class="stamp stamp-tr stamp--sm">STATUS UNKNOWN</div>

    <header class="doc-head">
        <div class="doc-agency">Bureau of Historical Records &middot; Deep Space Observation</div>

        <div class="doc-head-row">
            <div>
                <h1 class="doc-title">40 Eridani<br>Observation</h1>
                <p class="doc-sub">Long-range luminosity analysis of a star that should not be recovering.</p>
            </div>

            <div class="doc-dateblock">
                <span class="lbl">Observation</span>
                <span class="val">MY +34</span>
            </div>
        </div>
    </header>

    <section class="doc-meta">
        <div>
            <div class="lbl">Accession</div>
            <div class="val">OBS-140 / DSN-0140</div>
        </div>
        <div>
            <div class="lbl">Star Luminosity</div>
            <div class="val val--green">Increasing</div>
        </div>
        <div>
            <div class="lbl">Erid Status</div>
            <div class="val val--green">Stabilising</div>
        </div>
        <div>
            <div class="lbl">Contact</div>
            <div class="val val--red">None</div>
        </div>
    </section>

    <div class="doc-cols">

        <aside>
            <div class="fig">
                <div class="fig-frame"><img src="assets/tauceti.png" alt="40 Eridani, long-range"></div>
                <div class="fig-cap"><span>40 Eridani</span><span class="no">#140-01</span></div>
            </div>

            <div class="plate">
                <div class="plate-hd">Recovery Curve Comparison</div>
                <div class="plate-body">
                    <table class="ledger" style="border:0;">
                        <thead><tr><th>Marker</th><th>Sol</th><th>40 Eri</th></tr></thead>
                        <tbody>
                            <tr><td>Collapse onset</td><td class="num">D+11</td><td class="num">Matched</td></tr>
                            <tr><td>Dimming halt</td><td class="num">D+28</td><td class="num">Matched</td></tr>
                            <tr><td>Positive growth</td><td class="num">D+104</td><td class="num gold">Matched</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="plate-foot">Curves consistent with post-Taumoeba deployment.</div>
            </div>

            <div class="fig fig--square">
                <div class="fig-missing">
                    No imagery on file<br>Ref. #140-02<br>[ No signal, 11 years ]
                </div>
                <div class="fig-cap"><span>Vessel</span><span class="no">#140-02</span></div>
            </div>
        </aside>

        <div class="doc-main">

            <div class="doc-h">
                <span class="num">§ 01</span>
                <h3>Observation</h3>
            </div>

            <p>
                Long-range arrays confirmed increasing luminosity within the 40 Eridani
                system. The recovery curve closely matches post-Taumoeba deployment models
                previously observed at Sol &mdash; not approximately, but to within the
                resolution of the instruments.
            </p>

            <div class="callout callout--gold">
                <div class="hd">Conclusion</div>
                <p>
                    High confidence that Dr. Ryland Grace successfully delivered Taumoeba
                    cultures to the Eridian home system.
                </p>
            </div>

            <p>
                Recovered Beetle telemetry had established that Grace redirected the
                <em>Hail Mary</em> toward 40 Eridani after choosing to rescue the Eridian
                vessel. No transmission was ever received afterward. This star is the only
                evidence that the journey was completed.
            </p>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 02</span>
                <h3>Official Status</h3>
            </div>

            <div class="kv">
                <div class="kv-row"><div class="k">Subject</div><div class="v">Dr. Ryland Grace</div></div>
                <div class="kv-row"><div class="k">Status</div><div class="v">Presumed deceased</div></div>
                <div class="kv-row"><div class="k">Basis</div><div class="v">Projected depletion of onboard food and medical resources</div></div>
                <div class="kv-row"><div class="k">Confirmation</div><div class="v">None &mdash; no visual, telemetry or wreckage recovered</div></div>
            </div>

            <div class="doc-quote">
                We now possess strong evidence that two civilisations survived because one
                man refused to leave his friend behind.
                <cite>Recovered Task Force memorandum</cite>
            </div>

            <div class="doc-h" style="margin-top:26px;">
                <span class="num">§ 03</span>
                <h3>Closing Note</h3>
            </div>

            <div class="doc-prose">
                <p>
                    No further signals from the <em>Hail Mary</em> have been detected. Its
                    final fate remains unknown and this file remains open.
                </p>
                <p class="noindent">
                    The Bureau records only what can be evidenced. What can be evidenced is
                    this: the sun at Erid is getting brighter, and there is no natural
                    process that would make it so.
                </p>
            </div>

            <div class="callout callout--note">
                <div class="hd">Recovered public broadcast</div>
                <p>
                    "The Sun at Erid is getting brighter. Somewhere out there, against
                    impossible odds, Ryland Grace succeeded."
                </p>
            </div>

        </div>
    </div>

    <div class="doc-sign">
        <div>
            <div class="lbl">File remains open</div>
            <div class="name">M. Halloran</div>
            <div class="role">Registrar, Petrova Collection</div>
        </div>
        <div class="seal seal--navy">OPEN<br>FILE</div>
    </div>

    <div class="doc-foot">
        <span>Fond: Observation &middot; Series I</span>
        <span>Sheet 1 of 1</span>
        <span>Accession OBS-140</span>
    </div>

</div>
`
    },

};

function openArchive(entry){

    const record = archiveEntries[entry];

    if(!record){
        return;
    }

    modalTitle.innerHTML = record.title;
    modalBody.innerHTML  = record.body;

    archiveModal.classList.add('show');

    document.body.style.overflow = 'hidden';

    archiveModal.scrollTop = 0;
}

function closeArchive(){

    archiveModal.classList.remove('show');

    document.body.style.overflow = '';
}

/* Unseal an annex: every reveal button sits directly before
   the .doc-reveal panel it controls. */
function revealDoc(button){

    const panel = button.nextElementSibling;

    if(!panel || !panel.classList.contains('doc-reveal')){
        return;
    }

    const open = panel.classList.toggle('is-open');

    button.textContent =
        open
        ? (button.dataset.hide || 'RESEAL ANNEX')
        : (button.dataset.show || 'UNSEAL ANNEX');
}

/* Close the reading room on Escape, or by clicking the mat. */
document.addEventListener('keydown', (e) => {

    if(e.key === 'Escape' && archiveModal.classList.contains('show')){
        closeArchive();
    }
});

archiveModal.addEventListener('click', (e) => {

    if(e.target === archiveModal){
        closeArchive();
    }
});