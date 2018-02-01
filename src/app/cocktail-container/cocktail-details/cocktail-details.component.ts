import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Cocktail } from '../../cocktail.model';
import { Ingredient } from "../../ingredient.model";
import { CocktailService } from '../../shared/services/cocktail.service'
import { PanierService } from "../../shared/services/panier.service";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail

  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe( (params: Params) => {
       if (params.index){
        this.cocktail = this.cocktailService.getCocktail(params.index);
       }else{
        this.cocktail = this.cocktailService.getCocktail(0);
       }
     })
  }

  addPanier(i: Ingredient[]): void{
    this.panierService.addIngredients(i);    
  }  
}
