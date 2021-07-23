import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/models/character.model';
import { Comic } from 'src/app/shared/models/comic.model';
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
  comics: Comic[] = [];

  ngOnInit(): void {
    this.characterId = <string>this._route.snapshot.paramMap.get('id');
    this.getCharacterById(this.characterId);
  }

  getCharacterById(id: string) {
    this.characterService.getCharacterById(id).subscribe((response) => {
      this.character = <Character>response.data.results[0];
      for (let i = 0; i < this.character.comics.items.length; i++) {
        const item = this.character.comics.items[i];
        this.getCollection(item.resourceURI);
      }
      console.log(this.comics);
    });
  }

  getCollection(url: string) {
    this.characterService.getCollection(url).subscribe((response) => {
      const item = <Comic>response.data.results[0];
      this.comics.push(item);
    });
  }
}
