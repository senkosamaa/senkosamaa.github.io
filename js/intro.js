let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{T_}", ms: 100 },
    { t: "{TH_}", ms: 100 },
    { t: "{THA_}", ms: 100 },
    { t: "{THAT_}", ms: 100 },
    { t: "{THATS_}", ms: 100 },
    { t: "{THATSE_}", ms: 100 },
    { t: "{THATSEN_}", ms: 100 },
    { t: "{THATSENK_}", ms: 100 },
    { t: "{THATSENKO_}", ms: 100 },
    { t: "{THATSENKO }", ms: 200 },
    { t: "{THATSENKO_}", ms: 200 },
    { t: "{THATSENKO }", ms: 200 },
    { t: "{THATSENKO_}", ms: 200 },
    { t: "{THATSENKO}", ms: 200 },
    { t: "{THATSENKO}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();