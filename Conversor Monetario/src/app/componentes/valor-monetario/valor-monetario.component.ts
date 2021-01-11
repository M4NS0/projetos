import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-valor-monetario',
  templateUrl: './valor-monetario.component.html',
  styleUrls: ['./valor-monetario.component.scss']
})
export class ValorMonetarioComponent implements OnInit {
  @Input() moeda: string = "";
  @Input() valor: number = 0;
  @Output() envio: EventEmitter<number> = new EventEmitter<number>(true);
  @Input() formulario: FormGroup;
  @Input() controlName: string;
  constructor() { }

  ngOnInit(): void {
  }
  onNumberChange(valor: number) {
    this.envio.emit(this.valor);
  }
}
