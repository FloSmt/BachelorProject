import { Args, Query, Resolver } from '@nestjs/graphql';
import { Article } from './objects/article.model';
import { AppService } from './app.service';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private appService: AppService) {}

  @Query(() => Article, { name: 'article', nullable: true})
  async getArticleById(@Args('id', {type: () => String}) id: string): Promise<Article | null> {
     return this.appService.getArticleById(parseInt(id));
  }


  @Query(() => [Article], { name: 'articles' })
  async getArticles(): Promise<Article[]> {
    return this.appService.getArticles();
  }
}
