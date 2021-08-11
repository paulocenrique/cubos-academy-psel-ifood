function solucao(disparos) {
    let i = 0;
    for (let pontos of disparos) {
        if (pontos > 70) {
            i++;
        } 
    }
    if (i >= 3)  {
        console.log (i);
    } else 
        console.log ("ELIMINADO");
}