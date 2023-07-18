import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  // change all any-s according to types
  productList: any[] = [];
  cartObj: any = {
    cartId: 0,
    custId: 1,
    productId: 0,
    quantity: 0,
    addedDate: '2023-07-14T12:58:09.496Z',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result.data;
    });
  }

  addItemToCart(productId: number) {
    this.cartObj.productId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any) => {
      if (result.result) {
        alert('Product added to cart!');
        this.productService.cartAddedSubject.next(true);
      }
    });
  }
}
