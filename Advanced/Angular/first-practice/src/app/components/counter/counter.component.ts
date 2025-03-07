import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counterVal: number = 0;
  counterSignal: WritableSignal<number> = signal(0);

  increment():void{
    this.counterVal++;
    this.counterSignal.update((oldVal: number) => oldVal+1);
  }

  decrement():void{
    this.counterVal--;
    this.counterSignal.update((oldVal: number) => oldVal-1);
  }

  reset():void{
    this.counterVal = 0;
    this.counterSignal.set(0);
  }

}
