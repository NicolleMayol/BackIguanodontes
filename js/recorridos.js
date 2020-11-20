let lat = parseFloat(localStorage.getItem('lat'))
let long = parseFloat(localStorage.getItem('long'))

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 8,
  });
}

