import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  products: any;
  id: number;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.products = this.dataService.getCategoryList(this.id);

  }

}
