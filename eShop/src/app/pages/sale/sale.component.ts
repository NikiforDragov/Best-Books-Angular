import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  cartProducts: any[] = [];
  subTotal: number = 0;
  saleObj: any = {
    saleId: 0,
    custId: 1,
    saleDate: new Date(),
    totalInvoiceAmount: 0,
    discount: 0,
    paymentNaration: 'Patmm',
    deliveryAddress1: 'Plot nio 122',
    deliveryAddress2: 'Ner ATM',
    deliveryCity: 'Pune',
    deliveryPinCode: '440033',
    deliveryLandMark: 'ATM',
  };
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
    this.productService.removeCartItemById(id).subscribe((res: any) => {
      if (res.result) {
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    });
  }

  makeSale(): void {
    this.saleObj.totalInvoiceAmount = this.subTotal;
    this.productService.cartAddedSubject.next(true);
    this.productService.makeSale( this.saleObj).subscribe((res: any) => {
      if (res.result) {
        alert("Sale Success")
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
}
