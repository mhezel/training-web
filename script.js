
let buttonStatus = false;

let textColor = function() {

    let card = document.getElementById("color");

    if (buttonStatus === false) {
    card.style.color = "red";

    buttonStatus = true;

    } else if (buttonStatus === true){
    card.style.color = "black";

    buttonStatus = false;   
        
    }
}


let infoText = function() {

    let displayInfo = document.getElementById("mhez");
    let displayEdad = document.getElementById("edad");

    alert(displayEdad);
}


let addTableRow = function(){

    let table = document.getElementById("myTable");

    let row = table.insertRow(2);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

cell1.innerHTML = "Mark";
cell2.innerHTML = "markmating@gmail.com";
cell3.innerHTML = "25";

}