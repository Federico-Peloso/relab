import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  casa_mia: any;
  casa_mia_pos: any;
  casa_label: string;
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = 'ciao';

    this.casa_mia = {lat: 45.517940, lng: 9.186850};
    this.casa_mia_pos = this.casa_mia;
    this.casa_label = 'casa mia'
  }

}