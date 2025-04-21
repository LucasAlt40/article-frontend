import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './common-input.component.html',
  styleUrl: './common-input.component.scss',
})
export class CommonInputComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(novoValor: string) {
    this.value = novoValor;
    this.valueChange.emit(this.value);
  }
}
