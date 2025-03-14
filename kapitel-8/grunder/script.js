// var dag = "fredag";

// alert(dag);
// console.log("idag är det " + dag);


// var är du född
// var stad = prompt("var är du född");
// console.log("Du är född i " + stad)


// //  vi gör en enkel captcha
// var gissning = prompt("Är det ok att fuska på ett prov");
// if (gissning == "nej") {
//     alert("Du är en Människa");
// } else {
//     alert("Du är en Robot");
// }

// spamcheck med två slumpade tal
// var slumptal1 = Math.round(Math.random() * 100);
// var slumptal2 = Math.round(Math.random() * 100);
// var facit = slumptal1 + slumptal2;

// var gissning2 = prompt("vad blir " + slumptal1 + " + " + slumptal2 + "?")
// if (gissning2 ==  facit) {
//     document.writeln("<h1>Du är en människa! </h1>");
// } else {
//     document.writeln("<h1>Du är en robot! </h1>");
// }


// document.writeln("<h1>slumptal1 = " + slumptal1 + "</h1>");


// var tal1 = prompt("ange ett tal");
// var tal2 = prompt("ange ett till tal");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("Summan är " + summa)


var brutto = prompt("Din inkomst för skatt");
var skatt = prompt("Din skatt i %");
var inkomst = Number(brutto) * (100 - Number(skatt)) / 100;
document.writeln("<h1>Din inkomst är " + inkomst + "</h1>")