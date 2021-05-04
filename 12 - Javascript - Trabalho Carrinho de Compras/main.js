

/**
 * logica
 */

const avaibleItems = [
    {id: 1, name: "leite", value: 3.18},
    {id: 2, name: "carne", value: 42.00},
    {id: 3, name: "ovo", value: 12.00},
    {id: 4, name: "camisa de manga", value: 45.00},
    {id: 5, name: "manga madura", value: 6.00}
];

let savedItems = [];

const search = (name) => {
    return avaibleItems.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
}

const add = (id) => {
    const item = avaibleItems.find(item => item.id == id);
    item.amount = 1; 
    savedItems.push(item);
    loadCart();
}

const rm = (id) => {
    savedItems = savedItems.filter(item => item.id != id);
    loadCart();
}

const desc = (id) => {
    const index = savedItems.findIndex(item => item.id == id);
    savedItems[index].amount--;
    if(!savedItems[index].amount) rm(id);
    loadCart();
}

const inc = (id) => {
    const index = savedItems.findIndex(item => item.id == id);
    savedItems[index].amount++;
    loadCart();
}


/**
 * renderização
 */

const loadShop = (query) => {
    const HTMLItemShop = (id, name, value) => `
        <div>
            <h3>${name}</h3>
            <p>Valor: R$ ${value}</p>
            <button onclick="add(${id})">Adicionar</button>
        </div>
    `;
    const shopEl = document.querySelector('.shop');

    let result = avaibleItems;
    if(query) result = search(query);

    shopEl.innerHTML = result.map(item => HTMLItemShop(item.id, item.name, item.value)).join(" ");
}   

const loadCart = () => {
    const templateCart = (id, name, value, amount) => `<div>
        <p>${amount}x - ${name} - R$ ${value}</p>
        <button onclick="inc(${id})">+</button>
        <button onclick="desc(${id})">-</button>
    </div>`;

    const cartEl = document.querySelector('.cart');
    const totalValue = savedItems.reduce((prev, current) => prev + current.value * current.amount, 0);
    cartEl.innerHTML = savedItems.map(item => templateCart(item.id, item.name, item.value, item.amount)).join(" ") + "<br> <hr>Valor Total R$ " + totalValue;
}

window.onload = () => {
    loadShop();
    const searchEl = document.querySelector('input[name="search"]');
    searchEl.addEventListener('keyup', ({target: {value}}) => loadShop(value));
}