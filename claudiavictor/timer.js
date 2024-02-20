class Timer {
    constructor(fecha, elementId) {
        this.fecha = fecha
        this.diferencia = {}
        this.element = document.getElementById(elementId)
        this.diferenciaFechas()
    }

    diferenciaFechas() {
        let fechaActual = new Date()
        let diferenciaMs = fechaActual - this.fecha

        let segundos = Math.floor(diferenciaMs / 1000)
        let minutos = Math.floor(segundos / 60)
        let horas = Math.floor(minutos / 60)
        let dias = Math.floor(horas / 24)

        let años = Math.floor(dias / 365)
        let meses = Math.floor((dias % 365) / 30)

        segundos %= 60
        minutos %= 60
        horas %= 24
        dias %= 30

        this.diferencia = {
            años,
            meses,
            dias,
            horas,
            minutos,
            segundos
        }
    }

    displayDiferencia() {
        this.element.innerText = `Hace ${this.diferencia.años} ${this.pluralize("año", this.diferencia.años)} ${this.diferencia.meses} ${this.pluralize("mes", this.diferencia.meses)} ${this.diferencia.dias} ${this.pluralize("día", this.diferencia.dias)} ${this.diferencia.horas} ${this.pluralize("hora", this.diferencia.horas)} ${this.diferencia.minutos} ${this.pluralize("min", this.diferencia.minutos)} y ${this.diferencia.segundos} ${this.pluralize("seg", this.diferencia.segundos)}`
    }

    pluralize(word, count) {
        if(word== "mes") word+='e'
        return count !== 1 ? `${word}s` : word
    }
}

let fechaNovios = new Date('2023-02-17T20:00:00')
const timer = new Timer(fechaNovios, "timer")

timer.displayDiferencia()

setInterval(() => {
    timer.diferenciaFechas()
    timer.displayDiferencia()
}, 1000)


document.addEventListener("DOMContentLoaded", function() {

    const elemento = document.getElementById("timer-container")

    elemento.style.top = "40%";
});