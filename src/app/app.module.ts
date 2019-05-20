import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipeService } from './recipe/recipe.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, RecipeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
