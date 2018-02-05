import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class PanierService {

  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);


  addIngredients(i: Ingredient[]): void {
    console.log(i);
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length) {
        this.panier.next(currentValue.concat(i));
    }else {
        this.panier.next(i);
    }
  }

  viderPanier(): void {
    this.panier.next([]);
  }

  constructor() { }

}
