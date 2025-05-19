export class Author {
  username: string;
  email: string;
  bio: string;
  lastname: string;
  firstname: string;
  id: number;

  constructor(
    username: string,
    email: string,
    bio: string,
    lastname: string,
    firstname: string,
    id: number
  ) {
    this.username = username;
    this.email = email;
    this.bio = bio;
    this.lastname = lastname;
    this.firstname = firstname;
    this.id = id;

  }
}
