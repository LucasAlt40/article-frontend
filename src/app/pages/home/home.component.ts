import { Component, inject } from '@angular/core';
import { CommonButtonComponent } from '../../components/common-button/common-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router: Router = inject(Router);

  redirectToArticles = () => {
    this.router.navigate(['/articles']);
  }
}
