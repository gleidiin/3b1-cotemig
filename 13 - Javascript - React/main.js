
// component 
function LoginForm(props) {

    function showValue({ target: {name, value}}) {
        console.log(name, value);
    }
    
    return (<form>
        { props.nome } {" - "} { props.children }
        <label>e-mail</label>
        <input type="text" name="email" onChange={showValue} />
        <label>senha</label>
        <input type="password" name="password" onChange={showValue}/>
    </form>);
}


ReactDOM.render(<div>
    <LoginForm nome="Login">
        <h1>Meu formulário lindo</h1>
    </LoginForm>
</div>, document.getElementById('root'));

