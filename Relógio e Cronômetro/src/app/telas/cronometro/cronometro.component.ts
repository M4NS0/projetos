import { Component, OnInit } from '@angular/core';
import { Parcial } from './model/Parcial';


@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent {

  horaStr = '';
  horas: number = 0;
  minutoStr = '';
  minutos: number = 0;
  segundoStr = '';
  segundos: number = 0;
  milissegundoStr = '';
  milissegundos: number = 0;
  parcial = '';
  parciais: Array<Parcial> = new Array<Parcial>();
  show = false;
  id: number = 0;

  changeShow() {
    if (this.show === true)
      this.show = false;
    else this.show = true;
  }

  startTimer(onOff: boolean) {
    const startTime = Date.now();
    this.startMillissegundos(startTime, onOff);
    this.startSegundos();
    this.startMinutes();
    this.startHours();

  }
  intervalMs: any;
  startMillissegundos(startTime: number, onOff: boolean) {
    
    if (onOff == true) {
      this.intervalMs = setInterval(() => {
        this.milissegundos = Date.now() - startTime;
        this.milissegundoStr = this.formatMs(this.milissegundos); // condicional aqui
      }, 1);
    } if (onOff == false) {
      clearInterval(this.intervalMs); // nao funfou
    }
  }

  formatMs(n: number) {

    let numStr = n.toString();
    if (numStr.length == 3) {
      return numStr;
    } else {
      return numStr.substr(numStr.length - 3)
    }
  }

  startSegundos() {
    setInterval(() => {
      this.segundos += 1;

      if (this.segundos >= 59) {
        this.segundos = 0;
      }
      this.segundoStr = this.formatHMS(this.segundos);
    }, 1000);
  }


  startMinutes() {
    setInterval(() => {
      this.minutos += 1;
      this.minutoStr = this.formatHMS(this.minutos);
      if (this.minutos >= 59) {
        this.minutos = 0;
      }
    }, 60000);
  }


  startHours() {
    setInterval(() => {
      this.horas += 1;
      this.horaStr = this.formatHMS(this.horas);
      if (this.horas > 24) {
        this.horas = 0;
      }
    }, 3600000);
  }

  formatHMS(n: number) {
    if (this.segundoStr === "") 
      this.segundoStr = "00"
    if (this.minutoStr === "") 
      this.minutoStr = "00"
    if (this.horaStr === "") 
      this.horaStr = "00"

    let numStr = n.toString();
    if (numStr.length === 1) {
      return ('0' + numStr);
    }
    if (numStr.length === 2) {
      return numStr;
    }
  }


  pushParcialEmArray() {
    this.id++;
    this.formatTimer();
    let tempo = {} as Parcial;
    tempo.id = this.id;
    tempo.milissegundos = this.milissegundoStr;
    tempo.segundos = this.segundoStr;
    tempo.minutos = this.minutoStr;
    tempo.horas = this.horaStr;
    this.parciais.push(tempo);
  }

  doReverse() {
    return this.parciais.reverse().slice();
  }

  formatTimer() {
    this.formatHMS(this.horas);
    this.formatHMS(this.minutos);
    this.formatHMS(this.segundos);
    this.formatMs(this.milissegundos);

    this.parcial = this.horaStr + ":" + this.minutoStr + ":" + this.segundoStr + ":" + this.milissegundoStr + "\n";
  }

  resetTimer() {
    this.horaStr = this.minutoStr = this.segundoStr = this.milissegundoStr = "00";
    this.horas = this.minutos = this.segundos = this.milissegundos = 0;
    this.parciais = [];
    this.parcial = "";
  }

};