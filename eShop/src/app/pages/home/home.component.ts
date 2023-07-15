import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // change all any-s according to types
  productList: any[] = [];
  cartObj: any = {
    'CartId': 0,
    'CustId': 1,
    'ProductId': 0,
    'Quantity': 0,
    'AddedDate': '2023-07-14T12:58:09.496Z',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: any) => {
      console.log(result.data);
      
      this.productList = result.data;
    });
  }

  addItemToCart(productId: number) {
    this.cartObj.productId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any) => {
      if(result.result) {        
        alert('Product added to cart!')
        this.productService.cartAddedSubject.next(true);
      }
    });
  }
}
