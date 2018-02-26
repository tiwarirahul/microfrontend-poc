import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Module} from 'app1-lib';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    App1Module
    //SharedModule
  ],
  declarations: []
})
export class App1LoaderModule { }
