import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResultadoComponent } from '../resultado/resultado.component'
import { Imc } from './model/imc.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nomeForm: FormGroup;
  retorno = new ResultadoComponent();
  imc = new Imc();

  constructor(public fb: FormBuilder) {
    this.nomeForm = fb.group({
      altura: ['', Validators.compose([Validators.required])],
      peso: ['', Validators.compose([Validators.required])]
    });
  }

  calcular() {
    if (this.nomeForm.valid === false) {
      this.retorno.mensagem = "Preencha adequadamente os campos"
      this.retorno.alerta = "alert alert-danger";
      this.retorno.redirecionamento = ""

    } else {
      this.retorno.redirecionamento = "Compartilhar no Facebook"
      this.retorno.resultado = this.calculoIMC(this.imc);
      this.calcularResultado();
    }
  }

  calculoIMC(imc: Imc): number {

    let res = parseFloat(((imc.peso / (imc.altura * imc.altura)) * 10000).toFixed(2));
    return res;
  }
  calcularResultado() {
    if (this.retorno.resultado <= 18.5) {
      this.retorno.mensagem = "Abaixo do peso Ideal";
      this.retorno.alerta = "alert alert-danger";
    }
    else if ((this.retorno.resultado > 18.5) && (this.retorno.resultado < 24.9)) {
      this.retorno.mensagem = "Parabéns, você está no seu peso ideal";
      this.retorno.alerta = "alert alert-success";
    }
    else if ((this.retorno.resultado > 25.0) && (this.retorno.resultado < 29.9)) {
      this.retorno.mensagem = "Você está acima do peso ideal";
      this.retorno.alerta = "alert alert-warning";
    }
    else if ((this.retorno.resultado > 30) && (this.retorno.resultado < 34.9)) {
      this.retorno.mensagem = "Obesidade Grau I";
      this.retorno.alerta = "alert alert-danger";
    }
    else if ((this.retorno.resultado > 35) && (this.retorno.resultado < 39, 9)) {
      this.retorno.mensagem = "Obesidade Grau II"
      this.retorno.alerta = "alert alert-danger";
    }
    if (this.retorno.resultado >= 40) {
      this.retorno.mensagem = "Obesidade Mórbida"
      this.retorno.alerta = "alert alert-dark";
    }
  }
}