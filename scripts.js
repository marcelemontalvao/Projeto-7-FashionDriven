let nome = prompt("Qual o seu nome?")  
let pedidos = []
let modelos = document.querySelector(".modelo .selecionado") !== null
let golas = document.querySelector(".gola .selecionado") !== null
let tecidos = document.querySelector(".tecido .selecionado") !== null
let input = document.querySelector(".url-imagem > input")
const botao = document.querySelector("button")

obterPedidos ();

function obterPedidos () {
    axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts").then(
        function (response) {
            pedidos = response.data;
            renderizarPedidos ()
    })
}

function renderizarPedidos () {
    const divFooter = document.querySelector("footer > .centralizado") 
    divFooter.innerHTML = ''
    for (let i = 0; i < pedidos.length ; i++) {
        divFooter.innerHTML += `
        <div class="flex" onclick="comprarPedidoSalvo('${pedidos[i].model}', '${pedidos[i].neck}', '${pedidos[i].material}', '${pedidos[i].image}', '${nome}', '${pedidos[i].author}')"> 
            <img src = ${pedidos[i].image} >
            <p class="owner"><span>Criador:</span> ${pedidos[i].owner}</p>
        </div>
        `
    }
}

function escolherModelo (elemento) {
    const modelo = document.querySelector(".modelo .selecionado")

    if (modelo !== null) {
        modelo.classList.remove("selecionado")
    }
        elemento.classList.add("selecionado")
}

function escolherGola (elemento) {  
const gola = document.querySelector(".gola .selecionado")
   if (gola !== null) {
        gola.classList.remove("selecionado")       
   } 
       elemento.classList.add("selecionado")  
}

function escolherTecido (elemento) {
  const tecido = document.querySelector(".tecido .selecionado")
     if (tecido !== null) {
        tecido.classList.remove("selecionado")       
   } 
       elemento.classList.add("selecionado")
}

function habilitarBotao () {
    if (document.querySelectorAll(".selecionado").length === 3 && input.value !== ""){
        botao.classList.remove("cinza")
        botao.classList.add ("azul", "pointer")
    } 
}   

setInterval(habilitarBotao, 2000)

function confirmarPedido() {
   let objeto = { 
        model: document.querySelectorAll(".selecionado")[0].classList[1],
        neck: document.querySelectorAll(".selecionado")[1].classList[1],
        material: document.querySelectorAll(".selecionado")[2].classList[1],
        image: input.value,
        owner: nome,
        author: nome
    }

    let promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", objeto)
    promise.then(function()
    {alert("Deu certo")
    obterPedidos()
    }).catch(function(){
    alert("Ops, não conseguimos processar sua encomenda")})
}

function comprarPedidoSalvo(model, neck ,material, image, owner, author) {
    if (confirm("Confirma o pedido?")) {
    let objeto = {
        model, neck, material, image, owner, author 
    } 
    let promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", objeto)
    promise.then(function (){
        alert("Foi")
    }).catch(function(response) {  
      console.log(response.response.data)  
      alert("Ops, não conseguimos processar sua encomenda")    
    })
    }
    obterPedidos()
}