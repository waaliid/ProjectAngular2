import { Ingredient } from './ingredient.model'

export class Cocktail{
    constructor(
        public name: string,
        public img: string,
        public desc: string,
        public ingerdients : Ingredient[]
    ){}
}