/* primeiro use case: get element by id */

const div = document.getElementById('minhaDiv');
div.innerText = "-> Olha agora tenho texto";


/* segundo use case: get element by tag name */

const ps = document.getElementsByTagName('p');

for(let i = 0; i < ps.length; i++) {
    console.log(i < ps.length);
    console.log((i + 1) + '/' + ps.length);
    console.log(ps.item(i));
    // templating string
    ps.item(i).innerHTML = `<span style="color: red;">${i}</span>`;
}

// i = 0; se a condição for verdadeira roda
// depois incrementa + 1 no operador;

// i = 1  se a condição for verdadeira roda
// depois incrementa + 1 no operador;

// i = 2  se a condição for verdadeira roda
// depois incrementa + 1 no operador;

// ..

// i = 5  se a condição for verdadeira roda
// depois incrementa + 1 no operador;


/* terceiro use case: get element by tag name */

// elemento pela class
const divMani = document.getElementsByClassName('manipulacao').item(0);


const template = `
    <div class="manipulacao"> 
        <div class="manipulacao-body"> => newDiv
            <h3>Texto Adicionado</h3> => newH3
            <p>Lorem lorem</p>  => newP
        </div>
    </div>
`
const newDiv = document.createElement('div');
const newH3 = document.createElement('h3');
const newP = document.createElement('p');

newH3.innerText = 'Texto Adicionado';
newP.innerHTML = '<span>Lorem lorem</span>'; 

// manipulou estrutura
newDiv.appendChild(newH3);
newDiv.appendChild(newP);

divMani.appendChild(newDiv);

/* manipulacao via string templating */

const templateCard = (title, text, image) => `
    <div>
        <h3>${title}</h3>
        <img src="${image}" />
        <p>${text}</p>
    </div>
`;

const divManiTemp = document.getElementsByClassName('manipulacao-temp').item(0);


/* quarto e quinto use case: localstorage e event */

const inputName = document.getElementsByTagName('input').namedItem('name');
const inputDescription = document.getElementsByTagName('textarea').namedItem('description');

function onChangeInput(event) {
    const { name, value } = event.target;
    localStorage.setItem(name, value);
}

inputName.addEventListener('change', onChangeInput);
inputDescription.addEventListener('change', onChangeInput);


if(localStorage.getItem('name')) {
    inputName.value = localStorage.getItem('name');
}

const descriptionValue = localStorage.getItem('description');
if(descriptionValue) {
    inputDescription.innerHTML = descriptionValue;
}