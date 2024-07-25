import { Component,  Input, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produit } from '../produits/produits.component'; 

@Component({
  selector: 'app-details-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})
export class DetailsProduitsComponent  {
  // Utilisation du décorateur @Input pour recevoir un produit du composant parent
  @Input() produit!: Produit;

  // Utilisation du décorateur @Output pour émettre un événement lorsque le popup est fermé
  @Output() close = new EventEmitter<void>();

  // Méthode pour fermer le popup
  closePopup(): void {
    // Émission de l'événement 'close' pour notifier le composant parent que le popup doit être fermé
    this.close.emit();
  }
}
