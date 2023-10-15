function calcularIMC() {
    const botao = document.querySelector('#botao');

    botao.addEventListener('click', function(e) {
        e.preventDefault();
         let peso = document.querySelector('#peso');
         let altura = document.querySelector('#altura');
         const resultadoNoNavegador = document.querySelector('#resultado');
        
        let contaIMC = peso.value / (altura.value * altura.value);

        if(contaIMC < 18,5) {
            resultadoNoNavegador.innerHTML = `
              ${contaIMC.toFixed(1)} Está abaixo do peso.
            `;
        } else if(contaIMC >= 18,5) {
            resultadoNoNavegador.innerHTML += `
            ${contaIMC.toFixed(1)} Está com o peso normal.
            `
        }
    });
};

calcularIMC()