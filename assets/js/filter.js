const filterItems = document.querySelectorAll(".filter-btn");
let carsData = JSON.parse(localStorage.getItem("carsData"));


 function renderGridCard(value, key) {
   const card = document.createElement("div");
   card.className = "card col-md-3 col-lg-4 w-100";
   card.innerHTML = `
     <div class="col-md-3 col-lg-4 w-100">
       <img class="card-img-top" src="${value.image}" alt="Image">
       <div class="card-body">
         <h5 class="card-title">${value.name}</h5>
         <p class="card-text">${value.description}</p>
         <div class="details d-flex align-items-center justify-content-between">
           <p class="card-price bold m-0 m-0">${value.price} DH</p>
           <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
         </div>
       </div>
     </div>
   `;
   return card;
 }

 function createGridItemHTML() {
   gridCards.forEach(function(gridCard) {
     gridCard.innerHTML = ""; 
   });


   const firstSixCars = carsdata.slice(0, 6);
   gridCards.forEach(function(gridCard) {
     firstSixCars.forEach(function(value, key) {
       const card = renderGridCard(value, key);
       gridCard.appendChild(card);
     });
   });
 }

 function renderListCard(value, key) {
   const card = document.createElement("div");
   card.className = "carda flex-column d-flex gap-4 px-5";
   card.innerHTML = `
     <div class="d-flex gap-3 shadow bg-white rounded">
       <img src="${value.image}" class="w-25 card-img-top" alt="Image" style="border-radius: 7%; height: 12rem;">
       <div class="card-body">
         <h5 class="card-title">${value.name}</h5>
         <p class="card-text w-50">${value.description}</p>
         <div class="details d-flex align-items-center justify-content-between">
           <p class="card-price bold m-0">${value.price} DH</p>
           <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
         </div>
       </div>
     </div>
   `;
   return card;
 }

 function renderCards(data, view = "grid") {
   cardsContainer.innerHTML = "";
   data.forEach((value, key) => {
     const card = view === "grid" ? renderGridCard(value, key) : renderListCard(value, key);
     cardsContainer.appendChild(card);
   });
 }

 gridButtons.addEventListener("click", function() {
   renderGridCard(carsData, "grid");
 });

 listButtons.addEventListener("click", function() {
   renderCards(carsData, "list");
 });














//// pagination

 var card = document.getElementById('cardsParent');
 
 function pagination(pageNumber) {
  card.innerHTML = ""; // Clear the card container before rendering new cards

  for (let index = 0; index < carsData.length; index++) {
    if (carsData[index].page == pageNumber) {
      const car = carsData[index];
      const cardElement = document.createElement('div');
      cardElement.className = "card col-md-3 col-lg-4 w-100";
      cardElement.innerHTML = `
        <div class="col-md-3 col-lg-4 w-100">
          <img class="card-img-top" src="${car.image}" alt="Image">
          <div class="card-body">
            <h5 class="card-title">${car.name}</h5>
            <p class="card-text">${car.description}</p>
            <div class="details d-flex align-items-center justify-content-between">
              <p class="card-price bold m-0 m-0">${car.price} DH</p>
              <button id="openModalButton" onclick="addtocart(${index})" class="button listPopup">Rent Now</button>
            </div>
          </div>
        </div>
      `;
      card.appendChild(cardElement);
      console.log(carsData[index]); // Log the data with the specified page number
    }
  }
}



function filtrage (category) {
  card.innerHTML = "";
  
  for (let index = 0 ; index < carsData.length; index++) {
    if (carsData[index].category == category) {
      console.log(carsData[index]);
       const carcar = carsData[index];
       const cardElement = document.createElement('div');
       cardElement.className = "card col-md-3 col-lg-4 w-100";
       cardElement.innerHTML = `
         <div class="col-md-3 col-lg-4 w-100">
           <img class="card-img-top" src="${carcar.image}" alt="Image">
           <div class="card-body">
             <h5 class="card-title">${carcar.name}</h5>
             <p class="card-text">${carcar.description}</p>
             <div class="details d-flex align-items-center justify-content-between">
               <p class="card-price bold m-0 m-0">${carcar.price} DH</p>
               <button id="openModalButton" onclick="addtocart(${index})" class="button listPopup">Rent Now</button>
             </div>
           </div>
         </div>
       `;
       card.appendChild(cardElement);
    }
  }
}







