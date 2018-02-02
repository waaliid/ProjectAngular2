import { Injectable } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
      new Cocktail(
        'Mojito',
        'http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg',
        'Le mojito, prononcé [moˈxito] en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910 et inspiré du mint julep.',
        [
          new Ingredient('perrier', 1),
          new Ingredient('citron', 5),
          new Ingredient('sucre', 7),
        ]
      ),
      new Cocktail(
        'Margarita',
        'https://chefcuisto.com/files/2013/10/margarita-624x909.jpg',
        'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila',
        [
          new Ingredient('perrier', 1),
          new Ingredient('citron', 8),
          new Ingredient('sucre', 12),
        ]
      ),
      new Cocktail(
        'Martini',
        'https://cdn.liquor.com/wp-content/uploads/2015/03/Draaanks-Dirty-Martini.jpeg',
        'Le martini ou le Dry martini est un cocktail à base de gin et de vermouth blanc sec. Il est connu en fiction comme en atteste son omniprésence dans la littérature et le cinéma, particulièrement aux États-Unis, d’où il est originaire.', 
        [
          new Ingredient('Martini', 1),
          new Ingredient('citron', 8),
          new Ingredient('sucre', 9),
        ]
      )
      ]);

  getCocktail(index: number): Cocktail {
      return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc, Ingredients: cocktail.Ingredients});
    this.cocktails.next(cocktails);
  }

  constructor() {}

}
