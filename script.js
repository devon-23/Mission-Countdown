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

