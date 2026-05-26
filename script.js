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
<pre>
TO: Astronomy Curiosities
astrocurious@scilists.org

FROM:
Irina Petrova, PhD
ipetrova@gaoran.ru

SUBJECT:
The Thin Red Line


Hello, professionals.

My name is Doctor Irina Petrova and I work at the
Pulkovo Observatory in St. Petersburg, Russia.

I am writing to you to ask for help.

For the past two years, I have been working on a theory related to
infrared emissions from nebulae. As a result, I have made detailed
observations in a few specific IR bands of light.

And I have found something odd—not in any nebula,
but here in our own solar system.

There is a very faint, but detectable line in the solar
system that emits infrared light at the 25.984 micron wavelength.

It seems to be solely that wavelength with no variance.

Attached are Excel spreadsheets with my data.
I have also provided a few renders of the data as a 3-D model.

You will see on the model that the line is a lopsided arc
that rises straight up from the sun’s North Pole
for 37 million kilometers.

From there, it angles sharply down and away from the sun,
toward Venus.

After the arc’s apex, the cloud widens like a funnel.
At Venus, the arc’s cross-section is as wide as the planet itself.

The infrared glow is very faint.

I was only able to detect it at all because I was using
extremely sensitive detection equipment while searching
for IR emissions from nebulae.

But to be certain, I called in a favor from the
Atacama observatory in Chile—in my opinion the best IR
observatory in the world.

They confirmed my findings.

There are many reasons one might see IR light
in interplanetary space.

It could be space dust or other particles reflecting sunlight.

Or some molecular compound could be absorbing energy
and re-emitting it in the infrared band.

That would even explain why it’s all the same wavelength.

The shape of the arc is of particular interest.

My first guess was that it is a collection of particles
moving along magnetic field lines.

But Venus has no magnetic field to speak of.

No magnetosphere, no ionosphere, nothing.

What forces would make particles arc toward it?
And why would they glow?

Any suggestions or theories would be welcome.

— Dr. Irina Petrova
</pre>
`
    },

    address: {

        title: 'GLOBAL ADDRESS — EMERGENCY TRANSCRIPT',

        body: `
<pre>
[BEGIN TRANSCRIPT]

UNITED STATES PRESIDENTIAL EMERGENCY ADDRESS
RECORDED 8:42 PM EST

"My fellow citizens—

Tonight, the international scientific community has confirmed
the existence of a previously unknown interplanetary phenomenon,
now designated as the Petrova Line.

This infrared structure extends from the sun toward Venus
and has now been independently verified by observatories
across the globe.

At this time, we wish to emphasize that there is no immediate
danger to the public.

However—

Data collected by the Japanese Aerospace Exploration Agency,
using the Amaterasu solar probe, has revealed something deeply concerning.

The sun's energy output appears to be decreasing.

At present, the decline measures approximately 0.01 percent below
expected solar luminosity levels.

That number may sound insignificant.

But scientists monitoring the anomaly have observed
that the rate of decline is accelerating.

Simultaneously, the Petrova Line itself is increasing
in infrared intensity at the exact same rate.

Researchers do not yet understand the mechanism behind this phenomenon.

But current working theories suggest that whatever forms
the Petrova Line may somehow be extracting energy from the sun itself.

Governments worldwide are coordinating scientific resources
effective immediately.

An international task force is now being assembled.

Further updates will follow as more information becomes available.

Thank you.

And may God watch over us all."

[END TRANSCRIPT]
</pre>
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
[[RECOVERED SHIP TELEMETRY]

MARY[03:14:02.118]: MANUAL MODE ACTIVATED

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

MARY[03:14:21.775]: CENTRIFUGE MODE ACTIVATE
MARY[03:14:21.898]: CONFIRM?

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
}
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