import { Injectable } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.initCocktails();
    //this.http.put('https://cocktails-e7fa0.firebaseio.com/cocktails.json', this.cocktails.value).subscribe(res => console.log(res))
  }    

  initCocktails(): void {
    this.http.get<Cocktail[]>('https://cocktails-e7fa0.firebaseio.com/cocktails.json').subscribe(cocktails => {
      this.cocktails.next(cocktails)
    });
    
  }

  getCocktail(index: number): Observable<Cocktail> {
      return this.cocktails.filter( cocktails => cocktails != null).map( (cocktails: Cocktail[]) => cocktails[index]) 
      }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc, Ingredients: cocktail.Ingredients});
    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail): void{
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( c => c.name ).indexOf(editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.save();
  }

  save(): void {
    this.http.put('https://cocktails-e7fa0.firebaseio.com/cocktails.json', this.cocktails.value).subscribe(res => console.log(res));
  }
}
