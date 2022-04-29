// const nome = prompt("Qual o seu nome?")
 const modelo = document.querySelector(".modelo .selecionado")
 const gola = document.querySelector(".gola .selecionado") 
 const tecido = document.querySelector(".tecido .selecionado")

function escolherModelo (elemento) {
   
    if (modelo === null) {
        elemento.classList.toggle("selecionado")       
    } else {
        if (elemento.classList.contains("selecionado")) {
        elemento.classList.remove("selecionado")
        }
    }

}

function escolherGola (elemento) {  
  
    if (gola === null) {
        elemento.classList.toggle("selecionado")       
    } else {
        if (elemento.classList.contains("selecionado")) {
        elemento.classList.remove("selecionado")
        }
    }
}

function escolherTecido (elemento) {
   
    if (tecido === null) {
        elemento.classList.toggle("selecionado")       
    } else {
        if (elemento.classList.contains("selecionado")) {
        elemento.classList.remove("selecionado")
        }
    }  
}


