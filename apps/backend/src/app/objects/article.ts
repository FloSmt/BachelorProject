export class Article {
  title: string;
  text: string;
  createdAt: Date;
  author: string;
  id: number;
  imageUrl: string;


  constructor(title: string, text: string, createdAt: Date, author: string, imageUrl = '') {
    this.title = title;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.id = Math.floor(Math.random() * 10000) + 1;
    this.imageUrl = imageUrl;
  }
}
