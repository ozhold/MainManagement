import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductViewModel } from '../../../core/dataContracts/productViewModel';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-view',
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {
  public product?: ProductViewModel;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const numericId = Number(id);
        this.productService.getById(numericId).subscribe(product => {
          this.product = product;
        });
      }
    });
  }
}
