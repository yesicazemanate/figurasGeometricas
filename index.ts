import Circulo from './circulo';
import Cuadrado from './cuadrado';
import Rectangulo from './rectangulo';
import Rombo from './rombo';
import Trapecio from './trapecio';
import TrianguloRectangulo from './trianguloRectangulo';

let circulo = new Circulo("circulo", 23)
let cuadrado = new Cuadrado("cuadrado", 24)
let rectangulo = new Rectangulo("rectangulo", 23, 30)
let rombo = new Rombo("rombo", 23, 30, 45)
let trapecio = new Trapecio("trapecio", 23, 34, 45, 56, 23)
let trianguloRectangulo = new TrianguloRectangulo("trianguloRectangulo", 71.460211306712523, 71.460211306712523)
console.log(circulo.calcularArea())
console.log(circulo.calcularPerimetro())
console.log(cuadrado.calcularArea())
console.log(cuadrado.calcularPerimetro())
console.log(rectangulo.calcularArea())
console.log(rectangulo.calcularPerimetro())
console.log(rombo.calcularArea())
console.log(rombo.calcularPerimetro())
console.log(trapecio.calcularArea())
console.log(trapecio.calcularPerimetro())
console.log(trianguloRectangulo.calcularArea())
console.log(trianguloRectangulo.calcularPerimetro())
console.log(`la hipotenusa del triangulo rectangulo es ${trianguloRectangulo.calcularHipotenusa()}23`)
console.log(trianguloRectangulo.definirTipoTriangulo())