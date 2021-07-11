export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
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
      content: mappable.markerContent(),
    });
    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
