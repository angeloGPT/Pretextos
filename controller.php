<?php

header("Content-Type: application/json; charset=UTF-8");

require_once "../model/GerarModel.php";

$assunto = $_GET["assunto"] ?? "";
$parte = $_GET["parte"] ?? "todas";

$model = new GerarModel();

if ($assunto === "") {
    echo json_encode([
        "gerador" => "Gerador de Pretextos",
        "modo" => "predefinido",
        "assunto" => "",
        "frase" => "Digite um assunto para gerar um pretexto."
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

if ($parte === "causa") {

    $resultado = $model->gerarCausa();

} elseif ($parte === "consequencia") {

    $resultado = $model->gerarConsequencia();

} elseif ($parte === "solucao") {

    $resultado = $model->gerarSolucao();

} else {

    $resultado = $model->gerarFrase($assunto);

}

echo json_encode([
    "gerador" => "Gerador de Pretextos",
    "modo" => "predefinido",
    "assunto" => $assunto,
    "resultado" => $resultado
], JSON_UNESCAPED_UNICODE);