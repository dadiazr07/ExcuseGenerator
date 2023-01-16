/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Funcion para hacer click y llamar a la funcion GenExOnH2
  document.getElementById("GenBtn").addEventListener("click", GenExOnH2);
  console.log("Hello Rigo from the console!");
};

// Funcion para generar excusa generica
function generateExcuse() {
  let who = ["The dog", "My grandma", "A turtle", "My bird", "My coworker"];
  let what = ["eat", "pissed", "crushed", "broked", "destroyed"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} just ${what[whatIndex]} my homework ${when[whenIndex]}...`;
}

// Funcion para modificar contenido del h2 con la excusa generada
function GenExOnH2() {
  document.getElementById("ExcuseGenerated").innerHTML = generateExcuse();
}

// https://github.com/dadiazr07/ExcuseGenerator
