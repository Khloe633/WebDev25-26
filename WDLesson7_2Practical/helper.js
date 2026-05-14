// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Challenge 3: Create the function showMap() that displays the map for a location [lat, lon]
function showMap(lat,lon){
let location = [lat, lon];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 15);



}

// Challenge 4: Create the function card() to generate an appropriate info card with the button to view map
function card( info ){ 
  let build = `<div class="card">
                  <h2>${info.id}</h2>
                  <hr>
                  <p>Location: ${info.location}</p>
                  <h6>${info.borough}</h6>`;
                  if(info.latitude && info.longitude){
                    build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                  }
    build +=    `</div>`;
  return build;
}