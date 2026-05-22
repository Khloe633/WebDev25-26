let data, info;

async function init(){   
  let link = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let farm = data[i];
    build += `<div class="fitted card">
                 <h2>ID: ${farm.marketname}</h2>
                 <hr>
              <p>Location: ${farm.streetaddress}, ${farm.borough}</p>
              <br>
              <p>Community District: ${farm.community_district}</p>
              <p>Operating hours:${farm.daysoperation}, ${farm.hoursoperations}</p>
              <p>Open year round?:${farm.open_year_round}</p>
              <p>Accepts EBT?: ${farm.accepts_ebt}</p>
              </div>`    
  }
  output.innerHTML = build;
}