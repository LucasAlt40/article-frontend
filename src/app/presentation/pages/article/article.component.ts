import { Component, inject } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';
import { Article } from '../../../domain/model/article.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [TagComponent, CommonButtonComponent, DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article | null = null;
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.article = this.route.snapshot.data['article'];
  }
}
