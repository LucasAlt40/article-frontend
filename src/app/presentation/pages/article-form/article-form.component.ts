import { Component } from '@angular/core';
import { CommonInputComponent } from '../../components/common-input/common-input.component';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  imports: [CommonInputComponent, CommonButtonComponent, FormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent {
  title: string = '';
  content: string = '';
  image: string = '';
}
