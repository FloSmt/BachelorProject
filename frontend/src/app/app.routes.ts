import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/overviewPage/overview-page').then(m => m.OverviewPageComponent)

  },
  {
    path: 'article/:id',
    loadComponent: () => import('./components/articleDetailsPage/article-details-page').then(m => m.ArticleDetailsPageComponent)
  }
];
