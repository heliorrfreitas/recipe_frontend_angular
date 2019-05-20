import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RecipeService{

    constructor(private httpService: Http){}

    getAll(): Observable<Recipe[]>{
        return this.httpService.get("http://localhost:8080/recipe/api/recipe")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error);
    }

    save(recipe : Recipe){
        let body = JSON.stringify(recipe);
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});

        if(recipe.id){
            return this.httpService.put("http://localhost:8080/recipe/api/recipe/" + recipe.id, recipe, options);
        }else{
            return this.httpService.post("http://localhost:8080/recipe/api/recipe", recipe, options);
        }
    }

    getById(id: string){
        return this.httpService.get("http://localhost:8080/recipe/api/recipe/" + id)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    delete(id: string){
        return this.httpService.delete("http://localhost:8080/recipe/api/recipe/" + id);
    }


}
