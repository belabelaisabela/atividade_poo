class Retangulo {
    constructor(largura, altura){
        this.largura= largura;
        this.altura= altura;
    }
  
  calcularArea(){
    return this.largura*this.altura
  }
  area(){
    return this.calcularArea()
  }
}

let retangulo1 = new Retangulo(20, 30);
console.log (retangulo1.calcularArea())
let retangulo2 = new Retangulo(10, 50);
console.log (retangulo2.calcularArea())
console.log(retangulo2.area());
