import {Author} from "./author";

export class Article {
  title: string;
  text: string;
  createdAt: Date;
  author: Author;
  id: number;
  imageUrl: string;
  language: string;
  tags: string[];
  isFavorite: boolean;
  isRead: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  isDraft: boolean;
  isPublished: boolean;
  postType: string;


  constructor(
    title: string,
    text: string,
    createdAt: Date,
    author: Author,
    imageUrl = '',
    language = 'en',
    tags: string[] = [],
    isFavorite = false,
    isRead = false,
    isArchived = false,
    isDeleted = false,
    isDraft = false,
    isPublished = true,
    postType = 'article') {
    this.title = title;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.id = Math.floor(Math.random() * 10000) + 1;
    this.imageUrl = imageUrl;
    this.language = language;
    this.tags = tags;
    this.isFavorite = isFavorite;
    this.isRead = isRead;
    this.isArchived = isArchived;
    this.isDeleted = isDeleted;
    this.isDraft = isDraft;
    this.isPublished = isPublished;
    this.postType = postType;
  }
}
