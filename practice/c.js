import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    counter = 0;

    increament(){
        this.counter++;
    }

    decreement(){
        this.counter--;
    }


}