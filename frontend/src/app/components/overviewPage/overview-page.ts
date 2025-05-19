import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../objects/article";
import {RouterLink} from "@angular/router";
import {ListEntryComponent} from "./listEntry/list-entry";

@Component({
  selector: 'app-overview-page',
  imports: [ListEntryComponent],
  templateUrl: './overview-page.html',
  styleUrl: './overview-page.css',
  standalone: true,
})
export class OverviewPageComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  articles: Article[] = [];

  async ngOnInit() {
    this.articles= [];
    this.articles = await this.articleService.loadArticles();
  }
}
