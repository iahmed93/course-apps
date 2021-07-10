import { Company } from "./Company";
import { User } from "./User";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 3,
      center: { lat: 0, lng: 0 },
    });
  }
  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "Hello World",
    });
    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
