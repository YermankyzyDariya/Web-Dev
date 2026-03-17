import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'b.html'
})
export class AppComponent {
    showGreetings = false;

    changeGreetings(){
        this.showGreetings = !this.showGreetings;
    }

}