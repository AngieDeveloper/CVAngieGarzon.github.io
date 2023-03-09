let numHTML = document.getElementById("num-html");
let numCSS = document.getElementById("num-css");
let numBOOTSTRAP = document.getElementById("num-bootstrap");
let numJAVA = document.getElementById("num-java");
let numJS = document.getElementById("num-js");
let numGITHUB = document.getElementById("num-github");


let counter = 0;

let counterLimitHTML = 80;
let counterLimitCSS = 70;
let counterLimitBOOTSTRAP = 50;
let counterLimitJAVA = 40;
let counterLimitJS = 50;
let counterLimitGITHUB = 70;


const loadProgressBar = (element, counter, counterLimit) => {
    setInterval(() => {
        if (counter === counterLimit) {
            clearInterval();
        } else {
            counter += 1;
            element.innerHTML = counter + "%";
        }
    }, 25);
};

loadProgressBar(numHTML, counter, counterLimitHTML);
loadProgressBar(numCSS, counter, counterLimitCSS);
loadProgressBar(numBOOTSTRAP, counter, counterLimitBOOTSTRAP);
loadProgressBar(numJAVA, counter, counterLimitJAVA);
loadProgressBar(numJS, counter, counterLimitJS);
loadProgressBar(numGITHUB, counter, counterLimitGITHUB);
