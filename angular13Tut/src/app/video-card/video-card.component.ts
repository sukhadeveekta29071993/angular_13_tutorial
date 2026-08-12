import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
})
export class VideoCardComponent implements OnInit {
  videos = [
    {
      title: 'My Video 1',
      share: 415,
      likes: 257,
      disLike: 12,
      thumbnail: 'assets/images/angular.png',
    },
    {
      title: 'My Video 2',
      share: 215,
      likes: 350,
      disLike: 13,
      thumbnail: 'assets/images/react.png',
    },
    {
      title: 'My Video 3',
      share: 513,
      likes: 150,
      disLike: 16,
      thumbnail: 'assets/images/nodejs.png',
    },
  ];

  mostLikeVideo = this.getMostLikeVideo();
  constructor() {}

  ngOnInit(): void {}

  getMostLikeVideo() {
    let videoCopy = [...this.videos];
    return videoCopy.sort((current, next) => next.likes - current.likes)[0];
  }
}
