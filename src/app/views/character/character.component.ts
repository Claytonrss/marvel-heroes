import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/service/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  characterId = '';
  character: Character;

  ngOnInit(): void {
    this.characterId = <string>this._route.snapshot.paramMap.get('id');
    this.getCharacterById(this.characterId);
  }

  getCharacterById(id: string) {
    this.characterService.getCharacterById(id).subscribe((response) => {
      this.character = response.data.results[0];
      console.log(this.character);
    });
  }
}
