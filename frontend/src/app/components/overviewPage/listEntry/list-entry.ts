import {Component, ElementRef, input, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Article} from "../../../objects/article";

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.html',
  styleUrl: './list-entry.css',
  standalone: true,
  imports: [RouterLink],
})
export class ListEntryComponent {
  article = input.required<Article>();

  constructor(public elementRef: ElementRef) {}

  getDateString(date: any): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      second: "2-digit"
    };
    return new Date(date).toLocaleDateString('de-DE', options);
  }

  protected readonly Date = Date;
}
