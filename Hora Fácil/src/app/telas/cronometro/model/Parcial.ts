export class Parcial{
    id: number;
    milissegundos: string;
    segundos: string;
    minutos: string;
    horas: string;

    constructor(id: number, milissegundos: string, segundos: string, minutos: string, horas: string) {
        this.id = id;
        this.milissegundos = milissegundos;
        this.segundos = segundos;
        this.minutos = minutos;
        this.horas = horas;
      }
    
}