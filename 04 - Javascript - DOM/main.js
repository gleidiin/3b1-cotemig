// pegando elemento screen
const screen = document.getElementById('screen');
// limpando o valor
if(screen) {
    screen.value = '';
}
// pegando todos os botões disponíveis
const buttons = document.getElementsByClassName('number');
// adicionado listeners em todos os botões
for (let i = 0; i < buttons.length; i++) {
    const element = buttons.item(i);
    element.addEventListener('click', ({target}) => {
        screen.value += target.value;
    });
}

// utilizando um callback no código
function callback(value) {
    screen.value += value;
}

