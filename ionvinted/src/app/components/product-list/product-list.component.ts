import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any;
  @Input() showAvatar = false;
  @Input() showBump = false;

  profile: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.profile = this.dataService.getProfile();
  }
  // check if the product is in the wishlist of the current user (src/app/datas/users.json : user id = 1 wishlist tab )
  isFav(itemId) {
    if (this.profile.wishlist.indexOf(itemId) > -1) {
      return true;
    }
  }

// On click toogle the value of wishlist
  toogleFav(itemId) {
    if (this.profile.wishlist.indexOf(itemId) > -1) {
      this.dataService.removeToWishList(itemId);
    } else {
      this.dataService.addToWishList(itemId);
    }
  }

}
