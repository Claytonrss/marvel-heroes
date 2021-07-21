import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  characters: Character[];

  constructor(public characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getResponsePageable().subscribe((data) => {
      console.log(data);
      this.characters = data.results;
    });
  }
}
