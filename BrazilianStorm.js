function solucao(notas) {
    const notasAposExclusao = [];
    
    let menor = 0;
    let maior = 0;
    let soma = 0;
    let media = 0;
    
    for(let i=0; i < notas.length; i++) {
        if (notas[i] <notas[menor]) {
            menor = i;
        }
        if (notas[i] > notas[maior]) {
            maior = i;
        }
  } 
    
    for(let  ind=0; ind < notas.length; ind++) {
        if (ind != menor && ind != maior) {
            notasAposExclusao.push(notas[ind]);
        }
  }
    
    for(let indc = 0; indc < notasAposExclusao.length; indc++) {
        soma = soma + notasAposExclusao[indc];
    }
    
    media= soma/notasAposExclusao.length;
    
    console.log(media);
}