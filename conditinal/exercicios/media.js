/*Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

var notaPortugues = 5;
var notaMatematica = 6;
var notaFisica = 10;

var media = (notaPortugues + notaMatematica + notaFisica) / 3;

if(media < 5){
    console.log("Reprovado");
} else if(media >= 7){
    console.log("Passou de Semestre");
} else{
    console.log("Você ficou de recuperacao")
}