import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    name = "Dariya";

    imageUrl = "https://via.placeholder.com/150";

    clickCount = 0;

    clickCounter(){
        this.clickCount++;
    }

    message = " ";






}
