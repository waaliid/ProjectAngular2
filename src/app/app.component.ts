import { Component } from '@angular/core';
import { Cocktail } from './cocktail.model';
import { Ingredient } from './ingredient.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cocktail = new Cocktail(
    'Mojito', 
    'http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg', 
    'Le mojito, prononcé [moˈxito] en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910 et inspiré du mint julep.',
    [
      new Ingredient('perrier', 1),
      new Ingredient('citron', 2),
      new Ingredient('sucre', 3),
    ]
  )
  
}
