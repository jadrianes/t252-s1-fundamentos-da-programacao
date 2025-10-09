interface filmes  {
    nomeFilme: string;
    nota: number;
  } 

const todosOsFilmes: filmes[] = [
    { nomeFilme: "O menino do pijama listrado", nota: 9.5},
    { nomeFilme: "O Fabuloso Destino de Amélie Poulain", nota: 7.9},
    { nomeFilme: "Como se fosse a primeira vez", nota: 8.5},
    { nomeFilme: "Comer rezar e amar", nota: 9.7},
  ];   

function primeiraPartida(filme1: filmes, filme2: filmes) {
   if (filme1.nota > filme2.nota){
    return filme1;
   } else if (filme2.nota > filme1.nota){
    return filme2;
   }
}
function semifinal(filme1: filmes, filme2: filmes) {
   if (filme1.nota > filme2.nota){
    return filme1;
   } else if (filme2.nota > filme1.nota){
    return filme2;
   }
}
function final(filme1: filmes, filme2: filmes) {
   if (filme1.nota > filme2.nota){
    return filme1;
   } else if (filme2.nota > filme1.nota){
    return filme2;
   }
}

