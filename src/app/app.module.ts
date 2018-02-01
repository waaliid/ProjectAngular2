import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CbPipe } from './cb.pipe';
import { HeaderComponent } from './header/header.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service'

@NgModule({
  declarations: [
    AppComponent,
    CocktailDetailsComponent,
    CocktailsListComponent,
    CocktailContainerComponent,
    CbPipe,
    HeaderComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
