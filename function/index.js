//#refatorando imc

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Você esta abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "obesidade grave";
  }
}


//Isso aqui é uma função anonima, vou deixar um art sobre: 
//https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-an%C3%B4nimas-javascript-92361075fd89

(function(){
  var peso = 61;
  var altura = 1.72;
  const imc = calculoImc(altura, peso);
  console.log(classificarImc(imc))
})()

