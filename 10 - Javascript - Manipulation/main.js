
document.querySelectorAll('.produto button')
    .forEach(el => {
        el.addEventListener('click', (event) => {
            const descricao = event.target.parentElement.querySelector('p').innerText;
            const titulo = event.target.parentElement.querySelector('h3').innerText;

            document.querySelector('#carrinho').append(titulo)

            localStorage.setItem('carrinho', titulo);
            console.log(event.target.value);
        })
    })


// const produtos = [
//     {
//         id: 1,
//         nome: 'Sabonete',
//         descricao: 'Sabonete top',
//         preco: 5.43
//     },
//     {
//         id: 2,
//         nome: 'Sabão em pó',
//         descricao: 'Sabonete top',
//         preco: 4.00
//     },
//     {
//         id: 3,
//         nome: 'Leite',
//         descricao: 'Sabonete top',
//         preco: 3.10
//     }
// ];

// const carrinho = []


// const productElement = produtos.forEach((produto) => {
//     const el = document.createElement('li');
//     const btnEl = document.createElement('button');
//     btnEl.append('Adicionar no carrinho');
//     btnEl.value = produto.id;

//     btnEl.addEventListener('click', (event) => {
//         const idProduto = event.target.value;
//         const currentProduto = produtos.find(p => p.id == idProduto)
//         carrinho.push(currentProduto);
//     });

//     el.append(produto.id + '- ' + produto.nome + ' - ' + produto.descricao);
//     el.appendChild(btnEl);

//     document.querySelector('#produtos').appendChild(el);
// })


