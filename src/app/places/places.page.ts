import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  public places = [];
  
  constructor(private _places: PlacesService, private _router: Router) { }

  ngOnInit() {
    this.places = this._places.getPlaces();
  }

  // evento ionic para cuando se va a reingresar a una vista, util para volver a solicitar data
  ionViewWillEnter() {
    this.places = this._places.getPlaces();
  }

  addNewPlace() {
    console.log('working');
    this._router.navigateByUrl('/new-place')
  }

  goToHome() {
    this._router.navigateByUrl('/home');
  }
}
