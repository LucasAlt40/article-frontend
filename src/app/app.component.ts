import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ArticleProject';
}
