import { Injectable } from '@angular/core';
import {Article} from "../objects/article";
import {firstValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  async loadArticles(page: number): Promise<Article[]> {
    return firstValueFrom(this.http.get<Article[]>('http://localhost:3000/api/articles/page/' + page));
  }

  async loadArticle(articleId: number): Promise<Article> {
    return firstValueFrom(this.http.get<Article>('http://localhost:3000/api/articles/' + articleId));
  }
}
