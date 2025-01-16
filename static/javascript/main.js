import { info } from "/internal/static/javascript/logger.js";
import { callJuliaFunction } from "/internal/static/javascript/interface.js";
// import { updatePlot } from "./3dPlot.js"
// import { renderTreemap } from "./depsPlot.js";

info("Hello from main.js");

function calculateVeryHardStuff() {
    const input = document.getElementById("buttonInput");
    const number = parseInt(input.value);

    callJuliaFunction("get_cube", {
        args: [number],
        response_callback: (
            r => {
                const outputP = document.getElementById("buttonOutput");
                outputP.innerHTML = `${Math.round(r * 100)}%...`;
            }
        )
    })
        .then(
            r => {
                const outputP = document.getElementById("buttonOutput");
                outputP.innerHTML = `Cube of ${number} is ${r}`;
            }
        )
}

document.getElementById("calculateButton").addEventListener("click", calculateVeryHardStuff);


// const treemapData = JSON.parse(await callJuliaFunction("get_package_deps"))
// renderTreemap("treemapplot", treemapData)



async function updateGaussPlot() {
    const meanX = Number(document.getElementById("meanX").value);
    const meanY = Number(document.getElementById("meanY").value);
    const sigmaX = Number(document.getElementById("sigmaX").value);
    const sigmaY = Number(document.getElementById("sigmaY").value);
    const rho = 0;
    const samples = Number(document.getElementById("samples").value);

    const sampleData = await callJuliaFunction("gaussian2D", { args: [meanX, meanY, sigmaX, sigmaY, rho, samples] });
    await updatePlot(meanX, meanY, sigmaX, sigmaY, rho, sampleData);
}

// document.getElementById("gaussian2dUpdate").addEventListener("click", updateGaussPlot);




