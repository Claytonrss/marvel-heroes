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
  private publicKey = 'c3dafa22b4de0bf870238254e3de9ff7';
  private secretKey = 'c010fec262075e634d10edb5d68152e8b6f2c75a';
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

  getCollection(url: string): Observable<ResponseMarvel> {
    const md5 = new Md5();
    const ts = new Date().getTime();
    const stringToHash = ts + this.secretKey + this.publicKey;
    const hash = md5.appendStr(stringToHash).end();
    let _url = `${url}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
    return this.httpClient.get<ResponseMarvel>(_url);
  }
}
