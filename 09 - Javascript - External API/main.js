const loadPokemonList = (url = 'https://pokeapi.co/api/v2/pokemon/') => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            const pokelist = document.getElementById('poke-list');
            pokelist.innerHTML = '';
            document.getElementById('prev').value = response.previous;
            document.getElementById('next').value = response.next; 

            response.results.forEach(pokemon => {
                const li = document.createElement('li')
                console.log(pokemon.name, pokemon.url);
                li.classList.add('clicable');
                li.innerText = pokemon.name;
                li.dataset.url = pokemon.url;
    
                li.addEventListener('click', function({target}) {
                    carregaPokemon(target.dataset.url);
                });
                pokelist.appendChild(li); 
            });
        });
}

loadPokemonList();

const goPreview = ({target}) => loadPokemonList(target.value);
const goNext = ({target}) => loadPokemonList(target.value);

const generatePokedex = (name, image, abilities) => {
    return `<h2>${name}</h2>
        <img src="${image}" />
        
        <h3>Habilidades</h3>
        <ul>
            ${ 
                abilities.map((item) => {
                    return `<li>${item.ability.name}</li>`
                })
            }
        </ul>
        </div>
        `;
}

const carregaPokemon = (url) => {
    fetch(url).then(response => response.json())
        .then(response => {
            const templatePokedex = generatePokedex(response.name, response.sprites.front_default, response.abilities)
            const myDex = document.getElementById('pokedex');
            myDex.innerHTML = templatePokedex;
        });
    
}