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

