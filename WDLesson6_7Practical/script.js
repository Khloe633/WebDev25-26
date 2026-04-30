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
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
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
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.

function filterByFactor(){
  let output = document.getElementById("output");
  let factor = document.getElementById("factor").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.contributing_factor_vehicle_1 == factor){
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


// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

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

