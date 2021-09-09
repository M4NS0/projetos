import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { AlertComponent } from '../alert/alert.component';
import { Message } from '../models/message';
import { Product } from '../models/product';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  products: Array<Product> = [];

  @ViewChild(AlertComponent) alert: any;
  badMsg: Message = { message: 'Server Error', status: 1 };
  goodMsg: Message = { message: 'Success!', status: 2 };
  product:Product = {
    id: 0,
    name: "",
    price: 0,
    sku: ""
  };
  constructor(private apiService : ApiService ) { }
  err: any;
  ngOnInit(): void {
    this.getProductList();
  }

  private getProductList() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
    }) 
  }

  public addProduct(product: Product) {
    this.apiService.addProduct(product).subscribe(() => {
      this.getProductList();  
      this.alert.show(this.goodMsg);  
    },
      (error: any) => {
        this.err = error;
        if (error)  {
            this.alert.show(this.badMsg);
        } 
      });
  }

  public removeProduct(id:number) {
    this.apiService.removeProduct(id).subscribe(()=> {
      this.getProductList();
      this.alert.show(this.goodMsg);
    },
    (error: any) => {
      this.err = error;
      if (error)  {
          this.alert.show(this.badMsg);
      }  
    });
  }
}