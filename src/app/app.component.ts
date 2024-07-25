import { Component } from '@angular/core';
import { ProduitsComponent } from './produits/produits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProduitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produits';
}
