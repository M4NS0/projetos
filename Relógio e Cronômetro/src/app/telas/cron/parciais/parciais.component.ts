import { Parcial } from './model/parcial.model'
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-parciais',
  templateUrl: './parciais.component.html',
  styleUrls: ['./parciais.component.scss']
})
export class ParciaisComponent implements OnInit {
  @Input() parciais: Array<Parcial>;
  constructor() { }

  ngOnInit(): void {
  }
  doReverse() {
    return this.parciais.reverse().slice();
  }

}
