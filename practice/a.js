import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class Appcomponent{
    name = "Dariya";

    languages = [
        "JavaScript",
        "Python",
        "C++"
    ];
}

