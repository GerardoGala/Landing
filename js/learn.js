/* ============================================================
   LANDING — LEARN
   San Juan Academy

   Loads scenario information from:
       data/scenarios.json

   Loads SVG artwork from:
       scenarios/

   The SVG is inserted into:
       #scenarioContainer
   ============================================================ */


let scenarios = [];

let currentScenario = 0;


/* ============================================================
   DOM ELEMENTS
============================================================ */

const scenarioTitle =
    document.getElementById("scenarioTitle");

const scenarioCounter =
    document.getElementById("scenarioCounter");

const scenarioContainer =
    document.getElementById("scenarioContainer");

const scenarioText =
    document.getElementById("scenarioText");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");


/* ============================================================
   LOAD SCENARIOS
============================================================ */

async function loadScenarios() {

    const response =
        await fetch("data/scenarios.json");

    if (!response.ok) {

        throw new Error(
            `Could not load scenarios.json: ${response.status}`
        );

    }

    scenarios = await response.json();

    showScenario(0);
}


/* ============================================================
   LOAD SVG
============================================================ */

async function loadScenarioSVG(filename) {

    const response =
        await fetch(`scenarios/${filename}`);

    if (!response.ok) {

        throw new Error(
            `Could not load SVG: ${filename}`
        );

    }

    const svgText =
        await response.text();

    scenarioContainer.innerHTML =
        svgText;
}


/* ============================================================
   SHOW SCENARIO
============================================================ */

async function showScenario(index) {

    currentScenario = index;

    const scenario =
        scenarios[currentScenario];


    /* Update text */

    scenarioTitle.textContent =
        scenario.title;

    scenarioCounter.textContent =
        `Scenario ${currentScenario + 1} of ${scenarios.length}`;

    scenarioText.textContent =
        scenario.description;


    /* Load SVG */

    await loadScenarioSVG(
        scenario.svg
    );


    /* Update buttons */

    updateNavigationButtons();
}


/* ============================================================
   NAVIGATION BUTTONS
============================================================ */

function updateNavigationButtons() {

    previousButton.disabled =
        currentScenario === 0;

    nextButton.disabled =
        currentScenario === scenarios.length - 1;
}


/* ============================================================
   PREVIOUS
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
   NEXT
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

loadScenarios()
    .catch(function (error) {

        console.error(
            "Learn initialization failed:",
            error
        );

    });
