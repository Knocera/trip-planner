const mapboxgl = require("mapbox-gl");
// const index = require('./index')


const iconUrl = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

function newMarker(type, location){
   let icon =''
   switch(type){
       case 'hotels':
       markerDomEl.style.backgroundImage  = iconUrl.hotels;
       break;
       case 'resturants':
       markerDomEl.style.backgroundImage  = iconUrl.restaurants;
       break;
       case 'activity':
       markerDomEl.style.backgroundImage  = iconUrl.activities;
       break;
   }
   return mapboxgl.Marker(markerDomEl.style.backgroundImage).setLngLat(location).addTo(map);
}

module.exports = newMarker