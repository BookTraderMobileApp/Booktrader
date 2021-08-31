import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
    declarations: [ProductListComponent],
    exports: [ProductListComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

export class ComponentsModule {}
