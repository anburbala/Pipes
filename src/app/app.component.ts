import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  product: { Id: number; Name: string; }[];
  str = "kavin";
  constructor()
  {
    this.product = [{ Id: 1, Name: "Angular"}, {Id: 2, Name: "TypeScript" }];
  }
}

