import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../objects/article";
import {ListEntryComponent} from "./listEntry/list-entry";

@Component({
  selector: 'app-overview-page',
  imports: [ListEntryComponent],
  templateUrl: './overview-page.html',
  styleUrl: './overview-page.css',
  standalone: true,
})
export class OverviewPageComponent implements OnInit, AfterViewInit {
  constructor(private articleService: ArticleService) {}

  @ViewChildren(ListEntryComponent) listEntries!: QueryList<ListEntryComponent>;

  articles: Article[] = [];
  currentPage = 1;
  isLoading = false;
  private observer!: IntersectionObserver;

  async ngOnInit() {
    this.articles = [];
    this.articles = await this.articleService.loadArticles(1);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isLoading) {
            this.onLastEntryVisible();
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    // Observe the last entry dynamically
    this.listEntries.changes.subscribe(() => {
      this.observeLastEntry();
    });

    // Initial observation of the last entry
    this.observeLastEntry();
  }

  private observeLastEntry() {
    // Disconnect the observer from all previously observed elements
    this.observer.disconnect();

    const lastEntry = this.listEntries.last;
    if (lastEntry) {
      const element = (lastEntry as any).elementRef.nativeElement;
      this.observer.observe(element);
    }
  }

  onLastEntryVisible() {
    this.isLoading = true;
    this.currentPage++;
    this.articleService.loadArticles(this.currentPage).then((newArticles) => {
      this.articles = [...this.articles, ...newArticles];
      this.isLoading = false;
    });
  }
}
