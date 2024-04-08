import { Component, computed, effect, EventEmitter, input, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-signal',
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.css'
})
export class InputSignalComponent {
  firstName = signal('');
  // @Input() course = '';
  // course = input<string>();
  course = input<string>(null, {
    alias: 'course'
  });

  @Output() courseChanged = new EventEmitter<string>();

  constructor() {
    const description = computed(() => {
      const course = this.course();

      return course + "oajdaidsu";
    })

    console.log(description())

    effect(() => {
      console.log("effect run")
    })
  }

  change() {
    this.courseChanged.emit(this.course())
  }
}
