import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { chatService } from '../../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

products: any;

    constructor(
      private dataService: DataService,
      private chatService: chatService,
      private router : Router,
      ) {}

    ngOnInit() {
    this.products = this.dataService.getProducts();
  }
  signOut(){
    this.chatService.signOut()
    this.router.navigateByUrl('',{ replaceUrl: true});
    console.log('OK')
  }

}
