

const estudante = {
  nome: 'Larissa',
  cursoID: 1,
  notas: [8, 7,5, 9],
  mensagem: ''
};

const estudante1 = {
  nome: 'Clara',
  cursoID: 2,
  notas: [4, 7, 6],
  mensagem: ''
};

const estudante2 = {
  nome: 'Clair',
  cursoID: 3,
  notas: [5, 8, 10],
  mensagem: ''
};

const cursos = [
  { Id: 1, nome: 'Artes plasticas' },
  { Id: 2, nome: 'Teatro' },
  { Id: 3, nome: 'Musica' }
];

function mediaEstudante(estudante: { notas: any[]; }) {
  return (estudante.notas[0] + estudante.notas[1] + estudante.notas[2]) / 3;
}

const estiloAprendizado = function(estudante: any) {
  const media = mediaEstudante(estudante);
  if (media >= 7) {
    return "Exploradora confiante.";
  } else if (media >= 5 && media < 7) {
    return "Brilha como aprendiz.";
  } else {
    return "Desbravando a programação.";
  }
};

const estiloAprendizadoArrow = (estudante: any) => {
  const media = mediaEstudante(estudante);
  if (media >= 7) {
    return "Exploradora confiante.";
  } else if (media >= 5 && media < 7) {
    return "Brilha como aprendiz.";
  } else {
    return "Desbravando a programação.";
  }
};


function imprimirCurso(cursoId: any) {
  let nomeCurso;
  switch (cursoId) {
    case 1:
      //nomeCurso = cursos.find(cursos => curso.Id === 1).nome;
      break;
    case 2:
      //nomeCurso = cursos.find(curso => curso.id === 2).nome;
      break;
    case 3:
     // nomeCurso = cursos.find(curso => curso.id === 3).nome;
      break;
    default:
      nomeCurso = 'Curso não encontrado';
  }
  return nomeCurso;
}
