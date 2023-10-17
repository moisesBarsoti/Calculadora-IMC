function calcularIMC() {
    const botao = document.querySelector('#botao');
    const botaoVoltar = document.querySelector('#botaoVoltar').style.display = 'none';

    botao.addEventListener('click', function(e) {
        e.preventDefault();
        let peso = document.querySelector('#peso');
        let altura = document.querySelector('#altura');
        const table = document.querySelector('table').style.display = 'none';
        const form = document.querySelector('form').style.display = 'none';
        const h1 = document.querySelector('h1').style.display = 'none';
        const h2 = document.querySelector('h2').style.display = 'none';
        const botaoVoltar = document.querySelector('#botaoVoltar').style.display = 'block';
       
        const resultadoNoNavegador = document.querySelector('#resultado');
        
        let contaIMC = peso.value / (altura.value * altura.value);
        console.log(contaIMC);

        if (contaIMC >= 40) {
            resultadoNoNavegador.innerHTML = `
            ${contaIMC.toFixed(1)} obesidade grau 3 <br>
            `;
            return;
        } else if(contaIMC >= 35) {
            resultadoNoNavegador.innerHTML += `
            ${contaIMC.toFixed(1)} obesidade grau 2 <br>
            `;
        } else if(contaIMC >= 30) {
            resultadoNoNavegador.innerHTML += `
            ${contaIMC.toFixed(1)} obesidade grau 1 <br>
            `;
        } else if(contaIMC >= 25) {
            resultadoNoNavegador.innerHTML += `
            ${contaIMC.toFixed(1)} Sobrepeso <br>
            `;
        } else if(contaIMC >= 18.5) {
            resultadoNoNavegador.innerHTML += `
            ${contaIMC.toFixed(1)} Peso normal <br>
            `;
        }    
          else if(contaIMC < 18.5) {
            resultadoNoNavegador.innerHTML += `
            ${contaIMC.toFixed(1)} Abaixo do peso <br>
            `;
        }
        
        
});
};

calcularIMC()