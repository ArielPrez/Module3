import { CustomPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="name">
    <p> Hello {{ name | capitalize }}! </
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Pipes';
}
export class CustomPipesComponent {}