
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
declare var require: any;
@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0; // default index
  categories = require('../../datas/category.json');

  constructor() {}

  ngOnInit() {
    console.log(this.categories);
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }


}
