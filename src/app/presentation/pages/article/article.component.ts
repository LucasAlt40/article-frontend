import { Component, inject } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';
import { Article } from '../../../domain/model/article.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ArticleWithComments } from '../../resolvers/article.resolver';
import { Comment, CommentRequest } from '../../../domain/model/comment.model';
import { CommentComponent } from '../../components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../../domain/services/comment.service';

@Component({
  selector: 'app-article',
  imports: [
    TagComponent,
    CommonButtonComponent,
    DatePipe,
    CommentComponent,
    FormsModule,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article | null = null;
  comments: Comment[] | null = null;
  commentContent: string = '';
  private readonly commentService: CommentService = inject(CommentService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const resolved = this.route.snapshot.data['article'] as ArticleWithComments;
    this.article = resolved.article;
    this.comments = resolved.comments;
  }

  addComment = () => {
    const comment: CommentRequest = {
      author: 'Lucas',
      content: this.commentContent,
      articleId: this.article!.id,
    };

    this.commentService.addComment(comment).subscribe({
      next: () => {
        this.commentContent = '';
        alert('Comentário enviado com sucesso!');
      },
      complete: () => {
        this.getComments();
      },
    });
  };

  getComments() {
    this.commentService.getCommentsByArticleId(this.article!.id).subscribe({
      next: (val) => {
        this.comments = val;
      },
    });
  }
}
