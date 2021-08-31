import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabRecherchePage } from './tab-recherche.page';

const routes: Routes = [
  {
    path: '',
    component: TabRecherchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRecherchePageRoutingModule {}
