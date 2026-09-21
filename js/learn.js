/* ============================================================
   LANDING — LEARN
   San Juan Academy

   Seven launching and landing scenarios.

   Viewpoint:
   The instructor is standing on the beach,
   looking toward the student.

   SVG elements:
   - Wind
   - Water
   - Sailor
   - ILCA
   - Sail
   - Boom
   ============================================================ */


const scenarios = [

    /* SCENARIO 1 */
    {
        title: "Onshore Wind / Calm Water",
        description:
            "The wind is blowing toward the beach. " +
            "With calm water, the boat is easier to control. " +
            "Keep yourself between the wind and the sailboat, " +
            "with the wind behind you.",
        wind: "down",
        waves: "calm",
        sailorY: 300,
        boatY: 430
    },

    /* SCENARIO 2 */
    {
        title: "Onshore Wind / Strong Waves",
        description:
            "The wind is blowing toward the beach and strong waves " +
            "are moving toward the boat. A wave can suddenly push " +
            "the ILCA toward you. Stay in front of the bow and " +
            "keep yourself out of the boat's path.",
        wind: "down",
        waves: "strong",
        sailorY: 300,
        boatY: 430
    },

    /* SCENARIO 3 */
    {
        title: "Offshore Wind / Calm Water",
        description:
            "The wind is blowing away from the beach. With calm water, " +
            "the boat tends to move away from shore. Maintain control " +
            "of the boat while keeping the wind behind you.",
        wind: "up",
        waves: "calm",
        sailorY: 300,
        boatY: 430
    },

    /* SCENARIO 4 */
    {
        title: "Offshore Wind / Strong Waves",
        description:
            "The wind is blowing away from the beach while strong waves " +
            "are present. Wind and waves can move the boat in different " +
            "ways. Stay aware of where the boat can move next.",
        wind: "up",
        waves: "strong",
        sailorY: 300,
        boatY: 430
    },

    /* SCENARIO 5 */
    {
        title: "Cross-shore Wind / Calm Water",
        description:
            "The wind is blowing across the beach. With calm water, " +
            "the boat tends to move along the beach rather than " +
            "straight toward or away from shore.",
        wind: "left",
        waves: "calm",
        sailorY: 300,
        boatY: 430
    },

    /* SCENARIO 6 */
    {
        title: "Cross-shore Wind / Strong Waves",
        description:
            "The wind is blowing across the beach while strong waves " +
            "are present. The boat can be pushed sideways by the wind " +
            "while the waves move it toward or away from the beach.",
        wind: "left",
        waves: "strong",
        sailorY: 300,
        boatY: 430
    },

    /* SCENARIO 7 */
    {
        title: "Know When NOT to Launch/Land",
        description:
            "Conditions can become unsuitable for launching or landing. " +
            "Sometimes the safest decision is to wait.",
        wind: "danger",
        waves: "danger",
        sailorY: 300,
        boatY: 430
    }
];


/* CURRENT SCENARIO */
let currentScenario = 0;


/* DOM ELEMENTS */
const scenarioTitle = document.getElementById("scenarioTitle");
const scenarioCounter = document.getElementById("scenarioCounter");
const scenarioText = document.getElementById("scenarioText");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const windArrow =
    document.getElementById("windArrow");

const windArrowHead =
    document.getElementById("windArrowHead");

const waterWave1 =
    document.getElementById("waterWave1");

const waterWave2 =
    document.getElementById("waterWave2");

const sailor =
    document.getElementById("sailor");

const ilca =
    document.getElementById("ilca");

const dangerText =
    document.getElementById("dangerText");


/* ============================================================
   RESET ANIMATIONS
============================================================ */

function resetAnimations() {

    anime.remove([
        windArrow,
        windArrowHead,
        waterWave1,
        waterWave2,
        sailor,
        ilca,
        dangerText
    ]);

    anime.set(
        [
            windArrow,
            windArrowHead,
            waterWave1,
            waterWave2,
            sailor,
            ilca
        ],
        {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            opacity: 1
        }
    );

    /* DANGER must start hidden */
    anime.set(
        dangerText,
        {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            opacity: 0
        }
    );
}


/* ============================================================
   WIND DIRECTION
============================================================ */

function setWindDirection(direction) {

    switch (direction) {

        case "down":

            anime.set(
                [windArrow, windArrowHead],
                {
                    rotate: 0,
                    transformOrigin: "300px 135px"
                }
            );

            break;


        case "up":

            anime.set(
                [windArrow, windArrowHead],
                {
                    rotate: 180,
                    transformOrigin: "300px 135px"
                }
            );

            break;


        case "left":

            anime.set(
                [windArrow, windArrowHead],
                {
                    rotate: 90,
                    transformOrigin: "300px 135px"
                }
            );

            break;


        case "danger":

            anime.set(
                [windArrow, windArrowHead],
                {
                    opacity: 0
                }
            );

            break;
    }
}


/* ============================================================
   WATER CONDITION
============================================================ */

function setWaterCondition(condition) {

    if (condition === "calm") {

        anime.set(
            [waterWave1, waterWave2],
            {
                scaleY: 1,
                opacity: 0.7
            }
        );
    }


    if (condition === "strong") {

        anime.set(
            [waterWave1, waterWave2],
            {
                scaleY: 2,
                opacity: 1
            }
        );
    }


    if (condition === "danger") {

        anime.set(
            [waterWave1, waterWave2],
            {
                scaleY: 3,
                opacity: 1
            }
        );
    }
}


/* ============================================================
   CALM WATER
============================================================ */

function animateCalmWater() {

    anime({
        targets: [waterWave1, waterWave2],
        translateX: 20,
        duration: 3000,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
    });
}


/* ============================================================
   STRONG WATER
============================================================ */

function animateStrongWater() {

    anime({
        targets: waterWave1,
        translateX: 45,
        duration: 1200,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
    });


    anime({
        targets: waterWave2,
        translateX: -35,
        duration: 900,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
    });
}


/* ============================================================
   DANGER ANIMATION
============================================================ */

function showDanger() {

    anime({
        targets: dangerText,
        opacity: [
            {
                value: 1,
                duration: 500
            },
            {
                value: 0.3,
                duration: 500
            }
        ],
        duration: 1000,
        easing: "easeInOutSine",
        loop: true
    });
}


/* ============================================================
   NAVIGATION BUTTON STATES
============================================================ */

function updateNavigationButtons() {

    previousButton.disabled =
        currentScenario === 0;

    nextButton.disabled =
        currentScenario === scenarios.length - 1;
}


/* ============================================================
   SHOW SCENARIO
============================================================ */

function showScenario(index) {

    currentScenario = index;

    const scenario =
        scenarios[currentScenario];


    /* Stop all previous animations */
    resetAnimations();


    /* Update text */
    scenarioTitle.textContent =
        scenario.title;

    scenarioCounter.textContent =
        `Scenario ${currentScenario + 1} of ${scenarios.length}`;

    scenarioText.textContent =
        scenario.description;


    /* Update visual conditions */
    setWindDirection(scenario.wind);

    setWaterCondition(scenario.waves);


    /* Scenario 7 */
    if (scenario.wind === "danger") {

        anime.set(
            [sailor, ilca],
            {
                opacity: 0.25
            }
        );

        showDanger();

    }

    /* Scenarios 1–6 */
    else {

        anime.set(
            sailor,
            {
                translateY:
                    scenario.sailorY - 300
            }
        );


        anime.set(
            ilca,
            {
                translateY:
                    scenario.boatY - 430
            }
        );


        if (scenario.waves === "calm") {

            animateCalmWater();

        }

        else if (scenario.waves === "strong") {

            animateStrongWater();

        }
    }


    /* Update Previous / Next buttons */
    updateNavigationButtons();
}


/* ============================================================
   PREVIOUS BUTTON
============================================================ */

previousButton.addEventListener(
    "click",
    function () {

        if (currentScenario > 0) {

            showScenario(
                currentScenario - 1
            );
        }
    }
);


/* ============================================================
   NEXT BUTTON
============================================================ */

nextButton.addEventListener(
    "click",
    function () {

        if (
            currentScenario <
            scenarios.length - 1
        ) {

            showScenario(
                currentScenario + 1
            );
        }
    }
);


/* ============================================================
   INITIALIZE
============================================================ */

showScenario(0);
