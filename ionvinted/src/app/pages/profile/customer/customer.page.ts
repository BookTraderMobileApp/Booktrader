import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;
  currentUser = false;
  id: number;
  user: any;
  memberItems: any;

  constructor( private activatedRoute: ActivatedRoute, private dataService: DataService ) {}

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('id') === '1') {
      this.currentUser = true;
    }

    // tslint:disable-next-line:radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.user = this.dataService.getSingleUser(this.id);
    this.memberItems = this.dataService.getMemberItems(this.id);

    console.log(this.memberItems);

  }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
