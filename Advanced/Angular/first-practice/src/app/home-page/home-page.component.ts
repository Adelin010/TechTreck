import { Component } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home-page',
  imports: [GreetingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    msg:string = 'Hello everybody';
    signalMsg:string = "SignameMsg";

    ChangeMsg(event: KeyboardEvent): void{
      let key = event.key;
      if(key === "Enter"){
        
        const value = (event.target as HTMLInputElement).value;
        // reset the value to the previous value
        (event.target as HTMLInputElement).value = "";
        this.msg = value;

      }
    }
}
