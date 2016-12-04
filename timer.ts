import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'countdown',
  template: '<h1>Quedan: {{seconds}}</h1>'  
})
class CountdownComponent { 

  @Input() seconds: number;
  intervalId: number;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();



  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearTimeout(this.intervalId);
      // Un evento es emitido cuando finalice la cuenta atrás
      this.complete.emit(null); 
    }
    this.progress.emit(this.seconds);
  }
}

@Component({
  selector: 'timer',
  directives: [CountdownComponent],
  template: `<div class="container text-center">
               <img src="assets/img/reloj2.png" />
               <countdown [seconds]="3" (complete)="pepe()" (progress)="hola()">
               ></countdown>
               <h1 id="demo"></h1>
             </div>`

})
class TimerComponent {
  onCountdownCompleted(): void {
    alert('¡Tiempo Acabado!');

  }
  pepe():void{
    document.write("tiempo acabado");
  }
  hola():void{
    document.getElementById("demo").innerHTML = "Hello World";
  }
}


bootstrap(TimerComponent);