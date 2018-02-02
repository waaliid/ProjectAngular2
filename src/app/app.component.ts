import { Component } from '@angular/core';
import { Cocktail } from './shared/models/cocktail.model';
import { Ingredient } from './shared/models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cocktail = new Cocktail(
    'Mojito',
    'http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg',
    'Le mojito, pro Cuba dans les années 1910 et inspiré du mint julep.',
    [
      new Ingredient('perrier', 1),
      new Ingredient('citron', 2),
      new Ingredient('sucre', 3),
    ]
  );
}
