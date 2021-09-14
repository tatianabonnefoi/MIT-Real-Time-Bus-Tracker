// This array contains the coordinates for all bus stops between MIT and Harvard
const shipPorts = [
   
[-122.49313, 37.7797], [-122.49345, 37.781628], [-122.49238, 37.781677], [-122.49246, 37.78291], [-122.49251, 37.783543], [-122.49143, 37.783592], [-122.490364, 37.78364], [-122.48929, 37.783688], [-122.48822, 37.783737], [-122.48715, 37.783787], [-122.486084, 37.783833], [-122.48501, 37.783882], [-122.48393, 37.78393], [-122.48287, 37.783978], [-122.48179, 37.784027], [-122.48073, 37.784077], [-122.47965, 37.784126], [-122.47858, 37.784176], [-122.47751, 37.78422], [-122.47643, 37.78427], [-122.47537, 37.78432], [-122.47424, 37.78437], [-122.47312, 37.78442], [-122.47259, 37.78445], [-122.47205, 37.784477], [-122.47098, 37.784523], [-122.46991, 37.784573], [-122.46884, 37.784622], [-122.467766, 37.784668], [-122.46669, 37.784714], [-122.46563, 37.78485], [-122.46457, 37.784992], [-122.4635, 37.78513], [-122.46244, 37.785267], [-122.461365, 37.785404], [-122.460304, 37.785538], [-122.459175, 37.785683], [-122.45806, 37.785824], [-122.45696, 37.78596], [-122.45669, 37.786], [-122.455864, 37.786102], [-122.45505, 37.78621], [-122.45477, 37.786243], [-122.45341, 37.78642], [-122.453285, 37.786427], [-122.45176, 37.786617], [-122.450226, 37.786816], [-122.45012, 37.78684], [-122.44847, 37.78705], [-122.44679, 37.787262], [-122.445404, 37.787437], [-122.443756, 37.787647], [-122.44211, 37.787853], [-122.44044, 37.788067], [-122.438774, 37.788277], [-122.437126, 37.788486], [-122.435486, 37.788696], [-122.43558, 37.78917], [-122.43568, 37.78963], [-122.43403, 37.789837], [-122.43359, 37.78989], [-122.43238, 37.790043], [-122.43073, 37.790253], [-122.42909, 37.79046], [-122.427444, 37.79067], [-122.425804, 37.790874], [-122.42598, 37.791756], [-122.42434, 37.791965], [-122.42269, 37.792175], [-122.42105, 37.79238], [-122.4194, 37.792595], [-122.41858, 37.792698], [-122.417755, 37.792805], [-122.416115, 37.793015], [-122.41447, 37.793224], [-122.41283, 37.79343], [-122.41211, 37.793526], [-122.41119, 37.793644], [-122.41036, 37.793747], [-122.409935, 37.7938], [-122.4099, 37.793804], [-122.40954, 37.793854], [-122.40919, 37.793896], [-122.40872, 37.793957], [-122.407906, 37.79406], [-122.407295, 37.794136], [-122.40682, 37.794197], [-122.4063, 37.794262], [-122.40566, 37.794346], [-122.40479, 37.794453], [-122.40314, 37.794666], [-122.402374, 37.79477], [-122.40149, 37.794838], [-122.401375, 37.79485], [-122.40046, 37.79496], [-122.40033, 37.795013], [-122.39915, 37.795162], [-122.39797, 37.795315], [-122.39708, 37.79542]
    ];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGF0aWFuYS1ib25uZWZvaSIsImEiOiJja3Rpd3ZqcnQxNjduMm9xbmZuaHl2aWVmIn0.nxwWCkeMhqYP2jMLiwXlAA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.49313, 37.7797],
  zoom: 12,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
.setLngLat([-122.49313, 37.7797])
.addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=>{
        if(counter == shipPorts.length)return;
        marker.setLngLat(shipPorts[counter]);
        counter++;
        move();
      },1000);
}




// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
