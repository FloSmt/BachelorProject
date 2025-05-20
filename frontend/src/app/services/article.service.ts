import { Injectable } from '@angular/core';
import {Article} from "../objects/article";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  async loadArticles(): Promise<Article[]> {
    return firstValueFrom(this.http.get<Article[]>('http://localhost:3000/api/articles'));
  }

  async loadArticle(articleId: number): Promise<Article> {
    return firstValueFrom(this.http.get<Article>('http://localhost:3000/api/articles/' + articleId));
  }
}
