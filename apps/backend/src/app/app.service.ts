import { Injectable } from '@nestjs/common';
import {Article} from "./objects/article";

@Injectable()
export class AppService {

  articles: Article[] = [];

  getArticlesWithoutImageUrl(): Omit<Article, "imageUrl">[] {
    return this.articles.map(({ imageUrl, ...rest }) => rest);
  }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find((article) => article.id == id);
  }

  dummyFill(amount: number) {
    for (let i = 0; i < amount; i++) {
      const articleNumber = this.articles.length;
      const randomImageNr = Math.floor(Math.random() * 4) + 1;
      this.articles.push(
        new Article(`Article ${articleNumber}`,
          `This is the content of article ${articleNumber}`,
          new Date(),
          {
            username: `user${articleNumber}`,
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@email.com',
            bio: 'This is a short bio',
            id: articleNumber,
          },
          this.getImageAsBase64(`../../apps/backend/assets/images/image${randomImageNr}.jpg`)),
      );
    }
    return;
  }

  getImageAsBase64(imagePath: string): string {
    const fs = require('fs');
    const path = require('path');

    // Resolve the image path to an absolute path
    const absolutePath = path.resolve(__dirname, imagePath);

    // Read the image file and convert it to base64
    const imageBuffer = fs.readFileSync(absolutePath);
    const base64String = imageBuffer.toString('base64');
    const fileExtension = path.extname(imagePath).slice(1); // Get the file extension without the dot
    return `data:image/${fileExtension};base64,${base64String}`;
  }
}
