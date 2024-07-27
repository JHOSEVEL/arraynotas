// Criar um array de objetos representando alunos
const alunos = [
    { nome: 'Jose', nota: 7 },
    { nome: 'dolores', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'alberto', nota: 6 }
];

// Criar uma função para retornar apenas os alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamar a função e imprimir o resultado
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
