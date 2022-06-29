import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {CustomMaterialModule} from './custom-material/custom-material.module';

//import {MovieCardComponent} from './components/poster-card-view/poster-card-view.component'

import {ImgMissingDirective} from './directives/img-missing.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    
  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  
  ]
})
export class SharedModule { }
