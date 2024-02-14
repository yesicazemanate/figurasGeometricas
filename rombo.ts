import FiguraGeometrica from "./figurasGeometricas";

export default class Rombo extends FiguraGeometrica{
    lado: number
    diagonalVertical: number
    diagonalHorizontal: number
    constructor(nombre: string, lado: number, diagonalVertical: number , diagonalHorizontal: number) {
        super(nombre)
        this.lado = lado
        this.diagonalVertical = diagonalVertical
        this.diagonalHorizontal = diagonalHorizontal
    }
    getLado() {
        return this.lado
    }
    getDiagonalVertical() {
        return this.diagonalVertical
    }
    getDiagonalHorizontal() {
        return this.diagonalHorizontal
    }
    setLado(lado: number) {
        this.lado = lado
    }
    setDiagonalVertical(diagonalVertical: number) {
        this.diagonalVertical = diagonalVertical
    }
    setDiagonalHorizontal(diagonalHorizontal: number) {
        this.diagonalHorizontal= diagonalHorizontal
    }

    calcularArea() {
        let area = this.diagonalHorizontal * this.diagonalVertical / 2
        return`el area del rombo es ${area}`
    }
    calcularPerimetro(){
        let perimetro: number = this.lado * 4
        return `el perimetro del rombo es ${perimetro}`
    }

}