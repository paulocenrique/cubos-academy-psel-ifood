function solucao(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        console.log ("EQUILATERO");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB) {
        console.log ("ISOSCELES");
    } else {
        console.log ("ESCALENO");
    }
}