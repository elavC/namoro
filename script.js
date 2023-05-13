// Declaração das variáveis.
const buttonNo = document.querySelector('.no');

// Regule no Array abaixo as posições que o Button "Não" deve fugir do Mouse!!!
const positions = ['-360', '388', '-299', '336', '-255', '220', '233', '266', '-315', '300']; 

// Função para fazer o botão fugir do Mouse no eixo Y (|).
function runButtonY(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateY(${positions[randomArray]}px)`;
    this.style.transition = 'ease .1s';
}

// Função para fazer o botão fugir do Mouse no eixo X (_).
function runButtonX(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateX(${positions[randomArray]}px)`;
}
// Declaração/Ativação das funções.
buttonNo.addEventListener('mouseover', runButtonY);
buttonNo.addEventListener('mouseout', runButtonX);

buttonNo.addEventListener('click', runButtonX);
buttonNo.addEventListener('click', runButtonY);

