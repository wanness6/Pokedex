import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "pokemon", component: PokemonListComponent},
      {path: "pokemon/:id", component: PokemonDetailComponent},
      {path:"", redirectTo: "home", pathMatch: 'full'},
      {path: "**", component: HomeComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
