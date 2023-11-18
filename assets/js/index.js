const gridCards = document.querySelectorAll(".cards");
const carsdata = JSON.parse(localStorage.getItem("carsData"));
var listButtons = document.querySelector(".list-toggle");
var gridButtons = document.querySelector(".grid-toggle");
var cardsContainer = document.querySelector("#cardsParent");







 createGridItemHTML();
 
//////////////////////////////////////////////////////////

function createGridItemHTML() {
  // Clear existing grid cards
  gridCards.forEach(function(gridCard) {
    gridCard.innerHTML = ""; // Clear the content of each grid card
  });

  // Iterate over the first 6 cars in the carsdata array
  const firstSixCars = carsdata.slice(0, 6);

  // Iterate through gridCards and append first 6 cars to each grid card
  gridCards.forEach(function(gridCard) {
    firstSixCars.forEach((value, key) => {
      // Create a new card element
      const card = document.createElement("div");
      card.className = "card col-md-3 col-lg-4 w-100";
      card.innerHTML = `<div class="col-md-3 col-lg-4 w-100">
        <img class="card-img-top" src="${value.image}" alt="Image">
        <div class="card-body">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text">${value.description}</p>
          <div class="details d-flex align-items-center justify-content-between">
            <p class="card-price bold m-0">${value.price} DH</p>
            <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
          </div>
        </div>
      </div>`;


      // Append the card to the current gridCard element
      gridCard.appendChild(card);

      
    });
  });
}


  gridButtons.addEventListener("click", function () {
     cardsContainer.innerHTML = ""
     createGridItemHTML();
   });

var cart = document.querySelector('#openCartButton');
var list = document.querySelector('.list');
// CLOSE PANEL
var closelist = document.querySelector('#X');
var listcart = document.querySelector(".list-content");
var total = document.querySelector('.pricecounter');
var count = document.querySelector('#panelCounter');
let listcard = [];

cart.addEventListener("click", function() {
  list.classList.add("active");
});

closelist.addEventListener("click",function (){
  list.classList.remove("active");
});

function addtocart(key) {
  const carToAdd = carsdata[key];
  listcard.push(carToAdd);
  localStorage.setItem("PanelData", JSON.stringify(listcard));
  reloadcard();
}


let totalprice = 0;
var countpanier = 0;







function add(value, key) {
  if (listcard.length !== 0) {
    let listItem = createListItem(value, key);
    listcart.appendChild(listItem);
  }
}



function createListItem(item, key) {
  let newdiv = document.createElement('li');
  newdiv.innerHTML = `
    <div class="incart">
    <img src="${item.image}">

    <div class="intwocart">
      <div><div class="name">${item.name}</div>
      <div class="pricecart">${item.price.toLocaleString()}</div></div>
      <div class="botons d-grid gap-2 d-md-block">
      <div class="">


      <button class="btn boton-rent-custom customize" data-key="${key}"><a href = "#" style="text-decoration:none;">CUSTOMIZE</a></button>
      <button class="mt-1 btn boton-rent-custom  delete-car" data-key="${key}">REMOVE</button>
      
      </div>
      
    </div>
    </div>
    
    </div>
  `;
  return newdiv;
}


// customize button

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("customize")) {
    const deleteBtns = Array.from(document.querySelectorAll(".customize"));
    const btnIndex = deleteBtns.indexOf(evt.target);
    customize(btnIndex);
    window.open("./customize.html", "_blank");
  }
});


// deleting button

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("delete-car")) {
    const deleteBtns = Array.from(document.querySelectorAll(".delete-car"));
    const btnIndex = deleteBtns.indexOf(evt.target);

    delelement(btnIndex);
  }
});

// customize

function customize(key) {
  const storedCartItems = JSON.parse(localStorage.getItem("PanelData"));
  const customizeitem = storedCartItems[key]; 

  localStorage.setItem("customizeitem", JSON.stringify(customizeitem));
}


// deleting items from cart

function delelement(i) {
  const storedPanelItems = JSON.parse(localStorage.getItem("PanelData"));
  const listContent = document.querySelector(".list-content");
  const listContentChlidren = document.querySelectorAll(".list-content li");

  storedPanelItems.splice(i, 1);
 listcard = storedPanelItems
  localStorage.setItem("PanelData", JSON.stringify(listcard));
  console.log(listcard)
  console.log(storedPanelItems)
  console.log(totalprice)
  listContent.removeChild(listContentChlidren[i]);
  // location.reload();
  reloadcard(); 
}





function loadFromLocalStorage() {
  const storedCartItems = JSON.parse(localStorage.getItem("PanelData"));
  if (storedCartItems) {
    listcard = storedCartItems;
    reloadcard();

  }
}

loadFromLocalStorage();








function  reloadcard() {
  listcart.innerHTML = "";
  totalprice = 0;
  countpanier = 0;

  listcard.forEach((value, key) => {
    console.log("looping")
    totalprice += value.price;
    countpanier++;
    add(value, key);
  });
console.log(totalprice)
  total.innerHTML = totalprice.toLocaleString() + " DH";
  count.innerHTML = countpanier;
  localStorage.setItem("totalprice", JSON.stringify(totalprice));
  
}


// Function to filter cars based on a category gridd









