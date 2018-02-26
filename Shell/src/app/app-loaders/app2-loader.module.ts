import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2Module} from 'app2-lib';
//import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    App2Module
    //SharedModule
  ],
  declarations: []
})
export class App2LoaderModule { }
