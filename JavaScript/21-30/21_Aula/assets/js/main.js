function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');

    try {
        if (!peso || !altura) throw 'Por favor, preencha todos os campos.';
        if (isNaN(peso) || isNaN(altura)) throw 'Por favor, insira valores numéricos.';
        
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        const imc = peso / (altura * altura);
        const resultadoCalculado = resultadoIMC(imc);

        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${resultadoCalculado}`;
        resultado.style.display = 'block';

    } catch (error) {
        resultado.innerHTML = error;
        resultado.style.display = 'block';
    }
}

function resultadoIMC(imc) {
    let resultado = imc;
    
    if (resultado < 18.5) {
        return 'Abaixo do peso';
    } else if (resultado >= 18.5 && resultado < 24.9) {
        return 'Peso normal';
    } else if (resultado >= 25 && resultado < 29.9) {
        return 'Sobrepeso';
    } else if (resultado >= 30 && resultado < 34.9) {
        return 'Obesidade grau I';
    } else if (resultado >= 35 && resultado < 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}