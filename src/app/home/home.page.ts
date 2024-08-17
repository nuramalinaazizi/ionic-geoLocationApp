import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  currentCoordinates: { latitude: number; longitude: number } | null = null;

  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.currentCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
 

}
