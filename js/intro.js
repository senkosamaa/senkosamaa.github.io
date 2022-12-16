let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{S_}", ms: 100 },
    { t: "{SE_}", ms: 100 },
    { t: "{SEN_}", ms: 100 },
    { t: "{SENK_}", ms: 100 },
    { t: "{SENKO_}", ms: 100 },
    { t: "{SENKOS_}", ms: 100 },
    { t: "{SENKOSA_}", ms: 100 },
    { t: "{SENKOSAM_}", ms: 100 },
    { t: "{SENKOSAMAA_}", ms: 100 },
    { t: "{SENKOSAMAA }", ms: 200 },
    { t: "{SENKOSAMAA_}", ms: 200 },
    { t: "{SENKOSAMAA }", ms: 200 },
    { t: "{SENKOSAMAA_}", ms: 200 },
    { t: "{SENKOSAMAA}", ms: 200 },
    { t: "{SENKOSAMAA}", ms: 200 }
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