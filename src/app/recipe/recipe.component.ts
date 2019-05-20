import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{

    recipe = new Recipe();
    recipes: Recipe[];

    constructor(private recipeService: RecipeService){}

    ngOnInit(): void{
        this.getAll();
    }

    getAll(): void{
        this.recipeService.getAll()
            .subscribe((recipesData) => {
                this.recipes = recipesData;
                console.log(recipesData);
            }), (error) => {
                console.log(error);
            }
    }

    save(): void{
        this.recipeService.save(this.recipe)
            .subscribe((response) => {
                console.log(response);
                this.reset();
                this.getAll();
            }), (error) => {
                console.log(error);
            }
    }

    private reset(){
        this.recipe.id = null;
        this.recipe.name = null;
        this.recipe.ingredients = null;
        this.recipe.preparation = null;
    }

    getById(id: string){
        this.recipeService.getById(id)
            .subscribe((recipeData) => {
                this.recipe = recipeData;
                this.getAll();
            }), (error) => {
                console.log(error);
            }
    }

    delete(id: string){
        this.recipeService.delete(id)
            .subscribe((response) =>{
                console.log(response);
                this.getAll();
            }), (error) => {
                console.log(error);
            }
    }
}
