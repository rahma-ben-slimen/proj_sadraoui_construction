import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  constructor(private router: Router) {}

  // 3. Create the navigation function
  goToConnexion() {
    // The path must match the one defined in your routes file
    this.router.navigate(['/connexion']);
  }
}
