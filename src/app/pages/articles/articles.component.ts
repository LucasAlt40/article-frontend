import { Component } from '@angular/core';
import { TagComponent } from "../../components/tag/tag.component";

@Component({
  selector: 'app-articles',
  imports: [TagComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

}
