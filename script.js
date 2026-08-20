const assunto = document.getElementById("assunto");
const btnGerar = document.getElementById("btnGerar");
const resultado = document.getElementById("resultado");

btnGerar.addEventListener("click", async () => {

    const valor = assunto.value.trim();

    if (valor === "") {
        resultado.textContent = "Digite um assunto primeiro!";
        return;
    }

    try {

        const resposta = await fetch(
            `api/controller/controller.php?assunto=${encodeURIComponent(valor)}`
        );

        const dados = await resposta.json();

        resultado.textContent = dados.frase;

    } catch (erro) {

        resultado.textContent = "Erro ao conectar com a API.";

        console.error(erro);
    }
});