import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter: number = 100;

  increaseBy( value: number ):void {
    //this.counter += 1;
    this.counter += value ;
  }

  reset():void {
    this.counter = 100;
  }

}
