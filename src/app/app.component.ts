import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  likecounter: number = 0;
  title: string = 'testapp';

  increaseByOne() {
    this.likecounter++;
  }
}
