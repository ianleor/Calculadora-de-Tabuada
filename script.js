function calcularTabuada() {
    // Limpar a div antes de calcular uma nova tabuada
    document.getElementById('tabuada').innerHTML = '';

    // Capturar o número digitado pelo usuário
    let numero = parseInt(document.getElementById('numero').value);

    // Verificar se o número é válido (diferente de NaN)
    if (!isNaN(numero)) {
        // Criar uma lista não ordenada para exibir a tabuada
        let ul = document.createElement('ul');

        // Loop para calcular e adicionar os itens da tabuada à lista
        for (let i = 1; i <= 10; i++) {
            let li = document.createElement('li');
            li.textContent = `${numero} x ${i} = ${numero * i}`;
            ul.appendChild(li);
        }

        // Adicionar a lista à div de tabuada
        document.getElementById('tabuada').appendChild(ul);
    } else {
        // Se o usuário não digitar um número válido
        alert('Por favor, digite um número válido.');
    }
}