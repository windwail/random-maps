import {User} from "./User"
import {Company} from "./Company";
import randomLocation from 'random-location'


export class CustomMap {
  private map: google.maps.Map;

  private userMarker: google.maps.Marker

  private companyMarker: google.maps.Marker;

  private centerPoint: { latitude: number, longitude: number};

  constructor(divId: string) {
    const P = {
      latitude: 55.754093,
      longitude: 37.620407
    }

    const R = 10000 // meters

    this.centerPoint = randomLocation.randomCirclePoint(P, R)

    this.map = new google.maps.Map(document.getElementById(divId), {
      center: {lat: this.centerPoint.latitude, lng: this.centerPoint.longitude},
      zoom: 14,
    });
  }

  getRandomPoint( radius:number) : { latitude: number, longitude: number} {
    return randomLocation.randomCirclePoint(this.centerPoint, radius)
  }

  addUserMarker(): void {
    const point = this.getRandomPoint(1000);

    this.userMarker = new google.maps.Marker({
      map: this.map,
      position: {lat: point.latitude, lng: point.longitude}
    })
  }

  addCompanyMarker(): void {
    const point = this.getRandomPoint(1000);

    this.companyMarker = new google.maps.Marker({
      map: this.map,
      position: {lat: point.latitude, lng: point.longitude}
    })
  }

}