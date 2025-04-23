import { Component, inject, OnInit } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';
import { CommonInputComponent } from '../../components/common-input/common-input.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { CategoryService } from '../../../domain/services/category.service';
import { Category } from '../../../domain/model/category.model';
import { ArticleService } from '../../../domain/services/article.service';
import { ArticleList } from '../../../domain/model/article.model';
import { Router } from '@angular/router';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';

@Component({
  selector: 'app-articles',
  imports: [
    TagComponent,
    CommonInputComponent,
    CardArticleComponent,
    CommonButtonComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit {
  private readonly categoryService: CategoryService = inject(CategoryService);
  private readonly articleService: ArticleService = inject(ArticleService);
  private readonly router: Router = inject(Router);

  tags: Category[] = [];
  allArticles: ArticleList[] = [];
  filteredArticles: ArticleList[] = [];
  paginatedArticles: ArticleList[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 0;
  pages: number[] = [];

  searchText: string = '';
  selectedTag: string | null = null;

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((val) => {
      this.tags = val;
    });

    this.articleService.getAllArticles().subscribe((val) => {
      this.allArticles = val;
      this.applyFilters();
    });
  }

  onSearchChange(value: string) {
    this.searchText = value.toLowerCase();
    this.applyFilters();
  }

  onTagSelected(tag: { label: string; selected: boolean }) {
    this.selectedTag = tag.selected ? tag.label : null;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredArticles = this.allArticles.filter((article) => {
      const matchesTitle = article.title
        .toLowerCase()
        .includes(this.searchText);
      const matchesTag = this.selectedTag
        ? article.categories.some((cat) => cat.name === this.selectedTag)
        : true;
      return matchesTitle && matchesTag;
    });

    this.setupPagination();
  }

  setupPagination(): void {
    this.totalPages = Math.ceil(
      this.filteredArticles.length / this.itemsPerPage
    );
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.changePage(1);
  }

  changePage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedArticles = this.filteredArticles.slice(startIndex, endIndex);
  }

  navigateArticle(id: number) {
    this.router.navigate(['/article', id]);
  }

  navigateToForm = () => {
    this.router.navigate(['/article-form']);
  };
}
