const envelope = document.getElementById("envelope");
const abrirBtn = document.getElementById("abrirBtn");

const inicio = document.getElementById("inicio");
const cartaPagina = document.getElementById("cartaPagina");

let aberto = false;


function abrirCarta() {

    if (aberto) return;

    aberto = true;

    // Abre o envelope
    envelope.classList.add("aberto");

    abrirBtn.textContent = "Abrindo...";

    // Espera a animação do envelope
    setTimeout(() => {

        inicio.classList.add("saindo");

        cartaPagina.classList.add("visivel");

        // Leva a página suavemente para o início
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);
}


// Clique no envelope
envelope.addEventListener("click", abrirCarta);


// Clique no botão
abrirBtn.addEventListener("click", abrirCarta);