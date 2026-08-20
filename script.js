const assunto = document.getElementById("assunto");
const btnGerar = document.getElementById("btnGerar");

const causa = document.getElementById("causa");
const consequencia = document.getElementById("consequencia");
const solucao = document.getElementById("solucao");
const pretexto = document.getElementById("pretexto");


function atualizarPretexto() {

    const valor = assunto.value.trim();

    if (valor === "") {
        return;
    }

    pretexto.textContent =
        `Sobre "${valor}": ${causa.textContent}, ${consequencia.textContent}; ${solucao.textContent}.`;
}


async function gerarParte(parte) {

    const valor = assunto.value.trim();

    if (valor === "") {
        alert("Digite um assunto primeiro!");
        return;
    }

    try {

        const resposta = await fetch(
            `api/controller/controller.php?assunto=${encodeURIComponent(valor)}&parte=${parte}`
        );

        const dados = await resposta.json();


        if (parte === "causa") {
            causa.textContent = dados.resultado;
        }

        if (parte === "consequencia") {
            consequencia.textContent = dados.resultado;
        }

        if (parte === "solucao") {
            solucao.textContent = dados.resultado;
        }


        atualizarPretexto();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");
    }
}


btnGerar.addEventListener("click", async () => {

    const valor = assunto.value.trim();

    if (valor === "") {
        alert("Digite um assunto primeiro!");
        return;
    }

    try {

        const resposta = await fetch(
            `api/controller/controller.php?assunto=${encodeURIComponent(valor)}`
        );

        const dados = await resposta.json();

        causa.textContent = dados.resultado.causa;
        consequencia.textContent = dados.resultado.consequencia;
        solucao.textContent = dados.resultado.solucao;

        atualizarPretexto();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");
    }
});


document.querySelectorAll(".btnNovamente").forEach(botao => {

    botao.addEventListener("click", () => {

        const parte = botao.dataset.parte;

        gerarParte(parte);
    });

});