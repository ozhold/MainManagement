import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductComponent {
  public products = [
    { id: 1, name: 'Product 1', price: 100, category: { name: 'een categorie' } },
    { id: 2, name: 'Product 2', price: 20, category: { name: 'een categorie2' } }
  ];

  public deleteProduct(productId: number): void {
    console.log(`Product with ID ${productId} deleted`);
  }
}
