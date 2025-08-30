function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado.');
    // };

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        resultado.innerHTML += `${nome} ${sobrenome} ${peso} ${altura}<br>`;
        pessoas.push({nome, sobrenome, peso, altura});
        console.log(pessoas);
    });
}
meuEscopo();