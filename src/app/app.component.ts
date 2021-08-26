import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'com-output';

  onomatopoeias: string[] = [];

  onReceiveNewOnomatopia($event: string) {
    console.log("onReceiveNew ! " + $event)
    this.onomatopoeias.push($event);
  }

}
