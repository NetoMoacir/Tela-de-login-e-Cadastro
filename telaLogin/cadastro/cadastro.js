import { Armazenamento, testes } from "./functions-cadastro.js";

const form = document.getElementById("form");


form.addEventListener("submit", function (e) {
  e.preventDefault();

 
  testes ();
  Armazenamento();
});




