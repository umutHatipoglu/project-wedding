import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {

  title = 'google-maps';

  private map!: google.maps.Map

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDU2FtZiJ5RnHDBMvtT-lkxQzWnNZeUAxc'
    })

    loader.load().then(() => {

      const location = { lat: 50.5766956, lng: 	5.9186055 }

      this.map = new google.maps.Map(document.getElementById("map") as any, {
        center: location,
        zoom: 12,
        styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

}
