
const nameValue = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordValue = document.getElementById("password");
const confirmPasswordValue = document.getElementById("confirmPassword");

export function Armazenamento() {
    localStorage.setItem("name", nameValue.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordValue.value);
    localStorage.setItem("passwordConfirm", confirmPasswordValue.value);
  }

  export function testes(){
    if (
      nameValue.value === "" ||
      passwordValue.value === "" ||
      confirmPasswordValue.value === "" ||
      emailInput.value === ""
    ) {
      alert("Preencha todos os campos!");
    } else if (
      nameValue.value === "" ||
      passwordValue.value === "" ||
      confirmPasswordValue.value === "" ||
      emailInput.value === ""
    ) {
      alert("Preencha todos os campos!");
    } else if (
      nameValue.value === "Moacir" &&
      passwordValue.value === confirmPasswordValue.value &&
      emailInput.value === "cadastro@bol.com"
    ) {
      alert("Cadastro realizado com sucesso!");
    }
  
  
  
  }