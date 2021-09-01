import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRecherchePageRoutingModule } from './tab-recherche-routing.module';

import { TabRecherchePage } from './tab-recherche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRecherchePageRoutingModule
  ],
  declarations: [TabRecherchePage]
})
export class TabRecherchePageModule {}
