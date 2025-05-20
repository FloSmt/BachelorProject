import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Author {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  bio: string;

  @Field()
  lastname: string;

  @Field()
  firstname: string;

  @Field()
  id: number;
}
