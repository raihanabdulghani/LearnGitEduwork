let prompt = require("prompt-sync")({sigint:true});

let x = Number(prompt("masukkan nilai x: "));
let y = Number(prompt("masukkan nilai y: "));

if (x > y){
    console.log("Horee saya bisa!");
} else{
    console.log("yaah salah!");
};