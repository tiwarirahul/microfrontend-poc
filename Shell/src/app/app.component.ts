import { Component } from '@angular/core';
import {RouterService} from 'common-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route : RouterService){

  }
  title = 'Simple App';

  callAreMessage(): void{

    this.route.navigate('/are/message');


  }

  callAreHome(): void {

    this.route.navigate('/are/home');
  }



}
