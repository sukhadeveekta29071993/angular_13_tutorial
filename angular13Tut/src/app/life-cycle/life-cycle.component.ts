import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent {
  inputText: string = '';

  destroy: boolean = true;

  onSubmit(text: HTMLInputElement) {
    this.inputText = text.value;
  }

  onDestroy() {
    this.destroy = false;
  }
}
