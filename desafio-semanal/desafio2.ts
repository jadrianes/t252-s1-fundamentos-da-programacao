interface Filme  {
    nomeFilme: string;
    nota: number;
  } 

const filmes: Filme[] = [
    { nomeFilme: "O menino do pijama listrado", nota: 9.5},
    { nomeFilme: "O Fabuloso Destino de Amélie Poulain", nota: 7.9},
    { nomeFilme: "Como se fosse a primeira vez", nota: 8.5},
    { nomeFilme: "Comer rezar e amar", nota: 9.5},
  ];   

//console.log(filmes)

function compararNotas(filme1: Filme, filme2: Filme) {
   if (filme1.nota > filme2.nota){
    return filme1;
   } else if (filme2.nota > filme1.nota){
    return filme2;
   } else {
        return ordenarAlfabeto(filme1, filme2);
    }
}

function ordenarAlfabeto(filme1: Filme, filme2: Filme) {
    // Coloca os dois filmes em um array
    const listaFilmes = [filme1, filme2];
    
    // Ordena alfabeticamente pelo título
    const filmesOrdenados = listaFilmes.sort((a, b) => 
        a.nomeFilme.localeCompare(b.nomeFilme)
    );
    let retornoPrimeiroFilme =filmesOrdenados[0]
    return retornoPrimeiroFilme;
}

// function primeiraPartida (filmes: Filme[]) : Filme[]{
//   let vencedores: Filme[] = [];

//   for (let i = 0; i < filmes.length / 2; i++) {
//     let primeiroFilme = filmes[i];
//     let ultimoFilme = filmes [filmes.length -i -1]
//     let comparadorFilmes = compararNotas(primeiroFilme, ultimoFilme)

//     vencedores.push(comparadorFilmes)
// }
// return vencedores
// }

// function segundaPartida (filmes: Filme[]): Filme[]{
//   let vencedores : Filme[] = [];

//   for (let i = 0; i < filmes.length; i = i + 2){
//    let primeiroFilme = filmes[i];
//     let segundoFilme = filmes[i + 1]

//     let comparadorFilmes = compararNotas(primeiroFilme, segundoFilme) 
//      vencedores.push(comparadorFilmes)
//   }
// }

// console.log (primeiraPartida(filmes))