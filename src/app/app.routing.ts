import { Route, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";

const APP_ROUTE: Route[] = [
    { path: '', redirectTo: 'cocktails', pathMatch:'full'},
    { path: 'panier', component : PanierComponent},
    { path: 'cocktails', component : CocktailContainerComponent, children:[
        {path: '', component: CocktailDetailsComponent},
        {path: ':index', component: CocktailDetailsComponent}
    ]}
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE);