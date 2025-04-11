// Välj textrotorna
let rutaTal1 = document.querySelector("#tal1");
let rutaTal2 = document.querySelector("#tal2");
let rutaSvar = document.querySelector("#svar");

function plus() {
    // beräkningen
    rutaSvar.value = Number(rutaTal1.value) + Number(rutaTal2.value);

    // easter egg
    if (rutaSvar.value == "666") {
        document.body.style = "visibility: hidden";
    }
}
function minus() {
    // beräkningen
    rutaSvar.value = Number(rutaTal1.value) - Number(rutaTal2.value);
}
function gånger() {
    // beräkningen
    rutaSvar.value = Number(rutaTal1.value) * Number(rutaTal2.value);
}
function delat() {
    // beräkningen
    rutaSvar.value = Number(rutaTal1.value) / Number(rutaTal2.value);
}