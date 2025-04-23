import { Component, inject, OnInit } from '@angular/core';
import { CommonInputComponent } from '../../components/common-input/common-input.component';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from '../../components/tag/tag.component';
import { CategoryService } from '../../../domain/services/category.service';
import { Category } from '../../../domain/model/category.model';
import { ArticleService } from '../../../domain/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleRequest } from '../../../domain/model/article.model';
import { ArticleWithComments } from '../../resolvers/article.resolver';

@Component({
  selector: 'app-article-form',
  imports: [
    CommonInputComponent,
    CommonButtonComponent,
    FormsModule,
    TagComponent,
  ],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  standalone: true,
})
export class ArticleFormComponent implements OnInit {
  title = '';
  content = '';
  image = '';
  resume = '';
  selectedCategories: number[] = [];
  tags: Category[] = [];
  article: Article | null = null;

  private readonly categoryService: CategoryService = inject(CategoryService);
  private readonly articleService: ArticleService = inject(ArticleService);
  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.categoryService
      .getAllCategories()
      .subscribe((val) => (this.tags = val));

    const resolved = this.route.snapshot.data['article'] as ArticleWithComments;
    this.article = resolved?.article ?? null;

    if (this.article) {
      this.title = this.article.title;
      this.content = this.article.content;
      this.resume = this.article.resume;
      this.image = this.article.image;
      this.selectedCategories = this.article.categories.map((c) => c.id);
    }
  }

  onCategoryToggled(event: { label: string; selected: boolean; id: number }) {
    const { selected, id } = event;

    if (selected) {
      if (this.selectedCategories.length < 3) {
        this.selectedCategories.push(id);
      } else {
        alert('Você pode selecionar no máximo 3 categorias.');
        event.selected = false;
      }
    } else {
      this.selectedCategories = this.selectedCategories.filter((i) => i !== id);
    }
  }

  submit = () => {
    const payload: ArticleRequest = {
      author: 'Lucas',
      title: this.title,
      content: this.content,
      resume: this.resume,
      image: this.image,
      categoriesId: this.selectedCategories,
    };

    if (this.article) {
      this.articleService.updateArticle(this.article.id, payload).subscribe({
        next: () => {
          alert('Artigo atualizado com sucesso!');
          this.router.navigate(['/articles']);
        },
        error: (err) => alert('Erro ao atualizar: ' + err.message),
      });
    } else {
      this.articleService.createArticle(payload).subscribe({
        next: () => {
          alert('Artigo criado com sucesso!');
          this.router.navigate(['/articles']);
        },
        error: (err) => alert('Erro ao criar: ' + err.message),
      });
    }
  };
}
