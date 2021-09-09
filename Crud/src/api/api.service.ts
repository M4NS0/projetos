import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from 'src/app/models/product';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private SERVER_URL = "http://angular-test.blabs.us/";
  private SERVER_URL = "http://localhost:3000/products/"; // endpoint para testes

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.SERVER_URL)
      .pipe(
        catchError(this.handleError))
  }

  public addProduct(prod: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.SERVER_URL, JSON.stringify(prod), this.httpOptions)
      .pipe(
        catchError(this.handleError),
      )
  }

  public removeProduct(id: number) {
    return this.httpClient.delete(this.SERVER_URL + id, this.httpOptions)
      .pipe(
        catchError(this.handleError),
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;

    } else {
      errorMessage = `Server error: ${error.status}, ` + `${error.message}`;
    }
    return throwError(errorMessage);
  };
}