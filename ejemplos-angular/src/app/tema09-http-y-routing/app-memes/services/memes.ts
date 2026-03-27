import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Memes {
  private URL_BASE: string = 'http://localhost:3000'
  private http = inject(HttpClient)


  getMemes(): Observable<any> {
    return this.http.get(`${this.URL_BASE}/memes`)
  }

  createMeme() {

  }  

  voteMeme() {

  }
  
}
