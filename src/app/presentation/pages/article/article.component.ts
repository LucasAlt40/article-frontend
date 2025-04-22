import { Component } from '@angular/core';
import { TagComponent } from "../../components/tag/tag.component";
import { CommonButtonComponent } from "../../components/common-button/common-button.component";

@Component({
  selector: 'app-article',
  imports: [TagComponent, CommonButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
