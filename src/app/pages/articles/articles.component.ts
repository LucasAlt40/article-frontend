import { Component } from '@angular/core';
import { TagComponent } from "../../components/tag/tag.component";
import { CommonInputComponent } from "../../components/common-input/common-input.component";

@Component({
  selector: 'app-articles',
  imports: [TagComponent, CommonInputComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

}
