import { Component, Input } from '@angular/core';
import { Comment } from '../../../domain/model/comment.model';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Comment;

  get formattedTime(): string {
    const now = new Date();
    const created = new Date(this.comment.createdAt);
    const diffMs = now.getTime() - created.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays === 0) {
      if (diffHours > 0) return `há ${diffHours}h`;
      if (diffMinutes > 0) return `há ${diffMinutes}min`;
      return 'agora mesmo';
    } else if (diffDays === 1) {
      return 'ontem';
    } else {
      return `há ${diffDays} dias`;
    }
  }
}
