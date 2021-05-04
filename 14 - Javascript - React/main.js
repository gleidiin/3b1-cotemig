

const Alerta = (props) => {
    return <span>
        {props.message}
    </span>
}

const Condicao = (props) => {
    return props.valido ? props.children : null;
}


// component -> extends React
const Formulario = () => {
    const usuarios = ["admin", "cliente", "desenvolvedor", "visitante"]; 
    let usuario = {};

    const showOnConsole = (nome) => {
        console.log( nome + " cliquei!");
    }

    const inputHandler = (event) => {
        const target = event.target;
        usuario[target.name] = target.value;
    }

    const onSumitEvent = (event) => {
        event.preventDefault();
        console.log("enviando evento: ", usuario);
        usuarios.push(usuario.nome);
        console.log(usuarios);
    }

    return <div>
        <form onSubmit={ onSumitEvent }>
            <label htmlfor="nome">Digite seu nome:</label>
            <input name="nome" type="text" onChange={ inputHandler }></input>
            <label htmlfor="idade">Qual a sua idade:</label>
            <input name="idade" type="number" onChange={ inputHandler }></input>
            <button>Enviar</button>
        </form>
        <ul>
            {
                usuarios.map((usuario, i) => <Condicao key={i} valido={ usuario !== 'admin'}>
                    <li>
                        {usuario}
                        <button onClick={ () => showOnConsole(usuario) } type="cancel">Botão</button>
                    </li>
                    
                </Condicao>)
            }
        </ul>
    </div>
}

// final do arquivo
const root = document.getElementById("root");
ReactDOM.render(<div>
    <Formulario />
</div>, root); 