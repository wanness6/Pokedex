import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pokemonData from "../../assets/json/pokemon.json";
import { Pokemon } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{

  pokemon: any = pokemonData;
  selectedPokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id")!;
      this.selectedPokemon = this.pokemon.find((p: { id: string; })=>p.id === id);
    })
  }

}
