const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    if (!isNaN(imc)) {
        const value = document.getElementById('value');
        let descricao = '';

    value.classList.add('atencao');
        
    document.getElementById('infos').classList.remove('hidden');
    
    if (imc < 16){
        descricao = 'Magreza grave!';
    } else if (imc >= 16 && imc <= 18.5) {
        descricao = "Magreza moderada a leve.";
    } else if (imc >= 18.5 && imc <= 25) {
        descricao = "Você está em seu peso ideal."
        value.classList.remove('atencao');
        value.classList.add('normal');
    } else if (imc >= 25 && imc <= 30) {
        descricao = "Sobrepeso."
    } else if (imc >= 30 && imc <= 40) {
        descricao = "Obesidade moderada a severa!"
    } else {
        descricao = "Obesidade mórbida."
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('descricao').textContent = descricao;
}

});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calcular').click();
    }

});