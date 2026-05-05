let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h2>ID: ${crash.collision_id}</h2>
                 <hr>
                <h4>Date: ${crash.crash_date}</h4>
              <p>Location: ${crash.on_street_name}, ${crash.borough}</p>
              <p>People injured:${crash.number_of_persons_injured}</p>
                <p>People killed:${crash.number_of_persons_killed}</p>
                <h5> Vehicle Type: ${crash.vehicle_type_code1}</h5>
                <h5>Contributing Factor: ${crash.contributing_factor_vehicle_1}</h5>
              </div>`    
  }
  output.innerHTML = build;

  //dropdown filters
  let factor = fillDropDown("contributing_factor_vehicle_1");
  document.getElementById("factor").innerHTML = factor;

  let vehicles = fillDropDown("vehicle_type_code1");
  document.getElementById("vehicle").innerHTML = vehicles;  
}

//Filter by borough
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.borough == borough){
    build += `<div class="fitted card">
                 <h3>ID: ${crash.collision_id}</h3>
                 <hr>
                <h5>Date: ${crash.crash_date}</h5>
              <p>${crash.on_street_name}, ${crash.borough}</p>
              <p>People injured:${crash.number_of_persons_injured}</p>
                <p>People killed:${crash.number_of_persons_killed}</p>
                <h5> Vehicle Type: ${crash.vehicle_type_code1}</h5>
                <h5>Contributing Factor: ${crash.contributing_factor_vehicle_1}</h5>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


//Filter by vehicle type
function filterByvehicle(){
  let output = document.getElementById("output");
  let vehicle = document.getElementById("vehicle").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.vehicle_type_code1 == vehicle){
    build += `<div class="fitted card">
                 <h3>ID: ${crash.collision_id}</h3>
                 <hr>
                <h5>Date: ${crash.crash_date}</h5>
              <p>${crash.on_street_name}, ${crash.borough}</p>
              <p>People injured:${crash.number_of_persons_injured}</p>
                <p>People killed:${crash.number_of_persons_killed}</p>
                <h5> Vehicle Type: ${crash.vehicle_type_code1}</h5>
                <h5>Contributing Factor: ${crash.contributing_factor_vehicle_1}</h5>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


//filter by factor and casualties
function FactorCasualty(){
  let output = document.getElementById("output");
  let factors = document.getElementById("factor").value;
  let casualty = parseInt(document.getElementById("casualties").value);
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.contributing_factor_vehicle_1 == factors && crash.number_of_persons_killed == casualty){
    build += `<div class="fitted card">
                 <h3>ID: ${crash.collision_id}</h3>
                 <hr>
                <h5>Date: ${crash.crash_date}</h5>
              <p>${crash.on_street_name}, ${crash.borough}</p>
              <p>People injured:${crash.number_of_persons_injured}</p>
                <p>People killed:${crash.number_of_persons_killed}</p>
                <h5> Vehicle Type: ${crash.vehicle_type_code1}</h5>
                <h5>Contributing Factor: ${crash.contributing_factor_vehicle_1}</h5>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}