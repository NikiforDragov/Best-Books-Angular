import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  cartProducts: any[] = [];
  subTotal: number = 0
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustomerId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      this.cartProducts.forEach((element) => {
        this.subTotal = this.subTotal + element.productPrice;
      });
    });
  }

  removeItem(id: number) {
    this.productService.removeCartItemById(id).subscribe((res:any) => {
      if(res.result) {
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
}
