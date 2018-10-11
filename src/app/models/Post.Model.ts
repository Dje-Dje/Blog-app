export class Post {

  title: string;
  content: string;
  createdAt: Date;
  loveIts: number;

  constructor(title: string, content: string, createdAt: Date, loveIts: number) {
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.loveIts = loveIts;
  }
}
