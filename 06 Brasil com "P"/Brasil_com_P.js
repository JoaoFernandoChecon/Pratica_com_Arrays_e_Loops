function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui

}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});