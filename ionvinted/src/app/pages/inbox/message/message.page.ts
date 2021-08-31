import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  id: number;
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

      // retrieve the user id passed in parameter from the router (to display information such as user's avatar, pseudo, message ..)
     // tslint:disable-next-line:radix
     this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
     this.user = this.dataService.getSingleUser(this.id);
  }

}
