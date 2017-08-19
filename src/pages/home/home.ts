import { SpeakerDetailsPage } from './../speaker-details/speaker-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  speakers: Array<any> = [
    {
      name: 'Pathmila Kariyawasam',
      age: 24
    },
    {
      name: 'Nipuna Kariyawasam',
      age: 24
    },
    {
      name: 'Madumal Kariyawasam',
      age: 24
    }
  ];
  constructor(public navCtrl: NavController) {

  }

  goToDetails(speaker) {
    this.navCtrl.push(SpeakerDetailsPage, { speaker: speaker })
  }

}
