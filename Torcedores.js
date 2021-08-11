function solucao(dados) {
    if (!dados.vacinada || !dados.negativoPCR) {
        console.log("BARRADA");
    } else if (dados.gritando && !dados.mascara) {
        console.log ("BAGUNCANDO TUDO");
    } else if (dados.gritando) {
        console.log ("RETIRADA POR ESTAR GRITANDO");
    } else if (!dados.mascara) {
        console.log ("RETIRADA POR FALTA DE MASCARA");
    } else {
        console.log ("OK");
    }
}