import { User } from "./User"
import { Company } from "./Company";
import randomLocation from 'random-location'

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    const P = {
      latitude: 55.754093,
      longitude: 37.620407
    }

    const R = 10000 // meters

    const randomPoint = randomLocation.randomCirclePoint(P, R)

    this.map = new google.maps.Map(document.getElementById(divId), {
      center: { lat: randomPoint.latitude, lng: randomPoint.longitude },
      zoom: 14,
    });
  }

}