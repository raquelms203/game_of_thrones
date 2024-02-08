import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://thronesapi.com/api/v2';

  getCharacters() {
    return this.http.get(this.baseUrl + '/Characters');
  }

   getCharactersById(id: string) {
    return this.http.get(this.baseUrl + `/Characters/${id}`);
  }
}
