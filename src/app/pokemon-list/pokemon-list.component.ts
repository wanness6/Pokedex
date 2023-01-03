import { Component, OnInit } from '@angular/core';
import pokemonData from '../../assets/json/pokemon.json';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons :any = pokemonData;
  
}

export interface Pokemon{
  id: string;
  species_id: string;
  height: string;
  weight: string;
  base_experience : string;
  order:string;
  is_default:string;
  name:string;
  sprites:Sprite;
}

export interface Sprite{
  normal:string;
  animated:string;
}
