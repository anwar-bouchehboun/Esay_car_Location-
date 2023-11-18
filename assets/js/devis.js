const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const dateElement = document.querySelector("#date-now");
dateElement.textContent = formattedDate;

const totalprice = JSON.parse(localStorage.getItem('totalprice'));
const panelItems = JSON.parse(localStorage.getItem("PanelData"));



const prix = document.getElementById('prix');
const TTCelement = document.getElementById('prix-ttc');
const carname = document.getElementById('marque');
const devis = document.querySelector('.Arry-tab');

function deviss() {
    for (let index = 0; index < panelItems.length; index++) {
        const devishtml =  `<div class="d-flex" style="margin-left:25%;">
        <div class="d-flex flex-column">
            <h2 id="name-car">${panelItems[index].name}</h2>
    
            <h3 id="marque">${panelItems[index].category}</h3>
            <h3 id="option"></h3>
        </div>
        <div>
            <h2 id="prix" style="margin-left:20rem"> ${panelItems[index].price}</h2>
        </div>
    </div>
    `;
        devis.insertAdjacentHTML('afterbegin', devishtml);
    }
}

deviss();

var TTC = totalprice * 1.2;
TTCelement.textContent =  TTC;


 var btn=document.getElementById("btn");
function printPage(){
     btn.style.display="none";
        window.print();



}







