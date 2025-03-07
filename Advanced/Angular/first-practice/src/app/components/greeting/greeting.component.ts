import { Component, input, Input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
    @Input() msg: string = "";
    signalMsg: InputSignal<string> = input("");
}
