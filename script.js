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
            <!-- VIEWER RESPONSE -->

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

        </div>

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
                    T-0:00:00
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
                    YEAR 0
                </div>

                <div class="graph-label year2">
                    YEAR 5
                </div>

                <div class="graph-label year3">
                    YEAR 10
                </div>

                <div class="graph-label year4">
                    YEAR 19
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
                50%
            </div>

            <div class="mortality-sub">
                WITHIN 19 YEARS
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
                    YEAR 1–5
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
                    YEAR 5–10
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
                    YEAR 10–15
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
                    YEAR 15–19
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
                <div class="africa-shape"></div>

                <!-- deployment zones -->
                <div class="zone zone-1"></div>
                <div class="zone zone-2"></div>
                <div class="zone zone-3"></div>

                <!-- lines -->
                <div class="route route-1"></div>
                <div class="route route-2"></div>

                <!-- labels -->
                <div class="map-label label-1">
                    ALGERIA ARRAY
                </div>

                <div class="map-label label-2">
                    LIBYA THERMAL FIELD
                </div>

                <div class="map-label label-3">
                    CHAD BREEDING SITE
                </div>

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

<pre>
[UNSEALED 32 YEARS AFTER INITIAL REPORT]

SOURCE:
Eva Stratt testimony deposition

STATUS:
DECLASSIFIED

The official account stating that
Dr. Ryland Grace voluntarily joined
Project Hail Mary was false.

According to Stratt's later testimony,
Grace refused mandatory assignment
during final mission preparation.

Task Force leadership concluded that
no viable replacement candidate existed.

Stratt authorized forced mission induction.

Grace was sedated and transferred
to pre-launch medical containment
against his will.

When asked whether she regretted the decision,
Stratt responded:

"No.

Humanity needed him more than he needed a choice."

No criminal charges were ever filed.

At the time of disclosure,
Stratt stated she would make
the same decision again.

[END FILE]
</pre>

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

PUBLIC RESPONSE:

Project Hail Mary now viewed by much of humanity
as the only remaining long-term survival strategy.

Religious movements centered around the mission
have appeared across multiple continents.

Extremist organizations continue labeling the mission:

"humanity's salvation"

or

"humanity's final betrayal."

--------------------------------------------

MISSION STATUS:

HAIL MARY
EN ROUTE TO TAU CETI

NO CONTACT EXPECTED FOR OVER A DECADE
</pre>

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
                <span>15°C</span>
                <span>10°C</span>
                <span>5°C</span>
                <span>0°C</span>
                <span>-5°C</span>
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

        <div class="crew-photo">
            YAO PHOTO
        </div>

        <div class="crew-info">

<pre>
NAME:
Commander Yao Li-Jie

STATUS:
DECEASED

CAUSE OF DEATH:
Nutritional failure during induced coma transit

---

ARCHIVAL NOTE:

This entry was reconstructed using recovered
Hail Mary internal logs following mission data return.

At the time of death,
Earth had no method of receiving live updates
from the vessel.

The information contained herein
was added to the archive retrospectively
for timeline continuity purposes.

---

MISSION LOG SUMMARY:

Approximately 2.3 years into transit,
automated medical systems aboard Hail Mary
failed to properly dispense nutritional slurry
to Commander Yao during induced coma.

Subsequent diagnostic review identified
a blockage within the feeding line system.

The failure remained undetected
for an extended period due to
reduced automated monitoring sensitivity
during deep transit operations.

---

AUTOMATED SYSTEM RECORD:

"SUBJECT RECEIVING BELOW MINIMUM
NUTRITIONAL REQUIREMENTS"

"ALERT PRIORITY:
NON-CRITICAL"

---

The issue escalated into catastrophic
organ failure before medical intervention
could occur.

Commander Yao was pronounced deceased
by onboard systems while still in induced coma.

---

RECOVERED INTERNAL NOTE:

"Failure chain likely survivable
under active crew supervision."

---

At the time of Yao's death,
all remaining crew members
were still unconscious.

No human being witnessed his passing.

---

CREW STATUS FOLLOWING INCIDENT:

• Olesya Ilyukhina — ALIVE
• Ryland Grace — ALIVE

MISSION CONTINUED.

[END LOG]
</pre>

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

        <div class="crew-photo">
            ILYUKHINA PHOTO
        </div>

        <div class="crew-info">

<pre>
NAME:
Olesya Ilyukhina

STATUS:
DECEASED

CAUSE OF DEATH:
Pulmonary embolism during induced coma transit

---

ARCHIVAL NOTE:

This report was reconstructed from recovered
Hail Mary medical and telemetry records.

At the time of incident,
Earth possessed no active communication capability
with the vessel.

This entry was added retrospectively
following mission archive reconstruction.

---

MISSION LOG SUMMARY:

Approximately twelve years into interstellar transit,
automated medical systems detected severe
cardiovascular irregularities within
Crewmember Ilyukhina.

Diagnostic systems later concluded
that prolonged coma-induced circulatory stress
resulted in formation of a large blood clot.

The clot migrated into pulmonary circulation,
causing catastrophic respiratory failure.

---

AUTOMATED MEDICAL RECORD:

"SUBJECT OXYGEN SATURATION FALLING"

"ATTEMPTING CORRECTIVE INTERVENTION"

"INTERVENTION FAILED"

---

Emergency autonomous medical procedures
were initiated but proved unsuccessful.

By the time onboard systems escalated
the situation to critical status,
irreversible neurological damage
had already occurred.

---

RECOVERED INTERNAL NOTE:

"Long-duration coma survival projections
remain statistically unstable beyond
ten-year thresholds."

---

At the time of death:

• Commander Yao Li-Jie was already deceased
• Ryland Grace remained in induced coma

No conscious crew members
were present aboard the vessel.

---

MISSION STATUS FOLLOWING INCIDENT:

SOLE SURVIVING CREW MEMBER:
Dr. Ryland Grace

Estimated arrival at Tau Ceti:
Less than one year

MISSION CONTINUED.

[END REPORT]
</pre>

        </div>

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

    <!-- STAR MAP -->

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

    <pre>
[RECOVERED FLIGHT TELEMETRY]

MISSION TIME:
T+13 YEARS

Hail Mary successfully decelerated
within the Tau Ceti system
following interstellar transit.

Recovered telemetry confirmed
only one surviving crew member:
Dr. Ryland Grace.

No live communication with Earth
was possible during arrival operations.

Mission data was reconstructed decades later
using returned Beetle probe archives.

Primary mission objectives remained active.

[END TRANSMISSION]
</pre>

</div>
`
},
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

<pre>
CONTACT DESIGNATION:
"ROCKY"

SPECIES:
ERIDIAN

HOMEWORLD:
ERID

FIRST CONTACT LOCATION:
TAU CETI SYSTEM

DISCOVERED BY:
Dr. Ryland Grace

---

SUMMARY:

Recovered Hail Mary logs confirmed
that Dr. Grace established direct contact
with a surviving member
of an extraterrestrial species.

The alien individual identified himself
through tonal acoustic communication
approximated in English records as:

"Rocky"

---

ERIDIAN BIOLOGY:

• Ammonia-based life chemistry
• Extreme pressure tolerance
• Echolocation-based perception
• No visual sensory organs
• Metallic exoskeletal anatomy
• Five-limbed body structure

---

ERIDIAN TECHNOLOGY:

• Advanced materials engineering
• Interstellar spacecraft capability
• Mechanical computation systems
• Sophisticated astrophage applications

Recovered logs suggested
Eridian civilization was independently
attempting to solve stellar dimming
within their own star system.

---

COMMUNICATION BREAKTHROUGH:

Dr. Grace and Rocky established
a shared scientific language using:

• Mathematics
• Chemistry
• Physics
• Engineering diagrams

Communication later expanded
into full conversational exchanges.

---

RECOVERED AUDIO TRANSCRIPT:

"Grace question?"

"Rocky help."

"You are friend, Grace."

---

SIGNIFICANCE:

FIRST CONFIRMED CONTACT
BETWEEN HUMANITY
AND EXTRATERRESTRIAL INTELLIGENCE

[END FILE]
</pre>

    </div>

</div>
`
},
adrian: {

    title: 'PETROVA LINE FINDINGS',

    body: `

<div class="alien-bio">

    <div class="bio-photo">
        ADRIAN BIOSPHERE IMAGE
    </div>

<pre>
[RECOVERED SCIENCE LOG]

LOCATION:
ADRIAN PETROVA LINE

PRIMARY SCIENTIST:
Dr. Ryland Grace

ASSISTING CONTACT:
"Rocky" — Eridian Expeditionary Crew

---

SUMMARY:

Extravehicular sampling operations
conducted near Adrian's Petrova Line
confirmed the presence of a complete,
active extraterrestrial biosphere.

Initial assumptions suggested Astrophage
represented an isolated life form.

Recovered findings instead demonstrated
a functioning biological ecosystem.

---

RECOVERED TRANSCRIPT:

GRACE:
"If there’s a whole active biosphere
in the Petrova line,
it stands to reason that there’s
a whole active biosphere on Adrian."

GRACE:
"Which means...
there’s life on Adrian."

ROCKY:
"Is like cells, on Erid."

GRACE:
"And Earth."

---

BIOLOGICAL FINDINGS:

Recovered samples indicated:

• Microbial organisms
• Multi-cellular analogues
• Predator-prey interactions
• Stable energy cycles
• Astrophage ecological integration

---

SIGNIFICANCE:

The discovery confirmed:

• Life independently evolved
  beyond Earth

• Complex ecosystems exist
  on alien worlds

• Biology may be common
  throughout the universe

---

STATUS:

Adrian officially classified
as first confirmed extraterrestrial
living world documented by humanity.

[END REPORT]
</pre>

    <button class="archive-button"
    onclick="toggleSpacewalkReport()">

        OPEN SPACEWALK REPORT

    </button>

    <!-- HIDDEN REPORT -->

    <div id="spacewalkReport"
    class="hidden-file">

        <div class="declass-header">

            EVA ACTIVITY REPORT

        </div>

        <div class="spacewalk-photo">
            EVA IMAGE
        </div>

<pre>
EXTRAVEHICULAR ACTIVITY REPORT

VESSEL:
HAIL MARY

LOCATION:
ADRIAN PETROVA LINE

---

AIRLOCK STATUS:

Side door unlatched:
07:14 UTC Ship Time

Suit pressure stable.

Tether secured.

---

OBJECTIVE:

Collect Petrova Line biological samples
for direct onboard analysis.

---

RECOVERED NOTES:

Visual observation confirmed
dense concentrations of biological activity
within the Petrova Line.

Numerous microscopic organisms observed
moving independently through
the astrophage-rich environment.

Dr. Grace later described the exterior region as:

"Like swimming through glowing alien plankton."

---

EVA STATUS:

SUCCESSFUL

BIOLOGICAL SAMPLES RETURNED:
CONFIRMED

[END EVA LOG]
</pre>

    </div>

</div>
`
},
fishing: {

    title: 'HAIL MARY INCIDENT REPORT',

    body: `

<div class="incident-report">

<pre class="danger-log">
[RECOVERED SHIP TELEMETRY]

MARY[03:03:02.118]: MANUAL MODE ACTIVATED

MARY[03:14:05.441]: ALTITUDE WARNING

MARY[03:14:06.092]: WARNING.
MARY[03:14:06.094]: EXTERIOR TEMPERATURE ELEVATED

MARY[03:14:08.771]: WARNING.
MARY[03:14:08.773]: HULL PRESSURE ANOMALY DETECTED

MARY[03:14:09.106]: WARNING.
MARY[03:14:09.248]: WARNING.
MARY[03:14:09.411]: WARNING.

MARY[03:14:10.027]: HULL BREACH DETECTED
MARY[03:14:10.030]: LOCATION: PORTSIDE FUEL COMPARTMENTS ELEVEN AND TWELVE

MARY[03:14:12.482]: JETTISON PORT FUEL TANK COMPARTMENT TWELVE
MARY[03:14:12.486]: CONFIRM?

MARY[03:14:16.093]: JETTISON CONFIRMED: COMPARTMENT TWELVE

MARY[03:14:16.941]: JETTISON PORT FUEL TANK COMPARTMENT ELEVEN
MARY[03:14:16.944]: CONFIRM?

MARY[03:14:20.112]: JETTISON CONFIRMED: COMPARTMENT ELEVEN

MARY[03:14:25.775]: CENTRIFUGE MODE ACTIVATE
MARY[03:14:25.898]: CONFIRM?

MARY[03:15:02.990]: CONTAMINANT DETECTED:
MARY[03:15:02.991]: AMMONIA

MARY[03:15:09.989]: CENTRIFUGE MODE ACTIVATED

MARY[03:18:25.413]: AUTOMATED MEDICAL RESPONSE INITIATED

[END TELEMETRY]

</pre>

    <!-- PLAN -->

    <div class="plan-box">

        <h2>MISSION CONCEPT</h2>

<pre>
ROCKY:
"Hello Earth!
Plan is like fishing.

We get very close to Adrian atmosphere,
and lower collector into clouds with chain,
then Grace go on hull to reel it in.

If ship not at precise angle and speed,
we die! Example!"

---

Recovered mission logs confirmed
the operation required the Hail Mary
to perform sustained low-altitude flight
inside Adrian's upper atmosphere.

The maneuver was conducted manually.

At the time of operation,
Dr. Grace possessed no formal pilot training.

The vessel was required to fly backwards
to maintain proper atmospheric velocity
during collection procedures.
</pre>

    </div>

    <!-- INJURIES -->

    <div class="injury-card">

        <div class="injury-photo">
            INJURY DOCUMENTATION IMAGE
        </div>

<pre>
POST-INCIDENT MEDICAL SUMMARY

PATIENT:
Dr. Ryland Grace

---

INJURIES SUSTAINED:

• Fractured nasal bone
• Laceration — left orbital region
• Third-degree thermal burns — left wrist
• Severe bruising
• Oxygen deprivation exposure
• Pressure trauma

---

DIAGNOSIS:

Patient survived catastrophic
thermal and decompression exposure
during extravehicular retrieval operation.

Automated medical intervention systems
prevented fatality.

---

TREATMENT ADMINISTERED:

• Emergency sedation
• Automated pharmaceutical injection
• Burn treatment protocol
• Oxygen stabilization
• Internal pressure recovery

---

STATUS:

SURVIVED

[END MEDICAL FILE]
</pre>

    </div>

</div>
`
},
taumoeba: {

    title: 'TAUMOEBA EXPERIMENT LOGS',

    body: `

<div class="taumoeba-report">

    <div class="bio-photo">
        TAUMOEBA MICROSCOPY IMAGE
    </div>

<pre>
[RECOVERED SCIENCE LOG]

PROJECT:
TAUMOEBA ANALYSIS

PRIMARY SCIENTIST:
Dr. Ryland Grace

ASSISTING ENGINEER:
"Rocky"

---

SUMMARY:

Recovered mission logs confirmed
the discovery of a naturally occurring
microorganism within Adrian's biosphere
capable of consuming astrophage.

The organism was later designated:

"TAUMOEBA"

---

RECOVERED TRANSCRIPT:

GRACE:
"Taumoeba-35!"

"Just an amoeba from Tau Ceti
and we’re putting 'Tau'
in front of 'amoeba.'"

---

INITIAL TESTING:

Early samples proved incapable
of surviving nitrogen exposure.

Recovered logs confirmed
multiple failed atmospheric tests.

---

GRACE:

"I did tests at different atmospheric variables
and, fun fact,
every time I introduce nitrogen..."

[blows raspberry]

"...it died."

---

GRACE:

"And I know what you’re thinking —
well, that’s terrible,
because we need it to survive
in the conditions of Venus."

---

BREEDING PROGRAM:

Recovered logs confirmed
Dr. Grace utilized
Eridian xenonite breeder tanks
to develop nitrogen-resistant strains.

---

GRACE:

"Obviously I had to figure out
how to breed a new strain
of nitrogen-resistant Taumoeba.

And guess what I used?"

"The breeder tanks that we made,
with your xenonite."

"And you know what?"

[kisses]

"Now we’re just a couple
of very cool dudes
with their very own strain
of nitrogen-resistant Taumoeba."

---

TAUMOEBA-35:

Final engineered strain capable of surviving:

• 3.5% nitrogen atmosphere
• 0.02 atmospheric pressure
• Venus-equivalent conditions

---

SIGNIFICANCE:

Taumoeba-35 represented
the first confirmed biological weapon
capable of halting astrophage proliferation
within the Sol system.

Recovered mission logs later confirmed
the strain was successfully loaded
into Beetle return probes
for transport back to Earth.

[END FILE]
</pre>

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

<pre>
[RECOVERED NAVIGATION LOG]

MISSION STATUS:
RETURN TRANSIT ACTIVE

Recovered telemetry confirmed
the Hail Mary departed the Tau Ceti system
following successful Taumoeba integration
within the Beetle return probes.

---

PRIMARY OBJECTIVE:

Return to Sol system.

---

ESTIMATED ARRIVAL TIME:

4 YEARS
2 MONTHS
11 DAYS

---

PAYLOAD STATUS:

TAUMOEBA-35:
STABLE

BEETLE PROBES:
DEPLOYED

---

RECOVERED NOTES:

At the time of departure,
Dr. Ryland Grace represented:

• Sole surviving Hail Mary crew member
• First human to survive interstellar travel
• First human to establish extraterrestrial contact

---

ARCHIVAL NOTE:

Recovered logs suggest
Dr. Grace ultimately altered course
before reaching Earth.

Destination changes were not understood
until later Beetle telemetry recovery.

[END FILE]
</pre>

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

<pre>
[RECOVERED TRANSMISSION SUMMARY]

The four Beetle probes successfully departed
the Tau Ceti system carrying:

• Taumoeba-35 cultures
• Astrophage samples
• Full Hail Mary telemetry
• Scientific archives
• Crew records

---

INITIAL ASSUMPTION:

Recovered Earth-side telemetry initially suggested
the Hail Mary itself remained on return trajectory
toward Sol.

Later recovered navigation logs revealed
Dr. Ryland Grace altered course shortly
after Beetle deployment.

---

DESTINATION CHANGE:

40 ERIDANI SYSTEM

---

RECOVERED MISSION NOTES:

Grace returned after learning
the Eridian vessel Blip-A
lacked sufficient astrophage reserves
for independent survival.

Recovered logs indicate
the Hail Mary transferred fuel
to Rocky's vessel,
preventing total mission loss.

---

ARCHIVAL NOTE:

At the time of Beetle arrival,
Earth believed Dr. Grace deceased.

The full circumstances surrounding
the course change would not become known
until decades later.

[END FILE]
</pre>

</div>
`
},
collapse: {

    title: 'GLOBAL COLLAPSE PROJECTIONS',

    body: `

<div class="collapse-dashboard">

    <!-- CONFLICT LIST -->

    <div class="war-list">

        <div>
            SOUTH ASIAN WATER CONFLICTS
            <span>ACTIVE</span>
        </div>

        <div>
            NORTHERN AFRICAN FAMINE CRISIS
            <span>ESCALATING</span>
        </div>

        <div>
            ARCTIC RESOURCE DISPUTES
            <span>ACTIVE</span>
        </div>

        <div>
            PACIFIC FOOD ROUTE COLLAPSE
            <span>CRITICAL</span>
        </div>

        <div>
            GLOBAL REFUGEE DISPLACEMENT
            <span>1.2 BILLION</span>
        </div>

    </div>

<pre>
[UNITED NATIONS CRISIS SUMMARY]

Recovered global projections estimated
Earth would lose approximately
25% of its population within thirty years
under ideal international cooperation conditions.

Internal Petrova Task Force estimates
later doubled those projections.

---

RECOVERED EVA STRATT TRANSCRIPT:

"Of course.
Leclerc’s estimate assumes all nations
work together to share resources
and ration food.

But do you think that will happen?"

"Do you think the United States
is going to sit idly by
while half their population starves?"

"Do you think China
will simply leave weaker neighbors alone?"

---

"There will be wars."

"Fought for the same reason
most ancient wars were fought:

Food."

---

Recovered Earth-side reports confirmed:

• Agricultural collapse
• Forced migration
• Regional famine
• Resource wars
• Energy shortages
• Medical infrastructure failure
• Uncontrolled disease outbreaks

---

RECOVERED STRATT STATEMENT:

"War, famine, pestilence, and death.

Astrophage is literally the apocalypse.

The Hail Mary is all we have now."

---

ARCHIVAL NOTE:

By this stage of the crisis,
multiple governments had enacted:

• Martial law
• Military-controlled rationing
• Border closures
• Forced agricultural labor programs

Several nation-states ceased functioning entirely.

[END FILE]
</pre>

</div>
`
},
lastcontact: {

    title: 'FINAL HAIL MARY COMMUNICATION',

    body: `

<div class="lastcontact-dashboard">

    <!-- SIGNAL PANEL -->

    <div class="signal-panel">

        <div class="signal-line"></div>

        <div class="signal-noise"></div>

        <div class="signal-status">
            SIGNAL LOST
        </div>

    </div>

    <!-- TRANSMISSION -->

<pre class="danger-log">
[FINAL RECOVERED BEETLE TRANSMISSION]

TIMESTAMP:
T+23 YEARS

SOURCE:
HAIL MARY

DESTINATION:
BEETLE RETURN PROBES

---

NAVIGATION STATUS:

BEETLES:
TRAJECTORY STABLE
DESTINATION:
SOL SYSTEM

HAIL MARY:
COURSE DIVERGENCE CONFIRMED

DESTINATION:
40 ERIDANI SYSTEM

---

COMMUNICATION STATUS:

Long-range telemetry quality degraded
over extended interstellar distance.

Signal fragmentation increased
over multiple years.

---

LAST RECOVERED TRANSMISSION:

"...fuel transfer stable..."

"...Rocky..."

"...see you on Erid..."

[TRANSMISSION CORRUPTED]

---

SIGNAL LOSS EVENT:

Recovered records confirmed
the Hail Mary officially ceased
all detectable transmissions shortly afterward.

No further communication
was ever received by the Beetle probes.

---

ARCHIVAL SUMMARY:

At the time of final contact,
mission analysts believed
Dr. Ryland Grace was attempting
to reach the Eridian vessel Blip-A
to prevent loss of crew and ship.

Mission outcome:
UNKNOWN

---

ARCHIVAL NOTE:

No verified return
of the Hail Mary spacecraft
has ever occurred.

Dr. Ryland Grace
was officially declared deceased in absentia
41 years after launch.

[END FILE]
</pre>

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

<div class="signal-dashboard">

    <!-- RADAR -->

    <div class="arrival-radar">

        <div class="radar-ring ring1"></div>
        <div class="radar-ring ring2"></div>
        <div class="radar-ring ring3"></div>

        <div class="beetle-blip b1"></div>
        <div class="beetle-blip b2"></div>
        <div class="beetle-blip b3"></div>
        <div class="beetle-blip b4"></div>

        <div class="radar-center"></div>

    </div>

<pre class="danger-log">
[UNITED NATIONS EMERGENCY BULLETIN]

PRIORITY:
ABSOLUTE

SOURCE:
DEEP SPACE NETWORK

---

At 04:14 UTC,
multiple monitoring arrays
near Jupiter orbit
confirmed four relativistic objects
entering the Solar System.

Trajectory analysis confirms
origin vector alignment
with the Tau Ceti system.

---

THERMAL SIGNATURE MATCH:
99.92%

OBJECT CLASSIFICATION:
BEETLE RETURN PROBES

---

PROJECTED TOUCHDOWN:

34 DAYS

LOCATION:
INDIAN OCEAN RECOVERY ZONE

---

GLOBAL RESPONSE:

Within hours of confirmation,
multiple ongoing military conflicts
announced temporary ceasefires.

Emergency peace negotiations began
under United Nations oversight.

---

ARCHIVAL NOTE:

The announcement triggered
the largest spontaneous celebrations
recorded since the Petrova discovery.

Crowds gathered worldwide
to watch live trajectory updates.

---

SPECIAL AUTHORIZATION ORDER:

Former Petrova Task Force Director
Eva Stratt was released from prison
under emergency executive authority.

Stratt immediately resumed advisory duties
for Beetle recovery operations.

---

[RECOVERED PRESS BRIEFING]

REPORTER:
"Dr. Stratt,
after everything that happened,
do you believe the mission succeeded?"

STRATT:
"...They came home."

---

ARCHIVAL NOTE:

Former Petrova Task Force personnel,
scientists,
flight controllers,
and surviving Hail Mary support crews
reassembled for recovery operations.

For the first time in decades,
humanity had reason to hope.

[END FILE]
</pre>

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

<pre class="danger-log">
[RECOVERY SUMMARY]

All four Beetle probes
were recovered successfully.

Payload integrity remained above
94% across all probes.

---

RECOVERED MATERIAL INCLUDED:

• Live Taumoeba-35 samples
• Astrophage cultures
• Xenonite material samples
• Complete Hail Mary telemetry
• Thousands of hours of onboard recordings
• Extraterrestrial linguistic data
• Eridian engineering schematics
• Biological analysis from Adrian
• Personal journals from Dr. Ryland Grace

---

ARCHIVAL NOTE:

Recovered scientific papers authored by Grace
included extensive documentation regarding:

• Astrophage biology
• Adrian ecosystem structures
• Taumoeba breeding
• Xenonite applications
• Eridian mathematics
• Eridian social structures
• Interstellar engineering systems

---

FIRST CONTACT CONFIRMATION:

Recovered files conclusively proved
humanity had encountered
extraterrestrial intelligent life.

Species designation:
ERIDIAN

Primary recovered individual:
"ROCKY"

---

[RECOVERED VIDEO DESCRIPTION]

One recovered recording showed
Dr. Grace and Rocky
working together
inside a shared engineering compartment.

The footage became one of the most viewed
pieces of media in human history.

---

ARCHIVAL NOTE:

Dr. Ryland Grace's final status
remained officially unknown.

No evidence confirmed whether
the Hail Mary successfully reached Erid.

[END FILE]
</pre>

</div>
`
},
solution: {

    title: 'SOL RECOVERY OPERATIONS',

    body: `

<div class="solution-dashboard">

    <!-- STATUS -->

    <div class="solution-header">

        <div>
            TAUMOEBA BREEDING
            <span>ACTIVE</span>
        </div>

        <div>
            VENUS DEPLOYMENT
            <span>PENDING</span>
        </div>

        <div>
            SOL PROGNOSIS
            <span>STABILIZING</span>
        </div>

    </div>

    <!-- LUMINOSITY -->

    <div class="luminosity-panel">

        <div class="luminosity-label">
            SOL LUMINOSITY PROJECTION
        </div>

        <div class="luminosity-graph">

            <div class="lum-line"></div>

            <div class="lum-dot d1"></div>
            <div class="lum-dot d2"></div>
            <div class="lum-dot d3"></div>

        </div>

    </div>

<pre class="danger-log">
[GLOBAL RECOVERY BULLETIN]

Recovered Taumoeba-35 cultures
were successfully replicated
in multiple secure laboratories.

Planetary-scale breeding operations
began immediately.

---

MISSION OBJECTIVE:

Deploy Taumoeba-35
throughout the Petrova line
near Venus orbit.

Projected result:

• Astrophage population collapse
• Solar energy restoration
• Gradual climate stabilization

---

PUBLIC DISCLOSURE EVENT:

For the first time in 24 years,
world governments publicly confirmed:

PROJECT HAIL MARY SUCCEEDED

---

Recovered mission logs revealed:

Dr. Ryland Grace
was the sole surviving crew member
following the deaths of
Commander Yao
and Olesya Ilyukhina.

---

Recovered archives showed
Grace continued the mission alone
within the Tau Ceti system.

Additional records confirmed
Grace received assistance from:

[REDACTED]

---

ARCHIVAL NOTE:

The existence of intelligent extraterrestrial life
remained partially classified
during initial recovery operations.

Limited information regarding
the Eridian species
was withheld pending international review.

---

[RECOVERED PUBLIC BROADCAST]

ANCHOR:

"For the first time in decades,
humanity has a future again."

---

[RECOVERED STREET FOOTAGE]

Crowds gathered worldwide
during announcement broadcasts.

Multiple cities suspended rationing curfews
for public celebrations.

Church bells rang
across dozens of nations.

In several locations,
people reportedly stood outside
simply to watch the sunrise.

[END FILE]
</pre>

</div>
`
},
arclight2: {

    title: 'ARCLIGHT II MISSION REPORT',

    body: `

<div class="arclight-dashboard">

    <!-- STATUS -->

    <div class="arclight-header">

        <div>
            LAUNCH STATUS
            <span>SUCCESSFUL</span>
        </div>

        <div>
            TAUMOEBA PAYLOAD
            <span>8.4 MILLION KG</span>
        </div>

        <div>
            TARGET ETA
            <span>41 DAYS</span>
        </div>

    </div>

    <!-- PAYLOAD GRAPH -->

    <div class="payload-panel">

        <div class="payload-title">
            GLOBAL TAUMOEBA BREEDING OUTPUT
        </div>

        <div class="payload-graph">

            <div class="payload-bar p1"></div>
            <div class="payload-bar p2"></div>
            <div class="payload-bar p3"></div>
            <div class="payload-bar p4"></div>
            <div class="payload-bar p5"></div>

        </div>

    </div>

<pre class="danger-log">
[ARCLIGHT II MISSION SUMMARY]

MISSION:
ARCLIGHT II

OBJECTIVE:
Deliver Taumoeba-35 cultures
directly into the Petrova line
near Venus orbit.

---

Recovered Taumoeba-35 cultures
were bred continuously
across multiple facilities worldwide.

Major breeding operations included:

• Sahara blackpanel farms
• Antarctic thermal stations
• Petrova Task Force laboratories
• Orbital zero-gravity culture systems

---

TOTAL PAYLOAD:

8.4 million kilograms
of active Taumoeba-35 cultures.

---

MISSION DESIGN:

ArcLight II incorporated
multiple technologies recovered
from the Beetle probes:

• Xenonite containment systems
• Eridian thermal shielding methods
• Advanced astrophage fuel systems

---

[RECOVERED LAUNCH TRANSCRIPT]

MISSION CONTROL:

"T-minus ten...
nine...
eight..."

---

"All payload containment systems stable."

---

"Telemetry green across all systems."

---

"Three...
two...
one..."

---

"ArcLight II ignition confirmed."

---

[VIDEO DESCRIPTION]

Recovered footage showed
millions gathered worldwide
to watch the launch live.

For many survivors,
the launch represented
the first direct attempt
to save the Sun itself.

---

MISSION CONTROL:

"Vehicle clear of tower."

"ArcLight II now en route
to the Petrova line."

---

ARCHIVAL NOTE:

The launch occurred exactly
25 years after
the original ArcLight mission
first identified extraterrestrial microorganisms
within the Petrova line.

---

[RECOVERED EVA STRATT STATEMENT]

"We spent twenty-five years
trying not to die."

"Now we finally get to fight back."

[END FILE]
</pre>

</div>
`
},
solsaved: {

    title: 'SOL RECOVERY CONFIRMATION',

    body: `

<div class="sol-dashboard">

    <!-- STATUS -->

    <div class="sol-header">

        <div>
            SOL LUMINOSITY
            <span>RISING</span>
        </div>

        <div>
            TAUMOEBA STATUS
            <span>PROPAGATING</span>
        </div>

        <div>
            GLOBAL STATUS
            <span>STABILIZING</span>
        </div>

    </div>

    <!-- GRAPH -->

    <div class="recovery-panel">

        <div class="recovery-title">
            SOL LUMINOSITY RECOVERY
        </div>

        <div class="recovery-graph">

            <div class="recovery-line"></div>

            <div class="recovery-dot r1"></div>
            <div class="recovery-dot r2"></div>
            <div class="recovery-dot r3"></div>
            <div class="recovery-dot r4"></div>

        </div>

    </div>

<pre class="danger-log">
[PETROVA TASK FORCE BULLETIN]

ArcLight II successfully entered
Venus orbit
and deployed Taumoeba-35 cultures
into the Petrova line.

---

Within 11 days,
monitoring satellites confirmed
massive astrophage population collapse.

---

SOLAR OUTPUT REPORT:

Solar luminosity decline
has officially stopped.

For the first time in over two decades,
the Sun is getting brighter.

---

PROJECTED RECOVERY TIMELINE:

• 13 months until full luminosity restoration
• Global temperature stabilization projected within 4 years
• Major agricultural recovery projected within 6 years

---

[GLOBAL RESPONSE]

Ceasefires expanded worldwide
within hours of the announcement.

Several remaining wartime governments
declared immediate armistices.

Stock markets reopened
for the first time in years.

---

[RECOVERED PUBLIC BROADCAST]

ANCHOR:

"After twenty-five years,
humanity will survive."

---

[RECOVERED STREET FOOTAGE]

Large crowds gathered globally
during sunrise events.

In many cities,
people openly wept
as the Sun appeared visibly brighter
for the first time in years.

---

ARCHIVAL NOTE:

The Petrova Task Force
officially declared
the extinction threat ended
at 08:14 UTC.

---

[INTERNAL TASK FORCE MESSAGE]

MISSION STATUS:

SUCCESSFUL

---

[FINAL EVA STRATT STATEMENT]

"We asked the world
to sacrifice everything."

"They did."

"And somehow...
it was enough."

[END FILE]
</pre>

</div>
`
},
earthheals: {

    title: 'EARTH RECOVERY REPORT',

    body: `

<div class="earth-dashboard">

    <!-- STATUS -->

    <div class="earth-header">

        <div>
            CROP OUTPUT
            <span>+214%</span>
        </div>

        <div>
            SEED VAULT STATUS
            <span>OPENED</span>
        </div>

        <div>
            RATIONING STATUS
            <span>ENDING</span>
        </div>

    </div>

    <!-- FOOD GRAPH -->

    <div class="food-panel">

        <div class="food-title">
            GLOBAL FOOD PRODUCTION
        </div>

        <div class="food-graph">

            <div class="food-line"></div>

            <div class="food-dot f1"></div>
            <div class="food-dot f2"></div>
            <div class="food-dot f3"></div>
            <div class="food-dot f4"></div>

        </div>

    </div>

<pre class="danger-log">
[GLOBAL RECOVERY SUMMARY]

Following restoration of solar luminosity,
global agricultural recovery accelerated rapidly.

---

Major emergency seed vaults
were opened worldwide,
including reserves stored for over two decades.

Recovered crop strains included:

• Wheat
• Rice
• Corn
• Soybean
• Potato
• Millet
• Coffee
• Cocoa

---

[RECOVERED NEWS FOOTAGE]

Large crowds gathered
to witness the first planting ceremonies.

In several regions,
children participated in planting crops
for the first time in their lives.

---

GLOBAL CONDITIONS:

• Average temperatures stabilizing
• Weather volatility decreasing
• Oceanic recovery underway
• International trade routes reopening

---

ARCHIVAL NOTE:

Multiple wartime governments collapsed
during the recovery years,
replaced by international reconstruction coalitions.

---

[RECOVERED PUBLIC BROADCAST]

ANCHOR:

"For an entire generation,
humanity believed the future had ended."

"Today,
farmers are planting again."

---

[RECOVERED STREET FOOTAGE]

Former ration distribution centers
were converted into open-air markets.

Several cities held public festivals
celebrating the first successful harvests.

---

[RECOVERED TASK FORCE MEMO]

Projected extinction probability:

0.02%

---

[FINAL ENTRY]

Sunrise is no longer feared.

[END FILE]
</pre>

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

function toggleRedacted(){

    const content =
    document.getElementById('redactedContent');

    content.classList.toggle('show-file');
    content.classList.add('show-redacted');
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