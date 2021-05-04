
// const form = document.getElementsByTagName('form').item(0);
const form = document.querySelector('form'); 

// enter ou aperta o botão 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const target = event.target;

    const value = target.elements.name.value + ' - ' + target.elements.age.value;

    const historico = document.querySelector("#hist");
    const item = document.createElement('li');
    item.append(value);
    historico.appendChild(item);

    target.reset();
})

// desconstrução
// event -> target -> value
// { target: { value } }
// function manipuladorInput({ target: { value } })
function manipuladorInput(event) {
    const target = event.target;
    console.log(target.value);
    // const historico = document.getElementById("hist");

    const historico = document.querySelector("#hist");
    const item = document.createElement('li');
    item.append(target.value);
    historico.appendChild(item);

    target.value = '';
}