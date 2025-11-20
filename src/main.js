import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/style.css";
import mapboxgl from "mapbox-gl"; // import the mapbox library
import "mapbox-gl/dist/mapbox-gl.css"; // import the mapbox css

function addUserPin(map, userLocation) {
  new mapboxgl.Marker({ color: "blue" }).setLngLat(userLocation).addTo(map);
}
// const mapIframe = document.querySelector(".BCITMAP");
async function showMap() {
  //--------------------------------------------------------------
  // Initialize the Mapbox map
  // With your access token from .env and initial settings
  //--------------------------------------------------------------
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN; // put token in .env
  // BCIT location 49.25324576104826, -123.00163752324765  Centered at BCIT

  const userLocation = await getUserLocation();
  console.log("User location: " + userLocation);
  const map = new mapboxgl.Map({
    container: "map", // <div id="map"></div>
    style: "mapbox://styles/mapbox/streets-v12", // any Mapbox style
    center: userLocation,
    zoom: 19,
  });

  //---------------------------------------------------------------------------------
  // Add the clicked location to the map
  // After the click, get the route from the user's location to the clicked location
  //---------------------------------------------------------------------------------
  getClickedLocation(map, (clickedLocation) => {
    getRoute(map, userLocation, clickedLocation);
  });

  //------------------------------------------------------------------------
  // Add controls to the map here, and keep things organized
  // You can call additional controls/setup functions from here.
  //------------------------------------------------------------------------
  addControls();
  function addControls() {
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Add other controls here as needed
    //addGeolocationControl(map);
    //addGeoCoderControl(map);
    //addSearchBoxControl(map);
    //addSearchBoxControlCustom(map);
  }

  //--------------------------------------------------------------
  // Add layers, sources, etc. to the map, and keep things organized.
  // You can call additional layers/setup functions from here.
  // Run setupMap() once when the style loads.
  //--------------------------------------------------------------
  map.once("load", () => setupMap(map, userLocation)); // run once for the initial style
  function setupMap(map, userLocation) {
    addUserPin(map, userLocation);
    //add other layers and stuff here
    //addCustomLayer1(map);
    //addCustomLayer2(map);
    //addCustomLayer3(map);
  }
}
showMap();

//-----------------------------------------------------------------------------
// This function is asynchronous event listener for when the user clicks on the map.
// This function will return in the callback, the coordinates of the clicked location
// and display a pin at that location as a map layer
//
// @params   map:  the map object;
//           callback:  a function that will be called with the clicked location
//-----------------------------------------------------------------------------
function getClickedLocation(map, callback) {
  map.on("click", (event) => {
    const clickedLocation = Object.keys(event.lngLat).map(
      (key) => event.lngLat[key]
    );
    const end = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: clickedLocation,
          },
        },
      ],
    };
    if (map.getLayer("end")) {
      map.getSource("end").setData(end);
    } else {
      map.addLayer({
        id: "end",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: clickedLocation,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#f30",
        },
      });
    }
    console.log(clickedLocation);
    callback(clickedLocation);
  });
}

// Because this function is marked "async", it always returns a Promise.
// That means callers can use:  const loc = await getUserLocation();
async function getUserLocation() {
  // A fallback default in case geolocation fails or is blocked
  const defaultLocation = [-123.00163752324765, 49.25324576104826];

  // If the browser does not support geolocation at all, return immediately.
  // This return is synchronous because we already know the answer.
  if (!navigator.geolocation) {
    console.log("Geolocation not supported. Using default.");
    return defaultLocation;
  }

  // If geolocation *is* supported, we must return a Promise.
  // Why? Because getCurrentPosition is ASYNCHRONOUS — it returns instantly
  // and the success/error callbacks run LATER when the GPS resolves.
  return new Promise((resolve) => {
    // This call begins an asynchronous request to the device's GPS.
    // The code continues immediately, but the callbacks run later.
    navigator.geolocation.getCurrentPosition(
      // SUCCESS callback: runs later when the user location is ready.
      (pos) => {
        // Extract longitude + latitude
        const coords = [pos.coords.longitude, pos.coords.latitude];
        console.log("User location:", coords);

        // Resolve the Promise with the real coordinates.
        // This "returns" the value to whoever used "await getUserLocation()".
        resolve(coords);
      },

      // ERROR callback: runs later if the user denies permission or GPS fails.
      () => {
        console.log("Geolocation failed. Using default.");

        // Resolve with the fallback default location
        resolve(defaultLocation);
      }
    );
  });
}

// --------------------------------------------------------------
// This is an asynchronous function that will use the API to get
// the route from start to end. It will display the route on the map
// and provide turn-by-turn directions in the sidebar.
//
// @params   map:  the start and end coordinates;
//           start and end:  arrays of [lng, lat] coordinates
// -------------------------------------------------------------
async function getRoute(map, start, end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  // Can change to walking, driving
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: "GET" }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  console.log("route is " + route);
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource("route")) {
    map.getSource("route").setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geojson,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#3887be",
        "line-width": 5,
        "line-opacity": 0.75,
      },
    });
  }

  // get the sidebar and add the instructions
  const instructions = document.getElementById("instructions");
  const steps = data.legs[0].steps;

  let tripInstructions = "";
  for (const step of steps) {
    tripInstructions += `<li>${step.maneuver.instruction}</li>`;
  }
  instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
    data.duration / 60
  )} min  </strong></p><ol>${tripInstructions}</ol>`;
}
