import { Injectable } from '@angular/core';
import {Article} from "../objects/article";
import {firstValueFrom, map} from "rxjs";
import {Apollo, gql} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private apollo: Apollo) {}

  async loadArticles(): Promise<Article[]> {
    return firstValueFrom(this.apollo.watchQuery({
      query: gql`
        query {
          articles {
            id
            title
            author {
              firstname
              lastname
            }
            createdAt
          }
        }
      `,
      context: {
        uri: 'http://localhost:3000/graphql',
      }
    }).valueChanges.pipe(map((result: any) => result.data.articles as Article[])))
  }

  async loadArticle(articleId: number): Promise<Article> {
    return firstValueFrom(this.apollo.watchQuery({
      query: gql`
        query {
          article(id: "${articleId}") {
            id
            title
            imageUrl
          }
        }
      `,
    }).valueChanges.pipe(map((result: any) => result.data.article as Article)))
  }
}
