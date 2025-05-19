import { Injectable } from '@angular/core';
import {Article} from "../objects/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  async loadArticles(): Promise<Article[]> {
    return fetch('http://localhost:3000/api/articles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data as Article[])
      .catch(error => {
        console.error('Error fetching articles:', error);
        throw error;
      });
  }

  async loadArticle(articleId: number): Promise<Article> {
    return fetch('http://localhost:3000/api/articles/' + articleId)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data as Article)
      .catch(error => {
        console.error('Error fetching articles:', error);
        throw error;
      });
  }
}
