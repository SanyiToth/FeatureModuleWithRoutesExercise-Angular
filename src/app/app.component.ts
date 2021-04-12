import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feature-module-with-routes-exercise';
  routes = [
    {
      title: 'Home',
      root: ''
    },
    {
      title: 'Contact',
      root: '/contact'
    },
    {
      title: 'Product',
      root: '/products'
    }
  ];


}
