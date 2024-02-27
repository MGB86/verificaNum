const form = document.getElementById('formVerific')

form.addEventListener('submit', function(e){
    let formEValido = false
    e.preventDefault();

    const valorUm = document.getElementById('primeiroValor')
    const valorDois = document.getElementById('segundoValor')
    const mensagemSucesso = `O valor <b>${valorDois.value}</b> é maior que o valor <b>${valorUm,value}</b>`

    
})