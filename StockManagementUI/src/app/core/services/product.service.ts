import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductModel } from '../dataContracts/createProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:1111/api';
  constructor(private http: HttpClient) { }

  public create(productToCreate: CreateProductModel){
    return this.http.post<CreateProductModel>(`${this.url}/products`, productToCreate);
  }
}
