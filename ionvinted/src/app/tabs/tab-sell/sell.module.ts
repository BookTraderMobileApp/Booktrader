import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellPage } from './sell.page';
import { IonicSelectableModule } from 'ionic-selectable';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SellPage }]),
    TranslateModule.forChild(),
    IonicSelectableModule
  ],
  declarations: [SellPage]
})
export class SellPageModule {}
