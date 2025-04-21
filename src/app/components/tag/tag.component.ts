import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}
