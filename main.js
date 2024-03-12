const form = document.getElementById('formVerific')
const primeiro_valor = document.getElementById('primeiroValor');
const segundo_valor = document.getElementById('segundoValor')


function validaNum(valor1, valor2){
    valor1 = parseFloat(primeiro_valor.value);
    valor2 = parseFloat(segundo_valor.value);

    const mensagemSucesso = `O valor <b>${segundo_valor.value}</b> é maior que o valor <b>${primeiro_valor.value}</b>`
    const mensagemErro = `O valor <b>${primeiro_valor.value}</b> é maior que o valor <b>${segundo_valor.value}</b>`

    if (valor1 < valor2) {
        const containerMensagemSucesso = document.querySelector('.successMessage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        setTimeout(function(){
            containerMensagemSucesso.style.display = 'none';
        }, 3000);
    } else if (valor1 > valor2) {
        const containerMensagemErro = document.querySelector('.errorMessage');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        setTimeout(function(){
            containerMensagemErro.style.display = 'none';
        }, 3000);
    } else {
        primeiro_valor.style.border = '1px solid red'
        segundo_valor.style.border = '1px solid red'
        document.querySelector('.sameMessage').style.display = 'block'

        setTimeout(function(){
            document.querySelector('.sameMessage').style.display = 'none';
        }, 3000);
    }

    primeiro_valor.value = '';
    segundo_valor.value = '';
    
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    validaNum(primeiro_valor.value, segundo_valor.value);
})
