import FiguraGeometrica from './figurasGeometricas';

export default class Circulo extends FiguraGeometrica{
    radio: number

    constructor(nombre: string,radio: number) {
        super(nombre)
        this.radio = radio
       
    }
    getRadio() {
        return this.radio
    }
    setRadio(radio: number) {
        this.radio = radio
    }
    calcularArea(){
        let area: number = Math.PI * Math.pow(2, this.radio)
        return `el area del circulo es ${area}`
    }
    calcularPerimetro() {
        let perimetro: number = 2 * Math.PI * (this.radio)
        return `el perimetro del circulo es ${perimetro}`
        
    }


}