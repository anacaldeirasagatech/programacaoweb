var nota1 = prompt('Insira a nota 1: ')
var nota1 = parseFloat(nota1)

var nota2 = prompt('Insira a nota 2: ')
var nota2 = parseFloat(nota2)

var nota3 = prompt('Insira a nota 3: ')
var nota3 = parseFloat(nota3)

var nota4 = prompt('Insira a nota 4: ')
var nota4 = parseFloat(nota4)

nota = (nota1 + nota2 + nota3 + nota4) / 4

if (nota > 65)
{
	document.write('Aluno aprovado!')
}
else
{
	document.write('Aluno reprovado!')
}