import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createdAt: Date;
  @Input() loveIts: 0;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.loveIts ++;
  }

  outLove() {
    this.loveIts --;
  }

}
