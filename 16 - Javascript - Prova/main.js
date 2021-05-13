/**
 * Obrigatório:
    - documentar o código com suas palavras, explicando o que o código faria;
    [ ] Ter todos os campos solicitados no enunciado;
    - Usar funções de onchange e submit do browser;
    - Código em Javascript + HTML;
 */

// campos obrigatórios: “nome do cliente”, “conteúdo da carga” e “prazo de entrega”.

// declaração de variaveis globais
var nomeCliente, conteudoCarga, prazoEntrega;

// capta mudanças no input da página
function change(event) {
    // pega qual component enviou o onchange
    const target = event.target;
    // desconstruction dos valores do target
    const {name, value} = target;
    
    // valido o input do usuário e preencho o campo
    if(name == 'nomeCliente') nomeCliente = value;
    else if(name == 'conteudoCarga') conteudoCarga = value;
    else prazoEntrega = value;

}

// evento para quando o usuário clicar no botão enviar ou apertar enter.
function submit(event) {
    // evita o reload da pagina
    event.preventDefault();
    // criei um elemento tipo list item
    const li = document.createElement('li');
    // adicinoei um texo dentro do elemento
    li.append(`${nomeCliente} - ${conteudoCarga} - ${prazoEntrega}`);

    // e adicionei o elemento dentro do elemento ul
    document.querySelector('ul').appendChild(li);
}

// adicionar um event lister para o formulário
document.querySelector('form').addEventListener('submit', submit);