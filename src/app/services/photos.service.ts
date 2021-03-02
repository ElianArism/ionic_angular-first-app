import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  public url = `https://jsonplaceholder.typicode.com/photos?_limit=15`;


  constructor(private _httpClient: HttpClient) { }
 
  getPhotos() {
    return this._httpClient.get(this.url);
  }
}
