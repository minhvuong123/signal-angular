import { Component, effect, EffectRef, OnDestroy, signal } from '@angular/core';
import { CounterService } from './counter-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  title = 'signal-angular';
  effectRef: EffectRef;

  counter = signal(0);

  constructor(
    private counterService: CounterService    
  ) {
    this.effectRef = effect((cleanUp) => {
      cleanUp(() => {
        console.log("effect destroyed");
      })
    }, {
      manualCleanup: true
    })
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }

  onCleanUp(): void {
    this.effectRef.destroy();
  }

  courseChanged(value: string): void {
    console.log(value)
  }

  ngOnDestroy(): void {
    this.effectRef.destroy();
  }
}
