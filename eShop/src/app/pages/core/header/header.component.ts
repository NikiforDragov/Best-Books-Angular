import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartProducts: any[] = [];
  subTotal: number = 0;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe((res) => {
      this.loadCart();
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }

  redirectToSale() {
    this.router.navigateByUrl('sale');
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustomerId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      this.cartProducts.forEach((element) => {
        this.subTotal = element.productPrice;
      });
    });
  }
}
