import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.Model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'lightgreen';
    } else if (this.post.loveIts < 0) {
      return 'lightcoral';
    } else {
      return 'white';
    }
  }

  onPlusLove() {
    this.postsService.plusLove(this.index);
  }

  onMoinsLove() {
    this.postsService.moinsLove(this.index);
  }

  onSupprimer() {
    this.postsService.removePost(this.post);
  }

}
