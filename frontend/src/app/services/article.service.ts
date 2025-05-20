import { Injectable } from '@angular/core';
import {Article} from "../objects/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  async loadArticles(page: number): Promise<Article[]> {
    return fetch('http://localhost:3000/api/articles/page/' + page)
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
