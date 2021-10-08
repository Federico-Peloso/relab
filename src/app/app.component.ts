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
  secondoCerchioOptions: {fillColor: string};

  markerOptions: google.maps.MarkerOptions;
  gatto_label: string;

  imgs: google.maps.MarkerOptions[];

  public colori:Array<string> = ['yellow', 'black', 'blue'];

  vertices: google.maps.LatLngLiteral[];
  rectangle: google.maps.LatLngLiteral[];
  rectangleOptions: {fillColor: string};

  public cambiaColore(colore:string) {
    this.circleOptions = {fillColor: colore}
    this.secondoCerchioOptions = {fillColor: colore}
  }

  public cambiaColoreRettangolo(colore:string) {
    this.rectangleOptions = {fillColor: colore}
  }

  constructor()
  {
    this.center = {lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = 'ciao';

    this.casa_mia = {lat: 45.517940, lng: 9.186850};
    this.casa_mia_pos = this.casa_mia;
    this.casa_label = 'casa mia';
    this.circleOptions = {fillColor: 'red'}

    this.secondo_cerchio = {lat: 45.506778, lng: 9.190266}
    this.secondo_cerchio_pos = this.secondo_cerchio
    this.secondo_cerchio_laber = 'secondo cerchio'
    this.secondoCerchioOptions = {fillColor: 'blue'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }

    let img1 : google.maps.Icon = {
      url: 'https://www.google.com/s2/favicons?sz=64&domain=neca.it',
      scaledSize: new google.maps.Size(60, 60),
      
    }

    let img2 : google.maps.Icon = {
      url: 'https://www.google.com/s2/favicons?domain=brainly.com',
      scaledSize: new google.maps.Size(60, 60)
    }

    let img3 : google.maps.Icon = {
      url: 'https://www.google.com/s2/favicons?domain=quizlet.com',
      scaledSize: new google.maps.Size(60, 60)
    }
  
    this.markerOptions = {icon:iconData}
    this.gatto_label = 'gatto'

    this.imgs = [{icon:img1, position: new google.maps.LatLng(45.498878, 9.190166)}, {icon:img2, position: new google.maps.LatLng(45.503878, 9.195166)}, {icon: img3, position: new google.maps.LatLng(45.511878, 9.190466)}]

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];

    this.rectangle = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.002},
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.001},
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.001},
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.002}
    ];

    this.rectangleOptions = {fillColor: 'green'}

  }

}