import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

    students = [
        {id: 1, name: 'Ali', grade: 85 },
        { id: 2, name: 'Sara', grade: 92 },
        { id: 3, name: 'Dmitry', grade: 78 },
        { id: 4, name: 'Lina', grade: 95 }
    ];
}