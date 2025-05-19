import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../objects/article";

@Component({
  selector: 'app-article-details-page',
  templateUrl: './article-details-page.html',
  styleUrl: './article-details-page.css',
  standalone: true,
})
export class ArticleDetailsPageComponent implements AfterViewInit, OnDestroy {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}


  article: Article | null = null;
  isLoaded: boolean = false;

  routeSub: any;
  ngAfterViewInit(): void {
    this.routeSub = this.route.params.subscribe(async params => {
      this.article = await this.articleService.loadArticle(params['id']);
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
