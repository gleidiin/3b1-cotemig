

// design pattern:  builder 
class Calculadora {

    constructor() {
        this.SUBTRACAO = '-';
        this.SOMAR     = '+';

        this.operacao = '';
        this.resultado = NaN;
    }

    resolver(operacao) {
        this.operacao = operacao;

        return new Promise((resolve, reject) => {
            const operacoes = this.operacao.split(' ');
            do {
                const [valor1, operador, valor2] = operacoes;
                operacoes.shift();
                operacoes.shift();
                operacoes.shift();
                // opercoes.splice(2, 3)
                if(operador === this.SOMAR) {
                    this.soma(valor1, valor2);
                } else if(operador === this.SUBTRACAO) {
                    this.subtracao(valor1, valor2);
                } else {
                    reject();
                    return;
                }

                operacoes.unshift(this.resultado);
            } while(operacoes.length > 1)

            resolve();
        });
    }

    soma(...args) {
        this.resultado = args.reduce((preview, current) => {
            return preview + Number(current);
        });
        return this;
    }

    subtracao(...args) {
        this.resultado = args.reduce((preview, current) => {
            return preview - Number(current);
        });
        return this;
    }
}


// execução 
const calculadora = new Calculadora();

calculadora.resolver('1 - 1 + 1 + 1 + 2 + 8 + 9').then(() => {
    console.log(calculadora.resultado);
}).catch((err) => {
    console.log(err);
})