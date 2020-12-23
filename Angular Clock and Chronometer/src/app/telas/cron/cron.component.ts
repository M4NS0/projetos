import { Component, OnInit } from '@angular/core';
import { Parcial } from './parciais/model/parcial.model';
import { ParciaisComponent } from './parciais/parciais.component';

@Component({
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.scss']
})
export class CronComponent implements OnInit {
  tempo: number = 0;
  tempoStr: string = "";
  parciais: Array<Parcial> = new Array<Parcial>();

  show = false;
  id: number = 0;
  interval: any;
  startTime: number;
  onOff: boolean;
  

  constructor() { }
  ngOnInit(): void {
  }

  
  startTimer(onOff: boolean) {
    this.startTime = Date.now();
    this.runInterval(onOff, this.startTime);

  }
  runInterval(onOff: boolean, startTime: number) {

    if (onOff == true) {
      this.interval = setInterval(() => {
        this.tempo = Date.now() - startTime;
      })
    }
    if (onOff == false) {
      clearInterval(this.interval);

    }
  }

  pushParcialEmArray() {
    this.id++;
    let parcial: Parcial = new Parcial();

    parcial.id = this.id;
    parcial.horas = this.tempo;
    this.parciais.push(parcial);
  }

  resetTimer() {
    this.runInterval(false, 0);
    this.tempo = 0;
    this.tempoStr = "00"
    this.parciais = [];
   
  }
}
