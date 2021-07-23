import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { Character } from '../models/character.model';
import { ResponseMarvel } from '../models/responseMarvel.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private publicKey = 'c1bb6f1fa9e8c65ed9e474d3cb528007';
  private secretKey = '6da99370fd75a8c3274ba9c5bf82ea92eedad8f6';
  private apiUrl = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private httpClient: HttpClient) {}

  public getResponseMarvel(params: string[] = []): Observable<ResponseMarvel> {
    const md5 = new Md5();
    const ts = new Date().getTime();
    const stringToHash = ts + this.secretKey + this.publicKey;
    const hash = md5.appendStr(stringToHash).end();
    let url = `${this.apiUrl}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}&limit=10`;

    for (let i = 0; i < params.length; i++) {
      url += `&${params[i]}`;
    }

    return this.httpClient.get<ResponseMarvel>(url);
  }

  getCharacterById(id: string): Observable<ResponseMarvel> {
    const md5 = new Md5();
    const ts = new Date().getTime();
    const stringToHash = ts + this.secretKey + this.publicKey;
    const hash = md5.appendStr(stringToHash).end();
    let url = `${this.apiUrl}/${id}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
    return this.httpClient.get<ResponseMarvel>(url);
  }
}
