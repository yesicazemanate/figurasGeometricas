import FiguraGeometrica from "./figurasGeometricas"

export default class Rectangulo extends FiguraGeometrica{

    ancho: number
    largo: number
    constructor(nombre: string, ancho: number, largo: number) {
        super(nombre)
        this.ancho = ancho
      this.largo = largo  
    }
    getAncho(){
    return this.ancho    
    }
    getLargo() {
        return this.largo
    }
    setAncho(ancho: number){
     this.ancho = ancho   
    }
    setLargo(largo: number) {
        this.largo = largo
    }
    calcularArea() {
        let area = this.largo * this.ancho
        return `el area del rectangulo es ${area}`
    }
    calcularPerimetro(){
        let perimetro = (this.ancho * 2) +(this.largo * 2)
        return `el perimetro del rectangulo es ${perimetro}`
    }

}