import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderCmpComponent} from './components/header-cmp/header-cmp.component'
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderCmpComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-practice';
}
