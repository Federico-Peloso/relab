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
  circleOptions: {fillColor: string};
  secondo_cerchio: any;
  secondo_cerchio_pos: any;
  secondo_cerchio_laber: string;
  secondoCerchioOptions: {fillColor: 'blue'};
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = 'ciao';

    this.casa_mia = {lat: 45.517940, lng: 9.186850};
    this.casa_mia_pos = this.casa_mia;
    this.casa_label = 'casa mia';
    this.circleOptions = {fillColor: 'red'};

    this.secondo_cerchio = {lat: 45.506778, lng: 9.190266}
    this.secondo_cerchio_pos = this.secondo_cerchio
    this.secondo_cerchio_laber = 'secondo cerchio'
    this.secondoCerchioOptions = {fillColor: 'blue'}

  }

}