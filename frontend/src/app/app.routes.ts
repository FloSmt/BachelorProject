import { Route } from '@angular/router';
import {OverviewPageComponent} from "./components/overviewPage/overview-page";
import {ArticleDetailsPageComponent} from "./components/articleDetailsPage/article-details-page";

export const appRoutes: Route[] = [
  {
    path: '',
    component: OverviewPageComponent,
  },
  {
    path: 'article/:id',
    component: ArticleDetailsPageComponent
  }
];
