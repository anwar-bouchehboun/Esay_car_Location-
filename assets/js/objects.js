var carsdata = (JSON.parse(localStorage.getItem("carsData")));
// global variables
var cards = document.querySelectorAll(".card");
var carName = document.querySelectorAll(".card-title");
var carDesc = document.querySelectorAll(".card-text");
var carPrice = document.querySelectorAll(".card-price");
var carImage = document.querySelectorAll(".card-img-top");
var btns = document.querySelectorAll("#openModalButton");
const modals = document.querySelector("#carModal");

var customizeArray = [];
var customeId = 0;

// FUNCTIONS
function fill() {
  for (let i = 0; i < cards.length; i++) {
    carName[i].textContent = carsdata[i].name;
    carDesc[i].textContent = carsdata[i].description;
    carPrice[i].textContent = carsdata[i].price;
    carImage[i].src = carsdata[i].image;
  }
}
function btnModal(index) {
  modals.innerHTML = ''
  const html = `<div class="modal-dialog d-flex justify-content-center" role="document">
     <div class="modal-content d-flex justify-content-center align-items-center mx-0 w-auto pt-4 pb-4">
     <img class="w-75 h-50 px-4 pt-4" src="${carsdata[index].image}" alt="Car Image">
       <div class="modal-body d-flex flex-column px-4">
          <div class="d-flex justify-content-between align-items-center">
         <h2 class="card-title fw-bold fs-4">${carsdata[index].name}</h2>
         <p class="card-price">${carsdata[index].price}</p>
         </div>
         <p class="card-text fw-bold">${carsdata[index].description}</p>
       </div>
       <div class="pt-4 d-flex justify-content-between gap-4 px-2">
         <button type="button" class="btn fw-medium" data-bs-dismiss="modal">Close</button>
         <a href="./devis.html" type="button" class="btn btn1">Rent Now</a>
         <a  type="button" href="./customize.html" class="btn customize fw-medium">Customize</a>
       </div>
     </div>
   </div>`

  modals.insertAdjacentHTML("afterbegin", html)
  var myModal = new bootstrap.Modal(document.getElementById('carModal'));
  myModal.show();
  const customizeBtn = document.querySelector(".customize");


  customizeBtn.addEventListener("click", function () {
    var newCustomize = {
      id: customeId,
      name: carsdata[index].name,
      price: carsdata[index].price,
      description: carsdata[index].description,
      image: carsdata[index].image,
      category: carsdata[index].category
    };
    customizeArray.push(newCustomize);
    localStorage.setItem("carToCustomize", JSON.stringify(customizeArray));
    customeId++;
  });
};

function pagination_function(j) {
  for (let i = 0; i < cards.length; i++) {
    carName[i].textContent = carsdata[j].name;
    carDesc[i].textContent = carsdata[j].description;
    carPrice[i].textContent = carsdata[j].price;
    carImage[i].src = carsdata[j].image;
    j++;
  }
}

function PAGES() {
  one.addEventListener("click", function () {
    let j = 0;
    pagination_function(j);

  })
  two.addEventListener("click", function () {
    let j = 10;
    pagination_function(j);
  });
  three.addEventListener("click", function () {
    let j = 19;
    pagination_function(j);
  });
}
// pagination part
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");



fill();
PAGES();


var listButtons = document.querySelectorAll('.list-toggle');
var gridbuttons = document.querySelectorAll('.grid-toggle');
var listPopup = document.querySelectorAll('.listPopup');



var gridhtml = '';
document.querySelectorAll(".cards").forEach(function (card) {
  gridhtml += card.innerHTML;
});


gridbuttons.forEach(function (gridbutton) {
  gridbutton.addEventListener("click", function () {
    var gridCards = document.querySelectorAll(".cards");
    gridCards.forEach(function (card) {
      card.innerHTML = gridhtml;
    });
  });
});

listButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var gridCards = document.querySelectorAll(".cards");
    gridCards.forEach(function (card) {
      card.innerHTML = "";
      let j = 19;
      for (let i = 0; i < cards.length; i++) {
        card.insertAdjacentHTML('beforeend', `<div class="carda flex-column d-flex gap-4 px-5">
          <div class="d-flex gap-3 shadow  bg-white rounded">
            <img src="${carsdata[i].image}" class="w-25 card-img-top" alt="Image" style="border-radius: 7%; height: 12rem;">
            <div class="card-body">
              <h5 class="card-title">${carsdata[i].name}</h5>
              <p class="card-text w-50">${carsdata[i].description}</p>
              <div class="details d-flex align-items-center justify-content-between">
                <p class="card-price bold m-0 m-0">${carsdata[i].price}</p>
                <button id="openModalButton" onclick="btnModal(${i})" class="button listPopup">Rent Now</button>
              </div>
            </div>
          </div>
</div>`)
        j++;
      }
    });
  });
});
