/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/





// declareren
var vachtBruinElement = document.querySelector("#vacht_bruin");
var vachtZwartElement = document.querySelector("#vacht_zwart");
var vachtWitElement = document.querySelector("#vacht_wit");
var vachtEenhoornElement = document.querySelector("#vacht_regenboog");
var knopMerrieElement = document.querySelector("#knop_merrie");
var knopRuinElement = document.querySelector("#knop_ruin");
var knopHengstElement = document.querySelector("#knop_hengst");
var paardElement = document.querySelector("#paard");
var rennen = document.querySelector('.rennen');
var clickElement1 = document.querySelector('#clickgeluid1');
var clickElement2 = document.querySelector('#clickgeluid2');
var stopKnop = document.querySelector("#stopMuziek");
var randomBtn = document.querySelector("#randomBtn");

var namenLijst = ["Queen", "U2", "Annike", "Touchewood", "Braveheart", "Zozo", "Joshua", "Jim", "Arnold", "Max", "Nino", "Anna", "Zilla Kami", "Harold", "Doritos", "Vliegende Pony", "Ernst", "Bobby", "Jing", "Jang", "Fons"];
var naamHolder = document.querySelector("#naamHolder");



var paardGeslacht = 'merrie';
var paardVacht = 'wit';

function toonPaard() {
    paardElement.src = "_img/" + paardVacht + "_" + paardGeslacht + ".png";
}


function paardGeluid() {
    clickElement1.play();
    clickElement1.volume = 0.5;
}

function paardBruin() {
    paardVacht = 'bruin';
    toonPaard();

}

function paardWit() {
    paardVacht = 'wit';
    toonPaard();
}

function paardZwart() {
    paardVacht = 'zwart';
    toonPaard();
}

function eenhoorn() {
    paardVacht = 'regenboog';
    toonPaard();
    clickElement2.play();
    clickElement2.volume = 0.3;
}


function stopHerrieKnop() {
    stopKnop.classList.add("tonen");
}


function stopEenhoorn() {
    clickElement2.pause();
}

function paardMerrie() {
    paardGeslacht = 'merrie';
    toonPaard();
}


function paardRuin() {
    paardGeslacht = 'ruin';
    toonPaard();
}

function paardHengst() {
    paardGeslacht = 'hengst';
    toonPaard();
}

function randomNaam() {
    event.preventDefault();
    var random = Math.floor(Math.random() * namenLijst.length);
    var randomNaam = namenLijst[random];
    naamHolder.textContent = randomNaam;
}



//eventListeners

vachtBruinElement.addEventListener('click', paardBruin);
vachtWitElement.addEventListener('click', paardWit);
vachtZwartElement.addEventListener('click', paardZwart);
vachtEenhoornElement.addEventListener('click', eenhoorn);
vachtEenhoornElement.addEventListener('click', stopHerrieKnop);
knopMerrieElement.addEventListener('click', paardMerrie);
knopRuinElement.addEventListener('click', paardRuin);
knopHengstElement.addEventListener('click', paardHengst);
randomBtn.addEventListener('click', randomNaam);
stopKnop.addEventListener('click', stopEenhoorn);
paardElement.addEventListener('mouseover', paardGeluid);

rennen.classList.add('party');
