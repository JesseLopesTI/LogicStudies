var nome;
var curso;
var disciplina;
var notas;
var faltas;
var somaNotas;
var maximoFaltas;
var aulasDisciplina;

somaNotas = 0;
maximoFaltas = 25;
aulasDisciplina = 20;

nome = prompt("Digite o seu nome: ");

curso = prompt("Digite o seu curso: ");

disciplina = prompt("Digite a sua disciplina: ");

for(var contador = 1; contador <= 2; contador++) {
  notas = parseFloat(prompt("Digite a nota da avaliação " + contador + ": "));
  somaNotas = somaNotas + notas;
}

faltas = prompt("Digite a quantidade de faltas: ");

media = somaNotas / 2;

maximoFaltas = (maximoFaltas * aulasDisciplina) / 100;

console.log("O(A) aluno(a) " + nome + ", do curso de " + curso + ", possui média " + media + " e " + faltas + " faltas, na disciplina de " + disciplina + ".");

if (media >= 6 && faltas <= maximoFaltas) {
  console.log("Aluno(a) aprovado(a)!");
} else if (media >= 6 && faltas > maximoFaltas) {
  console.log("Aluno(a) reprovado(a)! Quantidade máxima de faltas excedida.");
} else if (media < 6 && faltas <= maximoFaltas) {
  console.log("Aluno(a) reprovado(a)! Média aritmética abaixo do valor mínimo para aprovação.");
} else {
  console.log("Aluno(a) reprovado(a)! Média aritmética abaixo do valor mínimo para aprovação e quantidade máxima de faltas excedida.");
}