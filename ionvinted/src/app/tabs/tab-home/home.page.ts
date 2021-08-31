import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

products: any;

    constructor(private dataService: DataService) {}

    ngOnInit() {
    this.products = this.dataService.getProducts();
  }


}
