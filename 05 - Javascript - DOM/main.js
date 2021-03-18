const screen     = document.getElementById('main-screen');
const btnActions = document.getElementsByClassName('btn-action');

const btnActive  = document.getElementsByClassName('btn-active').item(0);

function adicionarValorNaTela(event) {
    if(screen.value.includes('=')) screen.value = ''; 
    const node = event.target;
    screen.value += node.value;
}

for (let i = 0; i < btnActions.length; i++) {
    const item = btnActions.item(i);
    item.addEventListener('click', adicionarValorNaTela);
}

btnActive.addEventListener('click', function() {
    screen.value = screen.value + ' = ' + eval(screen.value); 
});

