var lat;
var lng;
var categories = "Chinese";
var marker;

var map = L.map("map", {
  center: [37.754135, -122.447331],
  zoom: 12});

var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
	maxZoom: 18,
	id: "mapbox.streets",
	accessToken: API_KEY 
})
.addTo(map);

function getIcon(categories) {
  var Icon = L.icon({
    iconUrl: `static/img/${categories}.png`,
    iconSize:     [40, 40], // size of the icon

  });
  return Icon;
}


map.on('click', function(e){
	var coord = e.latlng;
	lat = coord.lat;
	lng = coord.lng;
	// console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
    if (marker) {
    map.removeLayer(marker);
    };
    marker = new L.Marker(e.latlng, { draggable: true, icon: getIcon(categories) });
    marker.bindPopup("<strong>" + e.latlng + "</strong>").addTo(map);
});

function calculateResult() {
	categories = document.getElementById("category-options").value;
	var url = lat + '/' + lng + '/' + categories;
	console.log(url);
	console.log(categories);
	console.log(lat);
	console.log(lng);
	d3.json(url).then(function(results) {
		console.log(results);

	})



}
// console.log(uniq);

// var url = '/data_json';
// var static_url = '/static/data/san_francisco_censustracts.json';
// var features;
// var a = 0;

// d3.json(static_url).then(function(results) {
//   console.log(results);
//   features = results.features;
//   console.log(features[0].geometry.coordinates[0]);

//   for (var i = 0; i < features.length; i++) {
//     L.polygon(
//       features[i].geometry.coordinates[0]
//       , {
//         color: "yellow",
//         fillColor: "yellow",
//         fillOpacity: 0.75
//       }).addTo(map);

//   }
// });

