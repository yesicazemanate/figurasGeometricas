import FiguraGeometrica from "./figurasGeometricas";

export default class TrianguloRectangulo extends FiguraGeometrica{
    base: number
    altura: number
    constructor(nombre: string, base: number, altura: number) {
        super(nombre)
        this.altura = altura
        this.base = base
    }
    getBase() {
        return this.base
    }
    getAltura() {
        return this.altura
    }
    setBase(base: number) {
        this.base = base
    }
    setAltura(altura: number) {
        this.altura = altura
    }
    calcularArea() {
        let area: number = (this.base * this.altura) / 2
     return `el area del triangulo rectangulo es ${area}`   
    }
    calcularHipotenusa() {
        let hipotenusa: number = Math.sqrt(Math.pow(2, this.altura) + Math.pow(2, this.base))
        return hipotenusa
    }

    calcularPerimetro() {
        let hipotenusa = this.calcularHipotenusa()
        let perimetro: number = this.altura + this.base + hipotenusa
        
       return `el perimetro del triangulo rectangulo es ${perimetro}`  
    }
    definirTipoTriangulo() {
        let hipotenusa: Number= this.calcularHipotenusa()
        if ( this.altura === this.base && hipotenusa
            === this.altura ) {
            return 'el triangulo es equilatero'
        } else if (this.altura === this.base || hipotenusa
            === this.altura || this.base === hipotenusa) {
            return 'el triangulo es isoceles'
        } else {
            return 'el triangulo es escaleno'
        }
        
    }
    
}