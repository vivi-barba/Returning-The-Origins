
function adicionandoJuros(valor, percentualJuros){
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(adicionandoJuros(100, 10));