import { Component, OnInit,AfterViewInit,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { products } from '../products';
import { CartService } from '../cart.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit , AfterViewInit{

  product;
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}

@ViewChild('myerr') myErrorText: any;

 ngAfterViewInit() {
  this.myErrorText.nativeElement.focus();
 }


}