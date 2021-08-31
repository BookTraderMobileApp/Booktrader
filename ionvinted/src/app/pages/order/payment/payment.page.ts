import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  product: any;
  price: number;
  itemId: number;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // retrieve the product id passed in parameter from the router
    // tslint:disable-next-line:radix
    this.product = this.dataService.getSingleProduct(parseInt(this.activatedRoute.snapshot.paramMap.get('id')));
    this.price = parseFloat(this.product.price);
  }

}
