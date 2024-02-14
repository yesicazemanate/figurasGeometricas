import FiguraGeometrica from "./figurasGeometricas";

export default class Cuadrado extends FiguraGeometrica{
    lado: number;
    constructor(nombre: string,lado: number) {
        super(nombre)
        this.lado = lado
    }
    getLado() {
        return this.lado
    }
    setLado(lado: number) {
        this.lado = lado
    }
    calcularArea(){
        let area: number = this.lado * this.lado
        return `el area del cuadrado es ${area}`
    }
    calcularPerimetro(){
        let perimetro: number = this.lado * 4
        return `el perimetro del cuadrado es ${perimetro}`
    }
    
}