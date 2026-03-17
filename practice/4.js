import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class Appcomponent{
    name = "Dariya"

    imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"

    couner = 0;

    clickCounter(){
        this.counter++;
    }

    hobby =" "


}