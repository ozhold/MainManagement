import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductModel } from '../dataContracts/createProductModel';
import { ProductViewModel } from '../dataContracts/productViewModel';
import { Observable } from 'rxjs';
import { UpdateProductModel } from '../dataContracts/updateProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'https://localhost:7237/api';
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductViewModel[]> {
    return this.http.get<ProductViewModel[]>(`${this.url}/product`);
  }

  public getById(id: number): Observable<ProductViewModel> {
    return this.http.get<ProductViewModel>(`${this.url}/product/${id}`);
  }

  public create(productToCreate: CreateProductModel): Observable<ProductViewModel> {
    return this.http.post<ProductViewModel>(`${this.url}/product`, productToCreate);
  }

  public update(productToUpdate: UpdateProductModel): Observable<ProductViewModel> {
    return this.http.put<ProductViewModel>(`${this.url}/product`, productToUpdate);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/product/${id}`);
  }
}
