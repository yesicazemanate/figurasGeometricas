import FiguraGeometrica from "./figurasGeometricas"
export default class Trapecio extends FiguraGeometrica {
    base1: number
    base2: number
    lado1: number
    lado2: number
    altura: number
    constructor(nombre:string,base1: number, base2: number,lado1:number,lado2:number, altura: number) { 
        super(nombre)
        this.base1 = base1
        this.base2 = base2
        this.lado1 = lado1
        this.lado2 = lado2
        this.altura = altura
    }
    getBase1() {
        return this.base1
    }
    setBase1(base1: number) { 
        this.base1 = base1
    }
    getBase2() { 
        return this.base2
    }
    setBase2(base2:number) {
        this.base2 = base2
    }
    getAltura() { 
        return this.altura
    }
    setAltura(altura: number) { 
        this.altura =altura
    }
    getLado1() {
        return this.lado1
    }
    setLado1(lado1: number) {
        this.lado1 = lado1
    }
    getLado2() {
        return this.lado2
    }
    setLado2(lado2: number) {
        this.lado2 = lado2
    }
    calcularArea() {
        let area: number = (this.base1 + this.base2) * this.altura / 2
        return `el area del trapecio es ${area}`   
    }
    calcularPerimetro(){
        let perimetro: number = this.base1 + this.base2 + this.lado1 + this.lado2
        return `el perimetro del trapecio es ${perimetro}`
    }
}