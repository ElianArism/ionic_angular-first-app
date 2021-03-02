import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public photos;
  constructor(private _photos: PhotosService) {}

  ngOnInit(): void {
    this._photos.getPhotos()
      .subscribe(data => {
        this.photos = data;
      });
  }
}
