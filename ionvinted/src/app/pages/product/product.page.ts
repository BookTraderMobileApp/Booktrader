import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0; // activated segment by default
  hideVariation = true; // by default hide the product variation block
  hidePostage = true; // by default hide the delivery information block
  profile: any;
  product: any;
  id: number;
  memberItems: string[] = [];
  similarItems: string[] = [];
  // initialize the review calculation for the stars to display
  completeStars = 0;
  halfStars = 0;
  emptyStars = 0;

  constructor( private activatedRoute: ActivatedRoute, private dataService: DataService ) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));  // product id passed in parameter
    this.profile = this.dataService.getProfile();
    this.product = this.dataService.getSingleProduct(this.id);
    this.memberItems = this.dataService.getMemberItems(this.product.user_id);
    this.similarItems = this.dataService.getSimilarItems(this.product.category_id, this.id);

    // Rating calculation
        // tslint:disable-next-line:radix
    this.completeStars = parseInt(this.product.user_star);
    if (this.product.user_star % 1 !== 0) {
      this.halfStars = 1;
    }
    this.emptyStars = 5 - this.completeStars - this.halfStars;

  }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  async toogleVariation() {
      this.hideVariation = false;
  }

  async tooglePostage() {

    if (this.hidePostage) {
      this.hidePostage = false;
    } else {
      this.hidePostage = true;
    }
}

isFav(itemId) {
  if (this.profile.wishlist.indexOf(itemId) > -1) {
    return true;
  }
}
toogleFav(itemId) {
  if (this.profile.wishlist.indexOf(itemId) > -1) {
    this.dataService.removeToWishList(itemId);
  } else {
    this.dataService.addToWishList(itemId);
  }
}

getTabNumber(num) {
  return new Array(num);
}


}
