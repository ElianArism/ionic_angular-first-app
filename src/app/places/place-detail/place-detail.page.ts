import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import IPlace from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  public place: IPlace;
  
  
  constructor(private _places: PlacesService, private _activatedRoute: ActivatedRoute, private _router: Router, private _alertController: AlertController) { }
  
  ngOnInit() {
    this.getPlaceId();
  }
  
  getPlaceId() {
    this._activatedRoute.paramMap
    .subscribe(paramMap => {
      const placeId = paramMap.get('id');
      this.place = this._places.getPlace(placeId);
    });
  }
  
  async deletePlace() {
    // create and config alertMolal ionic
    const alertElement = await this._alertController.create({
      header: 'Are your sure, you want delete it?',
      message: 'Be careful!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete', 
          // al hacer click en el btn delete, se ejecuta la funcion almacenada en el handler
          handler: () => {
            this._places.deletePlace(this.place.id);
            this._router.navigateByUrl('/places');
          }
        }
      ],
    });
    
    // una vez creado, al ejecutar la funcion se presenta la alerta
    alertElement.present();
  }
}
