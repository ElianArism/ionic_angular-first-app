import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  constructor(private _places: PlacesService, private _router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title: HTMLInputElement, img: HTMLInputElement) {
    this._places.addPlace(title.value, img.value);
    this._router.navigateByUrl('/places');
  }
}
