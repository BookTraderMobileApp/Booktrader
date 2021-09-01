import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {environment,snapshotToArray} from '../../../environments/environment'

@Component({
  selector: 'app-tab-recherche',
  templateUrl: './tab-recherche.page.html',
  styleUrls: ['./tab-recherche.page.scss'],
})
export class TabRecherchePage implements OnInit {
  items;cats;
  ref2=firebase.database().ref('categories/'); 
  ref=firebase.database().ref('genres/');
  constructor() {
    this.ref.on('value',resp =>{
      this.items=snapshotToArray(resp)
    })

    this.ref2.on('value',resp =>{
      this.cats=snapshotToArray(resp)
    })
   }

  ngOnInit() {
    console.log('la reference  ',this.ref)
  }

  addItem(item){
    let newItem = this.ref.push()
    newItem.set(item)
  }

}
