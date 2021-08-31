import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  profile: any;
  wishlist: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.wishlist = this.dataService.getWishList();
  }

}
