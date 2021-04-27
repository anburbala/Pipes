import { Component } from '@angular/core';
import {Product} from '../app/shared/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  product: Product[];

  constructor()
  {
    this.product = [{ Id: 1, Name: "Angular"}, {Id: 2, Name: "TypeScript" }];
  }
}

