const form = document.getElementById('formVerific')
const primeiro_valor = document.getElementById('primeiroValor');
const segundo_valor = document.getElementById('segundoValor')


function validaNum(valor1, valor2){
    valor1 = primeiro_valor
    valor2 = segundo_valor

    result = valor2 > valor1
    return result
}

form.addEventListener('submit', function(e){ // (e) simboliza um evento
    e.preventDefault();

    const mensagemSucesso = `O valor <b>${segundo_valor.value}</b> é maior que o valor <b>${primeiro_valor.value}</b>`
    const mensagemErro = `O valor <b>${primeiro_valor.value}</b> é menor que o valor <b>${segundo_valor.value}</b>`

    if (validaNum){
        const containerMensagemSucesso = document.querySelector('.successMessage')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    }
    else {
        const containerMensagemErro = document.querySelector('.errorMessage')
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
    primeiro_valor = '';
    segundo_valor = '';
})
console.log(form)

