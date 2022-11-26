//função construtora       
function Retangulo (x, y) {

    this.base = x;
    this.altura = y;
            
    this.calculaArea = function() {
        return base * altura;
    };

}

//entradas
var base = 20
var altura = 30

//Criando o objeto retângulo
var retangulo = new Retangulo(base, altura);

//Resultado
console.log("Medida da base = " + retangulo.base);
console.log("Área = " + retangulo.calculaArea());
          