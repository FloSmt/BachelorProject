import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Author} from "./author.model";

@ObjectType()
export class Article {
  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  createdAt: Date;

  @Field(() => Author)
  author: Author;

  @Field(() => ID)
  id: number;

  @Field()
  imageUrl: string;

  @Field()
  language: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  isFavorite: boolean;

  @Field()
  isRead: boolean;

  @Field()
  isArchived: boolean;

  @Field()
  isDeleted: boolean;

  @Field()
  isDraft: boolean;

  @Field()
  isPublished: boolean;

  @Field()
  postType: string;
}
