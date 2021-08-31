import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage  implements OnInit {
  selected = '';
  constructor( private language: LanguageService) { this.selected = this.language.selected; }

  ngOnInit() {}

  select(event) {
    this.language.setLanguage(event.detail.value);
    this.selected = this.language.selected;
  }

}
