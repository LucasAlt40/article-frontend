import { Component, inject } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';
import { Article } from '../../../domain/model/article.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ArticleWithComments } from '../../resolvers/article.resolver';
import { Comment } from '../../../domain/model/comment.model';
import { CommentComponent } from '../../components/comment/comment.component';

@Component({
  selector: 'app-article',
  imports: [TagComponent, CommonButtonComponent, DatePipe, CommentComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article | null = null;
  comments: Comment[] | null = null;
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const resolved = this.route.snapshot.data['article'] as ArticleWithComments;
    this.article = resolved.article;
    this.comments = resolved.comments;
  }
}
