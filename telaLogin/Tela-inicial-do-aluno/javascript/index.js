import { dadosDoAluno} from "../javascript/Functions-tela-de-login.js";

const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const senhaInput = document.getElementById("senhaInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailInput.value === "aluno@123uol.com" && senhaInput.value === "1234") {
    
    window.location.href = "area-do-aluno.html";
  
  } else if (emailInput.value === "" || senhaInput.value === "") {
  
    alert("Complete todos os campos!");
  
  } else if (emailInput.value !== "aluno@123uol.com" || senhaInput.value !== "1234") {
  
    alert("Email ou senha incorretos.");
  }

  dadosDoAluno();
  
  
  
});



