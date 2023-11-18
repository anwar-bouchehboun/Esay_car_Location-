var carsdata = (JSON.parse(localStorage.getItem("carsData")));

var btns = document.querySelectorAll("#openModalButton");


btns.forEach(btn => {
    btn.addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('carModal'));
        myModal.show();

        
    });

});

