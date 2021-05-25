
class StringBuilder {
    constructor() {
        this._value = ""; 
    }

    append(str) {
        this._value += str;
        return this;
    }

    toString() {
        return this._value;
    }
}

const builder = new StringBuilder();

const str = builder.append("Davi ")
                   .append("Alberto ")
                   .toString();

console.info(str);