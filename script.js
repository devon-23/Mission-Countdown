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
<pre>
[BEGIN NASA/JPL LIVE TRANSCRIPT]

REPORTER: We are just minutes away from the flyby through the Petrova line near Venus. So, what can you tell us about the ArcLight probe? What do we expect to find?

DR. BROWNE: The image we see will be coming from the onboard microscope.

The screen changed to a black-and-white microscope image.

Tiny dark particles drifted across the display.

REPORTER: What are we looking at, Doctor?

DR. BROWNE: This is from the internal microscope, It's magnified ten thousand times.

The room fell silent. One of the particles moved.

DR. BROWNE: Oh my God...

REPORTER: Are those particles moving?

The black dots twisted and shifted through the sample.

DR. BROWNE: Oh—oh my god. Sorry, I have to go now.

"What the fuck?!" shouted someone in the background.

[END TRANSCRIPT]
</pre>
`
},
taskforce: {

    title: 'UNITED NATIONS BRIEFING — PETROVA TASK FORCE',

    body: `
<pre>
[GLOBAL NEWS ARTICLE — ARCHIVE COPY]

UNITED NATIONS ANNOUNCES CREATION
OF PETROVA TASK FORCE

GENEVA —

Following emergency negotiations between all major world powers,
the United Nations today announced the formation of the Petrova
Task Force, an international scientific authority tasked with
investigating the rapidly intensifying Petrova Line phenomenon.

The organization will operate independently of all national governments.

In an unprecedented move, member nations have unanimously agreed
to grant Task Force Director Eva Stratt extraordinary legal authority
across international borders.

Under the agreement:

• The Petrova Task Force may requisition facilities,
materials, transportation infrastructure, and personnel
from any participating nation.

• Task Force personnel will possess unrestricted diplomatic access.

• Director Eva Stratt will receive full legal immunity
in all cooperating countries.

• National agencies are required to comply immediately
with Task Force directives.

The announcement has generated both widespread praise
and deep concern among legal scholars and political leaders.

Supporters argue that the accelerating decline in solar luminosity
constitutes an existential threat requiring unprecedented coordination.

Critics warn the agreement effectively places a single unelected official
above international law.

When questioned about the decision during a press conference,
UN representatives responded:

"Humanity no longer has the luxury of bureaucracy."

WHO IS EVA STRATT?

Eva Stratt previously served as a senior administrator
within the European Space Agency and later coordinated
multiple multinational emergency engineering initiatives.

Colleagues describe her as:

"brilliant"
"ruthlessly efficient"
and
"absolutely terrifying."

Sources within the UN describe Stratt as the only candidate
capable of coordinating a scientific response at the required scale.

FIRST OBJECTIVE: PROJECT ARCLIGHT

The Petrova Task Force's immediate priority is the launch
of a deep-space probe into the Petrova Line itself.

The mission, now designated Project ArcLight,
will attempt to collect physical samples from the anomaly
near Venusian orbit.

Construction has reportedly already begun.

[END ARTICLE]
</pre>
`
},
astrophage: {

    title: 'GLOBAL SCIENCE REPORT — WHAT IS ASTROPHAGE?',

    body: `
<pre>
[GLOBAL SCIENCE REPORT]

WHAT IS ASTROPHAGE?

When samples from the ArcLight probe first touched down in laboratories around the world, scientists
have attempted to understand the mysterious particles
collected by the ArcLight probe near Venusian orbit.

Now, humanity finally has an answer.

The particles are alive.

The discovery was confirmed simultaneously across
multiple international research facilities after
high-magnification microscopy revealed autonomous movement
within the samples.

Researchers initially struggled to examine the organism.

Standard imaging techniques produced almost no results.

X-rays, gamma rays, microwaves, and visible-spectrum analysis
all failed to penetrate the organism’s outer structure.

"It was like looking at a perfect black box,"
one researcher stated.

The breakthrough occurred after controlled sample death
allowed scientists to finally examine the internal structure.

The organism was revealed to be a microscopic alien cell.

"It’s a cell! It’s a tiny alien cell!"
reported biologist Dr. Ryland Grace during
the now-famous laboratory recording.

The moment has since been referred to by media outlets as:

"The Day Humanity Discovered Alien Life."

Further analysis revealed several shocking characteristics:

• The organism emits infrared radiation
at precisely the Petrova frequency.

• It stores massive quantities of energy
with near-perfect efficiency.

• It expels infrared photons for propulsion.

• Its internal composition consists almost entirely of water.

Researchers now believe Astrophage absorbs energy directly
from stars before transporting that energy elsewhere.

This mechanism is believed to explain the ongoing
decline in solar luminosity.

The term "Astrophage" was first proposed by Dr. Ryland Grace,
a molecular biologist working under the Petrova Task Force.

The name combines:

"astro" — relating to stars

and

"phage" — an organism that consumes.

The designation was formally adopted by the international
scientific community less than six hours later.

Global scientific mobilization has since accelerated dramatically.

More than 300 laboratories in 21 countries are now
actively researching Astrophage biology, reproduction,
propulsion, and energy storage.

Scientists believe the organism may possess the highest
energy density ever observed in nature.

Some researchers have already suggested Astrophage
could revolutionize space travel—if humanity survives
long enough to understand it.

[END REPORT]
</pre>
`
},
projections: {

    title: 'GLOBAL MODELING REPORT — SUN DIMMING IMPACT PROJECTIONS',

    body: `
<pre>
[CLASSIFIED EARTH SYSTEMS REPORT]

SUBJECT: Solar Luminosity Decline — Human Impact Forecast

The international climate and biosphere modeling consortium
has finalized updated projections based on current solar output trends.

KEY FINDINGS:

Solar luminosity is decreasing in a non-natural pattern
correlated with the Petrova Line energy extraction rate.

This decline is accelerating.

All standard solar cycle models have been invalidated.

---

CIVILIZATION IMPACT TIMELINE:

YEAR 1–5:
• Minor reductions in crop yield efficiency
• Increased regional climate instability
• Early economic disruption in agricultural export nations

YEAR 5–10:
• Major crop system failures across multiple continents
• Mass migration from equatorial regions begins
• Food supply chains destabilize globally
• First geopolitical conflicts over arable land reported

YEAR 10–15:
• Global famine conditions in multiple regions
• Breakdown of international trade stability
• Energy infrastructure stress due to climate compensation
• Large-scale governmental restructuring begins

YEAR 15–19:
• Predictive models converge on:
  50% global population mortality

CAUSES OF MORTALITY:
• Famine
• Resource conflict
• Infrastructure collapse
• Climate-induced displacement
• Disease proliferation due to system failure

---

When asked to summarize the findings,
lead researcher Dr. Harold Kline stated:

"We're not talking about ecosystem disruption anymore.
We're talking about civilization termination."

---

50% global mortality: 19-year horizon.

No known mitigation strategy currently exists.

[END REPORT]
</pre>
`
},
sahara: {

    title: 'PROJECT SAHARA — TASK FORCE ETHICS & INFRASTRUCTURE REPORT',

    body: `
<pre>
[CLASSIFIED PETROVA TASK FORCE REPORT]

PROJECT: SAHARA DESERT SOLAR & ASTROPHAGE HARVESTING NETWORK

OVERVIEW:

The Sahara Desert spans approximately nine trillion square meters
of some of the most consistently high solar irradiance on Earth.

The Petrova Task Force has proposed a large-scale infrastructure
deployment across designated regions of the Sahara Desert
to support both energy production and Astrophage cultivation.

---

PRIMARY OBJECTIVES:

1. Construct high-density solar collection fields ("black panels")
   optimized for maximum Astrophage energy absorption.

2. Establish controlled Astrophage breeding zones
   under monitored thermal conditions.

3. Utilize harvested energy to stabilize global power grids.

---

WHY THE SAHARA?

As one Task Force engineer summarized:

"The Sahara Desert is nine trillion square meters."

Africa contains vast regions of land with extreme solar exposure
and low population density.

Combined with emerging partnerships with African governments,
this makes the region ideal for large-scale deployment.

---

ETHICAL & POLITICAL REVIEW:

The proposal required multinational negotiation.

Many African states initially raised concerns regarding:
• Land sovereignty
• Environmental disruption
• Resource ownership

However, agreements were reached under the condition that:

AFTER INITIAL ASTROPHAGE ENERGY DEPLOYMENT PHASE:

• Infrastructure will remain in place
• Energy output will be shared with host nations
• Long-term ownership of solar power systems will transfer
  to local governments

Task Force conclusion:

"This is not extraction. This is infrastructure acceleration."

---

FIELD INTERVIEW EXCERPT — EVA STRATT:

"The Sahara Desert is just sitting there,
waiting to give everything it needs.

All we had to do was build the damn power plants."

---

ENGINEERING NOTE — REDELL (PROJECT LEAD):

"Africa needs power. We need energy production at scale.

Every government involved wanted a share of the project.
Yes, there were negotiations. Yes, there were costs.

But the alternative is collapse."

---

ACCIDENT REPORT EXCERPT:

During initial pilot testing of a 1 km² solar array:

• Mirror array misaligned during system initialization
• Focused energy beam struck central water turbine tower
• System overload occurred

Resulting damage: classified

System subsequently redesigned for full automation control locks.

---

FINAL ASSESSMENT:

If successfully deployed, the Sahara network
will represent the largest energy harvesting system
ever constructed on Earth.

It is considered essential for:

• Astrophage containment research
• Global energy stabilization
• Civilization continuity

[END REPORT]
</pre>
`
},
hailmary: {

    title: 'PROJECT HAIL MARY — MISSION BRIEFING',

    body: `
<pre>
[GLOBAL SPACE COALITION EMERGENCY BRIEFING]

PROJECT: HAIL MARY

MISSION OBJECTIVE:
Investigate the Tau Ceti system to determine why its
stellar luminosity has not been affected by the chain
of stellar dimming observed throughout known space.

---

BACKGROUND:

Observational analysis confirms a cascading chain of stellar
energy depletion across multiple star systems:

Our Sun → infected system
WISE 0855–0714 → infected system
Sirius → infected system
Epsilon Eridani → infected system

Beyond this point, the trail goes cold.

No further propagation source has been identified.

---

MISSION DESIGN:

Due to urgency constraints, a rapid-response interstellar
expedition has been approved.

Crew composition (final selection pending):

• Science Officer — astrophage research specialist
• Engineer — spacecraft systems & survival
• Pilot — interstellar navigation & mission execution

Crew will operate in extended cryogenic / suspended mission mode
where applicable and transmit data via probe relay systems.

---

COMMUNICATION PLAN:

Due to extreme distance limitations:

• Direct real-time communication is impossible
• Data will be transmitted via autonomous probe relays
• Full dataset return is expected only upon mission completion

---

TIMELINE CONSTRAINT:

• Tau Ceti distance: ~13 light years
• One-way travel time: 13 years
• Full mission cycle (travel + data return): minimum 26 years

---

THE PROBLEM:

At current projections:

Half of all human life is expected to be lost within
a significantly shorter timeframe than mission completion.

ESTIMATED 50% GLOBAL MORTALITY WINDOW:
~19 YEARS

---

STRATEGIC QUESTION PRESENTED TO GLOBAL COUNCIL:

What do we do when the only hope of understanding the threat
will arrive AFTER half of humanity may already be gone?

---

COUNCIL RESPONSE:

"No alternative mission paths exist with higher probability
of success within required physics constraints."

"Tau Ceti is the only known system outside the propagation chain
that may contain answers."

---

FINAL STATEMENT FROM TASK FORCE DIRECTOR EVA STRATT:

"We don’t get to choose between good options.

We choose between extinction with curiosity…
or extinction with ignorance."

---

MISSION STATUS:
APPROVED

PROJECT HAIL MARY INITIATED

[END BRIEFING]
</pre>
`
},
antarctica: {

    title: 'TASK FORCE REPORT — ANTARCTIC METHANE RELEASE INITIATIVE',

    body: `
<pre>
[PETROVA TASK FORCE — CLIMATE INTERVENTION REPORT]

PROJECT STATUS:
AUTHORIZED

OBJECTIVE:
Delay catastrophic global cooling long enough
to complete Project Hail Mary launch operations.

---

BACKGROUND:

As solar luminosity decline accelerated,
global climate models converged on a critical conclusion:

Human civilization would likely destabilize
before Project Hail Mary could launch.

Without intervention,
crop collapse and global infrastructure failure
would begin too early to sustain mission construction.

Additional time was required.

---

PROPOSED SOLUTION:

Controlled destruction of Antarctic ice shelves.

The operation involves naval deployment of synchronized
high-yield explosives along targeted Antarctic fracture zones.

Result:

• Massive ice shelf collapse
• Rapid methane release from trapped under-ice deposits
• Temporary greenhouse warming effect

---

TASK FORCE ASSESSMENT:

"Methane is now our friend."

Unlike carbon dioxide, atmospheric methane naturally
degrades over approximately ten years.

This allows climate warming to be adjusted in cycles
through controlled Antarctic detonations.

If Project Hail Mary succeeds,
methane levels may eventually normalize naturally.

---

PROJECTED CONSEQUENCES:

EXPECTED BENEFITS:
• Delay severe global cooling
• Extend agricultural viability
• Preserve launch infrastructure stability
• Buy additional years for mission readiness

EXPECTED COSTS:
• Massive ecosystem disruption
• Violent weather instability
• Accelerated sea level rise
• Ocean temperature collapse
• Biome destruction

---

FIELD NOTES:

"The shelf will cleave at the explosion line
and slowly work its way into the sea and melt."

"Sea levels will rise approximately one centimeter
within the first month."

"The ocean temperature drop alone could trigger
secondary ecological disasters."

---

GLOBAL REACTION:

The operation has become one of the most controversial
actions in human history.

Supporters describe the intervention as:

"Necessary survival engineering."

Critics describe it as:

"The deliberate destruction of Earth's climate system."

---

NAVAL OPERATION LOG:

The Chinese Navy coordinated the primary exclusion zone
around western Antarctica.

All Antarctic research facilities were evacuated.

At the time of detonation,
the exclusion zone represented the largest restricted
maritime region ever established.

---

FINAL TASK FORCE CONCLUSION:

"No —
this does not solve the problem.

It only buys time.

But time is the only resource humanity has left."

[END REPORT]
</pre>
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
`
},
disaster: {

    title: 'KRAKÓW INCIDENT REPORT — FINAL CLASSIFICATION RELEASE',

    body: `
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

---

CAUSE OF INCIDENT:

Initial theories included:
• Astrophage containment breach
• Deliberate sabotage
• Foreign-state interference

Task Force investigation later confirmed:

NO EVIDENCE OF FOUL PLAY

The explosion resulted from a catastrophic dosage error
during live Astrophage energy interaction testing.

Quartermaster distribution logs confirmed that:

1 milligram of Astrophage material
was mistakenly supplied instead of
1 nanogram.

The resulting energy release exceeded
all laboratory containment tolerances.

---

MISSION IMPACT:

The deaths of DuBois and Shapiro created
an immediate crisis for Project Hail Mary.

The launch window remained only three days away.

Failure to launch within the current orbital window
would delay the mission by several months.

Task Force projections indicated humanity
did not possess those months.

---

EMERGENCY RESPONSE:

Petrova Task Force leadership immediately initiated
review of tertiary and reserve science personnel.

Discussion regarding mission cancellation
was formally rejected less than two hours
after the incident.

---

FINAL TASK FORCE DIRECTIVE:

"Hail Mary launches in three days.

Find another scientist."

[END REPORT]
</pre>
`
},grace: {

    title: 'PROJECT HAIL MARY — PERSONNEL FILE: DR. RYLAND GRACE',

    body: `
<div class="crew-archive">

    <div class="crew-card">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/images-1.jpeg" alt="Photo of Dr. Ryland Grace">
        </div>

        <div class="crew-info">

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

Due to limited astronaut training, Dr. Grace was worried that he'd
panic during the launch so he elected to be unconscious for it.

Coma induced early to maximize Dr. Grace's safety.

Once aboard the Hail Mary, Yáo and Ilyukhina will secure Dr. Grace
into the medical bed and start the coma procedure.

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

    <div class="redacted-file">

        <button class="redacted-button"
        onclick="toggleRedacted()">

            [REDACTED — UNSEAL FILE]

        </button>

        <div class="redacted-content" id="redactedContent">

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
<div class="crew-archive">

    <div class="crew-gallery">

    <!-- YAO -->

    <div class="crew-member">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/yao.jpg" alt="Photo of Yao Li-Jie">
        </div>

        <div class="crew-label">

            <h3>COMMANDER YAO LI-JIE</h3>

            <p>PILOT / MISSION COMMANDER</p>

        </div>

    </div>

    <!-- ILYUKHINA -->

    <div class="crew-member">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/ily.jpg" alt="Photo of Olesya Ilyukhina">
        </div>

        <div class="crew-label">

            <h3>OLESYA ILYUKHINA</h3>

            <p>ENGINEER / SYSTEMS SPECIALIST</p>

        </div>

    </div>

    <!-- GRACE -->

    <div class="crew-member">

        <div class="crew-photo">
            <img class="crew-photo" src="assets/images-1.jpeg" alt="Photo of Dr. Ryland Grace">
        </div>

        <div class="crew-label">

            <h3>DR. RYLAND GRACE</h3>

            <p>PRIMARY SCIENCE OFFICER</p>

        </div>

    </div>

</div>

<pre>
[GLOBAL LIVE BROADCAST ARCHIVE]

PROJECT HAIL MARY
LAUNCH DAY

LOCATION:
Low Earth Orbit

MISSION STATUS:
ACTIVE

---

T–02:15:00

Global broadcasts begin transmission.

An estimated 4.2 billion viewers tune into launch coverage.

Emergency generators power broadcast infrastructure
across multiple blackout regions.

---

T–01:42:11

News Anchor:
"Today humanity sends its first interstellar mission
toward Tau Ceti.

For many watching around the world,
this launch represents humanity's final hope."

---

T–01:03:55

Visual confirmation received from orbital cameras.

Hail Mary visible above Earth limb.

Commentators note visible astrophage containment glow
along propulsion chambers.

---

T–00:48:20

Mission Control:
"Commander Yao, comms check."

Yao:
"Reading you clear."

Mission Control:
"Specialist Ilyukhina?"

Ilyukhina:
"Still here."

Laughter recorded in control room.

---

T–00:39:08

News Anchor:
"Primary Science Officer Dr. Ryland Grace
entered medically induced coma procedures
earlier today."

"Grace became internationally recognized for his work
on Astrophage biology after joining the Petrova Task Force."

"He volunteered for the mission following the deaths
of the original science officers just days ago."

"Many now consider him one of the bravest individuals
in human history."

---

T–00:18:44

Mission Control:
"Hail Mary, you are go for final rotation release."

Yao:
"Copy. Go for release."

---

T–00:11:03

Worldwide church bells reported ringing
across several major cities.

Large public gatherings observed in:
• New York
• Paris
• Lagos
• Tokyo
• São Paulo

---

T–00:05:00

Mission Control begins final countdown.

---

T–00:04:59

"Five minutes."

---

T–00:03:12

News Anchor:
"No human beings have ever traveled this far from Earth.

If successful,
Project Hail Mary may save our species.

If it fails..."

Broadcast pauses.

---

T–00:01:00

Mission Control:
"One minute to astrophage ignition."

---

T–00:00:30

Yao:
"See you in Tau Ceti."

---

T–00:00:10

Mission Control:
"Ten."

"Nine."

"Eight."

---

T–00:00:03

Ilyukhina:
"Oh God..."

---

T–00:00:00

ASTROPHAGE IGNITION CONFIRMED

HAIL MARY DEPARTURE BURN INITIATED

---

T+00:00:14

Orbital cameras temporarily blinded
by propulsion luminosity.

---

T+00:01:52

Mission velocity exceeds all previous
human spacecraft records.

---

T+00:04:10

Mission Control confirms stable trajectory.

Destination:
Tau Ceti

Estimated arrival:
13 years

---

T+00:06:31

News Anchor:

"Humanity has left for the stars."

"May God help us all."

[END TRANSCRIPT]
</pre>

</div>
`
},
stratt: {

    title: 'UNITED NATIONS SPECIAL TRIBUNAL — EVA STRATT',

    body: `
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

TRIBUNAL: Do you deny responsibility for the destruction
of Antarctic ice shelves?

STRATT: No.

TRIBUNAL: Do you deny authorizing illegal military operations
within sovereign territory?

STRATT: No.

TRIBUNAL: Do you deny coercing scientists and governments
under threat of imprisonment or execution?

STRATT: No.

---

TRIBUNAL: Then by your own testimony,
you knowingly committed crimes
on a global scale.

STRATT: Yes.

---

TRIBUNAL: Do you feel remorse for these actions?

STRATT: No.

---

TRIBUNAL: Why?

STRATT: Because the ship launched.

---

[Silence recorded for approximately 12 seconds.]

---

STRATT: You think people obey laws
when extinction is coming? You think nations cooperate because they are good?"
They cooperate because they are afraid.

---

TRIBUNAL: Millions suffered because of your decisions.

STRATT: Billions would have died without them.

---

TRIBUNAL: You believe your actions were justified?

STRATT: I believe humanity is still alive.

---

STRATT: Someone had to take responsibility
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

---

[END TRANSCRIPT]
</pre>
`
},
wars: {

    title: 'GLOBAL RESOURCE COLLAPSE REPORT',

    body: `
<pre>
[UNITED EARTH RESOURCE OBSERVATION NETWORK]

DATE:
T+1.5 Years After Hail Mary Launch

STATUS:
CRITICAL

</pre>

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

<pre>

---

SUMMARY:

Global agricultural production continued collapsing
following ongoing solar luminosity reduction
and severe atmospheric instability.

Multiple staple crops experienced catastrophic failures.

Marine ecosystems deteriorated rapidly due to:
• Cooling oceans
• Methane disruption effects
• Food chain collapse

Combined humanitarian pressures resulted in
the largest migration crisis in recorded history.

---

ESTIMATED CONDITIONS:

• 1.8 billion displaced persons
• 41% decline in global crop output
• 63 nations under emergency rationing
• Major freshwater conflicts ongoing
• Global fuel distribution severely disrupted

---

ACTIVE CONFLICT REGIONS:

• Northern India
• Siberian agricultural zones
• Canadian grain territories
• Mediterranean desalination networks
• South American freshwater reserves

---

MILITARY ANALYSIS:

Several governments formally collapsed
during the first eighteen months following launch.

Remaining major powers increasingly redirected
military resources toward domestic stabilization.

International cooperation continued deteriorating.

---

PUBLIC SENTIMENT:

Project Hail Mary increasingly viewed
as humanity's only remaining long-term survival strategy.

Religious movements centered around the mission
emerged across multiple continents.

Several extremist organizations declared
the mission either humanity's salvation
or humanity's final betrayal.

---

MISSION STATUS:

HAIL MARY remains en route to Tau Ceti.

No communication expected for over a decade.

[END REPORT]
</pre>
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

    content.classList.toggle('show-redacted');
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