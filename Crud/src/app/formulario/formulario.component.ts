import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { Message } from '../models/message';
import { Product } from '../models/product';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formOn: boolean = false;
  product = new Product();
  @Output() object = new EventEmitter();
  @ViewChild(AlertComponent) alert: any;
  isNumeric = true;
 
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    sku: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.getValidItemAndEmmit();
    this.formOn = false;
  }

  private getValidItemAndEmmit() {
    this.product.name = this.profileForm.get('name')?.value;
    this.product.price = this.profileForm.get('price')?.value;
    this.product.sku = this.profileForm.get('sku')?.value;
    this.object.emit(this.product);
  }

  public loadForm() {
    this.formOn = true;
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.isNumeric = false;
      return false;
    }
    this.isNumeric = true;
    return true;

  }
}
