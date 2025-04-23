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
  @Input() id: number = 0;
  @Input() selected: boolean = false;
  @Input() paddingTag: string = '';
  @Output() selectedChange = new EventEmitter<{
    label: string;
    id: number;
    selected: boolean;
  }>();

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit({
      label: this.label,
      selected: this.selected,
      id: this.id,
    });
  }
}
