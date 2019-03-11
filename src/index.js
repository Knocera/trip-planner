const mapboxgl = require("mapbox-gl");
const newMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHkzNjkiLCJhIjoiY2p0NGowb2ZzMDFyNjQzdGUyNzN5bGhvNyJ9.zxwq3z2HAV_uwA2w-40msg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement('div');
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);



const marker = newMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);


module.exports = newMarker;