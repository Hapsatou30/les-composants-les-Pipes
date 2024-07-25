import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DetailsProduitsComponent } from '../details-produits/details-produits.component';
import localeFr from '@angular/common/locales/fr';

// Interface représentant la structure d'un produit
export interface Produit {
  image: string;
  categorie: string;
  titre: string;
  description: string;
  prix: number;
}

// Enregistrement des données de locale
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [FormsModule, CommonModule, DetailsProduitsComponent],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  // Déclaration de la liste des produits
  produits: Produit[] = [
    
    {
      image: 'https://img.freepik.com/photos-premium/illustration-haute-qualite-bouteille-noire_1224603-6030.jpg?w=900',
      categorie: 'Cosmétique',
      titre: 'Sérum Éclat Radiance',
      description: 'Sérum concentré en vitamine C, pour un teint lumineux et uniforme. Aide à réduire les taches brunes et les imperfections.',
      prix: 60,
    },
    
    {
      image: 'https://img.freepik.com/photos-gratuite/arrangement-rouges-levres-rouges-au-dessus-vue_23-2148978122.jpg?t=st=1721924410~exp=1721928010~hmac=366ebd420999f116c369782aadaa6d93cf70c406310845dc8a91412589d254b9&w=740',
      categorie: 'Cosmétique',
      titre: 'Rouge à Lèvres Satiné',
      description: 'Rouge à lèvres haute tenue avec une finition satinée. Disponible en plusieurs teintes pour s\'adapter à toutes les occasions.',
      prix: 20,
    },
    {
      image: 'https://img.freepik.com/vecteurs-libre/chemise-blanche-classique-pour-homme_1441-2790.jpg?t=st=1721924445~exp=1721928045~hmac=9a56c7a4e521157b41ecce5bdef2f776b0d2dee49290058a59b9d194fccd6daf&w=740',
      categorie: 'Vestimentaire',
      titre: 'Chemise en Coton Blanc',
      description: 'Chemise classique en coton 100%, parfaite pour un look professionnel ou décontracté. Disponible en plusieurs tailles.',
      prix: 50,
    },
    {
      image: 'https://img.freepik.com/photos-premium/chaussures-course-bleues-tres-legeres-confortables-porter-isolees-fond-blanc_139820-899.jpg?w=740',
      categorie: 'Vestimentaire',
      titre: 'Chaussures de Sport Respirantes',
      description: 'Chaussures de sport légères et respirantes, parfaites pour l\'entraînement et les activités physiques.',
      prix: 70
    }
    
  ];

    // Propriété pour stocker le produit sélectionné
    // Cette propriété est optionnelle (?) car au départ aucun produit n'est sélectionné
    produitSelectionne?: Produit;
 
    // Méthode pour sélectionner un produit
  selectProduit(produit: Produit): void {
    this.produitSelectionne = produit;
  }
  closePopup(): void {
    this.produitSelectionne = undefined;
  }
  
}
