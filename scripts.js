// const nome = prompt("Qual o seu nome?")
function escolherModelo (elemento) {
const modelo = document.querySelector(".modelo .selecionado")
   if (modelo === null) {
       elemento.classList.toggle("selecionado")       
   } else {
       if (elemento.classList.contains("selecionado")) {
       elemento.classList.remove("selecionado")
       }
   }
}

function escolherGola (elemento) {  
const gola = document.querySelector(".gola .selecionado")
   if (gola === null) {
       elemento.classList.toggle("selecionado")       
   } else {
       if (elemento.classList.contains("selecionado")) {
       elemento.classList.remove("selecionado")
       }
   }
}

function escolherTecido (elemento) {
  const tecido = document.querySelector(".tecido .selecionado")
   if (tecido === null) {
       elemento.classList.toggle("selecionado")       
   } else {
       if (elemento.classList.contains("selecionado")) {
       elemento.classList.remove("selecionado")
       }
   }  
}