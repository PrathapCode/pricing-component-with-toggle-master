const toggle = document.getElementById("checkbox");

const basicCost = document.querySelector(" .basic-cost");
const professionalCost = document.querySelector(".professional-cost");
const masterCost = document.querySelector(".master-cost");

toggle.addEventListener("change" , function() {

    if(basicCost.innerHTML === "$19.99") {
        basicCost.innerHTML = "$199.99";
    } else {
        basicCost.innerHTML = "$19.99";
    }

    if(professionalCost.innerHTML === "$24.99") {
        professionalCost.innerHTML = "$249.99";
    } else {
        professionalCost.innerHTML = "$24.99";
    }

    if(masterCost.innerHTML === "$39.99") {
        masterCost.innerHTML = "$399.99";
    } else {
        masterCost.innerHTML = "$39.99";
    }

})