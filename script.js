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

const panels = document.querySelectorAll('.panel');
const navDots = document.querySelectorAll('.nav-dot');

window.addEventListener('scroll', () => {

    let current = '';

    panels.forEach(panel => {

        const panelTop = panel.offsetTop;

        if(pageYOffset >= panelTop - window.innerHeight / 2){
            current = panel.getAttribute('id');
        }

    });

    navDots.forEach(dot => {

        dot.classList.remove('active');

        const href = dot.getAttribute('href').replace('#', '');

        if(href === current){
            dot.classList.add('active');
            updateLuminosity(current);
            updateBroadcast(current);
        }

    });

});

const luminosityBar = document.getElementById('luminosity-bar');
const luminosityValue = document.getElementById('luminosity-value');
const luminosityStatus = document.getElementById('luminosity-status');

const luminosityLevels = {

    intro: 100,
    petrova: 99.7,
    dimming: 98.2,
    astrophage: 96.8,
    launch: 95.1,
    war: 91.4,
    tau: 89.8,
    rocky: 88.6,
    taumoeba: 87.2,
    beetles: 90.5,
    recovery: 94.9
};

function updateLuminosity(sectionId){

    const level = luminosityLevels[sectionId];

    if(level){

        luminosityBar.style.width = `${level}%`;

        luminosityValue.textContent = `${level}%`;

        /* COLOR SHIFT */

        if(level > 97){

            luminosityBar.style.background = '#7CFFB2';
            luminosityStatus.textContent = 'STABLE';

        } else if(level > 92){

            luminosityBar.style.background = '#ffe066';
            luminosityStatus.textContent = 'DECLINING';

        } else {

            luminosityBar.style.background = '#ff6b6b';
            luminosityStatus.textContent = 'CRITICAL';

        }
    }
}

const archiveModal = document.getElementById('archive-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

const archiveEntries = {

    petrova: {

        title: 'RECOVERED EMAIL — ARCHIVE ENTRY 001',

        body: `

<div class="email-window">

    <div class="email-topbar">

        <div class="email-dot red"></div>
        <div class="email-dot yellow"></div>
        <div class="email-dot green"></div>

        <div class="email-title">
            INCOMING MESSAGE // SCI-LISTS RELAY
        </div>

    </div>

    <div class="email-header">

    <div class="email-row">

        <div class="email-label">
            FROM
        </div>

        <div class="email-value">
            Dr. Irina Petrova
            &lt;ipetrova@gaoran.ru&gt;
        </div>

    </div>

    <div class="email-row">

        <div class="email-label">
            TO
        </div>

        <div class="email-value">
            Astronomy Curiosities
            &lt;astrocurious@scilists.org&gt;
        </div>

    </div>

    <div class="email-row">

        <div class="email-label">
            SUBJECT
        </div>

        <div class="email-value email-subject">
            The Thin Red Line
        </div>

    </div>

    <div class="email-row">

        <div class="email-label">
            DATE
        </div>

        <div class="email-value">
            03 APR 20XX — 02:14 UTC
        </div>

    </div>

</div>

    <div class="email-body">

        <p>Hello, professionals.</p>

        <p>
            My name is Doctor Irina Petrova and I work at the
            Pulkovo Observatory in St. Petersburg, Russia.
        </p>

        <p>
            I am writing to you to ask for help.
        </p>

        <p>
            For the past two years, I have been working on a theory
            related to infrared emissions from nebulae.
        </p>

        <p>
            As a result, I have made detailed observations
            in a few specific IR bands of light.
        </p>

        <p>
            And I have found something odd —
            not in any nebula,
            but here in our own solar system.
        </p>

        <div class="email-highlight">
            DETECTED:
            Infrared emission line at
            25.984 micron wavelength
        </div>

        <p>
            There is a very faint, but detectable line in the solar
            system that emits infrared light at the 25.984 micron wavelength.
        </p>

        <p>
            It seems to be solely that wavelength with no variance.
        </p>

        <p>
            Attached are Excel spreadsheets with my data.
            I have also provided a few renders of the data as a 3-D model.
        </p>

        <p>
            You will see on the model that the line is a lopsided arc
            that rises straight up from the sun’s North Pole
            for 37 million kilometers.
        </p>

        <p>
            From there, it angles sharply down and away from the sun,
            toward Venus.
        </p>

        <p>
            After the arc’s apex, the cloud widens like a funnel.
            At Venus, the arc’s cross-section is as wide as the planet itself.
        </p>

        <p>
            The infrared glow is very faint.
        </p>

        <p>
            I was only able to detect it because I was using
            extremely sensitive detection equipment while searching
            for IR emissions from nebulae.
        </p>

        <p>
            To confirm the results,
            I contacted the Atacama Observatory in Chile.
            They independently confirmed my findings.
        </p>

        <p>
            My first hypothesis was that these are particles moving
            along magnetic field lines.
        </p>

        <p>
            However, Venus possesses no magnetic field significant
            enough to explain the phenomenon.
        </p>

        <div class="email-question">
            What forces would make particles arc toward Venus?
            And why would they glow?
        </div>

        <p>
            Any suggestions or theories would be welcome.
        </p>

        <div class="email-signoff">
            — Dr. Irina Petrova
        </div>

    </div>

</div>

`
    },

    address: {

        title: 'GLOBAL ADDRESS — EMERGENCY TRANSCRIPT',

        body: `
<div class="presidential-record">

    <!-- HEADER -->

    <div class="pres-header">

        <div class="seal-area">

            <div class="seal">
                ☼
            </div>

        </div>

        <div class="pres-title">

            <div class="pres-small">
                EXECUTIVE OFFICE ARCHIVE
            </div>

            <h2>
                UNITED STATES PRESIDENTIAL EMERGENCY ADDRESS
            </h2>

            <div class="pres-meta">
                RECORDED 8:42 PM EST · NATIONAL BROADCAST
            </div>

        </div>

    </div>

    <!-- ALERT -->

    <div class="pres-alert">
        GLOBAL SCIENTIFIC EMERGENCY DECLARED
    </div>

    <!-- TRANSCRIPT -->

    <div class="pres-body">

        <p>
            <span class="speaker">PRESIDENT:</span>
            "My fellow citizens—
        </p>

        <p>
            Tonight, the international scientific community has confirmed
            the existence of a previously unknown interplanetary phenomenon,
            now designated as the Petrova Line.
        </p>

        <p>
            This infrared structure extends from the sun toward Venus
            and has now been independently verified by observatories
            across the globe.
        </p>

        <p>
            At this time, we wish to emphasize that there is no immediate
            danger to the public.
        </p>

        <p class="pause">
            However—
        </p>

        <p>
            Data collected by the Japanese Aerospace Exploration Agency,
            using the Amaterasu solar probe,
            has revealed something deeply concerning.
        </p>

        <p>
            The sun's energy output appears to be decreasing.
        </p>

        <div class="quote-panel">

            CURRENT SOLAR DEVIATION:
            <span>−0.34%</span>

        </div>

        <p>
            At present, the decline measures approximately
            0.34 percent below expected solar luminosity levels.
        </p>

        <p>
            That number may sound insignificant.
        </p>

        <p>
            But scientists monitoring the anomaly have observed
            that the rate of decline is accelerating.
        </p>

        <p>
            Simultaneously, the Petrova Line itself
            is increasing in infrared intensity
            at the exact same rate.
        </p>

        <p>
            Researchers do not yet understand
            the mechanism behind this phenomenon.
        </p>

        <p>
            But current working theories suggest
            that whatever forms the Petrova Line
            may somehow be extracting energy
            from the sun itself.
        </p>

        <p>
            Governments worldwide are coordinating
            scientific resources effective immediately.
        </p>

        <p>
            An international task force
            is now being assembled.
        </p>

        <p>
            Further updates will follow
            as more information becomes available.
        </p>

        <p class="final-line">
            Thank you.
            <br><br>
            And may God watch over us all."
        </p>

    </div>

</div>
`
    },
    arclight: {

    title: 'NASA LIVESTREAM — ARCLIGHT VENUS INSERTION',

    body: `
<div class="arclight-live-archive">

    <!-- HEADER -->

    <div class="arclight-hero">

        <div class="arclight-noise"></div>

        <div class="arclight-title">

            <span class="broadcast-tag">
                LIVE GLOBAL BROADCAST ARCHIVE
            </span>

            <h1>PROJECT ARCLIGHT</h1>

            <p>
                FIRST CONTACT WITH EXTRATERRESTRIAL LIFE
            </p>

        </div>

    </div>

    <!-- STATS -->

    <div class="broadcast-stats-grid">

        <div class="broadcast-stat-card">

            <span>LIVE VIEWERS</span>

            <strong>6.8 BILLION</strong>

            <p>
                Largest simultaneous broadcast
                in human history
            </p>

        </div>

        <div class="broadcast-stat-card">

            <span>TRANSMISSION SOURCE</span>

            <strong>ARCLIGHT PROBE</strong>

            <p>
                Venusian Petrova Line flyby
            </p>

        </div>

        <div class="broadcast-stat-card">

            <span>MICROSCOPE MAGNIFICATION</span>

            <strong>10,000×</strong>

            <p>
                Internal onboard biological imaging
            </p>

        </div>
        <!-- IGNORE 
        <div class="broadcast-stat-card">

            <span>HISTORICAL DESIGNATION</span>

            <strong>FIRST CONTACT EVENT</strong>

            <p>
                First confirmed extraterrestrial organism
            </p>

        </div>
        -->

    </div>

    <!-- MAIN GRID -->

    <div class="arclight-main-grid">

        <!-- LEFT SIDE -->

        <div class="arclight-left-panel">

            <!-- LIVE TRANSCRIPT -->

            <div class="live-terminal-panel">

                <div class="terminal-topbar">

                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>

                    <div class="terminal-title">
                        NASA/JPL LIVE FEED
                    </div>

                </div>

<pre>
[BEGIN NASA/JPL LIVE TRANSCRIPT]

REPORTER:
We are just minutes away from the flyby
through the Petrova line near Venus.
So what can you tell us about the ArcLight probe?
What do we expect to find?

DR. BROWNE: 
The image we see will be coming from the onboard microscope.

The screen changed to a black-and-white microscope image. Tiny dark particles drifted across the display.

REPORTER: 
What are we looking at, Doctor?

DR. BROWNE: 
This is from the internal microscope. It's magnified ten thousand times.

[4.2 seconds of silence] One of the particles moved.

DR. BROWNE: 
Oh my God...

REPORTER: 
Are those particles moving? The black dots twisted and shifted through the sample.

DR. BROWNE: 
Oh—oh my god. Sorry, I have to go now.

UNKNOWN VOICE: 
What the fuck?

[AUDIO DISTORTION DETECTED]

[GLOBAL BROADCAST CHAOS RECORDED]

[END TRANSCRIPT]
</pre>

            </div>

            

        </div>

        <!-- RIGHT SIDE -->

        <div class="arclight-right-panel">

            <!-- PHOTO ARCHIVE -->

            <div class="photo-archive-panel">

                <div class="panel-header">
                    ONBOARD PHOTO ARCHIVE
                </div>

                <div class="photo-grid">

                    <div class="photo-placeholder">
                        <img src="assets/arc3.png" alt="MISSION CONTROL">
                    </div>

                    <div class="photo-placeholder">
                    <img src="assets/arc2.png" alt="MICROSCOPY FEED">
                    </div>

                    
                    <div class="photo-placeholder">
                    <img src="assets/arc1.png" alt="ARC LIGHT PROBE">
                    </div>


                    <div class="photo-placeholder">
                        <img src="assets/arc4.png" alt="FIRST MOVEMENT FRAME">
                    </div>

                </div>

            </div>

            <!-- EVENT DATA -->

            <div class="event-data-panel">

                <div class="panel-header">
                    EVENT METRICS
                </div>

                <div class="metric-row">

                    <span>Signal Delay</span>
                    <strong>14m 32s</strong>

                </div>

                <div class="metric-row">

                    <span>Sample Temperature</span>
                    <strong>96.41521739°C</strong>

                </div>

                <div class="metric-row">

                    <span>Petrova Density</span>
                    <strong>EXTREME</strong>

                </div>

                <div class="metric-row">

                    <span>Biological Movement</span>
                    <strong>CONFIRMED</strong>

                </div>

                <div class="metric-row">

                    <span>Mission Outcome</span>
                    <strong>SUCCESS</strong>

                </div>

            </div>

            <!-- HISTORICAL NOTE -->

            <div class="history-note-panel">

                <div class="history-glow"></div>

                <h3>HISTORICAL NOTE</h3>

                <p>
                    Historians later identified this transmission
                    as the exact moment humanity realized
                    it was not alone in the universe.
                </p>

                <p>
                    Multiple world governments reportedly entered
                    emergency session less than fifteen minutes
                    after the feed ended.
                </p>

            </div>
            <!-- VIEWER RESPONSE 

            <div class="world-reaction-panel">

                <h3>GLOBAL RESPONSE</h3>

                <div class="reaction-grid">

                    <div class="reaction-card">
                        <span>NEW YORK</span>
                        <p>
                            Crowds gathered in Times Square
                            reportedly fell silent simultaneously.
                        </p>
                    </div>

                    <div class="reaction-card">
                        <span>TOKYO</span>
                        <p>
                            Public rail systems experienced delays
                            due to passengers watching station monitors.
                        </p>
                    </div>

                    <div class="reaction-card">
                        <span>LONDON</span>
                        <p>
                            BBC emergency coverage interrupted
                            all scheduled programming.
                        </p>
                    </div>

                    <div class="reaction-card">
                        <span>GLOBAL INTERNET</span>
                        <p>
                            Largest traffic spike ever recorded
                            across civilian networks.
                        </p>
                    </div>

                </div>

            </div>
            -->
                
        </div>
        

</div>


`
},
taskforce: {

    title: 'UNITED NATIONS BRIEFING — PETROVA TASK FORCE',

    body: `
<div class="stratt-dashboard">

    <!-- TOP PANEL -->

    <div class="stratt-top">

        <!-- PHOTO -->

        <div class="stratt-photo-panel">

            <div class="stratt-photo">
                <img class="stratt-photo" src="assets/mugshot.webp" alt="Eva Stratt">
            </div>

            <div class="status-tag">
                ACTIVE CLEARANCE
            </div>

        </div>

        <!-- PROFILE -->

        <div class="stratt-profile">

            <div class="profile-small">
                UNITED NATIONS APPOINTMENT RECORD
            </div>

            <h2>
                EVA STRATT
            </h2>

            <div class="profile-role">
                Director — Petrova Task Force
            </div>

            <div class="profile-grid">

                <div class="profile-stat">
                    <span>AUTHORITY</span>
                    INTERNATIONAL
                </div>

                <div class="profile-stat">
                    <span>STATUS</span>
                    DIPLOMATIC IMMUNITY
                </div>

                <div class="profile-stat">
                    <span>ACCESS</span>
                    UNRESTRICTED
                </div>

                <div class="profile-stat">
                    <span>TIMELINE</span>
                    HAIL MARY LAUNCH
                </div>

            </div>

            <div class="profile-description">

                Eva Stratt previously served as a senior administrator
                within the European Space Agency before coordinating
                several multinational emergency engineering initiatives.

                <br><br>

                Following confirmation that the Petrova Line was linked
                to a measurable decrease in solar luminosity,
                the United Nations unanimously appointed Stratt
                to lead the global response effort.

                <br><br>

                Internal UN memorandums described her as:

                <div class="quote-tags">

                    <span>"brilliant"</span>
                    <span>"ruthlessly efficient"</span>
                    <span>"absolutely terrifying"</span>

                </div>

            </div>

        </div>

    </div>

    <!-- PURPOSE -->

    <div class="taskforce-panel">

        <div class="panel-header">

            <div class="panel-line"></div>

            <h3>
                PETROVA TASK FORCE MANDATE
            </h3>

        </div>

        <div class="taskforce-grid">

            <div class="task-card">

                <div class="task-icon">
                    ◉
                </div>

                <div class="task-title">
                    SCIENTIFIC COORDINATION
                </div>

                <p>
                    Unite observatories, laboratories,
                    aerospace agencies, and universities
                    under a single operational structure.
                </p>

            </div>

            <div class="task-card">

                <div class="task-icon">
                    ◎
                </div>

                <div class="task-title">
                    PLANETARY SURVIVAL
                </div>

                <p>
                    Prevent biosphere collapse resulting
                    from accelerated solar dimming
                    linked to the Petrova Line.
                </p>

            </div>

            <div class="task-card">

                <div class="task-icon">
                    ◌
                </div>

                <div class="task-title">
                    PROJECT ARCLIGHT
                </div>

                <p>
                    Launch a deep-space probe
                    capable of gathering samples from the Petrova Line
                    near Venusian orbit.
                </p>

            </div>

            <div class="task-card">

                <div class="task-icon">
                    ⊘
                </div>

                <div class="task-title">
                    EMERGENCY AUTHORITY
                </div>

                <p>
                    Requisition infrastructure,
                    transportation systems,
                    manufacturing facilities,
                    and personnel from all participating nations.
                </p>

            </div>

        </div>

    </div>

    <!-- LEGAL -->

    <div class="legal-panel">

        <div class="legal-title">
            EMERGENCY POWERS GRANTED
        </div>

        <div class="legal-list">

            <div class="legal-item">
                FULL DIPLOMATIC IMMUNITY IN ALL COOPERATING NATIONS
            </div>

            <div class="legal-item">
                PRIORITY ACCESS TO GLOBAL TRANSPORTATION NETWORKS
            </div>

            <div class="legal-item">
                AUTHORITY TO OVERRIDE NATIONAL BUREAUCRATIC RESTRICTIONS
            </div>

            <div class="legal-item">
                CONTROL OVER PETROVA-RELATED RESEARCH INITIATIVES
            </div>

            <div class="legal-item">
                UNLIMITED BUDGET FOR ANY AND ALL RESEARCH, TRANSPORATION, INFORMATION, AND LOGISTICAL NEEDS
            </div>

        </div>

    </div>

</div>
`
}, 
recruitment: {
    title: 'GLOBAL RECRUITMENT DASHBOARD — PETROVA TASK FORCE SCIENTIFIC RECRUITMENT',
    body: ` 
    <div class="recruitment-dashboard">

    <div class="recruitment-banner">

        <h2>PETROVA TASK FORCE</h2>

        <h1>SCIENTIFIC RECRUITMENT PROGRAM</h1>

        <p>
            GLOBAL CLEARANCE DATABASE —
            INITIAL ASTROPHAGE ANALYSIS CANDIDATES
        </p>

    </div>

    <!-- SUMMARY -->

    <div class="recruitment-stats">

        <div>
            <span>APPLICANTS REVIEWED</span>
            <h3>41,882</h3>
        </div>

        <div>
            <span>SELECTED SCIENTISTS</span>
            <h3>1,204</h3>
        </div>

        <div>
            <span>NATIONS REPRESENTED</span>
            <h3>87</h3>
        </div>

        <div>
            <span>CLEARANCE LEVEL</span>
            <h3>OMEGA</h3>
        </div>

    </div>

    <!-- ACCESS NOTICE -->

    <div class="sample-access-card">

        <h3>INITIAL SAMPLE AUTHORIZATION</h3>

        <div class="primary-scientist">

            <span>FIRST SCIENTIST GRANTED ACCESS</span>

            <h2>DR. RYLAND GRACE</h2>

            <p>
                Molecular Biologist
                • United States
            </p>

        </div>

        <blockquote>

            "Most deadly diseases have a minimum incubation period.

            Until we know what Astrophage is,
            the samples remain restricted."

        </blockquote>

        <div class="access-note">

            Director Eva Stratt authorized a single-scientist
            analysis protocol.

            Additional researchers would receive access only after
            preliminary biological characterization was completed.

        </div>

    </div>

    <!-- MOLECULAR BIOLOGY -->

    <details class="scientist-section">

        <summary>

            MOLECULAR BIOLOGY DIVISION

            <span>
                Lead Scientist:
                Dr. Eleanor Scyther
            </span>

        </summary>

        <div class="scientist-table">

            <div class="scientist-row featured">

                <div>
                    <strong>Dr. Ryland Grace</strong>
                    <small>United States</small>
                </div>

                <div>
                    An Analysis of Water Based Assumptions
                    and Recalibrations of Expectations
                    for Evolutionary Models
                </div>

            </div>

            <div class="scientist-row">

                <div>
                    Dr. Sofia Almeida
                    <small>Brazil</small>
                </div>

                <div>
                    Cellular Adaptation Mechanisms
                    in Extreme Hydrothermal Environments
                </div>

            </div>

            <div class="scientist-row">

                <div>
                    Dr. Ibrahim Hassan
                    <small>Egypt</small>
                </div>

                <div>
                    Metabolic Stability in
                    High-Energy Microorganisms
                </div>

            </div>

            <div class="scientist-row">

                <div>
                    Dr. Mei Zhang
                    <small>China</small>
                </div>

                <div>
                    Synthetic Evolutionary Pathways
                    in Closed Ecological Systems
                </div>

            </div>

            <div class="scientist-row">

                <div>
                    Dr. Hannah Roth
                    <small>Germany</small>
                </div>

                <div>
                    Genetic Survivability Models
                    Under Catastrophic Selection Pressures
                </div>

            </div>

        </div>

    </details>

    <!-- ASTROPHYSICS -->

    <details class="scientist-section">

        <summary>

            ASTROPHYSICS DIVISION

            <span>
                Lead Scientist:
                Dr. Viktor Petrov
            </span>

        </summary>

        <div class="scientist-table">

            <div class="scientist-row">
                <div>
                    Dr. Lucas Hammond
                    <small>United Kingdom</small>
                </div>

                <div>
                    Infrared Signatures
                    of Non-Stellar Energy Migration
                </div>
            </div>

            <div class="scientist-row">
                <div>
                    Dr. Rina Sato
                    <small>Japan</small>
                </div>

                <div>
                    Gravitational Modeling
                    of Interplanetary Energy Transfer
                </div>
            </div>

            <div class="scientist-row">
                <div>
                    Dr. Arjun Patel
                    <small>India</small>
                </div>

                <div>
                    Large-Scale Analysis
                    of Stellar Luminosity Anomalies
                </div>
            </div>

        </div>

    </details>

    <!-- MATERIALS -->

    <details class="scientist-section">

        <summary>

            MATERIALS SCIENCE DIVISION

            <span>
                Lead Scientist:
                Dr. Nadia Volkov
            </span>

        </summary>

        <div class="scientist-table">

            <div class="scientist-row">
                <div>
                    Dr. Pierre Laurent
                    <small>France</small>
                </div>

                <div>
                    Ultra-Dense Carbon Structures
                    Under Extreme Thermal Loads
                </div>
            </div>

            <div class="scientist-row">
                <div>
                    Dr. Liam O'Connell
                    <small>Ireland</small>
                </div>

                <div>
                    Failure Characteristics
                    of High-Energy Containment Systems
                </div>
            </div>

        </div>

    </details>

    <!-- TASK FORCE MEMO -->

    <div class="stratt-directive">

        <h3>DIRECTOR'S DIRECTIVE</h3>

        <p>

            Before distribution to the international scientific
            community, Astrophage samples must undergo
            preliminary biological, chemical, and radiological
            assessment.

        </p>

        <p>

            Priority assigned to Dr. Ryland Grace due to his
            background in evolutionary biology and
            unconventional life chemistry.

        </p>

        <div class="directive-stamp">

            AUTHORIZED:
            EVA STRATT

        </div>

    </div>

</div>

    </div>
    `
},
astrophage: {

    title: 'GLOBAL SCIENCE REPORT — WHAT IS ASTROPHAGE?',

    body: `
<div class="astrophage-report">

    <!-- HEADER -->

    <div class="astro-header">

        <div class="astro-title-block">

            <div class="astro-kicker">
                PETROVA TASK FORCE · BIOLOGICAL ANALYSIS DIVISION
            </div>

            <h1>
                ASTROPHAGE
            </h1>

            <div class="astro-subtitle">
                FIRST CONFIRMED EXTRATERRESTRIAL ORGANISM
            </div>

        </div>

        <div class="threat-box">

            <div class="threat-label">
                CLASSIFICATION
            </div>

            <div class="threat-value">
                EXISTENTIAL
            </div>

        </div>

    </div>

    <!-- IMAGE STRIP -->

    <div class="astro-image-strip">

        <div class="astro-image">
            <img class="astro-image" src="assets/astro-ball.png" alt="Astrophage Microscopy Image">
        </div>

        <div class="astro-image">
            <img class="astro-image" src="assets/white.png" alt="Astrophage Energy Emission">
        </div>

        <div class="astro-image">
            <img class="astro-image" src="assets/astro-lab.png" alt="Astrophage Render">
        </div>

    </div>

    <!-- MAIN GRID -->

    <div class="astro-grid">

        <!-- LEFT -->

        <div class="astro-main">

            <div class="section-tag">
                GLOBAL SCIENCE REPORT
            </div>

            <p>
                When samples recovered by the ArcLight probe
                first arrived in laboratories around the world,
                researchers immediately began attempting to identify
                the mysterious particles collected near Venusian orbit.
            </p>

            <p>
                Initial scans produced almost no usable information.
            </p>

            <div class="scan-failure">

                X-RAYS ................ FAILED<br>
                GAMMA ANALYSIS ........ FAILED<br>
                MICROWAVE IMAGING ..... FAILED<br>
                VISIBLE LIGHT ......... FAILED

            </div>

            <p>
                Scientists described the organism as behaving
                like a "perfect black box" —
                completely resistant to traditional imaging methods.
            </p>

            <p>
                The breakthrough occurred only after a controlled
                sample death event allowed researchers
                to examine the organism internally.
            </p>

            <div class="quote-block">

                “It’s a cell.
                It’s a tiny alien cell.”

                <span>
                    — Dr. Ryland Grace
                </span>

            </div>

            <p>
                The laboratory recording of the discovery rapidly spread
                across the scientific community and global media.
            </p>

            <p>
                News organizations would later refer to the moment as:
            </p>

            <div class="headline-panel">
                THE DAY HUMANITY DISCOVERED ALIEN LIFE
            </div>

            <p>
                Further biological analysis revealed that the organism:
            </p>

            <div class="findings-grid">

                <div class="finding-card">
                    Emits infrared radiation at the exact Petrova frequency
                </div>

                <div class="finding-card">
                    Stores energy with near-perfect efficiency
                </div>

                <div class="finding-card">
                    Uses infrared photon emission for propulsion
                </div>

                <div class="finding-card">
                    Consists almost entirely of water internally
                </div>

            </div>

            <p>
                Researchers now believe Astrophage absorbs energy
                directly from stars before transporting that energy elsewhere.
            </p>

            <p>
                This mechanism is believed to explain
                the ongoing decline in solar luminosity.
            </p>

        </div>

        <!-- RIGHT -->

        <div class="astro-sidebar">

            <!-- PROFILE -->

            <div class="grace-profile">

                <div class="profile-label">
                    RESEARCHER : SAN FRANCISCO, USA
                </div>

                <div class="grace-photo">
                    <img class="grace-photo" src="assets/ryland-lab.png" alt="Dr. Ryland Grace">
                </div>

                <div class="grace-name">
                    DR. RYLAND GRACE
                </div>

                <div class="grace-role">
                    Molecular Biologist · Petrova Task Force
                </div>

                <div class="grace-desc">
                    Credited with coining the term
                    <span>“Astrophage”</span> during early analysis
                    of ArcLight biological samples.

                </div>

            </div>

            <!-- ASTROPHAGE INFO -->

            <div class="species-panel">

                <div class="species-header">
                    ORGANISM PROFILE
                </div>

                <div class="species-item">
                    <span>DESIGNATION</span>
                    ASTROPHAGE
                </div>

                <div class="species-item">
                    <span>TYPE</span>
                    EXTRATERRESTRIAL MICROORGANISM
                </div>

                <div class="species-item">
                    <span>ENERGY SOURCE</span>
                    STELLAR RADIATION
                </div>

                <div class="species-item">
                    <span>PROPULSION</span>
                    INFRARED PHOTON EMISSION
                </div>

                <div class="species-item">
                    <span>COMPOSITION</span>
                    WATER-DOMINANT CELL STRUCTURE
                </div>

                <div class="species-item">
                    <span>DISCOVERED BY</span>
                    PROJECT ARCLIGHT
                </div>

            </div>

            <!-- LAB STATUS -->

            <div class="lab-status">

                <div class="lab-title">
                    GLOBAL RESEARCH STATUS
                </div>

                <div class="lab-stat">
                    ACTIVE LABS
                    <span>347</span>
                </div>

                <div class="lab-stat">
                    COUNTRIES
                    <span>21</span>
                </div>

                <div class="lab-stat">
                    CONTAINMENT LEVEL
                    <span>MAXIMUM</span>
                </div>

                <div class="lab-stat">
                    PRIORITY
                    <span>SPECIES SURVIVAL</span>
                </div>

            </div>

            <div class="grace-photo">
                    <img class="grace-photo" src="assets/madeof.png" alt="Dr. Ryland Grace">
            </div>

            <div class="scan-failure">

                OXYGEN ............ 60.93%<br>
                CARBON ............ 22.85%<br>
                HYDROGEN .......... 9.84%<br>
                NITROGEN .......... 2.44%<br>
                CALCIUM ........... 1.40%<br>
                PHOSPHORUS ........ 1.08%<br>
                ARGON ............. 0.76%<br>
                SULFUR ............ 0.19%<br>
                POTASSIUM ......... 0.19%<br>
                SODIUM ............ 0.14%<br>
                CHLORINE ........... 0.13%<br>
                MAGNESIUM .......... 0.04%<br>

            </div>

        </div>

    </div>

</div>
`
},
projections: {

    title: 'GLOBAL MODELING REPORT — SUN DIMMING IMPACT PROJECTIONS',

    body: `
<div class="collapse-report">

    <!-- HEADER -->

    <div class="collapse-header">

        <div class="collapse-title-area">

            <div class="collapse-kicker">
                CLASSIFIED EARTH SYSTEMS REPORT
            </div>

            <h1>
                HUMAN IMPACT FORECAST
            </h1>

            <div class="collapse-subtitle">
                SOLAR LUMINOSITY DECLINE · CIVILIZATION STABILITY ANALYSIS
            </div>

        </div>

        <div class="clearance-box">

            <div class="clearance-label">
                CLEARANCE
            </div>

            <div class="clearance-value">
                OMEGA
            </div>

        </div>

    </div>

    <!-- WARNING -->

    <div class="warning-banner">

        <div class="warning-pulse"></div>

        EXISTENTIAL CIVILIZATION THREAT DETECTED

    </div>

    <!-- TOP GRID -->

    <div class="collapse-top-grid">

        <!-- LEFT -->

        <div class="luminosity-panel2">

            <div class="panel-title">
                SOLAR OUTPUT TREND
            </div>

            <div class="fake-graph">

                <div class="graph-grid"></div>

                <svg viewBox="0 0 600 220" preserveAspectRatio="none">

                    <path
                        d="M0,30
                           C100,32 140,40 180,48
                           C240,65 290,85 340,115
                           C390,145 430,170 470,185
                           C520,200 560,208 600,215"
                        class="decline-line"
                    />

                </svg>

                <div class="graph-label year1">
                    YEAR 10
                </div>

                <div class="graph-label year2">
                    YEAR 20
                </div>

                <div class="graph-label year3">
                    YEAR 30
                </div>

            </div>

            <div class="graph-footer">

                NON-NATURAL LUMINOSITY LOSS DETECTED

            </div>

        </div>

        <!-- RIGHT -->

        <div class="mortality-panel">

            <div class="mortality-header">
                PROJECTED GLOBAL MORTALITY
            </div>

            <div class="mortality-number">
                26.5%
            </div>

            <div class="mortality-sub">
                WITHIN 30 YEARS
            </div>

            <div class="mortality-desc">

                Predictive models from all participating
                climate and biosphere simulations
                now converge on large-scale
                human civilization collapse.

            </div>

        </div>

    </div>

    <!-- TIMELINE -->

    <div class="timeline-section">

        <div class="timeline-header">
            COLLAPSE PROGRESSION TIMELINE
        </div>

        <div class="timeline">

            <!-- ITEM -->

            <div class="timeline-item">

                <div class="timeline-year">
                    YEAR 1–10
                </div>

                <div class="timeline-content">

                    <div class="timeline-icon">
                        ◉
                    </div>

                    <div class="timeline-text">

                        <h3>
                            EARLY INSTABILITY
                        </h3>

                        <ul>
                            <li>Minor reductions in crop efficiency</li>
                            <li>Regional climate disruption begins</li>
                            <li>Food-export economies destabilize</li>
                            <li>Energy demand spikes globally</li>
                        </ul>

                    </div>

                </div>

            </div>

            <!-- ITEM -->

            <div class="timeline-item">

                <div class="timeline-year">
                    YEAR 10–20
                </div>

                <div class="timeline-content">

                    <div class="timeline-icon">
                        ◎
                    </div>

                    <div class="timeline-text">

                        <h3>
                            SYSTEMIC FAILURE
                        </h3>

                        <ul>
                            <li>Major continental crop collapse</li>
                            <li>Mass migration from equatorial regions</li>
                            <li>Global supply chains fail</li>
                            <li>Wars over arable land begin</li>
                        </ul>

                    </div>

                </div>

            </div>

            <!-- ITEM -->

            <div class="timeline-item">

                <div class="timeline-year">
                    YEAR 20–30
                </div>

                <div class="timeline-content">

                    <div class="timeline-icon">
                        ◌
                    </div>

                    <div class="timeline-text">

                        <h3>
                            GLOBAL COLLAPSE
                        </h3>

                        <ul>
                            <li>Widespread famine conditions</li>
                            <li>International trade breakdown</li>
                            <li>Climate compensation systems fail</li>
                            <li>Governments begin restructuring</li>
                        </ul>

                    </div>

                </div>

            </div>

            <!-- ITEM -->

            <div class="timeline-item red">

                <div class="timeline-year">
                    YEAR 30–40
                </div>

                <div class="timeline-content">

                    <div class="timeline-icon">
                        ⊘
                    </div>

                    <div class="timeline-text">

                        <h3>
                            CIVILIZATION TERMINATION EVENT
                        </h3>

                        <ul>
                            <li>50% population mortality projection</li>
                            <li>Infrastructure collapse</li>
                            <li>Global famine and plague outbreaks</li>
                            <li>Irreversible biosphere destabilization</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <!-- QUOTE -->

    <div class="quote-panel-collapse">

        <div class="quote-mark">
            "
        </div>

        <div class="quote-text">

            We're not talking about ecosystem disruption anymore.

            <br><br>

            We're talking about civilization termination.

        </div>

        <div class="quote-author">
            — Dr. Harold Kline
        </div>

    </div>

    <!-- FOOTER -->

    <div class="collapse-footer">

        NO KNOWN MITIGATION STRATEGY EXISTS

    </div>

</div>
`
},
sahara: {

    title: 'PROJECT SAHARA — TASK FORCE ETHICS & INFRASTRUCTURE REPORT',

    body: `
<div class="sahara-report">

    <!-- HEADER -->
    <div class="report-topbar">
        <div class="report-classification">CLASSIFIED • PETROVA TASK FORCE</div>
        <div class="report-status">STATUS: ACTIVE CONSTRUCTION PHASE</div>
    </div>

    <h1 class="report-title">
        PROJECT SAHARA
    </h1>

    <div class="report-subtitle">
        SAHARA DESERT SOLAR & ASTROPHAGE HARVESTING NETWORK
    </div>

    <!-- HERO GRID -->
    <div class="sahara-hero-grid">

        <!-- MAP -->
        <div class="sahara-map-panel">

            <div class="panel-label">
                DEPLOYMENT MAP — NORTH AFRICA
            </div>

            <div class="sahara-map">

                <!-- grid -->
                <div class="map-grid"></div>

                <!-- fake africa silhouette -->
               <div class="africa-shape">

                    <div class="sahara-highlight"></div>

                    <div class="corridor corridor-west"></div>
                    <div class="corridor corridor-central"></div>
                    <div class="corridor corridor-east"></div>

                </div>

                <!-- deployment zones -->
                <div class="zone zone-1"></div>
                <div class="zone zone-2"></div>
                <div class="zone zone-3"></div>

                <!-- lines -->
                <div class="route route-1"></div>
                <div class="route route-2"></div>

                <!-- labels 
                <div class="map-label label-1">
                    ALGERIA ARRAY
                </div>

                <div class="map-label label-2">
                    LIBYA THERMAL FIELD
                </div>

                <div class="map-label label-3">
                    CHAD BREEDING SITE
                </div>
                -->
                <div class="map-scan"></div>

            </div>

            <div class="map-stats">

                <div class="map-stat">
                    <span>PROJECTED COVERAGE</span>
                    <strong>2.1 TRILLION m²</strong>
                </div>

                <div class="map-stat">
                    <span>INITIAL PHASE</span>
                    <strong>23,441 km²</strong>
                </div>

                <div class="map-stat">
                    <span>STATUS</span>
                    <strong>GROUND PREPARATION</strong>
                </div>

            </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="sahara-side-panel">

            <div class="info-card">
                <div class="card-title">PRIMARY OBJECTIVES</div>

                <ul class="objective-list">
                    <li>
                        Construct high-density solar collection arrays
                        optimized for Astrophage energy absorption
                    </li>

                    <li>
                        Establish controlled breeding zones
                        for large-scale Astrophage cultivation
                    </li>

                    <li>
                        Redirect harvested energy into global
                        emergency infrastructure grids
                    </li>
                </ul>
            </div>

            <div class="info-card warning">
                <div class="card-title">ETHICAL REVIEW</div>

                <p>
                    Multiple African governments raised concerns
                    regarding environmental disruption,
                    land sovereignty, and long-term resource control.
                </p>

                <p>
                    Agreements were later signed granting host nations
                    permanent ownership of infrastructure following
                    emergency deployment operations.
                </p>
            </div>

        </div>

    </div>

    <!-- QUOTE -->
    <div class="quote-panel">

        <div class="quote-line"></div>

        <div class="quote-text">
            “The Sahara Desert is just sitting there,
            waiting to give everything it needs.
            All we had to do was build the damn power plants.”
        </div>

        <div class="quote-author">
            — EVA STRATT
        </div>

    </div>

    <!-- TIMELINE -->
    <div class="construction-timeline">

        <div class="timeline-title">
            PROJECTED CONSTRUCTION PHASES
        </div>

        <div class="timeline-grid">

            <div class="timeline-node active">
                <span>PHASE 01</span>
                <strong>LAND SURVEY</strong>
            </div>

            <div class="timeline-node active">
                <span>PHASE 02</span>
                <strong>GRID FOUNDATIONS</strong>
            </div>

            <div class="timeline-node">
                <span>PHASE 03</span>
                <strong>BLACK PANEL DEPLOYMENT</strong>
            </div>

            <div class="timeline-node">
                <span>PHASE 04</span>
                <strong>ASTROPHAGE SEEDING</strong>
            </div>

            <div class="timeline-node">
                <span>PHASE 05</span>
                <strong>ENERGY HARVEST ONLINE</strong>
            </div>

        </div>

    </div>

    <!-- FOOTER -->
    <div class="report-footer">

        <div>
            ESTIMATED OUTPUT:
            <span>EXCEEDS ALL CURRENT GLOBAL ENERGY PRODUCTION</span>
        </div>

        <div>
            CONSTRUCTION START:
            <span>T+482 DAYS</span>
        </div>

    </div>

</div>
`
},
hailmary: {

    title: 'PROJECT HAIL MARY — MISSION BRIEFING',

    body: `
<div class="hailmary-briefing">

    <!-- HEADER -->
    <div class="briefing-top">
        <div class="briefing-title-block">
            <div class="classified-tag">GLOBAL SPACE COALITION // PRIORITY OMEGA</div>
            <h1>PROJECT: HAIL MARY</h1>
            <p class="subtitle">
                INTERSTELLAR RESPONSE MISSION — TAU CETI EXPEDITION
            </p>
        </div>

        <!-- LOGO PLACEHOLDER -->
        <div class="logo-placeholder">
            <img class="logo-placeholder" src="assets/logo.png" alt="Hail Mary Mission Logo">
        </div>
    </div>

    <!-- MAIN GRID -->
    <div class="briefing-grid">

        <!-- LEFT -->
        <div class="briefing-main">

            <div class="section-card">
                <div class="section-label">MISSION OBJECTIVE</div>

                <p>
                    Investigate the Tau Ceti system to determine why its
                    stellar luminosity has not been affected by the chain
                    of stellar dimming observed throughout known space.
                </p>

                <div class="status-line">
                    <span>MISSION STATUS:</span>
                    <span class="green">APPROVED</span>
                </div>
            </div>

            <!-- STAR CHAIN -->
            <div class="section-card">

                <div class="section-label">
                    PROPAGATION CHAIN ANALYSIS
                </div>

                <div class="star-chain">

                    <div class="star infected">
                        <div class="star-name">SOL</div>
                        <div class="star-status">INFECTED</div>
                    </div>

                    <div class="chain-arrow"></div>

                    <div class="star infected">
                        <div class="star-name">WISE 0855–0714</div>
                        <div class="star-status">INFECTED</div>
                    </div>

                    <div class="chain-arrow"></div>

                    <div class="star infected">
                        <div class="star-name">SIRIUS</div>
                        <div class="star-status">INFECTED</div>
                    </div>

                    <div class="chain-arrow"></div>

                    <div class="star infected">
                        <div class="star-name">EPSILON ERIDANI</div>
                        <div class="star-status">INFECTED</div>
                    </div>

                    <div class="chain-arrow"></div>

                    <div class="star safe">
                        <div class="star-name">TAU CETI</div>
                        <div class="star-status">UNINFECTED</div>
                    </div>

                </div>

                <p class="small-text">
                    No confirmed propagation source exists beyond Tau Ceti.
                    Scientists believe the system may contain the origin
                    of the Astrophage resistance chain.
                </p>

            </div>

            <!-- TIMELINE -->
            <div class="section-card">

                <div class="section-label">
                    INTERSTELLAR TRANSIT TIMELINE
                </div>

                <div class="timeline-track">

                    <div class="timeline-point">
                        <div class="point-dot"></div>
                        <div class="point-info">
                            <h4>LAUNCH</h4>
                            <p>T+0 YEARS</p>
                        </div>
                    </div>

                    <div class="timeline-line"></div>

                    <div class="timeline-point">
                        <div class="point-dot"></div>
                        <div class="point-info">
                            <h4>DEEP INTERSTELLAR TRANSIT</h4>
                            <p>T+6 YEARS</p>
                        </div>
                    </div>

                    <div class="timeline-line"></div>

                    <div class="timeline-point">
                        <div class="point-dot"></div>
                        <div class="point-info">
                            <h4>TAU CETI ARRIVAL</h4>
                            <p>T+12 YEARS</p>
                        </div>
                    </div>

                </div>

                <div class="data-grid">

                    <div class="data-box">
                        <span class="data-label">DISTANCE</span>
                        <span class="data-value">11.9 LIGHT YEARS</span>
                    </div>

                    <div class="data-box">
                        <span class="data-label">EXPECTED ARRIVAL</span>
                        <span class="data-value">~12 YEARS</span>
                    </div>

                    <div class="data-box">
                        <span class="data-label">FULL MISSION</span>
                        <span class="data-value">26+ YEARS</span>
                    </div>

                    <div class="data-box red">
                        <span class="data-label">50% HUMANITY LOSS</span>
                        <span class="data-value">~19 YEARS</span>
                    </div>

                </div>

            </div>

            <!-- MISSION PROBLEM -->
            <div class="section-card danger-card">

                <div class="section-label">
                    STRATEGIC CONFLICT
                </div>

                <div class="quote-block">
                    "What do we do when the only hope of understanding the threat
                    will arrive AFTER half of humanity may already be gone?"
                </div>

                <p>
                    Current civilization-collapse projections indicate
                    the Hail Mary mission may return critical answers
                    too late to prevent large-scale societal failure.
                </p>

                <div class="warning-box">
                    NO FASTER PHYSICS-COMPLIANT ALTERNATIVE EXISTS
                </div>

            </div>

            <!-- EVA QUOTE -->
            <div class="stratt-quote">
                <div class="quote-mark">“</div>

                <div class="quote-content">
                    We don’t get to choose between good options.
                    <br><br>
                    We choose between extinction with curiosity…
                    or extinction with ignorance.
                </div>

                <div class="quote-author">
                    — EVA STRATT
                </div>
            </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="briefing-side">

            <!-- SHIP CONCEPT -->
            <div class="side-panel">

                <div class="panel-title">
                    EARLY SHIP DESIGN
                </div>

                <div class="ship-placeholder">
                    <img class="logo-placeholder" src="assets/design.jpg" alt="Ship Concept Image">
                </div>

                <p class="side-description">
                    Early fusion-spin habitat concepts explored
                    artificial gravity rings, astrophage containment
                    systems, and long-duration cryogenic transit modules.
                </p>

            </div>

            <!-- CREW -->
            <div class="side-panel">

                <div class="panel-title">
                    INITIAL CREW REQUIREMENTS
                </div>

                <div class="crew-list">

                    <div class="crew-role">
                        <span>SCIENCE OFFICER</span>
                        <small>Astrophage Specialist</small>
                    </div>

                    <div class="crew-role">
                        <span>ENGINEER</span>
                        <small>Systems Survival & Repairs</small>
                    </div>

                    <div class="crew-role">
                        <span>PILOT</span>
                        <small>Interstellar Navigation</small>
                    </div>

                </div>

            </div>

            <!-- ARCHIVE -->
            <div class="side-panel">

                <div class="panel-title">
                    ARCHIVE SLIDES
                </div>

                <div class="archive-slide"></div>
                <textarea placeholder="Add archive description..."></textarea>

                <div class="archive-slide"></div>
                <textarea placeholder="Add archive description..."></textarea>

                <div class="archive-slide"></div>
                <textarea placeholder="Add archive description..."></textarea>

            </div>

        </div>

    </div>

</div>
`
},
antarctica: {

    title: 'TASK FORCE REPORT — ANTARCTIC METHANE RELEASE INITIATIVE',

    body: `
<div class="antarctica-report">

    <!-- TOP HEADER -->
    <div class="antarctica-header">

        <div class="header-left">
            <div class="security-tag">
                PETROVA TASK FORCE // CLIMATE INTERVENTION AUTHORIZED
            </div>

            <h1>OPERATION: WINTERFALL</h1>

            <p class="header-sub">
                ANTARCTIC METHANE RELEASE INITIATIVE
            </p>
        </div>

        <div class="header-status">
            <div class="status-ring">
                <span>AUTHORIZED</span>
            </div>
        </div>

    </div>

    <!-- MAIN GRID -->
    <div class="antarctica-grid">

        <!-- LEFT SIDE -->
        <div class="antarctica-main">

            <!-- OBJECTIVE -->
            <div class="ice-card">

                <div class="card-label">
                    PRIMARY OBJECTIVE
                </div>

                <div class="objective-display">

                    <div class="objective-line"></div>

                    <div class="objective-text">
                        Delay catastrophic global cooling long enough
                        to complete Project Hail Mary launch operations.
                    </div>

                </div>

            </div>

            <!-- BACKGROUND -->
            <div class="ice-card">

                <div class="card-label">
                    GLOBAL MODEL COLLAPSE FORECAST
                </div>

                <div class="warning-graph">

                    <div class="graph-line2 red"></div>
                    <div class="graph-line2 blue"></div>

                    <div class="graph-overlay"></div>

                    <div class="graph-label2 one">
                        AGRICULTURAL COLLAPSE
                    </div>

                    <div class="graph-label2 two">
                        INFRASTRUCTURE FAILURE
                    </div>

                </div>

                <p>
                    Updated climate models confirmed civilization would
                    likely destabilize before Project Hail Mary
                    could launch.
                </p>

                <div class="collapse-box">
                    WITHOUT INTERVENTION:
                    <span>MISSION FAILURE PROBABILITY EXCEEDS 81%</span>
                </div>

            </div>

            <!-- PROPOSED SOLUTION -->
            <div class="ice-card">

                <div class="card-label">
                    PROPOSED SOLUTION
                </div>

                <div class="operation-flow">

                    <div class="flow-box">
                        ICE SHELF FRACTURE
                    </div>

                    <div class="flow-arrow"></div>

                    <div class="flow-box">
                        METHANE RELEASE
                    </div>

                    <div class="flow-arrow"></div>

                    <div class="flow-box">
                        ATMOSPHERIC WARMING
                    </div>

                </div>

                <div class="impact-grid">

                    <div class="impact positive">
                        <h4>EXPECTED BENEFITS</h4>

                        <ul>
                            <li>Extend agricultural viability</li>
                            <li>Delay biosphere collapse</li>
                            <li>Preserve launch infrastructure</li>
                            <li>Buy additional launch time</li>
                        </ul>
                    </div>

                    <div class="impact negative">
                        <h4>EXPECTED COSTS</h4>

                        <ul>
                            <li>Biome destruction</li>
                            <li>Extreme weather instability</li>
                            <li>Sea level acceleration</li>
                            <li>Ocean temperature collapse</li>
                        </ul>
                    </div>

                </div>

            </div>

            <!-- STRATT QUOTE -->
            <div class="methane-quote">

                <div class="quote-symbol">“</div>

                <div class="quote-text">
                    Methane is now our friend.
                </div>

                <div class="quote-author">
                    — EVA STRATT
                </div>

            </div>

            <!-- FIELD NOTES -->
            <div class="ice-card">

                <div class="card-label">
                    FIELD NOTES
                </div>

                <div class="field-transcript">

                    <div class="transcript-line">
                        "The shelf will cleave at the explosion line
                        and slowly work its way into the sea and melt."
                    </div>

                    <div class="transcript-line">
                        "Sea levels will rise approximately one centimeter
                        within the first month."
                    </div>

                    <div class="transcript-line warning">
                        "The ocean temperature drop alone could trigger
                        secondary ecological disasters."
                    </div>

                </div>

            </div>

            <!-- FINAL CONCLUSION -->
            <div class="final-warning">

                <div class="final-title">
                    FINAL TASK FORCE CONCLUSION
                </div>

                <div class="final-text">
                    No —
                    this does not solve the problem.
                    <br><br>
                    It only buys time.
                    <br><br>
                    But time is the only resource humanity has left.
                </div>

            </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="antarctica-side">

            <!-- ANTARCTICA MAP -->
            <div class="side-panel">

                <div class="panel-title">
                    DETONATION ZONE MAP
                </div>

                <div class="antarctica-map">

                    <div class="continent-shape"></div>

                    <div class="blast-line one"></div>
                    <div class="blast-line two"></div>
                    <div class="blast-line three"></div>

                    <div class="blast-marker marker1"></div>
                    <div class="blast-marker marker2"></div>
                    <div class="blast-marker marker3"></div>

                    <div class="map-label west">
                        WESTERN SHELF
                    </div>

                    <div class="map-label zone">
                        FRACTURE ZONE
                    </div>

                </div>

            </div>

            <!-- WEATHER -->
            <div class="side-panel">

                <div class="panel-title">
                    PROJECTED WEATHER INSTABILITY
                </div>

                <div class="storm-monitor">

                    <div class="storm-circle"></div>
                    <div class="storm-circle two"></div>
                    <div class="storm-circle three"></div>

                    <div class="storm-center"></div>

                </div>

                <div class="storm-data">

                    <div>
                        <span>HYPERSTORMS</span>
                        <strong>LIKELY</strong>
                    </div>

                    <div>
                        <span>JET STREAM FAILURE</span>
                        <strong>PROJECTED</strong>
                    </div>

                    <div>
                        <span>GLOBAL FLOOD EVENTS</span>
                        <strong>ESCALATING</strong>
                    </div>

                </div>

            </div>

            <!-- NAVAL -->
            <div class="side-panel">

                <div class="panel-title">
                    NAVAL OPERATION LOG
                </div>

                <div class="naval-log">

                    <div class="log-line">
                        > CHINESE NAVY EXCLUSION ZONE ACTIVE
                    </div>

                    <div class="log-line">
                        > ANTARCTIC RESEARCH FACILITIES EVACUATED
                    </div>

                    <div class="log-line">
                        > CIVILIAN SHIPPING DIVERTED
                    </div>

                    <div class="log-line">
                        > DETONATION SYNCHRONIZATION CONFIRMED
                    </div>

                    <div class="log-line danger">
                        > GLOBAL CLIMATE INTERVENTION AUTHORIZED
                    </div>

                </div>

            </div>

        </div>

    </div>

</div>
`
},
crew: {

    title: 'PROJECT HAIL MARY — CREW BIOGRAPHIES',

    body: `
<div class="crew-archive">

    <!-- YAO -->

    <div class="crew-card">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/yao.jpg" alt="Photo of Yao Li-Jie">
        </div>

        <div class="crew-info">

<pre>
COMMANDER YAO LI-JIE
MISSION ROLE:
Pilot / Mission Commander

NATIONALITY:
Chinese

BACKGROUND:
Former People's Liberation Army Air Force pilot
with extensive long-duration orbital mission experience.

Widely regarded as one of the most technically capable
spacecraft pilots of his generation.

Psychological evaluations repeatedly identified Yao
as exceptionally calm under extreme stress conditions.

TASK FORCE NOTES:
"Reliable to a fault."

Assigned command authority over Project Hail Mary
approximately 742 days before launch window opening.
</pre>

        </div>

    </div>

    <!-- ILYUKHINA -->

    <div class="crew-card">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/ily.jpg" alt="Photo of Olesya Ilyukhina">
        </div>

        <div class="crew-info">

<pre>
SPECIALIST OLESYA ILYUKHINA
MISSION ROLE:
Engineer / Systems Specialist

NATIONALITY:
Russian

BACKGROUND:
Nuclear systems engineer and cosmonaut specializing
in closed-loop spacecraft survival systems.

Known within the Task Force for repeatedly solving
critical propulsion and life-support failures during
high-risk mission simulations.

TASK FORCE NOTES:
"Blunt. Aggressive. Brilliant."

Frequently ranked highest overall in survival adaptation testing.

Assigned primary engineering authority aboard Hail Mary.
</pre>

        </div>

    </div>

    <!-- DUBOIS -->

    <div class="crew-card">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/dubois.jpg" alt="Photo of Martin Dubois">
        </div>

        <div class="crew-info">

<pre>
SPECIALIST MARTIN DUBOIS
MISSION ROLE:
Science Officer

NATIONALITY:
French

BACKGROUND:
ESA mission specialist and xenobiology researcher
assigned to the Astrophage research initiative.

Dubois played a major role in early Astrophage
containment and metabolic analysis studies.

TASK FORCE NOTES:
"Most scientifically adaptable candidate."

Selected to oversee Tau Ceti biological analysis
and interstellar sample retrieval procedures.
</pre>

        </div>

    </div>

    <!-- BACKUPS -->

<pre>
BACKUP CREW ASSIGNMENTS:

• SHAPIRO — Navigation & Flight Systems
• LOKKEN — Planetary Systems
• MARTINEZ — Engineering Reserve

All backup crew members remained on Earth
through launch preparation phases.

At the time of crew finalization,
global weather instability and food rationing
had already begun affecting multiple nations.

Despite worsening conditions,
launch construction continued uninterrupted.

No two members of the primary or backup crew shall ever be in the same location.

MISSION CLOCK:
742 DAYS UNTIL LAUNCH WINDOW
</pre>

</div>
`
},
preparations: {

    title: 'HAIL MARY ORBITAL PREPARATION REPORT',

    body: `
<section class="timeline-section orbital-status-section">

    <div class="orbital-grid-bg"></div>
    <div class="scan-lines"></div>

    <div class="section-inner">

        <div class="eyebrow">
            PROJECT HAIL MARY — ORBITAL CONSTRUCTION ARCHIVE
        </div>

        <h1 class="section-title">
            HAIL MARY FLIGHT READY
        </h1>

        <p class="section-subtitle">
            T–9 DAYS UNTIL LAUNCH WINDOW
        </p>

        <!-- STATUS BAR -->

        <div class="flight-status-bar">

            <div class="flight-pill ready">
                FLIGHT READY
            </div>

            <div class="flight-pill warning">
                EARTH CONDITIONS DETERIORATING
            </div>

            <div class="flight-pill">
                FINAL SYSTEM TESTS COMPLETE
            </div>

        </div>

        <!-- MAIN GRID -->

        <div class="orbital-report-grid">

            <!-- LEFT -->

            <div class="orbital-left">

                <!-- SHIP VISUAL -->

                <div class="orbital-ship-panel">

                    <div class="panel-label">
                        ORBITAL ASSEMBLY VISUAL
                    </div>

                    <div class="ship-placeholder">
                        HAIL MARY<br>
                        EXTERIOR IMAGE / SHIP RENDER<br><br>
                        [ PLACE IMAGE ]
                    </div>

                    <div class="ship-stats-grid">

                        <div class="ship-stat-box">
                            <span>MASS</span>
                            <strong>2,000,000+ KG</strong>
                        </div>

                        <div class="ship-stat-box">
                            <span>HEIGHT</span>
                            <strong>114 METERS</strong>
                        </div>

                        <div class="ship-stat-box">
                            <span>CREW</span>
                            <strong>3 ASTRONAUTS</strong>
                        </div>

                        <div class="ship-stat-box">
                            <span>FUEL</span>
                            <strong>ASTROPHAGE</strong>
                        </div>

                    </div>

                </div>

                <!-- CONSTRUCTION TIMELINE -->

                <div class="orbital-timeline-card">

                    <div class="panel-label">
                        CONSTRUCTION TIMELINE
                    </div>

                    <div class="timeline-track">

                        <div class="timeline-node complete">
                            <span>YEAR 1</span>
                            <p>Orbital framework assembly begins</p>
                        </div>

                        <div class="timeline-node complete">
                            <span>YEAR 2</span>
                            <p>Fuel systems & spin habitats installed</p>
                        </div>

                        <div class="timeline-node complete">
                            <span>YEAR 3</span>
                            <p>Astrophage drives integrated</p>
                        </div>

                        <div class="timeline-node active">
                            <span>YEAR 4</span>
                            <p>Final systems verification complete</p>
                        </div>

                    </div>

                </div>

            </div>

            <!-- RIGHT -->

            <div class="orbital-right">

                <!-- REPORT -->

                <div class="orbital-terminal">

<pre>
[PROJECT HAIL MARY — FINAL ORBITAL STATUS REPORT]

STATUS:
FLIGHT READY

The interstellar vessel Hail Mary officially completed
assembly in low Earth orbit following approximately
four years of continuous multinational construction.

Final spacecraft mass exceeded two million kilograms,
making Hail Mary the largest crewed spacecraft
ever assembled by humanity.

For comparison:

• Approximately four times the mass of the
  International Space Station

• Constructed in less than one-twentieth
  the development time

---

COST ASSESSMENT:

Public tracking agencies ceased calculating total mission costs
after estimates surpassed 10 trillion USD equivalent.

As one commentator summarized:

"It stopped being an economic project.

It became Earth versus Astrophage."

---

FINAL SYSTEM TESTING:

ESA astronauts remained aboard Hail Mary
during the final operational testing phase.

More than 500 individual system faults were identified
during integrated ship simulations.

Reported issues included:

• Cryogenic inconsistencies
• Rotational gravity calibration drift
• Astrophage containment fluctuations
• Navigation synchronization failures
• Radiation shielding anomalies

None were classified as mission-ending failures.

---

TASK FORCE INTERNAL NOTE:

"This is happening.

Hail Mary is going to launch."

---

EARTH CONDITIONS DURING PREPARATION PHASE:

• Global food rationing expanded to 31 countries
• Severe weather events increased beyond projection models
• Coastal evacuations continued following methane interventions
• Major governments entered continuous emergency operation status

Despite worsening global instability,
construction of Hail Mary continued uninterrupted.

The launch was considered humanity's highest-priority operation.

---

MISSION CLOCK:

T–9 DAYS UNTIL LAUNCH WINDOW

[END REPORT]
</pre>

                </div>

                <!-- SYSTEM STATUS -->

                <div class="systems-grid2">

                    <div class="system-box2 green">
                        <span>CRYOGENICS</span>
                        <strong>STABLE</strong>
                    </div>

                    <div class="system-box2 yellow">
                        <span>ROTATIONAL GRAVITY</span>
                        <strong>MINOR DRIFT</strong>
                    </div>

                    <div class="system-box2 green">
                        <span>ASTROPHAGE STORAGE</span>
                        <strong>SECURE</strong>
                    </div>

                    <div class="system-box2 red">
                        <span>EARTH STABILITY</span>
                        <strong>CRITICAL</strong>
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
`
},
disaster: {

    title: 'KRAKÓW INCIDENT REPORT — FINAL CLASSIFICATION RELEASE',

    body: `
<div class="incident-report-shell">

    <!-- HEADER -->
    <div class="incident-topbar">

        <div class="incident-classification">
            <span class="incident-red"></span>
            PETROVA TASK FORCE INCIDENT REPORT
        </div>

        <div class="incident-meta">
            <div>
                <span>STATUS</span>
                DECLASSIFIED
            </div>

            <div>
                <span>LOCATION</span>
                KRAKÓW FACILITY
            </div>

            <div>
                <span>TIME</span>
                T–3 DAYS
            </div>
        </div>

    </div>

    <!-- TITLE -->
    <div class="incident-title-block">

        <div class="incident-alert">
            CATASTROPHIC LABORATORY FAILURE
        </div>

        <h2>
            LABORATORY SECTOR C EXPLOSION
        </h2>

        <p>
            Astrophage containment testing resulted in a critical
            energy release event causing total destruction of the
            eastern laboratory wing.
        </p>

    </div>

    <!-- CREW -->
    <div class="incident-casualties-grid">

        <!-- DUBOIS -->
        <div class="casualty-card">

            <div class="casualty-photo">
                PLACEHOLDER — DUBOIS
            </div>

            <div class="casualty-info">

                <h3>
                    Martin DuBois
                </h3>

                <span class="casualty-role">
                    FIRST SCIENCE OFFICER
                </span>

                <div class="casualty-status deceased">
                    STATUS: DECEASED
                </div>

                <p>
                    Present inside Laboratory Sector C during
                    live Astrophage interaction testing.
                    Fatal injuries sustained in initial blast wave.
                </p>

            </div>

        </div>

        <!-- SHAPIRO -->
        <div class="casualty-card">

            <div class="casualty-photo">
                PLACEHOLDER — SHAPIRO
            </div>

            <div class="casualty-info">

                <h3>
                    Anne Shapiro
                </h3>

                <span class="casualty-role">
                    ALTERNATE SCIENCE OFFICER
                </span>

                <div class="casualty-status deceased">
                    STATUS: DECEASED
                </div>

                <p>
                    Assisting DuBois during containment calibration.
                    Confirmed killed immediately following
                    catastrophic containment rupture.
                </p>

            </div>

        </div>

    </div>

    <!-- DAMAGE + TERMINAL -->
    <div class="incident-main-grid">

        <!-- LEFT -->
        <div class="incident-terminal">

<pre>
[PETROVA TASK FORCE INCIDENT REPORT]

LOCATION:
Kraków Astrophage Research Facility

DATE:
T–3 Days Before Launch

STATUS:
DECLASSIFIED

---

SUMMARY:

At approximately 04:12 local time,
an Astrophage containment experiment conducted
within Laboratory Sector C resulted in a catastrophic
energy release event.

The explosion caused severe structural collapse
throughout the eastern laboratory wing.

Subsequent fires continued for several hours.

---

FATALITIES:

First Science Officer Martin DuBois
was overseeing the experiment alongside
Alternate Science Officer Anne Shapiro.

Both were killed in the initial blast.

Physical Science Technician Jamie Davis
sustained critical injuries during the collapse.

He was rescued by emergency personnel
but was pronounced dead before transport
reached a medical facility.

Additional casualties included emergency responders,
laboratory staff, and support personnel.

---

INJURY REPORT:

[REDACTED] Wang,
junior laboratory assistant,
suffered severe blast-related traumatic brain injury.

At the time of report release,
the subject remained in a coma.

Firefighters battled the blaze on multiple fronts
within the Kraków communications and laboratory sectors.

Several injured personnel were unable to be evacuated
through the western corridor due to structural collapse.

Emergency triage zones were established externally
under active fire conditions.
</pre>

        </div>

        <!-- RIGHT -->
        <div class="incident-sidebar">

            <!-- CAUSE -->
            <div class="incident-panel">

                <div class="panel-label">
                    CAUSE OF INCIDENT
                </div>

                <div class="dosage-box">

                    <div class="dosage-item wrong">
                        <span>SUPPLIED</span>
                        <strong>1 MILLIGRAM</strong>
                    </div>

                    <div class="dosage-divider">
                        ≠
                    </div>

                    <div class="dosage-item correct">
                        <span>EXPECTED</span>
                        <strong>1 NANOGRAM</strong>
                    </div>

                </div>

                <div class="incident-warning">
                    ENERGY RELEASE EXCEEDED
                    ALL CONTAINMENT LIMITS
                </div>

            </div>

            <!-- IMPACT -->
            <div class="incident-panel">

                <div class="panel-label">
                    MISSION IMPACT
                </div>

                <ul class="impact-list">
                    <li>PRIMARY SCIENCE TEAM LOST</li>
                    <li>LAUNCH WINDOW: 72 HOURS</li>
                    <li>MISSION DELAY ESTIMATE: MONTHS</li>
                    <li>PROJECTED HUMAN SURVIVAL WINDOW:
                        INSUFFICIENT
                    </li>
                </ul>

            </div>

            <!-- DIRECTIVE -->
            <div class="directive-box">

                <div class="directive-header">
                    FINAL TASK FORCE DIRECTIVE
                </div>

                <div class="directive-text">
                    “HAIL MARY LAUNCHES IN THREE DAYS.
                    FIND ANOTHER SCIENTIST.”
                </div>

            </div>

        </div>

    </div>

</div>
`
},grace: {

    title: 'PROJECT HAIL MARY — PERSONNEL FILE: DR. RYLAND GRACE',

    body: `
<div class="crew-archive">

    <div class="crew-card">

        <!-- LEFT -->
        <div class="crew-photo-panel">

            <div class="crew-photo-wrap">

                <img class="crew-photo"
                src="assets/images-1.jpeg"
                alt="Photo of Dr. Ryland Grace">

            </div>

            <div class="crew-status">

                <div class="status-box">
                    <span>MISSION STATUS</span>
                    <strong>ACTIVE</strong>
                </div>

                <div class="status-box">
                    <span>LAUNCH WINDOW</span>
                    <strong>T–48 HOURS</strong>
                </div>

                <div class="status-box">
                    <span>ASTROPHAGE EXPERTISE</span>
                    <strong>LEVEL 5</strong>
                </div>

                <div class="status-box">
                    <span>PSYCH PROFILE</span>
                    <strong>FLAGGED</strong>
                </div>

            </div>

        </div>

        <!-- RIGHT -->
        <div class="crew-info">

            <div class="crew-header">

                <div class="crew-name-block">

                    <h2>
                        DR. RYLAND GRACE
                    </h2>

                    <div class="crew-role">
                        PRIMARY SCIENCE OFFICER
                    </div>

                </div>

                <div class="crew-classification">

                    <span>PERSONNEL FILE</span>

                    <strong>
                        LEVEL 4 CLEARANCE
                    </strong>

                </div>

            </div>

            <div class="crew-terminal">

<pre>
NAME:
Dr. Ryland Grace

MISSION ROLE:
Primary Science Officer

NATIONALITY:
American

EDUCATION:
Doctorate in Molecular Biology

PREVIOUS OCCUPATION:
Science Teacher
Grover Cleveland Middle School
San Francisco, California

---

BACKGROUND:

Dr. Grace initially joined the Petrova Task Force
during the early Astrophage analysis phase.

He became internationally recognized after contributing
to the first successful biological analysis of Astrophage
samples and formally introducing the term:

"Astrophage"

The designation was rapidly adopted by the global
scientific community.

Over the following years,
Grace emerged as one of the world's leading authorities
in Astrophage biology, energy behavior,
and reproductive systems.

Task Force records indicate he worked closely
with Director Eva Stratt throughout the majority
of Project Hail Mary development.

---

MISSION REASSIGNMENT:

Following the Kraków laboratory disaster,
Grace volunteered to replace the deceased
science officers aboard Hail Mary.

Task Force leadership approved reassignment
approximately 43 hours before launch.

---

MISSION PLAN ADDENDUM:

Due to limited astronaut training,
Dr. Grace was worried that he'd panic
during the launch.

Coma induced early to maximize
Dr. Grace's safety.

Once aboard the Hail Mary,
Yáo and Ilyukhina will secure Dr. Grace
into the medical bed and continue
coma-cycle stabilization procedures.

---

TASK FORCE NOTES:

• Exceptional Astrophage expertise
• Limited astronautics experience
• Strong problem-solving adaptability
• Psychological compatibility concerns noted

Despite concerns,
no alternative science personnel possessed
comparable mission-critical knowledge.

---

MISSION STATUS:
ACTIVE

LAUNCH WINDOW:
T–48 HOURS
</pre>

            </div>

        </div>

    </div>

    <!-- REDACTED -->
    <div class="redacted-file">

        <button class="redacted-button"
        onclick="toggleRedacted()">
    [REDACTED — UNSEAL FILE]
</button>

<div class="redacted-content2"
     id="redactedContent">
<div class="tribunal-file">

    <div class="file-header">
        <div class="classification">DECLASSIFIED ARCHIVE RECORD</div>
        <div class="date">UNSEALED — 32 YEARS AFTER INITIAL REPORT</div>
    </div>

    <div class="file-body">

        <div class="section">
            <div class="label">SOURCE</div>
            <div class="value">
                Deposition Testimony — Eva Stratt<br>
                Former Director, Project Hail Mary
            </div>
        </div>

        <div class="section">
            <div class="label">STATUS</div>
            <div class="value status">FULLY DECLASSIFIED</div>
        </div>

        <div class="divider"></div>

        <h2>MISSION ASSIGNMENT DISCLOSURE</h2>

        <p>
            Public records released during the initial recovery era
            indicated that Dr. Ryland Grace voluntarily accepted
            assignment to Project Hail Mary.
        </p>

        <p>
            Subsequent testimony provided by Eva Stratt revealed that
            the official account was intentionally inaccurate.
        </p>

        <p>
            During final mission preparations, Dr. Grace declined
            mandatory deployment aboard the interstellar vessel
            <strong>HAIL MARY</strong>.
        </p>

        <p>
            Internal review conducted by Project Hail Mary leadership
            concluded that no alternative candidate possessed the
            required combination of astrophage expertise, mission
            familiarity, and survival probability.
        </p>

        <p>
            Under emergency authority granted by the International
            Astrophage Response Coalition, Director Stratt authorized
            compulsory mission induction.
        </p>

        <div class="highlight-box">
            <strong>CONFIRMED ACTIONS</strong>

            <ul>
                <li>Subject was sedated under medical supervision.</li>
                <li>Subject was transferred to launch containment.</li>
                <li>Launch authorization proceeded without consent.</li>
                <li>Mission departure occurred as scheduled.</li>
            </ul>
        </div>

        <div class="quote">
            "No.<br><br>

            Humanity needed him more than he needed a choice."
        </div>

        <div class="divider"></div>

        <h2>POST-MISSION REVIEW</h2>

        <p>
            Following confirmation of mission success and Earth's
            long-term recovery from the Astrophage Crisis, multiple
            international investigations examined the legality of
            Project Hail Mary's emergency actions.
        </p>

        <p>
            Review boards determined that Director Stratt acted under
            unprecedented extinction-level circumstances and within
            authorities granted by emergency survival accords enacted
            during the crisis period.
        </p>

        <p>
            No criminal charges were filed in any participating nation.
        </p>

        <p>
            Subsequent tribunal findings concluded that while the
            decision represented a severe violation of individual
            autonomy, the action was directly linked to the successful
            execution of the mission and the preservation of human
            civilization.
        </p>

        <div class="verdict">
            <span>FINAL FINDING:</span><br>
            Director Eva Stratt formally absolved of criminal
            liability under Emergency Continuity Statutes.
        </div>

        <p class="final-note">
            When asked during closing testimony whether she would make
            the same decision again, Stratt answered:
        </p>

        <div class="quote">
            "Immediately."
        </div>

    </div>

</div>

        </div>

    </div>

</div>
`
},
launch: {

    title: 'PROJECT HAIL MARY — LAUNCH DAY TRANSCRIPT',

    body: `
<div class="launch-archive2">

    <!-- HERO HEADER -->

    <div class="launch-hero2">

        <div class="launch-overlay2"></div>

        <div class="launch-title2">

            <span class="launch-tag2">
                GLOBAL LIVE TRANSMISSION ARCHIVE
            </span>

            <h1>PROJECT HAIL MARY</h1>

            <p>
                HUMANITY'S FIRST INTERSTELLAR MISSION
            </p>

        </div>

    </div>

    <!-- CREW -->

    <div class="hm-crew-grid">

        <!-- YAO -->

        <div class="hm-crew-card">

            <div class="hm-photo-shell">
                <img class="hm-photo"
                src="assets/yao.jpg"
                alt="Commander Yao Li-Jie">
            </div>

            <div class="hm-card-glow"></div>

            <div class="hm-info">

                <span class="hm-role">
                    MISSION COMMANDER
                </span>

                <h3>YAO LI-JIE</h3>

                <p>
                    PILOT / NAVIGATION LEAD
                </p>

            </div>

        </div>

        <!-- ILYUKHINA -->

        <div class="hm-crew-card">

            <div class="hm-photo-shell">
                <img class="hm-photo"
                src="assets/ily.jpg"
                alt="Olesya Ilyukhina">
            </div>

            <div class="hm-card-glow"></div>

            <div class="hm-info">

                <span class="hm-role">
                    SYSTEMS ENGINEER
                </span>

                <h3>OLESYA ILYUKHINA</h3>

                <p>
                    SHIP SYSTEMS / LIFE SUPPORT
                </p>

            </div>

        </div>

        <!-- GRACE -->

        <div class="hm-crew-card">

            <div class="hm-photo-shell">
                <img class="hm-photo"
                src="assets/images-1.jpeg"
                alt="Dr. Ryland Grace">
            </div>

            <div class="hm-card-glow"></div>

            <div class="hm-info">

                <span class="hm-role">
                    PRIMARY SCIENCE OFFICER
                </span>

                <h3>DR. RYLAND GRACE</h3>

                <p>
                    ASTROPHAGE BIOLOGY SPECIALIST
                </p>

            </div>

        </div>

    </div>

    <!-- STATUS BAR -->

    <div class="launch-status2">

        <div class="status-box2">
            <span>MISSION STATUS</span>
            <strong>ACTIVE</strong>
        </div>

        <div class="status-box2">
            <span>DESTINATION</span>
            <strong>TAU CETI</strong>
        </div>

        <div class="status-box2">
            <span>TRAVEL TIME</span>
            <strong>13 YEARS</strong>
        </div>

        <div class="status-box2">
            <span>WORLD VIEWERS</span>
            <strong>4.2 BILLION</strong>
        </div>

    </div>

    <!-- TIMELINE -->

    <div class="launch-feed2">

        <div class="feed-line2"></div>

        <!-- ENTRY -->

        <div class="feed-event2">

            <div class="feed-time2">
                T–02:15:00
            </div>

            <div class="feed-content2">

                <h3>GLOBAL BROADCASTS BEGIN</h3>

                <p>
                    Emergency generators across multiple nations
                    power worldwide live coverage systems as billions
                    tune in to watch humanity's final interstellar attempt.
                </p>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2">

            <div class="feed-time2">
                T–01:03:55
            </div>

            <div class="feed-content2">

                <h3>VISUAL CONFIRMATION</h3>

                <p>
                    Orbital camera arrays confirm visual acquisition
                    of Hail Mary above Earth's night-side horizon.
                </p>

                <div class="quote-box2">
                    "You are looking at the most expensive object
                    humanity has ever built."
                </div>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2">

            <div class="feed-time2">
                T–00:48:20
            </div>

            <div class="feed-content2">

                <h3>CREW COMMS CHECK</h3>

                <div class="transmission2">

                    <span>MISSION CONTROL</span>
                    Commander Yao, comms check.

                </div>

                <div class="transmission2">

                    <span>YAO</span>
                    Reading you clear.

                </div>

                <div class="transmission2">

                    <span>MISSION CONTROL</span>
                    Specialist Ilyukhina?

                </div>

                <div class="transmission2">

                    <span>ILYUKHINA</span>
                    Still here.

                </div>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2">

            <div class="feed-time2">
                T–00:39:08
            </div>

            <div class="feed-content2">

                <h3>SCIENCE OFFICER STATUS</h3>

                <p>
                    Dr. Ryland Grace entered medically induced coma
                    procedures earlier today in preparation for launch.
                </p>

                <div class="news-callout2">

                    <strong>LIVE NEWS FEED:</strong>

                    "Grace volunteered for the mission
                    just hours after the deaths of the
                    original science officers."

                    "Many now consider him one of the bravest
                    individuals in human history."

                </div>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2">

            <div class="feed-time2">
                T–00:11:03
            </div>

            <div class="feed-content2">

                <h3>WORLD RESPONSE</h3>

                <p>
                    Church bells ring worldwide.
                    Massive crowds gather in New York,
                    Paris, Lagos, Tokyo, São Paulo,
                    and dozens of other cities.
                </p>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2 critical2">

            <div class="feed-time2">
                T–00:01:00
            </div>

            <div class="feed-content2">

                <h3>ASTROPHAGE IGNITION READY</h3>

                <div class="countdown-box2">

                    <div>ONE MINUTE TO IGNITION</div>

                </div>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2 critical2">

            <div class="feed-time2">
                T–00:00:30
            </div>

            <div class="feed-content2">

                <div class="transmission2">

                    <span>YAO</span>
                    See you in Tau Ceti.

                </div>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2 ignition2">

            <div class="feed-time2">
                T–00:00:00
            </div>

            <div class="feed-content2">

                <h3>ASTROPHAGE IGNITION CONFIRMED</h3>

                <p>
                    HAIL MARY DEPARTURE BURN INITIATED
                </p>

            </div>

        </div>

        <!-- ENTRY -->

        <div class="feed-event2">

            <div class="feed-time2">
                T+00:04:10
            </div>

            <div class="feed-content2">

                <h3>TRAJECTORY LOCK CONFIRMED</h3>

                <p>
                    Mission Control confirms stable interstellar
                    acceleration trajectory toward Tau Ceti.
                </p>

            </div>

        </div>

        <!-- FINAL -->

        <div class="final-message2">

            <div class="final-border2"></div>

            <p>
                "Humanity has left for the stars."
            </p>

            <span>
                — GLOBAL BROADCAST ARCHIVE
            </span>

        </div>

    </div>

</div>
`
},
stratt: {

    title: 'UNITED NATIONS SPECIAL TRIBUNAL — EVA STRATT',

    body: `
<section class="timeline-section tribunal-section">

    <div class="scan-lines"></div>

    <div class="section-inner">

        <div class="eyebrow red">
            UNITED NATIONS EMERGENCY TRIBUNAL
        </div>

        <h1 class="section-title">
            EVA STRATT ARRESTED
        </h1>

        <p class="section-subtitle">
            T+4 MONTHS AFTER PROJECT HAIL MARY LAUNCH
        </p>

        <div class="tribunal-warning">
            EMERGENCY IMMUNITY EXPIRED — INTERNATIONAL WARRANT EXECUTED
        </div>

        <div class="tribunal-grid">

            <!-- LEFT COLUMN -->
            <div class="tribunal-profile">

                <div class="mugshot-frame">
                    <div class="mugshot-placeholder">
                        EVA STRATT<br>
                        MUGSHOT<br><br>
                        [ PLACE IMAGE ]
                    </div>

                    <div class="mugshot-stamp">
                        DETAINED
                    </div>
                </div>

                <div class="case-card">

                    <div class="case-header">
                        CASE FILE
                    </div>

                    <div class="case-item">
                        <span>CASE ID</span>
                        <strong>UN-PTF-4427-A</strong>
                    </div>

                    <div class="case-item">
                        <span>STATUS</span>
                        <strong class="red-text">LIFE SENTENCE</strong>
                    </div>

                    <div class="case-item">
                        <span>PAROLE</span>
                        <strong>DENIED</strong>
                    </div>

                    <div class="case-item">
                        <span>RISK LEVEL</span>
                        <strong class="red-text">GLOBAL</strong>
                    </div>

                    <div class="case-item">
                        <span>FORMER TITLE</span>
                        <strong>Director, Petrova Task Force</strong>
                    </div>

                </div>

            </div>

            <!-- RIGHT COLUMN -->
            <div class="tribunal-content">

                <div class="tribunal-terminal">

<pre>
[OFFICIAL TRANSCRIPT — DECLASSIFIED]

LOCATION:
United Nations Emergency Tribunal

DATE:
T+4 Months After Hail Mary Launch

SUBJECT:
Eva Stratt

FORMER POSITION:
Director, Petrova Task Force

STATUS:
DETAINED

---

Following expiration of emergency authority protections,
Eva Stratt was formally arrested by international authorities.

Charges included:

• Crimes against environmental stability
• Unauthorized military operations
• Destruction of protected ecosystems
• Economic coercion
• Illegal seizure of private industry assets
• Violations of international aviation law
• Violations of maritime sovereignty
• Forced personnel conscription
• Human rights abuses
• Reckless atmospheric manipulation

Additional classified charges remain sealed.

---

TRANSCRIPT EXCERPT:

TRIBUNAL:
Do you deny responsibility for the destruction
of Antarctic ice shelves?

STRATT:
No.

---

TRIBUNAL:
Do you deny authorizing illegal military operations
within sovereign territory?

STRATT:
No.

---

TRIBUNAL:
Do you deny coercing scientists and governments
under threat of imprisonment or execution?

STRATT:
No.

---

TRIBUNAL:
Then by your own testimony,
you knowingly committed crimes
on a global scale.

STRATT:
Yes.

---

TRIBUNAL:
Do you feel remorse for these actions?

STRATT:
No.

---

TRIBUNAL:
Why?

STRATT:
Because the ship launched.

---

[ Silence recorded for approximately 12 seconds ]

---

STRATT:
You think people obey laws
when extinction is coming?

You think nations cooperate because they are good?

They cooperate because they are afraid.

---

TRIBUNAL:
Millions suffered because of your decisions.

STRATT:
Billions would have died without them.

---

TRIBUNAL:
You believe your actions were justified?

STRATT:
I believe humanity is still alive.

---

STRATT:
Someone had to take responsibility
for getting Hail Mary off the ground.

So yes.

I committed crimes.

I stole.

I threatened.

I destroyed ecosystems.

I forced governments to cooperate.

And if it gives that mission even the smallest chance
to succeed...

I would commit every single crime again.

[END TRANSCRIPT]
</pre>

                </div>

                <button class="open-report-btn"
onclick="toggleTribunalCharges(this)">
                    VIEW FULL CHARGE RECORD
                </button>

                <div class="tribunal-charges hidden">

                    <div class="charges-header">
                        INTERNATIONAL CHARGE DATABASE
                    </div>

                    <div class="charges-grid">

                        <div class="charge-box">
                            <span>ENVIRONMENTAL CRIMES</span>
                            <p>
                                Authorized deliberate destruction of Antarctic
                                ice shelves and atmospheric methane release.
                            </p>
                        </div>

                        <div class="charge-box">
                            <span>MILITARY MISUSE</span>
                            <p>
                                Directed multinational naval operations
                                without sovereign authorization.
                            </p>
                        </div>

                        <div class="charge-box">
                            <span>FORCED CONSCRIPTION</span>
                            <p>
                                Coercion of scientific personnel under
                                emergency wartime authority.
                            </p>
                        </div>

                        <div class="charge-box">
                            <span>PROPERTY SEIZURE</span>
                            <p>
                                Confiscation of private aerospace,
                                industrial, and transportation assets.
                            </p>
                        </div>

                        <div class="charge-box">
                            <span>HUMAN RIGHTS VIOLATIONS</span>
                            <p>
                                Emergency detentions and forced compliance
                                measures under Petrova authority statutes.
                            </p>
                        </div>

                        <div class="charge-box">
                            <span>CLASSIFIED</span>
                            <p>
                                Additional charges remain sealed under
                                post-collapse emergency continuity laws.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
`
},
wars: {

    title: 'GLOBAL RESOURCE COLLAPSE REPORT',

    body: `


<div class="collapse-report-shell">

    <!-- HEADER -->

    <div class="collapse-topbar">

        <div class="collapse-status">
            <span class="collapse-dot"></span>
            EARTH SYSTEM STATUS — CRITICAL
        </div>

        <div class="collapse-year">
            T+1.5 YEARS AFTER HAIL MARY LAUNCH
        </div>

    </div>

    <!-- MAIN GRID -->

    <div class="collapse-grid">

        <!-- LEFT SIDE -->

        <div class="collapse-left">

            <div class="collapse-threat-panel">

                <h2>RESOURCE WARS BEGIN</h2>

                <p class="collapse-sub">
                    Global food systems continue destabilizing
                    under accelerating solar dimming conditions.
                </p>

                <div class="collapse-stat-grid">

                    <div class="collapse-stat-box">
                        <span>GLOBAL CROP LOSS</span>
                        <h3>41%</h3>
                    </div>

                    <div class="collapse-stat-box">
                        <span>DISPLACED POPULATION</span>
                        <h3>1.8B</h3>
                    </div>

                    <div class="collapse-stat-box">
                        <span>RATIONING STATES</span>
                        <h3>63</h3>
                    </div>

                    <div class="collapse-stat-box">
                        <span>ACTIVE CONFLICTS</span>
                        <h3>27</h3>
                    </div>

                </div>

            </div>

            <!-- CONFLICT MAP -->

            <div class="collapse-war-map">

                <div class="collapse-map-header">
                    ACTIVE GLOBAL FLASHPOINTS
                </div>

                <div class="collapse-map-grid">

                    <div class="collapse-map-node danger">
                        <span>NORTHERN INDIA</span>
                        <p>Food riots / border conflicts</p>
                    </div>

                    <div class="collapse-map-node warning">
                        <span>SIBERIA</span>
                        <p>Arable land occupation battles</p>
                    </div>

                    <div class="collapse-map-node danger">
                        <span>CANADIAN GRAIN BELT</span>
                        <p>Military enforced ration zones</p>
                    </div>

                    <div class="collapse-map-node warning">
                        <span>MEDITERRANEAN</span>
                        <p>Desalination infrastructure collapse</p>
                    </div>

                    <div class="collapse-map-node danger">
                        <span>SOUTH AMERICA</span>
                        <p>Freshwater conflicts escalating</p>
                    </div>

                    <div class="collapse-map-node caution">
                        <span>NORTH ATLANTIC</span>
                        <p>Shipping lane instability</p>
                    </div>

                </div>

            </div>
            <!-- PROJECTION BARS -->

            <div class="collapse-projections">

                <div class="projection-line">
                    <span>FOOD STABILITY</span>
                    <div class="projection-bar">
                        <div class="projection-fill food"></div>
                    </div>
                </div>

                <div class="projection-line">
                    <span>OCEAN HEALTH</span>
                    <div class="projection-bar">
                        <div class="projection-fill ocean"></div>
                    </div>
                </div>

                <div class="projection-line">
                    <span>GLOBAL COOPERATION</span>
                    <div class="projection-bar">
                        <div class="projection-fill politics"></div>
                    </div>
                </div>

                <div class="projection-line">
                    <span>HUMANITY SURVIVAL INDEX</span>
                    <div class="projection-bar">
                        <div class="projection-fill humanity"></div>
                    </div>
                </div>

            </div>

        </div>

        <!-- RIGHT SIDE -->

        <div class="collapse-right">

            <!-- LIVE FEED -->

            <div class="collapse-feed">

                <div class="collapse-feed-title">
                    LIVE EARTH SYSTEMS FEED
                </div>

<pre>
[ GLOBAL CONDITIONS UPDATE ]

SOLAR OUTPUT CONTINUES DECLINE

Average surface temperatures continue falling
despite methane intervention operations.

Marine ecosystems report widespread collapse.

Northern fisheries now considered functionally extinct.

--------------------------------------------

FOOD DISTRIBUTION STATUS:

• Emergency rationing active in 63 nations
• Grain reserves nearing depletion
• Fuel shortages disrupting transportation
• Refugee movement exceeds all UN projections

--------------------------------------------

GEOPOLITICAL STATUS:

Several governments formally dissolved
during the first eighteen months after launch.

Remaining military powers increasingly redirect
resources toward internal stabilization.

International cooperation continues deteriorating.

--------------------------------------------
</pre>

            </div>

            

        </div>

    </div>

</div>

<div class="projection-grid">

    <!-- CROPS -->

    <div class="projection-card">

        <h3>GLOBAL CROP OUTPUT</h3>

        <div class="hud-graph">

            <div class="y-axis">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
            </div>

            <div class="graph-area">

                <div class="grid-lines"></div>

                <svg viewBox="0 0 100 100"
                preserveAspectRatio="none">

                    <polyline
                    points="0,10 20,18 40,30 60,48 80,72 100,92"
                    class="graph-path red-path"/>

                </svg>

            </div>

        </div>

        <div class="x-axis">
            <span>T+0</span>
            <span>T+5Y</span>
            <span>T+10Y</span>
            <span>T+15Y</span>
        </div>

    </div>

    <!-- REFUGEES -->

    <div class="projection-card">

        <h3>GLOBAL DISPLACEMENT</h3>

        <div class="hud-graph">

            <div class="y-axis">
                <span>0</span>
                <span>500M</span>
                <span>1B</span>
                <span>1.5B</span>
                <span>2B</span>
            </div>

            <div class="graph-area">

                <div class="grid-lines"></div>

                <svg viewBox="0 0 100 100"
                preserveAspectRatio="none">

                    <polyline
                    points="0,92 20,84 40,70 60,48 80,20 100,4"
                    class="graph-path orange-path"/>

                </svg>

            </div>

        </div>

        <div class="x-axis">
            <span>T+0</span>
            <span>T+5Y</span>
            <span>T+10Y</span>
            <span>T+15Y</span>
        </div>

    </div>

    <!-- TEMPERATURE -->

    <div class="projection-card">

        <h3>AVERAGE GLOBAL TEMPERATURE</h3>

        <div class="hud-graph">

            <div class="y-axis">
                <span>20°C</span>
                <span>15°C</span>
                <span>10°C</span>
                <span>5°C</span>
                <span>0°C</span>
            </div>

            <div class="graph-area">

                <div class="grid-lines"></div>

                <svg viewBox="0 0 100 100"
                preserveAspectRatio="none">

                    <polyline
                    points="0,14 20,22 40,38 60,60 80,82 100,96"
                    class="graph-path blue-path"/>

                </svg>

            </div>

        </div>

        <div class="x-axis">
            <span>T+0</span>
            <span>T+5Y</span>
            <span>T+10Y</span>
            <span>T+15Y</span>
        </div>

    </div>

</div>
`
},
yao: {

    title: 'HAIL MARY MEDICAL LOG — COMMANDER YAO LI-JIE',

    body: `
<div class="crew-archive">

    <div class="crew-card">

        <div class="crew-photo-slot">

            YAO PHOTO

            <div class="crew-status deceased">
                DECEASED
            </div>

        </div>

        <div class="crew-info">

            <h2>CREWMEMBER ARCHIVE — COMMANDER YAO LI-JIE</h2>

            <div class="archive-banner">
                ARCHIVAL RECONSTRUCTION • RECOVERED FROM HAIL MARY FLIGHT DATA
            </div>

            <div class="incident-grid">

                <div class="incident-stat">
                    <span>TIME INTO TRANSIT</span>
                    <strong>2.3 YEARS</strong>
                </div>

                <div class="incident-stat">
                    <span>CAUSE OF DEATH</span>
                    <strong>NUTRITIONAL FAILURE</strong>
                </div>

                <div class="incident-stat">
                    <span>CREW STATUS</span>
                    <strong>ALL CREW COMATOSE</strong>
                </div>

                <div class="incident-stat">
                    <span>WITNESSES</span>
                    <strong>NONE</strong>
                </div>

            </div>

            <p class="incident-summary">

                Recovered medical telemetry indicates that
                Commander Yao Li-Jie died during long-duration
                transit after a failure within the automated
                nutritional delivery system.

                A blockage developed inside the feeding assembly
                responsible for delivering slurry meals to
                crewmembers in medically induced coma.

                Because all crewmembers remained unconscious
                and ship monitoring thresholds had been lowered
                for cruise operations, the issue progressed
                unnoticed until irreversible organ damage
                had already occurred.

            </p>

        </div>

    </div>

    <div class="mary-log-container">

        <h3>RECOVERED MARY MEDICAL LOGS</h3>

        <div class="mary-entry">

            <div class="mary-header">
                MARY [02Y 113D | 03:14:02]
            </div>

            <div class="mary-body">

                Scheduled nutritional cycle initiated.

                Subject:
                YAO LI-JIE

                Slurry Meal #18,942 prepared.

                Feeding sequence started.

            </div>

        </div>

        <div class="mary-entry warning">

            <div class="mary-header">
                MARY [02Y 113D | 03:14:27]
            </div>

            <div class="mary-body">

                Feeding pressure above nominal range.

                Possible obstruction detected
                within delivery tube assembly.

                Attempting automated clearing cycle.

            </div>

        </div>

        <div class="mary-entry warning">

            <div class="mary-header">
                MARY [02Y 115D | 22:07:11]
            </div>

            <div class="mary-body">

                Subject nutritional intake below
                mission baseline requirements.

                Deficit:
                8.7%

                Alert priority:
                NON-CRITICAL

            </div>

        </div>

        <div class="mary-entry warning">

            <div class="mary-header">
                MARY [02Y 127D | 11:44:51]
            </div>

            <div class="mary-body">

                Nutritional deficit increasing.

                Deficit:
                37.2%

                Muscle degradation detected.

                Body mass trending downward.

            </div>

        </div>

        <div class="mary-entry critical">

            <div class="mary-header">
                MARY [02Y 139D | 04:55:39]
            </div>

            <div class="mary-body">

                CRITICAL MEDICAL CONDITION

                Severe malnutrition detected.

                Liver function compromised.

                Renal failure indicators present.

                Emergency nutritional restoration
                protocol initiated.

            </div>

        </div>

        <div class="mary-entry danger">

            <div class="mary-header">
                MARY [02Y 141D | 16:02:17]
            </div>

            <div class="mary-body">

                Multi-organ failure confirmed.

                Subject unable to recover
                without active crew intervention.

                No conscious personnel available.

            </div>

        </div>

        <div class="mary-entry death">

            <div class="mary-header">
                MARY [02Y 142D | 01:19:44]
            </div>

            <div class="mary-body">

                OFFICIAL PRONOUNCEMENT

                CREWMEMBER:
                COMMANDER YAO LI-JIE

                STATUS:
                DECEASED

                CAUSE:
                Nutritional Failure
                Secondary Multi-Organ Failure

                TIME OF DEATH:
                01:19:44 SHIP TIME

            </div>

        </div>

        <div class="mary-entry">

            <div class="mary-header">
                MARY [02Y 142D | 01:20:11]
            </div>

            <div class="mary-body">

                Medical Bay Occupancy Updated.

                Remaining Living Crew:

                • OLESYA ILYUKHINA
                • RYLAND GRACE

                Mission Status:
                CONTINUING

            </div>

        </div>

    </div>

    <div class="ship-status-panel">

        <h3>SHIP STATUS FOLLOWING INCIDENT</h3>

        <div class="status-row">
            <span>Commander Yao Li-Jie</span>
            <span class="dead">DECEASED</span>
        </div>

        <div class="status-row">
            <span>Olesya Ilyukhina</span>
            <span class="alive">ALIVE (COMATOSE)</span>
        </div>

        <div class="status-row">
            <span>Dr. Ryland Grace</span>
            <span class="alive">ALIVE (COMATOSE)</span>
        </div>

        <div class="status-row">
            <span>Human Crew Awake</span>
            <span>0</span>
        </div>

        <div class="status-row">
            <span>Mission Continuation</span>
            <span class="active">AUTHORIZED</span>
        </div>

    </div>

</div>
`
},
ily: {

    title: 'HAIL MARY MEDICAL REPORT — OLESYA ILYUKHINA',

    body: `
<div class="crew-archive">

<div class="crew-card">

<div class="crew-photo-slot">

    ILYUKHINA PHOTO

    <div class="crew-status deceased">
        DECEASED
    </div>

</div>

<div class="crew-info">

<h2>CREWMEMBER ARCHIVE — OLESYA ILYUKHINA</h2>

<div class="archive-banner">
    ARCHIVAL RECONSTRUCTION • RECOVERED FROM HAIL MARY FLIGHT DATA
</div>

<div class="incident-grid">

    <div class="incident-stat">
        <span>TIME INTO TRANSIT</span>
        <strong>12.1 YEARS</strong>
    </div>

    <div class="incident-stat">
        <span>CAUSE OF DEATH</span>
        <strong>PULMONARY EMBOLISM</strong>
    </div>

    <div class="incident-stat">
        <span>CREW STATUS</span>
        <strong>LAST ACTIVE CREW</strong>
    </div>

    <div class="incident-stat">
        <span>WITNESSES</span>
        <strong>NONE</strong>
    </div>

</div>

<p class="incident-summary">

Recovered telemetry indicates Crewmember
Olesya Ilyukhina suffered a catastrophic pulmonary embolism
during long-duration medically induced coma operations.

At the time of incident:

• Commander Yao Li-Jie had already expired.

• Dr. Ryland Grace remained unconscious.

• No conscious human beings were aboard Hail Mary.

All medical actions were performed autonomously
by MARY.

</p>

</div>

</div>

<div class="mary-log-container">

<h3>RECOVERED MARY MEDICAL LOGS</h3>

<div class="mary-entry critical">

<div class="mary-header">
MARY [12Y 031D | 04:17:11]
</div>

<div class="mary-body">

CARDIOVASCULAR ANOMALY DETECTED

Subject: ILYUKHINA, OLESYA

Blood oxygen saturation decreasing below
mission baseline parameters.

Automatic monitoring elevated to Priority 2.

</div>

</div>

<div class="mary-entry">

<div class="mary-header">
MARY [12Y 031D | 04:19:52]
</div>

<div class="mary-body">

Diagnostic sweep initiated.

Detected obstruction within pulmonary circulation.

Probability of embolism:

96.7%

Corrective treatment protocol activated.

</div>

</div>

<div class="mary-entry warning">

<div class="mary-header">
MARY [12Y 031D | 04:24:08]
</div>

<div class="mary-body">

Administering:

• Anticoagulant Package B
• Oxygen Saturation Recovery Protocol
• Emergency Circulation Stimulation

Response below expected values.

</div>

</div>

<div class="mary-entry warning">

<div class="mary-header">
MARY [12Y 031D | 04:31:55]
</div>

<div class="mary-body">

WARNING

Subject oxygen saturation:

82%
→ 71%
→ 58%

Neurological preservation threshold approaching.

</div>

</div>

<div class="mary-entry danger">

<div class="mary-header">
MARY [12Y 031D | 04:37:20]
</div>

<div class="mary-body">

CRITICAL EVENT

Pulmonary obstruction expanded.

Respiratory exchange failure detected.

Emergency revival sequence recommended.

Mission protocol prohibits awakening remaining crew.

Corrective options exhausted.

</div>

</div>

<div class="mary-entry danger">

<div class="mary-header">
MARY [12Y 031D | 04:43:09]
</div>

<div class="mary-body">

CARDIAC ACTIVITY LOST

Attempting autonomous resuscitation.

Attempt 1 — FAILED

Attempt 2 — FAILED

Attempt 3 — FAILED

</div>

</div>

<div class="mary-entry death">

<div class="mary-header">
MARY [12Y 031D | 04:51:36]
</div>

<div class="mary-body">

OFFICIAL PRONOUNCEMENT

CREWMEMBER:
OLESYA ILYUKHINA

STATUS:
DECEASED

CAUSE:
Pulmonary Embolism

TIME OF DEATH:
04:51:36 SHIP TIME

Crew Remaining Alive:
1

Mission Status:
CONTINUING

</div>

</div>

</div>

<div class="ship-status-panel">

<h3>SHIP STATUS AFTER INCIDENT</h3>

<div class="status-row">
<span>Commander Yao Li-Jie</span>
<span class="dead">DECEASED</span>
</div>

<div class="status-row">
<span>Olesya Ilyukhina</span>
<span class="dead">DECEASED</span>
</div>

<div class="status-row">
<span>Dr. Ryland Grace</span>
<span class="alive">ALIVE (COMATOSE)</span>
</div>

<div class="status-row">
<span>Human Crew Awake</span>
<span>0</span>
</div>

<div class="status-row">
<span>Mission Continuation</span>
<span class="active">AUTHORIZED</span>
</div>

</div>
`
},
tau: {

    title: 'HAIL MARY — NAVIGATION DISPLAY',

    body: `
<div class="tau-ui">

    <div class="tau-header">

        <div>
            VESSEL:
            <span>HAIL MARY</span>
        </div>

        <div>
            DESTINATION:
            <span>TAU CETI</span>
        </div>

        <div>
            STATUS:
            <span>ARRIVED</span>
        </div>

    </div>

    <!-- STAR MAP 

    <div class="star-map">

        <div class="star earth"></div>

        <div class="travel-line"></div>

        <div class="star tau-ceti"></div>

        <div class="ship-marker"></div>

        <div class="label earth-label">
            SOL
        </div>

        <div class="label tau-label">
            TAU CETI
        </div>

        <div class="distance-readout">
            DISTANCE TRAVELED:
            11.9 LIGHT YEARS
        </div>

    </div>
    -->

    <!-- SYSTEMS -->

    <div class="tau-grid">

        <div class="tau-card">

            <h3>ASTROPHAGE FUEL</h3>

            <div class="fuel-bar">

                <div class="fuel-fill"></div>

            </div>

            <span>38% REMAINING</span>

        </div>

        <div class="tau-card">

            <h3>SHIP VELOCITY</h3>

            <div class="tau-stat">
                0.92c
            </div>

        </div>

        <div class="tau-card">

            <h3>CREW STATUS</h3>

            <div class="tau-stat">
                1 ALIVE
            </div>

        </div>

        <div class="tau-card">

            <h3>COMMUNICATION</h3>

            <div class="tau-stat warning">
                NO EARTH CONTACT
            </div>

        </div>

    </div>

    <div class="wake-report">

    <div class="wake-header">
        <h2>MISSION AWAKENING SEQUENCE</h2>
        <span>T+13 YEARS · TAU CETI ARRIVAL</span>
    </div>

    <div class="wake-summary">

        <div class="wake-status">
            <span>SURVIVING CREW</span>
            <h3>DR. RYLAND GRACE</h3>
        </div>

        <div class="wake-status">
            <span>MISSION STATUS</span>
            <h3>ACTIVE</h3>
        </div>

        <div class="wake-status">
            <span>AUTOMATED SYSTEM</span>
            <h3>MARY ONLINE</h3>
        </div>

    </div>

    <div class="wake-section">

        <h3>RECOVERED MEDICAL LOGS</h3>

        <div class="medical-log">

            <div class="log-time">
                MARY[13Y:04M:17D 06:11:02]
            </div>

            <div class="log-entry">
                ARRIVAL DECELERATION COMPLETE.
                TARGET SYSTEM: TAU CETI.
                CREW AWAKENING PROTOCOL INITIATED.
            </div>

        </div>

        <div class="medical-log">

            <div class="log-time">
                MARY[13Y:04M:17D 06:11:18]
            </div>

            <div class="log-entry">
                CREW STATUS CHECK COMPLETE.
                COMMANDER YAO LI-JIE — DECEASED.
                SPECIALIST ILYUKHINA — DECEASED.
                DR. RYLAND GRACE — VITAL SIGNS PRESENT.
            </div>

        </div>

        <div class="medical-log">

            <div class="log-time">
                MARY[13Y:04M:17D 06:12:40]
            </div>

            <div class="log-entry">
                NEURAL STIMULATION PROTOCOL ENGAGED.
                MUSCLE REACTIVATION SEQUENCE STARTED.
            </div>

        </div>

        <div class="medical-log critical">

            <div class="log-time">
                MARY[13Y:04M:17D 06:13:01]
            </div>

            <div class="log-entry">
                ADMINISTERING DGSE-47 RETROGRADE MEMORY
                SUPPRESSION COMPOUND.
            </div>

        </div>

        <div class="medical-log redacted">

            <div class="log-time">
                MARY[13Y:04M:17D 06:13:03]
            </div>

            <div class="log-entry">
                [REDACTED]

                PURPOSE:
                TEMPORARY MEMORY INHIBITION DURING
                POST-COMA COGNITIVE RECOVERY.

                SOURCE:
                FRENCH INTELLIGENCE SERVICE ARCHIVES.

                EXPECTED EFFECT:
                LONG-TERM RETROGRADE AMNESIA
                WITHOUT LOSS OF EDUCATION,
                LANGUAGE RETENTION,
                OR TECHNICAL KNOWLEDGE.

                AUTHORIZATION:
                EVA STRATT

                [END REDACTION]
            </div>

        </div>

        <div class="medical-log">

            <div class="log-time">
                MARY[13Y:04M:17D 06:14:22]
            </div>

            <div class="log-entry">
                SUBJECT SHOWING EYE MOVEMENT.
                BRAIN ACTIVITY INCREASING.
            </div>

        </div>

        <div class="medical-log">

            <div class="log-time">
                MARY[13Y:04M:17D 06:14:51]
            </div>

            <div class="log-entry">
                CONSCIOUSNESS RETURN IMMINENT.
                BEGINNING COGNITIVE ASSESSMENT BATTERY.
            </div>

        </div>

    </div>

</div>

<div class="cognitive-assessment">

    <div class="assessment-header">
        <h2>COGNITIVE ASSESSMENT LOG #001</h2>
        <span>AUTOMATED RECOVERY PROTOCOL</span>
    </div>
    <br>
    <div class="assessment-log">
        <div class="assessment-entry mary">
            <span>MARY[05:15:03]: EYE MOVEMENT DETECTED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:04]: QUESTION 001: WHAT IS TWO PLUS TWO?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:15:12]: Lrmln.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:13]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:19]: ATTEMPT 002: WHAT IS TWO PLUS TWO?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:15:27]: Hlllch</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:28]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:42]: ATTEMPT 003: WHAT IS TWO PLUS TWO?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:15:51]: Glunn!</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:52]: EYE MOVEMENT DETECTED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:15:53]: ATTEMPT 004: WHAT IS TWO PLUS TWO?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:16:04]: Fffr.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:06]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:07]: ATTEMPT 005: WHAT IS TWO PLUS TWO?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:16:13]: Fffr...oooh...rrrr</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:15]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:18]: ATTEMPT 006: WHAT IS TWO PLUS TWO?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:16:24]: Fffoouurr</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:25]: CORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:30]: YOU HAVE BEEN IN AN INDUCED COMA. YOU MAY EXPERIENCE MEMORY LOSS, DIFFICULTY SPEAKING.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:39]: QUESTION 002: WHAT IS THE CUBE ROOT OF EIGHT?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:16:45]: Where am I?</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:46]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:48]: ATTEMPT 002: WHAT IS THE CUBE ROOT OF EIGHT?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:16:55]: Two times e to the two-i-pi.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:16:57]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:00]: ATTEMPT 003: WHAT IS THE CUBE ROOT OF EIGHT?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:17:08]: Two.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:09]: CORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:15]: HAND MOVEMENT DETECTED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:17]: REMAIN STILL.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:22]: BODY MOVEMENT DETECTED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:24]: FOR YOUR OWN SAFETY, PLEASE RETURN TO THE MEDICAL PLATFORM.</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:17:31]: What? Why-</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:33]: TUBE REMOVAL INITIATED.</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:17:40]: Take... Take the tubes out.....</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:45]: FULL BODY MOTION DETECTED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:47]: QUESTION 003: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:17:54]: Pfft, seriously?</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:55]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:17:57]: ATTEMPT 002: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:18:03]: Uh...</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:18:04]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:18:06]: ATTEMPT 003: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[05:18:12]: Um.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:18:13]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[05:18:15]: INITIATING SEDATION PROTOCOL...</span>
        </div>
    </div>
</div>

<div class="cognitive-assessment">

    <div class="assessment-header">
        <h2>COGNITIVE ASSESSMENT LOG #002</h2>
        <span>AUTOMATED RECOVERY PROTOCOL</span>
    </div>
    <br>
    <div class="assessment-log">
        <div class="assessment-entry mary2">
            <span>MARY[06:16:04]: CONSCIOUSNESS DETECTED.</span>
        </div>
        <div class="assessment-entry mary2">
            <span>MARY[06:15:52]: EYE MOVEMENT DETECTED. </span>
        </div>
        <div class="assessment-entry mary2">
            <span>MARY[06:16:05]: QUESTION 001: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[06:16:09]: I still don't know that.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:10]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:11]: ATTEMPT 002: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[06:16:16]: J... John?</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:17]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:18]: ATTEMPT 003: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[06:16:21]: Bite me.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:22]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:23]: PHYSICAL DISTRESS DETECTED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:24]: PATIENT REMOVING MEDICAL INTERFACES.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:25]: WARNING: LIFE SUPPORT CONNECTIONS COMPROMISED.</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[06:16:28]: AAAAAAAAAAAAAAAAH!</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:29]: PHYSICAL DISTRESS CONFIRMED.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:31]: DEPLOYING ASSISTANCE ARMS.</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[06:16:34]: Hey! One of you, wake up!</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:35]: QUESTION 001: WHAT IS YOUR NAME?</span>
        </div>

        <div class="assessment-entry grace2">
            <span>GRACE[06:16:39]: One of you humans, wake up, please.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:40]: INCORRECT.</span>
        </div>

        <div class="assessment-entry mary2">
            <span>MARY[06:16:42]: COGNITIVE ASSESSMENT FAILURE.</span>
        </div>
    </div>
</div>

<div class="cognitive-assessment">

    <div class="assessment-header">
        <h2>COGNITIVE ASSESSMENT LOG #003</h2>
        <span>AUTOMATED RECOVERY PROTOCOL</span>
    </div>
    <br>
    <div class="assessment-log">
    <div class="assessment-entry grace2">
    <span>GRACE[06:24:11]: Where am I?!</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:24:12]: PLEASE REMEMBER. MUSCLE FUNCTION HAS NOT YET BEEN FULLY RESTORED.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:24:18]: People! Hello?!</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:24:27]: Where am I?!</span>
</div>

<div class="assessment-entry mary-log">
    <span>[MARY INTERNAL LOG]: SUBJECT DISPLAYING DISORIENTATION.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:24:44]: Red leather. Yellow leather. Red leather. Yellow leather...</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:24:52]: Why is there an atomic resolution scanning electron microscope?</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:24:58]: Why do I know that?</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:01]: Am I smart?!</span>
</div>

<div class="assessment-entry mary-log">
    <span>[MARY INTERNAL LOG]: SPEECH FUNCTION IMPROVING.</span>
</div>

<div class="assessment-entry mary-log">
    <span>[MARY INTERNAL LOG]: KNOWLEDGE RETENTION DETECTED.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:19]: Hello?</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:25:20]: PLEASE RECORD VIDEO DIARY.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:21]: No.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:27]: Can I speak to the person in charge?</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:31]: The captain.</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:25:32]: CAPTAIN YÁO LI-JIE. DECEASED.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:39]: Okay... where are the living people?</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:25:40]: DOCTOR RYLAND GRACE. END OF MANIFEST.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:48]: I can't be the only person here.</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:25:49]: PILOT DETECTED.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:54]: No.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:55]: No no no.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:25:56]: Not the pilot.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:26:01]: Call Houston.</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:26:02]: UNKNOWN COMMAND.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:26:10]: Operation Go Home. In effect.</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:26:11]: INVALID OPERATION.</span>
</div>

<div class="assessment-entry mary-log">
    <span>[MARY INTERNAL LOG]: SUBJECT REQUESTING EARTH CONTACT.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:04]: That's the Sun.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:08]: There it is.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:12]: So we're... Neptune-ish?</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:17]: Let's call Earth.</span>
</div>

<div class="assessment-entry mary2">
    <span>MARY[06:27:18]: CURRENT TRANSMISSION TIME TO EARTH IS 11 YEARS, 10 MONTHS, 14 DAYS, 6 HOURS.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:29]: Oh.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:33]: No.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:36]: You're wrong.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:27:40]: I need a map.</span>
</div>

<div class="assessment-entry mary-log">
    <span>[MARY INTERNAL LOG]: NAVIGATIONAL DISPLAY ACCESSED.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:28:11]: Oh...</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:28:16]: That's far.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:28:19]: That's really far.</span>
</div>

<div class="assessment-entry mary-log">
    <span>[MARY INTERNAL LOG]: ELEVATED STRESS RESPONSE DETECTED.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:28:36]: That's not our Sun.</span>
</div>

<div class="assessment-entry grace2">
    <span>GRACE[06:28:47]: That's not our Sun.</span>
</div>

    </div>
</div>

`},

contact: {

    title: 'EXTRATERRESTRIAL CONTACT FILE',

    body: `

<div class="contact-report">

    <!-- SONAR -->

    <div class="sonar-display large-sonar">

        <div class="sonar-ring ring1"></div>
        <div class="sonar-ring ring2"></div>
        <div class="sonar-ring ring3"></div>

        <div class="sonar-center"></div>

        <!-- BLIP -->

        <div class="contact-blip"></div>

        <div class="blip-label">
            BLIP-A
        </div>

        <div class="signal-line"></div>

    </div>

<pre>
[RECOVERED HAIL MARY TELEMETRY]

MISSION TIME:
T+13.2 YEARS

Unknown active signal source detected
within the Tau Ceti system.

Initial scans suggested:
• Artificial structure
• Controlled movement
• Non-human origin

Recovered telemetry confirmed
the presence of an unidentified
interstellar vessel operating
within Tau Ceti orbital space.

---

SIGNAL DESIGNATION:
BLIP-A

ORIGIN:
UNKNOWN

THREAT STATUS:
UNDETERMINED

---

Recovered logs later confirmed
the object represented humanity's
first encounter with intelligent
extraterrestrial life.

Additional xenological records
remain classified.

[END FILE]
</pre>

    <button class="archive-button"
    onclick="toggleRockyFile()">

        DECLASSIFY XENOLOGICAL FILES

    </button>

    <!-- HIDDEN -->

    <div id="rockyFile" class="rocky-file hidden-file">

        <div class="declass-header">

            XENOLOGICAL FILES DECLASSIFIED

        </div>

        <div class="alien-top">

            <div class="alien-photo">
                ROCKY IMAGE
            </div>

            <div class="alien-photo">
                ERIDIAN SHIP IMAGE
            </div>

        </div>

<div class="hmxeno-intel-file">

    <div class="hmxeno-banner">
        <span>TAU CETI DEEP SPACE SURVEILLANCE NETWORK</span>
        <span>RECOVERED HAIL MARY TELEMETRY</span>
    </div>

    <div class="hmxeno-alert">
        UNKNOWN EXTRASOLAR CONTACT EVENT DETECTED
    </div>

    <div class="hmxeno-grid">

        <div class="hmxeno-card">
            <h3>MISSION DATA</h3>

            <div class="hmxeno-stat">
                <label>MISSION ELAPSED TIME</label>
                <span>T+13.2 YEARS</span>
            </div>

            <div class="hmxeno-stat">
                <label>STAR SYSTEM</label>
                <span>TAU CETI</span>
            </div>

            <div class="hmxeno-stat">
                <label>SIGNAL DESIGNATION</label>
                <span>BLIP-A</span>
            </div>

            <div class="hmxeno-stat">
                <label>THREAT STATUS</label>
                <span class="hmxeno-yellow">UNDETERMINED</span>
            </div>
        </div>

        <div class="hmxeno-card">
            <h3>INITIAL SCAN RESULTS</h3>

            <ul>
                <li>Artificial structure detected</li>
                <li>Controlled propulsion signatures</li>
                <li>Non-human engineering profile</li>
                <li>Unknown energy architecture</li>
                <li>No database match found</li>
            </ul>
        </div>

    </div>

    <div class="hmxeno-log">
        <div>> ACTIVE SENSOR SWEEP COMPLETE</div>
        <div>> OBJECT LOCK ACQUIRED</div>
        <div>> TRAJECTORY ANALYSIS COMPLETE</div>
        <div>> TECHNOLOGICAL ORIGIN CONFIRMED</div>
        <div>> FIRST NON-HUMAN VESSEL DETECTED</div>
    </div>

    <div class="hmxeno-summary">
        <h3>INTELLIGENCE SUMMARY</h3>

        <p>
            Recovered Hail Mary telemetry confirmed the existence of an
            unidentified interstellar spacecraft operating within Tau Ceti
            orbital space.
        </p>

        <p>
            Subsequent mission records established the object as humanity's
            first verified encounter with intelligent extraterrestrial life.
        </p>

        <p>
            Additional xenological data remains restricted under
            Interstellar Contact Protocol Alpha-1.
        </p>
    </div>

</div>

<button class="hmxeno-declassify-btn"
onclick="toggleRockyFile()">
    DECLASSIFY XENOLOGICAL FILES
</button>

<div id="rockyFile" class="rocky-file hidden-file">

    <div class="hmxeno-declass-header">
        FILE ACCESS GRANTED
    </div>

    <div class="hmxeno-declass-subtitle">
        EXTRATERRESTRIAL CONTACT DATABASE
    </div>

    <div class="hmxeno-images">

        <div class="hmxeno-image-card">
            <img src="images/rocky.png">
            <span>SPECIMEN R-01 ("ROCKY")</span>
        </div>

        <div class="hmxeno-image-card">
            <img src="images/eridian-ship.png">
            <span>ERIDIAN INTERSTELLAR VESSEL</span>
        </div>

    </div>

    <div class="hmxeno-profile">

        <div class="hmxeno-profile-header">
            CONTACT PROFILE
        </div>

        <div class="hmxeno-grid">

            <div class="hmxeno-card">

                <div class="hmxeno-stat">
                    <label>DESIGNATION</label>
                    <span>ROCKY</span>
                </div>

                <div class="hmxeno-stat">
                    <label>SPECIES</label>
                    <span>ERIDIAN</span>
                </div>

                <div class="hmxeno-stat">
                    <label>HOMEWORLD</label>
                    <span>ERID</span>
                </div>

                <div class="hmxeno-stat">
                    <label>CONTACT STATUS</label>
                    <span class="hmxeno-green">FRIENDLY</span>
                </div>

            </div>

            <div class="hmxeno-card">

                <h3>BIOLOGICAL DATA</h3>

                <ul>
                    <li>Ammonia-based biochemistry</li>
                    <li>Extreme pressure adaptation</li>
                    <li>Echolocation perception</li>
                    <li>No visual sensory organs</li>
                    <li>Metallic exoskeleton</li>
                    <li>Five-limbed body plan</li>
                </ul>

            </div>

        </div>

        <div class="hmxeno-card">
            <h3>TECHNOLOGICAL ASSESSMENT</h3>

            <ul>
                <li>Interstellar-capable spacecraft</li>
                <li>Advanced material science</li>
                <li>Mechanical computational systems</li>
                <li>Astrophage energy utilization</li>
                <li>Independent stellar-dimming research program</li>
            </ul>
        </div>

        <div class="hmxeno-transcript">

            <div class="hmxeno-transcript-title">
                RECOVERED COMMUNICATIONS
            </div>

            <div class="hmxeno-chat rocky">
                ROCKY: Grace question?
            </div>

            <div class="hmxeno-chat rocky">
                ROCKY: Rocky help.
            </div>

            <div class="hmxeno-chat rocky">
                ROCKY: You are friend, Grace.
            </div>

        </div>

        <div class="hmxeno-significance">
            FIRST CONFIRMED CONTACT BETWEEN HUMANITY
            AND EXTRATERRESTRIAL INTELLIGENCE
        </div>

    </div>

</div>
`
},
adrian: {

    title: 'PETROVA LINE FINDINGS',

    body: `
<div class="hm-adrian-report">

    <div class="hm-adrian-header">
        <h2>ADRIAN BIOSPHERE ANALYSIS</h2>
        <span>XENOLOGY DIVISION • RECOVERED HAIL MARY DATASET</span>
    </div>

    <!-- HERO IMAGE -->

    <div class="hm-adrian-hero">
        INSERT: FULL ADRIAN ORBITAL IMAGE
    </div>

    <!-- LAB DATA -->

    <div class="hm-adrian-meta">

        <div class="hm-adrian-meta-card">
            <label>LOCATION</label>
            <span>ADRIAN PETROVA LINE</span>
        </div>

        <div class="hm-adrian-meta-card">
            <label>PRIMARY RESEARCHER</label>
            <span>DR. RYLAND GRACE</span>
        </div>

        <div class="hm-adrian-meta-card">
            <label>ASSISTING RESEARCHER</label>
            <span>ROCKY (ERIDIAN)</span>
        </div>

        <div class="hm-adrian-meta-card">
            <label>STATUS</label>
            <span>CONFIRMED EXTRATERRESTRIAL BIOSPHERE</span>
        </div>

    </div>

    <!-- IMAGE WALL -->

    <div class="hm-adrian-gallery">

        <div class="hm-adrian-photo">
            INSERT: TAU CETI SYSTEM
        </div>

        <div class="hm-adrian-photo">
            INSERT: ADRIAN CLOSEUP
        </div>

        <div class="hm-adrian-photo">
            INSERT: PETROVA LINE IMAGE
        </div>

        <div class="hm-adrian-photo">
            INSERT: ASTROPHAGE CLOUD
        </div>

    </div>

    <!-- SCIENTIFIC SUMMARY -->

    <div class="hm-adrian-section">

        <h3>EXECUTIVE SUMMARY</h3>

        <p>
            Sampling operations conducted within Adrian's Petrova Line
            confirmed the presence of a complete extraterrestrial ecosystem.
        </p>

        <p>
            Initial assumptions classified Astrophage as an isolated lifeform.
            Further analysis demonstrated the existence of numerous interacting
            biological species occupying distinct ecological niches.
        </p>

        <p>
            Findings indicate Adrian supports the first confirmed non-terrestrial
            biosphere ever documented by humanity.
        </p>

    </div>

    <!-- SAMPLE ANALYSIS -->

    <div class="hm-adrian-section">

        <h3>BIOLOGICAL SAMPLE ANALYSIS</h3>

        <div class="hm-adrian-gallery">

            <div class="hm-adrian-photo">
                INSERT: MICROSCOPY IMAGE #1
            </div>

            <div class="hm-adrian-photo">
                INSERT: MICROSCOPY IMAGE #2
            </div>

            <div class="hm-adrian-photo">
                INSERT: MICROSCOPY IMAGE #3
            </div>

            <div class="hm-adrian-photo">
                INSERT: CELL STRUCTURE IMAGE
            </div>

        </div>

        <ul>
            <li>Microbial organisms identified</li>
            <li>Multicellular structures observed</li>
            <li>Predatory feeding behaviors documented</li>
            <li>Stable energy transfer systems confirmed</li>
            <li>Astrophage integrated into food chain</li>
        </ul>

    </div>

    <!-- QUOTE -->

    <div class="hm-adrian-quote">

        "Which means... there's life on Adrian."

        <span>— Dr. Ryland Grace</span>

    </div>

</div>


<button class="hm-adrian-eva-btn"
onclick="toggleSpacewalkReport()">
    OPEN EVA RESEARCH LOG
</button>


<div id="spacewalkReport"
class="hidden-file">

    <div class="hm-eva-header">

        EVA-04 BIOLOGICAL SAMPLING MISSION

    </div>

    <!-- EVA PHOTOS -->

    <div class="hm-eva-gallery">

        <div class="hm-eva-photo">
            INSERT: AIRLOCK CAMERA
        </div>

        <div class="hm-eva-photo">
            INSERT: SPACEWALK SELFIE
        </div>

        <div class="hm-eva-photo">
            INSERT: HAIL MARY EXTERIOR
        </div>

        <div class="hm-eva-photo">
            INSERT: ROCKY SHIP EXTERIOR
        </div>

        <div class="hm-eva-photo">
            INSERT: PETROVA LINE CLOSEUP
        </div>

        <div class="hm-eva-photo">
            INSERT: SAMPLE COLLECTION
        </div>

        <div class="hm-eva-photo">
            INSERT: GLOWING ORGANISMS
        </div>

        <div class="hm-eva-photo">
            INSERT: TETHER CAM VIEW
        </div>

    </div>

    <div class="hm-eva-log">

        <div class="hm-eva-entry">
            <span>07:14 UTC</span>
            AIRLOCK OPENED
        </div>

        <div class="hm-eva-entry">
            <span>07:16 UTC</span>
            EVA COMMENCED
        </div>

        <div class="hm-eva-entry">
            <span>07:21 UTC</span>
            BIOLOGICAL ACTIVITY OBSERVED
        </div>

        <div class="hm-eva-entry">
            <span>07:39 UTC</span>
            SAMPLE COLLECTION COMPLETE
        </div>

        <div class="hm-eva-entry">
            <span>08:02 UTC</span>
            RETURN TO HAIL MARY
        </div>

    </div>

    <div class="hm-eva-notes">

        <h3>FIELD NOTES</h3>

        <p>
            Visual observation confirmed dense biological activity
            throughout the Petrova Line.
        </p>

        <p>
            Numerous microscopic organisms exhibited autonomous movement
            and appeared to occupy specialized ecological roles.
        </p>

        <p>
            Dr. Grace later described the environment as:
        </p>

        <blockquote>
            "Like swimming through glowing alien plankton."
        </blockquote>

    </div>

</div>

`
},
fishing: {

    title: 'HAIL MARY INCIDENT REPORT',

    body: `
<div class="hm-incident-file">

    <div class="hm-incident-header">

        <div class="hm-incident-warning">
            INCIDENT INVESTIGATION FILE
        </div>

        <h2>ADRIAN ATMOSPHERIC COLLECTION ACCIDENT</h2>

        <span>RECOVERED HAIL MARY TELEMETRY • LEVEL 4 REVIEW</span>

    </div>

    <!-- HERO IMAGE -->

    <div class="hm-incident-hero">
        INSERT: HAIL MARY DURING ADRIAN DIVE
    </div>

    <!-- OVERVIEW -->

    <div class="hm-incident-summary">

        <div class="hm-incident-stat">
            <label>EVENT TYPE</label>
            <span>CATASTROPHIC EVA INCIDENT</span>
        </div>

        <div class="hm-incident-stat">
            <label>LOCATION</label>
            <span>ADRIAN UPPER ATMOSPHERE</span>
        </div>

        <div class="hm-incident-stat">
            <label>PRIMARY PERSONNEL</label>
            <span>DR. RYLAND GRACE</span>
        </div>

        <div class="hm-incident-stat">
            <label>OUTCOME</label>
            <span class="hm-incident-orange">
                SURVIVED
            </span>
        </div>

    </div>

    <!-- EVA IMAGE WALL -->

    <div class="hm-incident-gallery">

        <div class="hm-incident-photo">
            INSERT: EVA PREPARATION
        </div>

        <div class="hm-incident-photo">
            INSERT: CHAIN COLLECTION SYSTEM
        </div>

        <div class="hm-incident-photo">
            INSERT: ADRIAN ATMOSPHERE
        </div>

        <div class="hm-incident-photo">
            INSERT: SPACEWALK FOOTAGE
        </div>

        <div class="hm-incident-photo">
            INSERT: HULL DAMAGE IMAGE
        </div>

        <div class="hm-incident-photo">
            INSERT: EXTERNAL CAMERA VIEW
        </div>

    </div>

    <!-- TELEMETRY -->

    <div class="hm-incident-timeline">

        <h3>CRITICAL EVENT TIMELINE</h3>

        <div class="hm-incident-entry danger">
            <span>03:14:10</span>
            HULL BREACH DETECTED
        </div>

        <div class="hm-incident-entry">
            <span>03:14:16</span>
            FUEL COMPARTMENT TWELVE JETTISONED
        </div>

        <div class="hm-incident-entry">
            <span>03:14:20</span>
            FUEL COMPARTMENT ELEVEN JETTISONED
        </div>

        <div class="hm-incident-entry warning">
            <span>03:15:02</span>
            AMMONIA CONTAMINATION DETECTED
        </div>

        <div class="hm-incident-entry">
            <span>03:15:09</span>
            CENTRIFUGE MODE ACTIVATED
        </div>

        <div class="hm-incident-entry success">
            <span>03:18:25</span>
            AUTOMATED MEDICAL RESPONSE INITIATED
        </div>

    </div>

    <!-- ROCKY PLAN -->

    <div class="hm-incident-plan">

        <h3>MISSION PLAN REVIEW</h3>

        <blockquote>
            "Hello Earth. Plan is like fishing."
            <br>
            — Rocky
        </blockquote>

        <p>
            The collection maneuver required Hail Mary to enter
            Adrian's atmosphere while maintaining precise velocity,
            orientation, and altitude.
        </p>

        <p>
            The spacecraft was flown manually by Dr. Grace despite
            his lack of formal pilot certification.
        </p>

        <p>
            Failure margins were calculated at less than 3%.
        </p>

    </div>

    <!-- MEDICAL FILE -->

    <div class="hm-medical-section">

        <h3>POST-INCIDENT MEDICAL FILE</h3>

        <div class="hm-medical-gallery">

            <div class="hm-medical-photo">
                INSERT: MEDICAL SCAN
            </div>

            <div class="hm-medical-photo">
                INSERT: BURN DOCUMENTATION
            </div>

            <div class="hm-medical-photo">
                INSERT: FACIAL INJURY IMAGE
            </div>

            <div class="hm-medical-photo">
                INSERT: MARY MEDICAL ROBOT
            </div>

        </div>

        <div class="hm-medical-grid">

            <div class="hm-medical-card">

                <h4>INJURIES</h4>

                <ul>
                    <li>Fractured nasal bone</li>
                    <li>Orbital laceration</li>
                    <li>Third-degree thermal burns</li>
                    <li>Hypoxia exposure</li>
                    <li>Pressure trauma</li>
                </ul>

            </div>

            <div class="hm-medical-card">

                <h4>TREATMENT</h4>

                <ul>
                    <li>Emergency sedation</li>
                    <li>Automated injections</li>
                    <li>Burn treatment protocol</li>
                    <li>Oxygen stabilization</li>
                    <li>Pressure recovery</li>
                </ul>

            </div>

        </div>

    </div>

    <!-- MARY LOG -->

    <div class="hm-mary-emergency">

        <h3>MARY EMERGENCY RESPONSE</h3>

        <div class="hm-mary-log">
    > MARY[03:03:02.118]: MANUAL MODE ACTIVATED
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:05.441]: ALTITUDE WARNING
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:06.092]: WARNING
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:06.094]: EXTERIOR TEMPERATURE ELEVATED
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:08.771]: WARNING
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:08.773]: HULL PRESSURE ANOMALY DETECTED
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:09.106]: WARNING
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:09.248]: WARNING
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:09.411]: WARNING
</div>

<div class="hm-mary-log danger">
    > MARY[03:14:10.027]: HULL BREACH DETECTED
</div>

<div class="hm-mary-log danger">
    > MARY[03:14:10.030]: LOCATION: PORTSIDE FUEL COMPARTMENTS ELEVEN AND TWELVE
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:12.482]: JETTISON PORT FUEL TANK COMPARTMENT TWELVE
</div>

<div class="hm-mary-log">
    > MARY[03:14:12.486]: CONFIRM?
</div>

<div class="hm-mary-log success">
    > MARY[03:14:16.093]: JETTISON CONFIRMED: COMPARTMENT TWELVE
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:16.941]: JETTISON PORT FUEL TANK COMPARTMENT ELEVEN
</div>

<div class="hm-mary-log">
    > MARY[03:14:16.944]: CONFIRM?
</div>

<div class="hm-mary-log success">
    > MARY[03:14:20.112]: JETTISON CONFIRMED: COMPARTMENT ELEVEN
</div>

<div class="hm-mary-log warning">
    > MARY[03:14:25.775]: CENTRIFUGE MODE ACTIVATE
</div>

<div class="hm-mary-log">
    > MARY[03:14:25.898]: CONFIRM?
</div>

<div class="hm-mary-log warning">
    > MARY[03:15:02.990]: CONTAMINANT DETECTED
</div>

<div class="hm-mary-log danger">
    > MARY[03:15:02.991]: AMMONIA
</div>

<div class="hm-mary-log success">
    > MARY[03:15:09.989]: CENTRIFUGE MODE ACTIVATED
</div>

<div class="hm-mary-log success">
    > MARY[03:18:25.413]: AUTOMATED MEDICAL RESPONSE INITIATED
</div>

    </div>

</div>

`
},
taumoeba: {

    title: 'TAUMOEBA EXPERIMENT LOGS',

    body: `
<div class="taumoeba-report">
<!--

    <div class="bio-photo">
        TAUMOEBA MICROSCOPY IMAGE
    </div>
    !-->

<div class="taumoeba-report">

    <div class="taumoeba-header">

        <div>
            <span class="report-class">HAIL MARY SCIENCE ARCHIVE</span>
            <h1>TAUMOEBA RESEARCH DOSSIER</h1>
            <p>Recovered From Beetle Probe Scientific Archives</p>
        </div>

        <div class="taumoeba-status">
            <span>STATUS</span>
            SUCCESSFUL
        </div>

    </div>

    <!-- DISCOVERY -->

    <section class="taumoeba-section">

        <h2>SPECIES IDENTIFICATION</h2>

        <div class="spec-grid">

            <div class="spec-card">
                <span>DESIGNATION</span>
                TAUMOEBA
            </div>

            <div class="spec-card">
                <span>ORIGIN</span>
                ADRIAN (TAU CETI SYSTEM)
            </div>

            <div class="spec-card">
                <span>CLASSIFICATION</span>
                AMOEBOID MICROORGANISM
            </div>

            <div class="spec-card">
                <span>PRIMARY FOOD SOURCE</span>
                ASTROPHAGE
            </div>

        </div>

        <div class="science-summary">

            <p>
                Taumoeba represents the first confirmed extraterrestrial
                predator species ever identified by humanity.
            </p>

            <p>
                Samples were recovered from the upper atmosphere
                of Adrian approximately 91.2 kilometers above
                the planetary surface.
            </p>

            <p>
                Biological analysis confirmed that despite originating
                on an alien world, Taumoeba shares numerous
                cellular characteristics with terrestrial life.
            </p>

        </div>

    </section>

    <!-- PHOTOS -->

    <section class="taumoeba-section">

        <h2>IMAGING ARCHIVE</h2>

        <div class="taumoeba-gallery">

            <div class="photo-placeholder">
                INSERT:
                MICROSCOPE IMAGE
            </div>

            <div class="photo-placeholder">
                INSERT:
                CELL STRUCTURE SCAN
            </div>

            <div class="photo-placeholder">
                INSERT:
                ADRIAN ATMOSPHERE SAMPLE
            </div>

            <div class="photo-placeholder">
                INSERT:
                LIVE TAUMOEBA FEEDING
            </div>

        </div>

    </section>

    <!-- BIOLOGY -->

    <section class="taumoeba-section">

        <h2>BIOLOGICAL FINDINGS</h2>

        <div class="biology-grid">

            <div class="bio-card">
                <span>DNA</span>
                PRESENT
            </div>

            <div class="bio-card">
                <span>MITOCHONDRIA</span>
                PRESENT
            </div>

            <div class="bio-card">
                <span>ENERGY STORAGE</span>
                GLUCOSE
            </div>

            <div class="bio-card">
                <span>KREBS CYCLE</span>
                ACTIVE
            </div>

            <div class="bio-card">
                <span>CELL TYPE</span>
                EUKARYOTIC
            </div>

            <div class="bio-card">
                <span>THERMAL RANGE</span>
                NON-ASTROPHAGE
            </div>

        </div>

        <blockquote class="grace-quote">

            "It's alive. It has DNA. It has mitochondria.
            It's just an amoeba from another planet."

            <span>— Dr. Ryland Grace</span>

        </blockquote>

    </section>

    <!-- EXPERIMENTS -->

    <section class="taumoeba-section">

        <h2>NITROGEN RESISTANCE PROGRAM</h2>

        <div class="experiment-panel">

            <div class="experiment-left">

                <h3>OBJECTIVE</h3>

                <p>
                    Develop a strain capable of surviving
                    Venusian atmospheric conditions.
                </p>

                <h3>METHOD</h3>

                <p>
                    Successive breeding cycles conducted
                    using xenonite breeder tanks supplied
                    by Eridian engineering systems.
                </p>

            </div>

            <div class="experiment-right">

                <div class="tank-chart">

                    <div>TAUMOEBA-06 → 0.6% N₂</div>
                    <div>TAUMOEBA-10 → 1.0% N₂</div>
                    <div>TAUMOEBA-20 → 2.0% N₂</div>
                    <div>TAUMOEBA-35 → 3.5% N₂</div>
                    <div>TARGET → 8.0% N₂</div>

                </div>

            </div>

        </div>

    </section>

    <!-- LAB LOGS -->

    <section class="taumoeba-section">

        <h2>RECOVERED LAB LOGS</h2>

        <div class="lab-log">

            <div class="log-entry">
                <span>GRACE:</span>
                "Every time I introduce nitrogen..."
                <br>
                [blows raspberry]
                <br>
                "...it died."
            </div>

            <div class="log-entry">
                <span>ROCKY:</span>
                "Current nitrogen tolerance, question?"
            </div>

            <div class="log-entry">
                <span>GRACE:</span>
                "Tank Three had survivors at 0.6 percent.
                I'm breeding them up now."
            </div>

            <div class="log-entry">
                <span>ROCKY:</span>
                "You. Be happy now."
            </div>

            <div class="log-entry">
                <span>GRACE:</span>
                "We still need eight percent.
                Until then we're not done."
            </div>

        </div>

    </section>

    <!-- FINAL STRAIN -->

    <section class="taumoeba-section final-strain">

        <h2>TAUMOEBA-35</h2>

        <div class="success-panel">

            <div>
                <span>NITROGEN TOLERANCE</span>
                3.5%
            </div>

            <div>
                <span>PRESSURE TOLERANCE</span>
                0.02 ATM
            </div>

            <div>
                <span>VENUS COMPATIBLE</span>
                YES
            </div>

            <div>
                <span>ASTROPHAGE PREDATION</span>
                CONFIRMED
            </div>

        </div>

        <div class="mission-note">

            <h3>MISSION SIGNIFICANCE</h3>

            <p>
                Taumoeba-35 became the first known organism
                capable of naturally consuming Astrophage
                under conditions compatible with deployment
                inside the Sol system.
            </p>

            <p>
                Multiple cultures were loaded into all
                four Beetle return probes prior to departure.
            </p>

        </div>

    </section>

</div>
`
},
return: {

    title: 'RETURN TRANSIT NAVIGATION DASHBOARD',

    body: `

<div class="return-dashboard">

    <!-- HEADER -->

    <div class="tau-header">

        <div>
            VESSEL
            <span>HAIL MARY</span>
        </div>

        <div>
            TRAJECTORY
            <span>SOL SYSTEM</span>
        </div>

        <div>
            STATUS
            <span>RETURNING</span>
        </div>

    </div>

    <!-- STAR MAP -->

    <div class="return-map">

        <div class="star tau-home"></div>

        <div class="travel-line"></div>

        <div class="star sol-home"></div>

        <div class="return-ship"></div>

        <div class="label tau-home-label">
            TAU CETI
        </div>

        <div class="label sol-home-label">
            SOL
        </div>

        <div class="distance-readout">
            RETURN TRANSIT ACTIVE
        </div>

    </div>

    <!-- STATS -->

    <div class="tau-grid">

        <div class="tau-card">

            <h3>RETURN ETA</h3>

            <div class="tau-stat">
                4Y 2M 11D
            </div>

        </div>

        <div class="tau-card">

            <h3>ASTROPHAGE FUEL</h3>

            <div class="tau-stat">
                STABLE
            </div>

        </div>

        <div class="tau-card">

            <h3>BEETLE STATUS</h3>

            <div class="tau-stat">
                DEPLOYED
            </div>

        </div>

        <div class="tau-card">

            <h3>CREW</h3>

            <div class="tau-stat">
                DR. GRACE
            </div>

        </div>

    </div>

<div class="return-dashboard">

    <!-- STATUS -->

    <div class="return-header">

        <div>
            MISSION STATUS
            <span>SUCCESS</span>
        </div>

        <div>
            CREW SURVIVORS
            <span>01</span>
        </div>

        <div>
            EARTH ETA
            <span>4.2 YEARS</span>
        </div>

        <div>
            COURSE STATUS
            <span>MODIFIED</span>
        </div>

    </div>

    <!-- TRAJECTORY -->

    <div class="trajectory-panel">

        <div class="trajectory-title">
            POST-TAU CETI NAVIGATION SOLUTION
        </div>

        <div class="trajectory-track">

            <div class="point tau">
                <span>TAU CETI</span>
            </div>

            <div class="line"></div>

            <div class="point decision">
                <span>COURSE CHANGE</span>
            </div>

            <div class="line diversion"></div>

            <div class="point erid">
                <span>40 ERIDANI</span>
            </div>

        </div>

    </div>

    <!-- SHIP STATUS -->

    <div class="return-grid">

        <div class="return-box">
            <span>BEETLE PROBES</span>
            DEPLOYED SUCCESSFULLY
        </div>

        <div class="return-box">
            <span>TAUMOEBA PAYLOAD</span>
            VERIFIED STABLE
        </div>

        <div class="return-box">
            <span>HAIL MARY</span>
            OPERATIONAL
        </div>

        <div class="return-box">
            <span>AUTONOMOUS RANGE</span>
            4.2 YEARS
        </div>

    </div>

    <!-- SUMMARY -->

    <div class="return-report">

        <h2>RETURN TRANSIT REPORT</h2>

        <p>
            Following successful deployment of Taumoeba cultures
            into all four Beetle probes, the Hail Mary departed
            the Tau Ceti system under full propulsion capability.
        </p>

        <p>
            Initial navigation solutions placed the vessel on a
            direct return trajectory toward Earth.
        </p>

        <p>
            Mission analysts projected arrival approximately
            four years after Beetle deployment.
        </p>

        <p>
            At departure, Dr. Ryland Grace represented the only
            surviving member of the original Hail Mary crew and
            the first human being to complete an interstellar mission.
        </p>

        <div class="mission-highlight">

            <h3>NAVIGATION ANOMALY</h3>

            <p>
                Subsequent telemetry recovered from the Beetles
                revealed that Earth-bound return procedures
                were later abandoned.
            </p>

            <p>
                The vessel executed a major trajectory correction
                and departed the Sol return corridor entirely.
            </p>

            <p>
                New destination:
                <strong>40 Eridani System</strong>
            </p>

        </div>

        <div class="quote-box">

            <span>ARCHIVE NOTE</span>

            <p>
                At the time this maneuver occurred,
                Earth had no knowledge that the course change
                had taken place.
            </p>

            <p>
                For nearly twenty-three years,
                humanity believed Dr. Grace
                was still coming home.
            </p>

        </div>

    </div>

</div>
</div>
`
},
contaminant: {

    title: 'HAIL MARY INTERNAL ALERT LOGS',

    body: `

<div class="contam-dashboard">

    <!-- ALERT HEADER -->

    <div class="declass-header">
        ACTIVE BIOHAZARD CONTAINMENT
    </div>

    <!-- GRAPH PANEL -->

    <div class="contam-grid">

        <!-- OXYGEN -->

        <div class="contam-card">

            <h3>OXYGEN LEVELS</h3>

            <div class="oxygen-graph">

                <div class="oxygen-line"></div>

                <div class="graph-label graph-top">
                    100%
                </div>

                <div class="graph-label graph-bottom">
                    42%
                </div>

            </div>

        </div>

        <!-- UNKNOWN SUBSTANCE -->

        <div class="contam-card">

            <h3>CLEANROOM</h3>

            <div class="biohazard-display">

                <div class="hazard-core"></div>

                <div class="hazard-pulse"></div>

                <div class="hazard-text">
                    UNKNOWN SUBSTANCE
                </div>

            </div>

        </div>

    </div>

<pre class="danger-log">
[RECOVERED SHIP TELEMETRY]

MARY[03:14:06.092]: WARNING.
MARY[03:14:06.417]: CONTAMINANT DETECTED.

MARY[03:14:09.774]: CONTAMINANT DETECTED.
MARY[03:14:12.551]: CONTAMINANT DETECTED.

MARY[03:14:15.030]: ENVIRONMENTAL SENSORS OFFLINE.
MARY[03:14:16.224]: ATTEMPTING BACKUP ANALYSIS...

MARY[03:14:18.778]: CONTAMINANT DETECTED.
MARY[03:14:20.914]: CONTAMINANT DETECTED.
MARY[03:14:23.092]: CONTAMINANT DETECTED.

MARY[03:14:27.031]: CONTAMINANT SOURCE ESTIMATED:
MARY[03:14:27.033]: CLEANROOM

MARY[03:14:29.661]: HATCH OPEN.
MARY[03:14:29.662]: CONFIRM?

MARY[03:14:38.118]: CONTAMINANT DETECTED.
MARY[03:14:40.230]: CONTAMINANT DETECTED.

MARY[03:14:42.804]: MANUAL OVERRIDE REQUIRED.
MARY[03:14:42.805]: CAUTION.

MARY[03:14:46.911]: DEPRESSURIZATION IN PROGRESS.
MARY[03:14:46.912]: WARNING.

MARY[03:14:49.313]: CONTAINMENT FAILURE.
MARY[03:14:50.901]: PRESSURE DROP DETECTED:
MARY[03:14:50.902]: CLEANROOM

MARY[03:14:53.221]: CONTAMINANT DETECTED.
MARY[03:14:54.991]: CONTAMINANT DETECTED.
MARY[03:14:56.420]: CONTAMINANT DETECTED.

MARY[03:15:02.114]: INTERNAL ATMOSPHERE UNSTABLE.
MARY[03:15:04.222]: VENTING IN PROGRESS.

MARY[03:15:07.771]: CONTAMINANT DETECTED.

MARY[03:15:11.883]: ENGINE PERFORMANCE DEGRADED.

MARY[03:15:16.002]: CAUTION:
MARY[03:15:16.004]: FUEL MIXTURE INSTABILITY.

MARY[03:15:19.762]: CONTAMINANT DETECTED.
MARY[03:15:21.551]: CONTAMINANT DETECTED.

MARY[03:15:40.103]: CONTAMINANT DETECTED.
MARY[03:15:41.912]: CONTAMINANT DETECTED.
MARY[03:15:43.664]: CONTAMINANT DETECTED.

MARY[03:15:50.022]: ENGINE CONTROL RESPONSE DELAYED.
MARY[03:15:55.022]: ENGINE SHUTOFF.
MARY[03:19:30.991]: ENGINE SYSTEMS OFFLINE.

MARY[03:16:09.228]: CONTAMINANT DETECTED.
MARY[03:16:10.330]: CONTAMINANT DETECTED.

MARY[03:16:18.448]: WARNING.

MARY[03:16:42.881]: CONTAMINANT DETECTED.
MARY[03:16:44.661]: CONTAMINANT DETECTED.
MARY[03:16:45.993]: CONTAMINANT DETECTED.

MARY[03:17:36.228]: CONTAMINANT DETECTED.
MARY[03:17:37.990]: CONTAMINANT DETECTED.

MARY[03:18:02.778]: CENTRIFUGAL MODE ACTIVATE?
MARY[03:18:02.780]: CONFIRM?

MARY[03:18:11.901]: CENTRIFUGAL MODE ACTIVATED.

MARY[03:18:16.114]: CONTAMINANT DETECTED.
MARY[03:18:17.001]: CONTAMINANT DETECTED.
MARY[03:20:10.101]: CONTAMINANT DETECTED.

MARY[03:23:06.092]: LOG SEGMENT ENDED.

[END TELEMETRY]

---

ATMOSPHERIC STATUS:
UNSTABLE

OXYGEN LOSS DETECTED

CONTAINMENT ACTIVE

---

AUTOMATED RESPONSE:

• Laboratory decompression
• Internal atmosphere purge
• Medical monitoring initiated
• Rotational stabilization enabled

---

ARCHIVAL NOTE:

Recovered logs did not conclusively identify
the nature of the contaminant event.

Multiple sections of telemetry
were later determined corrupted
during transmission recovery.

[END LOG]
</pre>

</div>
`
},
beetles: {

    title: 'BEETLE RETURN PROBE DASHBOARD',

    body: `

<div class="beetle-dashboard">

    <!-- HEADER -->

    <div class="tau-header">

        <div>
            PROBE STATUS
            <span>ACTIVE</span>
        </div>

        <div>
            DESTINATION
            <span>SOL SYSTEM</span>
        </div>

        <div>
            PAYLOAD
            <span>TAUMOEBA-35</span>
        </div>

    </div>

    <!-- BEETLES -->

    <div class="beetle-grid">

        <!-- JOHN -->

        <div class="beetle-card">

            <div class="beetle-photo">
                <img class="beetle-image" src="assets/john.png" alt="John Beetle Image">
            </div>

            <h3>JOHN</h3>

            <div class="beetle-stats">

                <div>
                    MASS
                    <span>1,480 KG</span>
                </div>

                <div>
                    VELOCITY
                    <span>0.93 C</span>
                </div>

                <div>
                    DATA STORAGE
                    <span>91 TB</span>
                </div>

                <div>
                    ETA TO EARTH
                    <span>13 YEARS</span>
                </div>

            </div>

        </div>

        <!-- PAUL -->

        <div class="beetle-card">

            <div class="beetle-photo">
                <img class="beetle-image" src="assets/paul.png" alt="Paul Image">
            </div>

            <h3>PAUL</h3>

            <div class="beetle-stats">

                <div>
                    MASS
                    <span>1,477 KG</span>
                </div>

                <div>
                    VELOCITY
                    <span>0.93 C</span>
                </div>

                <div>
                    DATA STORAGE
                    <span>91 TB</span>
                </div>

                <div>
                    ETA TO EARTH
                    <span>13 YEARS</span>
                </div>

            </div>

        </div>

        <!-- GEORGE -->

        <div class="beetle-card">

            <div class="beetle-photo">
                <img class="beetle-image" src="assets/george.png"
                alt="George Beetle Image">
            </div>

            <h3>GEORGE</h3>

            <div class="beetle-stats">

                <div>
                    MASS
                    <span>1,481 KG</span>
                </div>

                <div>
                    VELOCITY
                    <span>0.93 C</span>
                </div>

                <div>
                    DATA STORAGE
                    <span>91 TB</span>
                </div>

                <div>
                    ETA TO EARTH
                    <span>13 YEARS</span>
                </div>

            </div>

        </div>

        <!-- RINGO -->

        <div class="beetle-card">

            <div class="beetle-photo">
                <img class="beetle-image" src="assets/ringo.png" alt="Ringo Image">
            </div>

            <h3>RINGO</h3>

            <div class="beetle-stats">

                <div>
                    MASS
                    <span>1,479 KG</span>
                </div>

                <div>
                    VELOCITY
                    <span>0.93 C</span>
                </div>

                <div>
                    DATA STORAGE
                    <span>91 TB</span>
                </div>

                <div>
                    ETA TO EARTH
                    <span>13 YEARS</span>
                </div>

            </div>

        </div>

    </div>

<div class="dashboard5">

<!-- LEFT: MISSION SUMMARY -->
<div class="panel5">

    <div class="title5">RECOVERED TRANSMISSION // BEETLE CLASS DATA</div>

    <div class="section5 log5">
The four Beetle probes successfully departed Tau Ceti carrying:

• Taumoeba-35 cultures  
• Astrophage samples  
• Hail Mary telemetry archive  
• Scientific records  
• Crew memory log5s  
    </div>

    <div class="section5 log5">
INITIAL ASSUMPTION:
Earth telemetry suggested the Hail Mary
remained on a direct return trajectory to Sol.

Subsequent navigation recovery revealed:
Dr. Ryland Grace executed an unplanned course change
shortly after Beetle deployment.
    </div>

    <div class="section5 log5 warn">
DESTINATION UPDATE:
40 ERIDANI SYSTEM
    </div>

    <div class="section5 log5">
MISSION NOTE:
Grace diverted to assist the Eridian vessel "Blip-A"
after detecting critical astrophage shortage.

Fuel transfer executed from Hail Mary reserves,
preserving alien crew survivability.
    </div>

    <div class="section5 log5 danger5">
ARCHIVAL NOTE:
At time of Beetle arrival, Earth classified Grace as deceased.
Full mission divergence remained unknown for decades.
    </div>

</div>


<!-- RIGHT: PHYSICS + ENGINEERING -->
<div class="panel5">

    <div class="title5">BEETLE PROPULSION // PHYSICS MODEL</div>

    <table class="table5">
        <tr><td>Acceleration</td><td class="highlight5">5000 m/s²</td></tr>
        <tr><td>Dry Mass</td><td>5 kg</td></tr>
        <tr><td>Fuel Mass</td><td>180 kg</td></tr>
        <tr><td>Start Mass</td><td>185 kg</td></tr>
        <tr><td>Pressure</td><td>3.10 × 10⁷ Pa</td></tr>
        <tr><td>Surface Area</td><td>0.03 m²</td></tr>
        <tr><td>Thrust Force</td><td class="highlight5">9.30 × 10⁵ N</td></tr>
        <tr><td>Start Acceleration</td><td>5027.03 m/s²</td></tr>
        <tr><td>End Acceleration</td><td>186000 m/s²</td></tr>
    </table>

    <div class="section5 log5">
DERIVED COEFFICIENTS:
a = 27.60398645  
b = 152.3960136  
    </div>

    <div class="section5 log5">
RELATIVISTIC CHECK:
M/m ratio: 5.5208  
Gamma: 7.5369  
Total T: 162511.3372  
Coast velocity: 0.931c  
Coast time (Earth): 4.02 × 10⁸ s  
Total mission time: 5.37 × 10⁷ s (~621 days)
    </div>

    <div class="section5 log5 good">
PROPULSION SUMMARY:
Total thrust distributed across 4 Beetles:
2.79 × 10⁶ N combined forward impulse
Ship mass: 120,000 kg  
Net acceleration: 16.44 m/s²
    </div>

</div>

</div>
`
},
collapse: {

    title: 'GLOBAL COLLAPSE PROJECTIONS',

    body: `
<div class="apocalypse-dashboard">

    <div class="apocalypse-header">

        <h2>EARTH STABILITY ASSESSMENT</h2>

        <div class="alert-banner">
            CIVILIZATION FAILURE RISK: EXTREME
        </div>

    </div>

    <!-- TOP STATS -->

    <div class="collapse-stats">

        <div class="collapse-stat">
            <span>PROJECTED MORTALITY</span>
            <h3>50%</h3>
            <p>Within 19 Years</p>
        </div>

        <div class="collapse-stat">
            <span>DISPLACED POPULATION</span>
            <h3>1.8B</h3>
            <p>And Rising</p>
        </div>

        <div class="collapse-stat">
            <span>CROP FAILURE</span>
            <h3>41%</h3>
            <p>Global Output Loss</p>
        </div>

        <div class="collapse-stat">
            <span>COUNTRIES UNDER RATIONING</span>
            <h3>63</h3>
            <p>Emergency Measures Active</p>
        </div>

    </div>

    <!-- ACTIVE CRISES -->

    <div class="crisis-section">

        <h3>ACTIVE GLOBAL CRISES</h3>

        <div class="crisis-grid">

            <div class="crisis-card danger">
                <h4>SOUTH ASIAN WATER WARS</h4>
                <span>ACTIVE CONFLICT</span>
            </div>

            <div class="crisis-card warning">
                <h4>NORTHERN AFRICA</h4>
                <span>FAMINE CONDITIONS</span>
            </div>

            <div class="crisis-card danger">
                <h4>ARCTIC TERRITORIES</h4>
                <span>RESOURCE DISPUTES</span>
            </div>

            <div class="crisis-card critical">
                <h4>PACIFIC FOOD CORRIDORS</h4>
                <span>SYSTEM FAILURE</span>
            </div>

            <div class="crisis-card warning">
                <h4>MEDITERRANEAN REGION</h4>
                <span>MASS MIGRATION</span>
            </div>

            <div class="crisis-card danger">
                <h4>GLOBAL HEALTH SYSTEMS</h4>
                <span>OVERWHELMED</span>
            </div>

        </div>

    </div>

    <!-- STRATT QUOTE -->

    <div class="stratt-warning">

        <div class="quote-mark">"</div>

        <div class="quote-text">

            Leclerc's projections assume nations
            cooperate and share resources.

            They won't.

            Countries do not watch their populations starve.

            They go to war.

        </div>

        <div class="quote-source">
            EVA STRATT — PETROVA TASK FORCE
        </div>

    </div>

    <!-- FAILURE TIMELINE -->

    <div class="collapse-timeline">

        <h3>CIVILIZATION FAILURE CASCADE</h3>

        <div class="timeline-item">
            <span>PHASE I</span>
            Agricultural instability and regional food shortages.
        </div>

        <div class="timeline-item">
            <span>PHASE II</span>
            Global migration events begin.
        </div>

        <div class="timeline-item">
            <span>PHASE III</span>
            Resource conflicts and border militarization.
        </div>

        <div class="timeline-item">
            <span>PHASE IV</span>
            Economic collapse and infrastructure failure.
        </div>

        <div class="timeline-item final">
            <span>PHASE V</span>
            War. Famine. Pestilence. Death.
        </div>

    </div>

    <!-- FOOTER NOTE -->

    <div class="archive-footer">

        <h3>ARCHIVAL ASSESSMENT</h3>

        <p>
            Multiple governments entered permanent emergency status.
            Martial law, forced rationing programs, agricultural
            conscription, and military food distribution became common.
        </p>

        <p>
            Intelligence analysts concluded that Project Hail Mary
            represented humanity's only known long-term survival strategy.
        </p>

    </div>

</div>
`
},
lastcontact: {

    title: 'FINAL HAIL MARY COMMUNICATION',

    body: `
<div class="last-contact-dashboard">

    <div class="contact-header">

        <h2>LAST CONTACT EVENT</h2>

        <div class="contact-alert">
            HAIL MARY SIGNAL LOST
        </div>

    </div>

    <!-- STATUS -->

    <div class="contact-status-grid">

        <div class="contact-stat">
            <span>MISSION YEAR</span>
            <h3>T+23</h3>
        </div>

        <div class="contact-stat">
            <span>BEETLE STATUS</span>
            <h3>RETURNING TO SOL</h3>
        </div>

        <div class="contact-stat">
            <span>HAIL MARY STATUS</span>
            <h3>OFF COURSE</h3>
        </div>

        <div class="contact-stat critical">
            <span>COMMUNICATIONS</span>
            <h3>LOST</h3>
        </div>

    </div>

    <!-- TRAJECTORY -->

    <div class="trajectory-section">

        <h3>MISSION TRAJECTORY DIVERGENCE</h3>

        <div class="trajectory-map">

            <div class="trajectory-node earth">
                SOL SYSTEM
            </div>

            <div class="trajectory-line"></div>

            <div class="trajectory-split">

                <div class="split-branch beetles">

                    <h4>BEETLE PROBES</h4>

                    <span>
                    TRAJECTORY LOCKED
                    </span>

                    <p>
                    Carrying mission archives,
                    scientific data,
                    Astrophage samples,
                    Taumoeba cultures,
                    and full Hail Mary telemetry.
                    </p>

                </div>

                <div class="split-branch hailmary">

                    <h4>HAIL MARY</h4>

                    <span>
                    COURSE CHANGE DETECTED
                    </span>

                    <p>
                    Vessel departed original return path
                    and accelerated toward
                    the 40 Eridani system.
                    </p>

                </div>

            </div>

        </div>

    </div>

    <!-- INVESTIGATION -->

    <div class="investigation-panel">

        <h3>POST-EVENT ANALYSIS</h3>

        <div class="analysis-grid">

            <div class="analysis-card">

                <h4>KNOWN</h4>

                <ul>
                    <li>Rocky suffered fuel loss</li>
                    <li>Blip-A was stranded</li>
                    <li>Grace altered course</li>
                    <li>Fuel transfer operations began</li>
                    <li>Communication quality deteriorated</li>
                </ul>

            </div>

            <div class="analysis-card">

                <h4>UNKNOWN</h4>

                <ul>
                    <li>Did Grace reach Blip-A?</li>
                    <li>Did Rocky survive?</li>
                    <li>Did Hail Mary arrive?</li>
                    <li>Was fuel transfer completed?</li>
                    <li>Did either vessel survive?</li>
                </ul>

            </div>

        </div>

    </div>

    <!-- DECLARATION -->

    <div class="memorial-section">

        <div class="memorial-title">
            OFFICIAL STATUS
        </div>

        <p>

            Following decades without additional telemetry,
            Dr. Ryland Grace was formally declared deceased
            in absentia.

        </p>

        <p>

            No confirmed sighting, transmission,
            or recovery of the Hail Mary spacecraft
            has ever been recorded.

        </p>

        <div class="memorial-stamp">

            CASE STATUS:
            UNSOLVED

        </div>

    </div>

</div>
`
},
earthwaits: {

    title: 'GLOBAL NEWS BROADCASTS — YEAR 24',

    body: `

<div class="broadcast-dashboard">

    <!-- LIVE STATUS -->

    <div class="broadcast-header">

        <div>
            BROADCAST STATUS
            <span>LIVE ARCHIVE</span>
        </div>

        <div>
            PLANETARY CONDITION
            <span>CRITICAL</span>
        </div>

        <div>
            SIGNAL WATCH
            <span>ACTIVE</span>
        </div>

    </div>

    <!-- ALERT TICKER -->

    <div class="news-ticker">
        FOOD RIOTS REPORTED IN 19 MAJOR CITIES •
        MARTIAL LAW EXTENDED IN MULTIPLE REGIONS •
        GLOBAL DEATH TOLL EXCEEDS 3.9 BILLION •
        NO SIGNALS RECEIVED FROM HAIL MARY •
        BEETLE RETURN WINDOW NOW OPEN
    </div>

<pre class="danger-log">
[RECOVERED EARTH BROADCAST TRANSCRIPT]

GLOBAL NEWS NETWORK
YEAR 24
LIVE FEED ARCHIVE

---

ANCHOR:

"Tonight marks the first possible
return window for the Beetle probes
launched from the Hail Mary mission
more than two decades ago."

"Humanity continues to wait
for any sign that the mission succeeded."

---

"However,
mission analysts caution
there are countless ways
the operation could have failed."

---

POSSIBLE FAILURE SCENARIOS:

• Crew mortality during transit
• Astrophage containment failure
• Probe launch malfunction
• Radiation exposure
• Mechanical system collapse
• Failure to reach Tau Ceti
• Failure to locate a solution
• Fuel depletion
• Communication loss

---

ANCHOR:

"No signals have been received
from the Hail Mary
since Year 23."

"Public confidence in the mission
has deteriorated significantly."

---

[FOOTAGE DESCRIPTION]

Crowds gathered outside
Petrova Task Force facilities
in multiple cities.

Several riots erupted after rumors spread
that the mission had failed years earlier.

Military forces dispersed demonstrations
in New York,
London,
Delhi,
and Shanghai.

---

ANCHOR:

"Global agricultural output
continues to decline."

"Several governments confirmed
additional emergency ration reductions
this week."

---

[RECOVERED STREET INTERVIEW]

REPORTER:
"Do you still believe
the Beetles are coming home?"

CIVILIAN:
"...I don't know anymore."

"We sent them out there
to save us."

"I just hope someone made it."

---

ARCHIVAL NOTE:

Despite worsening planetary conditions,
deep-space monitoring arrays
remained active worldwide
in continuous search
for Beetle telemetry signatures.

[END FILE]
</pre>

</div>
`
},
signalreceived: {

    title: 'BEETLE ARRIVAL CONFIRMATION',

    body: `
<div class="arrival-command-center">

    <div class="arrival-header">

        <div>

            <span class="arrival-classification">
                UNITED NATIONS RECOVERY COMMAND
            </span>

            <h1>SIGNAL CONFIRMED</h1>

            <p>
                FIRST OBJECTS FROM TAU CETI DETECTED
            </p>

        </div>

        <div class="arrival-status">

            <span>MISSION STATUS</span>

            CONTACT RE-ESTABLISHED

        </div>

    </div>

    <!-- DETECTION -->

    <div class="signal-alert">

        <div class="alert-icon">⚠</div>

        <div>

            <h3>DEEP SPACE NETWORK ALERT</h3>

            <p>
                Four relativistic contacts detected beyond
                Jupiter orbital space. Trajectory analysis
                confirms origin vector consistent with
                Project Hail Mary return architecture.
            </p>

        </div>

    </div>

    <!-- METRICS -->

    <div class="arrival-metrics">

        <div class="metric-box">

            <span>OBJECTS DETECTED</span>

            <strong>04</strong>

            <small>IDENTIFIED AS BEETLE PROBES</small>

        </div>

        <div class="metric-box">

            <span>THERMAL MATCH</span>

            <strong>99.92%</strong>

            <small>HAIL MARY DESIGN SIGNATURE</small>

        </div>

        <div class="metric-box">

            <span>ETA TO EARTH</span>

            <strong>34 DAYS</strong>

            <small>INDIAN OCEAN RECOVERY ZONE</small>

        </div>

        <div class="metric-box">

            <span>PUBLIC VIEWERS</span>

            <strong>5.7B</strong>

            <small>LIVE TRACKING FEEDS</small>

        </div>

    </div>

    <!-- TIMELINE -->

    <div class="event-feed">

        <h2>GLOBAL EVENT LOG</h2>

        <div class="event">

            <span>04:14 UTC</span>

            Four unidentified contacts detected near Jupiter.

        </div>

        <div class="event">

            <span>04:27 UTC</span>

            Tau Ceti origin vector confirmed.

        </div>

        <div class="event">

            <span>05:11 UTC</span>

            Emergency session of United Nations convened.

        </div>

        <div class="event">

            <span>06:43 UTC</span>

            Active military conflicts announce temporary ceasefires.

        </div>

        <div class="event">

            <span>09:02 UTC</span>

            Eva Stratt released under emergency executive order.

        </div>

        <div class="event">

            <span>12:18 UTC</span>

            Global celebrations begin across major population centers.

        </div>

    </div>

    <!-- STRATT -->

    <div class="stratt-quote-panel">

        <div class="quote-mark">"</div>

        <div>

            <p>
                For twenty-four years humanity prepared
                itself for silence.
            </p>

            <p>
                Today four small objects appeared
                from the darkness between the stars.
            </p>

            <p>
                They came home.
            </p>

            <span>
                — EVA STRATT
            </span>

        </div>

    </div>

    <!-- RECOVERY -->

    <div class="recovery-section">

        <h2>RECOVERY OPERATION STATUS</h2>

        <div class="recovery-grid">

            <div>

                <span>RECOVERY FLEET</span>

                DEPLOYED

            </div>

            <div>

                <span>INDIAN OCEAN ZONE</span>

                SECURED

            </div>

            <div>

                <span>SCIENCE TEAMS</span>

                STANDING BY

            </div>

            <div>

                <span>PETROVA TASK FORCE</span>

                REACTIVATED

            </div>

        </div>

    </div>

    <!-- FINAL -->

    <div class="hope-banner">

        <h2>FIRST CONFIRMED RETURN FROM ANOTHER STAR SYSTEM</h2>

        <p>
            Whatever survived Tau Ceti is now only
            thirty-four days from Earth.
        </p>

    </div>

</div>
`
},
splashdown: {

    title: 'BEETLE RECOVERY INVENTORY',

    body: `

<div class="recovery-dashboard">

    <!-- STATUS -->

    <div class="recovery-header">

        <div>
            RECOVERY STATUS
            <span>SUCCESSFUL</span>
        </div>

        <div>
            OCEAN CONDITION
            <span>STABLE</span>
        </div>

        <div>
            DECONTAMINATION
            <span>ACTIVE</span>
        </div>

    </div>

    <!-- PROBE GRID -->

    <div class="inventory-grid">

        <!-- JOHN -->

        <div class="inventory-card">

            <h3>BEETLE — JOHN</h3>

            <ul>
                <li>Astrophage samples</li>
                <li>Taumoeba-35 cultures</li>
                <li>Hail Mary telemetry logs</li>
                <li>Xenonite fragments</li>
                <li>Hull repair schematics</li>
            </ul>

        </div>

        <!-- PAUL -->

        <div class="inventory-card">

            <h3>BEETLE — PAUL</h3>

            <ul>
                <li>Shipboard video archives</li>
                <li>Life support diagnostics</li>
                <li>Crew medical records</li>
                <li>Navigation telemetry</li>
                <li>Adrian biosphere scans</li>
            </ul>

        </div>

        <!-- GEORGE -->

        <div class="inventory-card">

            <h3>BEETLE — GEORGE</h3>

            <ul>
                <li>Eridian language files</li>
                <li>Blip-A schematics</li>
                <li>First contact recordings</li>
                <li>Rocky communication logs</li>
                <li>Astrophage breeding data</li>
            </ul>

        </div>

        <!-- RINGO -->

        <div class="inventory-card">

            <h3>BEETLE — RINGO</h3>

            <ul>
                <li>Scientific papers by Grace</li>
                <li>Adrian ecosystem research</li>
                <li>Taumoeba experiments</li>
                <li>Personal mission journals</li>
                <li>Final Hail Mary logs</li>
            </ul>

        </div>

    </div>

<div class="recovery-command">

    <div class="recovery-header">

        <div class="recovery-status">
            <span>RECOVERY STATUS</span>
            SUCCESSFUL
        </div>

        <div class="recovery-status">
            <span>PAYLOAD INTEGRITY</span>
            94.3%
        </div>

        <div class="recovery-status">
            <span>FIRST CONTACT</span>
            CONFIRMED
        </div>

        <div class="recovery-status">
            <span>MISSION OUTCOME</span>
            SOL SAVED
        </div>

    </div>

    <!-- MEDIA / FILES -->

    <div class="recovery-grid">

        <div class="recovery-card">
            <h3>RECOVERED FILES</h3>

            <ul>
                <li>✓ Complete Hail Mary Telemetry</li>
                <li>✓ Crew Medical Archives</li>
                <li>✓ Adrian Ecosystem Research</li>
                <li>✓ Astrophage Studies</li>
                <li>✓ Taumoeba Breeding Records</li>
                <li>✓ Eridian Mathematics</li>
                <li>✓ Xenonite Engineering Data</li>
                <li>✓ Personal Journals</li>
            </ul>

        </div>

        <div class="recovery-card">
            <h3>FIRST CONTACT DATA</h3>

            <ul>
                <li>Species: ERIDIAN</li>
                <li>Confirmed Individual: "ROCKY"</li>
                <li>Language Database Returned</li>
                <li>Engineering Archives Returned</li>
                <li>Cultural Records Returned</li>
                <li>Interstellar Collaboration Confirmed</li>
            </ul>

        </div>

        <div class="recovery-card">
            <h3>BIOLOGICAL SAMPLES</h3>

            <ul>
                <li>Live Taumoeba-35 Cultures</li>
                <li>Astrophage Colonies</li>
                <li>Adrian Microorganisms</li>
                <li>Xenobiology Reference Material</li>
            </ul>

        </div>

        <div class="recovery-card">
            <h3>HISTORICAL SIGNIFICANCE</h3>

            <ul>
                <li>First Confirmed Alien Life</li>
                <li>First Confirmed Intelligent Alien Species</li>
                <li>First Interstellar Mission Success</li>
                <li>First Human–Alien Alliance</li>
            </ul>

        </div>

    </div>

    <!-- PHOTO ARCHIVE -->

    <div class="archive-gallery">

        <div class="archive-photo">
            <span>INSERT PHOTO</span>
            GRACE & ROCKY WORKING TOGETHER
        </div>

        <div class="archive-photo">
            <span>INSERT PHOTO</span>
            ADRIAN SURFACE IMAGERY
        </div>

        <div class="archive-photo">
            <span>INSERT PHOTO</span>
            ERIDIAN SHIP INTERIOR
        </div>

        <div class="archive-photo">
            <span>INSERT PHOTO</span>
            FIRST TAUMOEBA CULTURE
        </div>

    </div>

    <!-- MAIN REPORT -->

    <div class="first-contact-report">

        <div class="report-banner">
            EVENT CLASSIFICATION:
            HUMANITY'S FIRST CONFIRMED CONTACT
            WITH EXTRATERRESTRIAL INTELLIGENCE
        </div>

<pre>

[GLOBAL RECOVERY ARCHIVE]

RECOVERY EVENT:
BEETLE RETURN SUCCESS

All four Beetle probes were successfully recovered
from the Indian Ocean Recovery Zone.

Initial inspection revealed payload preservation
far beyond expected projections.

More than two decades after launch,
humanity finally received the answer it had waited for.

And the answer changed everything.

────────────────────────────────

SCIENTIFIC TREASURE RECOVERED

Mission archives contained millions of pages
of scientific documentation authored by
Dr. Ryland Grace.

Recovered fields included:

• Astrophage Biology
• Adrian Ecosystem Analysis
• Taumoeba Genetic Adaptation
• Xenonite Materials Science
• Eridian Mathematics
• Interstellar Engineering
• Alien Linguistics
• Alien Sociology

Researchers described the archive as:

"Equivalent to receiving several centuries
of scientific advancement overnight."

────────────────────────────────

FIRST CONTACT CONFIRMED

Recovered files conclusively established
the existence of intelligent extraterrestrial life.

SPECIES DESIGNATION:
ERIDIAN

PRIMARY INDIVIDUAL:
ROCKY

Occupation:
Engineer

Status:
Unknown

Relationship to Mission:
Co-Savior of Humanity

────────────────────────────────

MOST VIEWED RECORDING IN HUMAN HISTORY

Among the recovered archives was a short video
recorded aboard Hail Mary.

The footage showed Dr. Ryland Grace and Rocky
working side-by-side inside a shared engineering compartment.

No speeches.

No ceremony.

No first-contact announcement.

Just two engineers solving a problem together.

Within three weeks of release,
the recording became the most viewed
piece of media ever created.

────────────────────────────────

UNRESOLVED QUESTION

Despite complete telemetry recovery,
the ultimate fate of Dr. Ryland Grace
remains unknown.

Evidence confirms:

• Grace survived arrival at Tau Ceti
• Grace met Rocky
• Grace saved Sol
• Grace altered course toward 40 Eridani

Following the final transmission,
all communication ceased.

No evidence has ever confirmed whether
Hail Mary reached Erid.

No evidence has ever confirmed
Grace's death.

ARCHIVAL STATUS:

MISSING

────────────────────────────────

For many historians,
the final mystery of Project Hail Mary
is not whether humanity survived.

It is whether the man who saved it did.

[END ARCHIVE]

</pre>

    </div>

</div>
`
},
solution: {

    title: 'SOL RECOVERY OPERATIONS',

    body: `
<div class="restoration-report">

    <div class="restore-banner">
        SOLAR RECOVERY OPERATION INITIATED
    </div>

    <div class="restore-stats">

        <div class="restore-stat">
            <span>TAUMOEBA CULTURES</span>
            8.7 BILLION+
        </div>

        <div class="restore-stat">
            <span>BREEDING SITES</span>
            143
        </div>

        <div class="restore-stat">
            <span>DEPLOYMENT STATUS</span>
            IN PROGRESS
        </div>

        <div class="restore-stat">
            <span>SOL PROGNOSIS</span>
            RECOVERABLE
        </div>

    </div>

    <div class="deployment-timeline">

        <div class="deploy-step complete">
            <span>01</span>
            BEETLE RECOVERY
        </div>

        <div class="deploy-step complete">
            <span>02</span>
            SAMPLE VERIFICATION
        </div>

        <div class="deploy-step active">
            <span>03</span>
            TAUMOEBA SCALE-UP
        </div>

        <div class="deploy-step">
            <span>04</span>
            VENUS RELEASE
        </div>

        <div class="deploy-step">
            <span>05</span>
            PETROVA COLLAPSE
        </div>

        <div class="deploy-step">
            <span>06</span>
            SOL RECOVERY
        </div>

    </div>

<pre>

[PLANETARY RESTORATION BULLETIN]

STATUS:
ACTIVE

Less than forty-eight hours after recovery,
laboratories across six continents successfully
replicated live Taumoeba-35 cultures.

Emergency authorization was immediately granted
for planetary-scale breeding operations.

────────────────────────────

OBJECTIVE

Introduce Taumoeba into the Petrova Line
surrounding Venusian orbit.

Expected Outcome:

• Rapid Astrophage consumption
• Petrova Line collapse
• Solar energy restoration
• Atmospheric recovery
• Long-term climate stabilization

────────────────────────────

PUBLIC DISCLOSURE

At 19:04 UTC,
world governments jointly announced:

PROJECT HAIL MARY SUCCEEDED

The statement was broadcast simultaneously
in 112 nations.

For many citizens,
it marked the first positive global announcement
in more than two decades.

────────────────────────────

DECLASSIFIED FINDINGS

Recovered mission archives confirmed:

• Dr. Ryland Grace survived Tau Ceti arrival
• Hail Mary completed primary objectives
• Taumoeba solution successfully developed
• Humanity received proof of alien intelligence

Several portions of the archive remain under review.

────────────────────────────

WORLD RESPONSE

Spontaneous celebrations erupted worldwide.

Curfews were suspended.

Emergency sirens were silenced.

In many cities,
people gathered outdoors before dawn.

Witnesses described crowds applauding
the sunrise.

For the first time in a generation,
the future no longer appeared finite.

────────────────────────────

SOL STATUS:

STABILIZATION POSSIBLE

EXTINCTION PROJECTION:

REVOKED

[END BULLETIN]

</pre>

</div>
`
},
arclight2: {

    title: 'ARCLIGHT II MISSION REPORT',

    body: `
<div class="arclight-mission-report">

    <div class="mission-banner">

        OPERATION SUNRISE
        <span>ARCLIGHT II DEPLOYMENT CAMPAIGN</span>

    </div>

    <!-- PURPOSE -->

    <div class="mission-overview">

        <div class="overview-card">

            <h3>MISSION PURPOSE</h3>

            <p>
                Deliver engineered Taumoeba-35 cultures
                directly into the Petrova Line surrounding Venus.

                Once released, the organisms are expected
                to consume Astrophage populations responsible
                for extracting energy from Sol.
            </p>

        </div>

        <div class="overview-card">

            <h3>EXPECTED OUTCOME</h3>

            <ul>
                <li>Petrova Line degradation</li>
                <li>Astrophage population collapse</li>
                <li>Solar luminosity recovery</li>
                <li>Climate stabilization</li>
                <li>End of extinction projections</li>
            </ul>

        </div>

    </div>

    <!-- PAYLOAD -->

    <div class="deployment-stats">

        <div class="deploy-card">
            <span>TAUMOEBA MASS</span>
            8.4M KG
        </div>

        <div class="deploy-card">
            <span>BREEDING FACILITIES</span>
            143
        </div>

        <div class="deploy-card">
            <span>ASTROPHAGE FUEL</span>
            100%
        </div>

        <div class="deploy-card">
            <span>TARGET ETA</span>
            41 DAYS
        </div>

    </div>

    <!-- TECHNOLOGY -->

    <div class="technology-panel">

        <div class="tech-title">
            TECHNOLOGY INTEGRATED FROM HAIL MARY ARCHIVES
        </div>

        <div class="tech-grid">

            <div class="tech-item">
                XENONITE CONTAINMENT
            </div>

            <div class="tech-item">
                ERIDIAN THERMAL SYSTEMS
            </div>

            <div class="tech-item">
                ASTROPHAGE PROPULSION
            </div>

            <div class="tech-item">
                BEETLE DATA ARCHIVES
            </div>

        </div>

    </div>

    <!-- TIMELINE -->

    <div class="mission-sequence">

        <div class="sequence-event complete">
            Global Taumoeba Production
        </div>

        <div class="sequence-event complete">
            Payload Integration
        </div>

        <div class="sequence-event complete">
            ArcLight II Launch
        </div>

        <div class="sequence-event active">
            Venus Transfer Burn
        </div>

        <div class="sequence-event">
            Petrova Line Release
        </div>

        <div class="sequence-event">
            Solar Recovery Monitoring
        </div>

    </div>

    <!-- MEDIA -->

    <div class="launch-archive">

        <div class="launch-photo">
            <span>INSERT PHOTO</span>
            ARCLIGHT II ON PAD
        </div>

        <div class="launch-photo">
            <span>INSERT PHOTO</span>
            GLOBAL WATCH PARTIES
        </div>

        <div class="launch-photo">
            <span>INSERT PHOTO</span>
            TAUMOEBA CULTURE FACILITY
        </div>

        <div class="launch-photo">
            <span>INSERT PHOTO</span>
            VENUS INTERCEPT VISUALIZATION
        </div>

    </div>

    <div class="mission-summary-box">

        <h3>ARCHIVAL NOTE</h3>

        <p>
            ArcLight II launched exactly twenty-five years
            after the original ArcLight probe first identified
            living extraterrestrial organisms within the Petrova Line.
        </p>

        <blockquote>
            "We spent twenty-five years trying not to die.
            Now we finally get to fight back."
            — Eva Stratt
        </blockquote>

    </div>

</div>
`
},
solsaved: {

    title: 'SOL RECOVERY CONFIRMATION',

    body: `
<div class="sol-dashboard">

    <!-- HEADER METRICS -->

    <div class="sol-header">

        <div class="sol-stat">
            <span>SOLAR OUTPUT</span>
            <h3>+0.84%</h3>
            <p>FIRST POSITIVE GROWTH IN 25 YEARS</p>
        </div>

        <div class="sol-stat">
            <span>ASTROPHAGE POPULATION</span>
            <h3>-91.7%</h3>
            <p>VENUS ORBIT MONITORING NETWORK</p>
        </div>

        <div class="sol-stat">
            <span>EXTINCTION RISK</span>
            <h3>REMOVED</h3>
            <p>OFFICIALLY ENDED BY TASK FORCE</p>
        </div>

    </div>

    <!-- RECOVERY GRAPH -->

    <div class="sol-panel">

        <div class="sol-panel-title">
            SOLAR LUMINOSITY RECOVERY TREND
        </div>

        <div class="luminosity-graph">

            <div class="lum-bar l1"></div>
            <div class="lum-bar l2"></div>
            <div class="lum-bar l3"></div>
            <div class="lum-bar l4"></div>
            <div class="lum-bar l5"></div>
            <div class="lum-bar l6"></div>

        </div>

        <div class="lum-labels">
            <span>DEPLOYMENT</span>
            <span>DAY 30</span>
            <span>DAY 90</span>
            <span>DAY 180</span>
            <span>YEAR 1</span>
            <span>YEAR 2</span>
        </div>

    </div>

    <!-- TIMELINE -->

    <div class="recovery-timeline">

        <div class="timeline-event">
            <div class="timeline-date">DAY 11</div>
            <div class="timeline-info">
                <h4>ASTROPHAGE COLLAPSE DETECTED</h4>
                <p>
                    Venus monitoring satellites report
                    widespread Petrova Line degradation.
                    Population density drops beyond
                    all predictive models.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">DAY 28</div>
            <div class="timeline-info">
                <h4>SOLAR DIMMING HALTED</h4>
                <p>
                    For the first time since Petrova discovery,
                    luminosity decline reaches zero.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">DAY 104</div>
            <div class="timeline-info">
                <h4>POSITIVE SOLAR GROWTH</h4>
                <p>
                    Solar output begins increasing.
                    Recovery officially confirmed.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">YEAR 4</div>
            <div class="timeline-info">
                <h4>CLIMATE STABILIZATION</h4>
                <p>
                    Global temperature trends normalize.
                    Emergency methane interventions terminated.
                </p>
            </div>
        </div>

    </div>

    <!-- GLOBAL STATUS -->

    <div class="recovery-grid">

        <div class="recovery-card">
            <span>AGRICULTURE</span>
            <h3>RECOVERING</h3>
            <p>
                Crop yields improving across all major
                production regions.
            </p>
        </div>

        <div class="recovery-card">
            <span>CONFLICT ZONES</span>
            <h3>-78%</h3>
            <p>
                Active resource conflicts rapidly declining.
            </p>
        </div>

        <div class="recovery-card">
            <span>GLOBAL POWER</span>
            <h3>STABLE</h3>
            <p>
                Astrophage energy reserves remain online
                during recovery phase.
            </p>
        </div>

        <div class="recovery-card">
            <span>DISPLACED PERSONS</span>
            <h3>RETURNING</h3>
            <p>
                Largest resettlement operation in human history.
            </p>
        </div>

    </div>

    <!-- EVA -->

    <div class="eva-final">

        <div class="eva-quote">
            <span>FINAL TASK FORCE TRANSMISSION</span>

            <blockquote>
                "Twenty-five years ago we were counting
                how many people would die.

                Today we're counting how many people
                get to live."
            </blockquote>

            <p>
                — EVA STRATT
            </p>

        </div>

    </div>

    <!-- ARCHIVAL NOTE -->

    <div class="sol-footer">

        <h3>THREAT STATUS: TERMINATED</h3>

        <p>
            Following successful deployment of
            Taumoeba-35 into the Petrova Line,
            solar output returned to normal growth patterns.
            The extinction event officially ended at
            08:14 UTC.

            Historians later referred to this moment as:

            <strong>THE SECOND SUNRISE.</strong>
        </p>

    </div>

</div>
`
},
earthheals: {

    title: 'EARTH RECOVERY REPORT',

    body: `
<div class="earth-dashboard">

    <!-- GLOBAL STATUS -->

    <div class="earth-header">

        <div class="earth-stat">
            <span>CROP OUTPUT</span>
            <h3>+214%</h3>
            <p>YEAR OVER YEAR</p>
        </div>

        <div class="earth-stat">
            <span>ACTIVE CONFLICTS</span>
            <h3>0</h3>
            <p>FIRST TIME IN 19 YEARS</p>
        </div>

        <div class="earth-stat">
            <span>RATIONING STATUS</span>
            <h3>ENDING</h3>
            <p>WORLDWIDE PHASE OUT</p>
        </div>

    </div>

    <!-- FOOD GRAPH -->

    <div class="food-panel">

        <div class="food-title">
            GLOBAL AGRICULTURAL RECOVERY INDEX
        </div>

        <div class="food-graph">

            <div class="food-bar foodb1"></div>
            <div class="food-bar foodb2"></div>
            <div class="food-bar foodb3"></div>
            <div class="food-bar foodb4"></div>
            <div class="food-bar foodb5"></div>
            <div class="food-bar foodb6"></div>

        </div>

        <div class="food-labels">
            <span>CRISIS</span>
            <span>YEAR 1</span>
            <span>YEAR 2</span>
            <span>YEAR 3</span>
            <span>YEAR 4</span>
            <span>CURRENT</span>
        </div>

    </div>

    <!-- RECOVERY OPERATIONS -->

    <div class="rebuild-grid">

        <div class="rebuild-card">

            <span>GLOBAL FOOD INITIATIVE</span>

            <h3>SEED VAULTS OPENED</h3>

            <p>
                Long-protected genetic archives were distributed
                to recovering agricultural regions.

                Wheat, rice, corn, soybean, potato,
                coffee and fruit species returned
                to commercial cultivation.
            </p>

        </div>

        <div class="rebuild-card">

            <span>INTERNATIONAL PEACE ACCORDS</span>

            <h3>RESOURCE WARS ENDED</h3>

            <p>
                Remaining governments signed the
                Reykjavik Food & Water Treaty.

                Nations previously engaged in conflict
                now share agricultural production,
                freshwater infrastructure and climate technology.
            </p>

        </div>

        <div class="rebuild-card">

            <span>OCEAN RESTORATION</span>

            <h3>ACTIVE RECOVERY</h3>

            <p>
                Massive reef reconstruction projects,
                fisheries protection programs
                and methane cleanup operations
                are underway across multiple oceans.
            </p>

        </div>

        <div class="rebuild-card">

            <span>GLOBAL POWER GRID</span>

            <h3>STABLE</h3>

            <p>
                Former emergency Astrophage power facilities
                now support reconstruction efforts
                in previously devastated regions.
            </p>

        </div>

    </div>

    <!-- PEACE TIMELINE -->

    <div class="peace-panel">

        <div class="peace-title">
            POST-PETROVA RECOVERY MILESTONES
        </div>

        <div class="peace-event">

            <div class="peace-date">
                YEAR 1
            </div>

            <div class="peace-info">
                Last major resource conflict formally ends.
            </div>

        </div>

        <div class="peace-event">

            <div class="peace-date">
                YEAR 2
            </div>

            <div class="peace-info">
                International shipping networks fully restored.
            </div>

        </div>

        <div class="peace-event">

            <div class="peace-date">
                YEAR 3
            </div>

            <div class="peace-info">
                Global rationing reduced below emergency levels.
            </div>

        </div>

        <div class="peace-event">

            <div class="peace-date">
                YEAR 5
            </div>

            <div class="peace-info">
                First generation born after the crisis enters school.
            </div>

        </div>

    </div>

    <!-- WORLD REACTION -->

    <div class="humanity-panel">

        <h3>RECONSTRUCTION ERA</h3>

        <p>
            Across the world, former military supply depots
            were converted into farming cooperatives.

            Refugee camps became permanent towns.

            Border checkpoints became trade crossings.

            Nations that spent decades competing for food
            now exchange seed stock, water purification systems,
            farming equipment and climate recovery expertise.
        </p>

        <p>
            The largest coordinated rebuilding effort
            in human history remains ongoing.
        </p>

    </div>

    <!-- FINAL ENTRY -->

    <div class="earth-final">

        <div class="earth-quote">

            <span>UNITED NATIONS RECOVERY BROADCAST</span>

            <blockquote>

                "For twenty-five years humanity prepared
                for the end of the world.

                We forgot how to prepare
                for its future."

            </blockquote>

        </div>

        <div class="earth-note">

            EXTINCTION STATUS:
            TERMINATED

            <br><br>

            SUNRISE IS NO LONGER FEARED.

        </div>

    </div>

</div>
`
},
celebration: {

    title: 'GLOBAL COMMEMORATION ARCHIVE',

    body: `

<div class="celebration-dashboard">

    <!-- STATUS -->

    <div class="celebration-header">

        <div>
            GLOBAL PARADES
            <span>314 CITIES</span>
        </div>

        <div>
            MEMORIAL STATUS
            <span>ACTIVE</span>
        </div>

        <div>
            PUBLIC APPROVAL
            <span>98%</span>
        </div>

    </div>

    <!-- MEMORIAL GRID -->

    <div class="memorial-grid">

        <div class="memorial-card">
            <h3>COMMANDER YAO</h3>
            <p>
                Military academies and orbital facilities
                renamed in his honor.
            </p>
        </div>

        <div class="memorial-card">
            <h3>OLESYA ILYUKHINA</h3>
            <p>
                Russian aerospace institutions
                established annual engineering scholarships.
            </p>
        </div>

        <div class="memorial-card">
            <h3>DR. RYLAND GRACE</h3>
            <p>
                Grover Cleveland Middle School
                officially renamed:
                Ryland Grace Middle School.
            </p>
        </div>

        <div class="memorial-card">
            <h3>ROCKY</h3>
            <p>
                Statues honoring the Eridian engineer
                appeared worldwide
                beside the Hail Mary crew.
            </p>
        </div>

    </div>

<pre class="danger-log">
[GLOBAL COMMEMORATION SUMMARY]

Public celebrations occurred globally
following confirmation
that Earth's extinction event
had been fully averted.

---

Multiple nations declared
March 2nd —
Dr. Ryland Grace's birthday —
an international holiday.

Official designation:

SOL DAY

---

Recovered mission footage
featuring Grace and Rocky
became mandatory curriculum material
in schools worldwide.

---

STATUES AND MEMORIALS:

• New York City
• Moscow
• Tokyo
• Paris
• Nairobi
• New Delhi
• São Paulo
• San Francisco

All erected memorial statues
honoring:

Commander Yao
Olesya Ilyukhina
Dr. Ryland Grace
and Rocky

---

ARCHIVAL NOTE:

Recovered financial records showed
the Hail Mary crew's accumulated salaries
were donated posthumously
to:

• Public schools
• Agricultural recovery programs
• Climate restoration initiatives
• International science academies

---

[RECOVERED INTERVIEW]

JASMINE TRAN
Age 40
Former student of Ryland Grace

"He made science fun."

"I remember thinking
he was just some weird middle-school teacher."

Turns out he saved the world.

---

[RECOVERED INTERVIEW]

MIGUEL ORTIZ
Age 41
Former student

"None of us knew
he was working on the Petrova problem."

"He used to tell us
science matters because people matter."

Now we're alive because of him.

---

[RECOVERED INTERVIEW]

LEAH PARK
Age 39
Former student

"My daughter goes to
Ryland Grace Middle School now."

"That's still insane to say out loud."

---

[RECOVERED PUBLIC BROADCAST]

ANCHOR:

"For most of human history,
heroes returned home."

"Ryland Grace never did."

---

[RECOVERED STREET FOOTAGE]

Crowds gathered during annual celebrations
holding lanterns shaped like Beetle probes.

Children carried models
of the Hail Mary through city streets.

---

[FINAL ENTRY]

Humanity survived
because three astronauts
boarded a ship
and flew into the dark.

[END FILE]
</pre>

</div>
`
},
forty: {

    title: '40 ERIDANI OBSERVATION REPORT',

    body: `

<div class="forty-dashboard">

    <!-- STATUS -->

    <div class="forty-header">

        <div>
            STAR LUMINOSITY
            <span>INCREASING</span>
        </div>

        <div>
            ERID STATUS
            <span>STABILIZING</span>
        </div>

        <div>
            CONTACT STATUS
            <span>NONE</span>
        </div>

    </div>

    <!-- GRAPH -->

    <div class="forty-panel">

        <div class="forty-title">
            40 ERIDANI LUMINOSITY ANALYSIS
        </div>

        <div class="forty-graph">

            <div class="forty-line"></div>

            <div class="forty-dot t1"></div>
            <div class="forty-dot t2"></div>
            <div class="forty-dot t3"></div>
            <div class="forty-dot t4"></div>

        </div>

    </div>

<pre class="danger-log">
[DEEP SPACE OBSERVATION SUMMARY]

Observation arrays confirmed
increasing luminosity
within the 40 Eridani system.

Recovery curves closely matched
post-Taumoeba deployment models
previously observed in Sol.

---

CONCLUSION:

High confidence
that Dr. Ryland Grace
successfully delivered
Taumoeba cultures
to the Eridian home system.

---

ARCHIVAL NOTE:

Recovered Beetle telemetry indicated
Grace redirected the Hail Mary
toward 40 Eridani
after choosing to rescue Rocky.

No confirmed transmissions
were ever received afterward.

---

OFFICIAL STATUS:

DR. RYLAND GRACE
Presumed deceased

Reason:
Projected depletion
of onboard food supplies
and medical resources.

---

However:

No visual confirmation,
telemetry,
or wreckage
has ever been recovered.

---

[RECOVERED TASK FORCE MEMO]

"We now possess strong evidence
that two civilizations survived
because one man refused
to leave his friend behind."

---

[RECOVERED PUBLIC BROADCAST]

ANCHOR:

"The Sun at Erid is getting brighter."

"Somewhere out there,
against impossible odds,
Ryland Grace succeeded."

---

[ARCHIVAL FOOTNOTE]

No further signals
from the Hail Mary
have ever been detected.

Its final fate remains unknown.

[END FILE]
</pre>

</div>
`
},
};

function openArchive(entry){

    archiveModal.classList.add('show');

    modalTitle.innerHTML = archiveEntries[entry].title;

    modalBody.innerHTML = archiveEntries[entry].body;
}

function closeArchive(){

    archiveModal.classList.remove('show');
}

function toggleRedacted() {
    const content = document.getElementById('redactedContent');
    content.classList.toggle('show-file');
}


function toggleRockyFile(){

    const file = document.getElementById("rockyFile");

    file.classList.toggle("show-file");
}

function toggleSpacewalkReport(){

    const report =
    document.getElementById("spacewalkReport");

    report.classList.toggle("show-file");
}

function toggleTribunalCharges(button){

    const panel =
    button.nextElementSibling;

    panel.classList.toggle("hidden");

    if(panel.classList.contains("hidden")){

        button.innerText =
        "VIEW FULL CHARGE RECORD";

    } else {

        button.innerText =
        "HIDE CHARGE RECORD";
    }
}

function openAstrophageReport() {

}