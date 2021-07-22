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
  qtdPages: number;
  currentPage: number;
  pages: Array<number> = [];
  limit: number = 10;

  constructor(public characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters([]);
  }

  getCharacters(params: string[] = []) {
    this.characterService.getResponseMarvel(params).subscribe((response) => {
      this.characters = response.data.results;
      this.qtdPages = Math.ceil(response.data.total / response.data.limit) - 1;

      if (response.data.offset < response.data.limit) {
        this.currentPage = 1;
      } else {
        this.currentPage = Math.ceil(
          response.data.offset / response.data.limit
        );
      }
      this.updatePages();
    });
  }

  updatePages() {
    this.pages = [];

    for (let i = this.currentPage; i < this.currentPage + 5; i++) {
      if (i <= this.qtdPages) {
        this.pages.push(i);
      }
    }
  }

  changePage(page: number) {
    if (this.currentPage !== page && page > 0) {
      this.currentPage = page;
      const offset = page * this.limit;
      this.getCharacters([`offset=${offset}`]);
    }
  }
}
