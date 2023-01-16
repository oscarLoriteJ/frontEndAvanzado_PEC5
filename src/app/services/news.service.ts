import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewApiDto } from '../models/NewApiDto';
import { NewsApiDto } from '../models/NewsApiDto';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  private topStoriesUrl =
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';
  private singleNewUrlBegin =
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=uri:("nyt://article/';
  private singleNewUrlEnd = '")&api-key=';
  private apiKey = 'gLup9yryNCZbtvGDGJIAWl0R7e9migjL';

  getTopNews(): Observable<NewsApiDto> {
    return this.http.get<NewsApiDto>(this.topStoriesUrl + this.apiKey);
  }

  getNewById(id: string): Observable<NewApiDto> {
    return this.http.get<NewApiDto>(
      this.singleNewUrlBegin + id + this.singleNewUrlEnd + this.apiKey
    );
  }
}
