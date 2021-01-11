import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dolares } from './model/dolares.model'
import { Reais } from './model/reais.model'

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.scss']
})
export class ConvComponent implements OnInit {

  valorBrl: number = null;
  valorUsd: number = null;
  formulario: FormGroup;
  dolares = new Dolares();
  reais = new Reais();

  constructor(public fb: FormBuilder) {
    this.formulario = fb.group({
      valorBrl: [''],
      valorUsd: ['']
    });
  }

  ngOnInit(): void {
  }
  enviarUsd(numero: number) {
    if (numero !== null) {
      this.valorBrl = numero * this.dolares.valorDeConversao;
    }
  }
  enviarBrl(numero: number) {
    if (numero !== null) {
      this.valorUsd = numero / this.reais.valorDeConversao;
    }
  }
}
