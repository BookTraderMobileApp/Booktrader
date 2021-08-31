import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: 'inbox.page.html',
  styleUrls: ['inbox.page.scss']
})
export class InboxPage {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor(
  ) { }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}


