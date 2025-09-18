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
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resultado.style.display = 'block';
    } catch (error) {
        resultado.innerHTML = error;
        resultado.style.display = 'block';
    }
}