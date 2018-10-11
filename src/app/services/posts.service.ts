import {Injectable} from '@angular/core';
import {Post} from '../models/Post.Model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.posts = [
      new Post('Premier article', 'Ce premier article est passionant, je dois lire le second !', new Date(268257600000), 2),
      new Post('Second article', 'Ce second article ne méritait pas tant d\'éloges...', new Date(1532533500000), -1),
      new Post('Troisième article', 'C\'est l\'histoire d\'une pomme, tout roule pour elle... ', new Date(268257600000), 0)
    ];
    this.emitPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if  (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  plusLove(i: number) {
    this.posts[i].loveIts++;
    this.emitPosts();
  }

   moinsLove(i: number) {
    this.posts[i].loveIts--;
    this.emitPosts();
  }

}
