import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { ArticleList } from '../../../domain/model/article.model';

@Component({
  selector: 'app-card-article',
  imports: [TagComponent],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.scss',
})
export class CardArticleComponent {
  @Input() article!: ArticleList;
}
