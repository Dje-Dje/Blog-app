import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {Post} from '../models/Post.Model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const text = this.postForm.get('text').value;
    const newPost = new Post(title, text, new Date(), 0);

    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
