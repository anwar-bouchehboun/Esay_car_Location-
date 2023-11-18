const storedCartItems = JSON.parse(localStorage.getItem("customizeitem"));
const PanelData = JSON.parse(localStorage.getItem("PanelData"));



var nameInfo = document.querySelector(".card-title-personalisation");
var carCategory = document.querySelector(".car-categorey");
var priceInfo = document.querySelector(".pricePersonalisation");
var imgInfo = document.querySelectorAll(".main-img img");
var smallimage = document.querySelector(".smallimage");

const marque = document.querySelector("#marque");

// customize
nameInfo.textContent = storedCartItems.name;
carCategory.textContent = storedCartItems.category;
priceInfo.textContent = storedCartItems.price + " DH";
// imgInfo.src = storedCartItems.image2;
// smallimage.src = storedCartItems.image2;

imgInfo.forEach(element => {
    element.src = storedCartItems.image2;
});

// Assuming PanelData is an array of objects representing items to display



var Steering = document.getElementById('Steering');
var audio = document.getElementById('audio');
var Station = document.getElementById('Station');
var saveButton = document.getElementById('saveButton');

var Audiosystem = document.getElementById('Audiosystem');
var manuelorelectric = document.getElementById('manuelorelectric');
var Stationsystem = document.getElementById('Stationsystem');


function handlesoptions() {

    let selectedSteering = Steering.value;
    let selectedaudio = audio.value;
    let selectedstation = Station.value;

    localStorage.setItem('selecterSteering', selectedSteering);
    localStorage.setItem('selectedaudio', selectedaudio);
    localStorage.setItem('selectedstation', selectedstation);

    manuelorelectric.textContent = localStorage.getItem('selecterSteering', selectedSteering);
    Audiosystem.textContent = localStorage.getItem('selectedaudio', selectedaudio);
    Stationsystem.textContent = localStorage.getItem('selectedstation', selectedstation);
}


















