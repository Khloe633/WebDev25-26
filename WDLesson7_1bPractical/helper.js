//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.

function card (cardInfo){
  let build="";
  build+= `<div class="fitted card">
  <h3>${cardInfo.issuing_agency}</h3>
  <hr>
  <p>${cardInfo.violation}</p>
  <p>${cardInfo.state}</p>
  <p>${cardInfo.plate}</p>
  <hr>
  <p>${cardInfo.issue_date}</p>
  <hr>
  <p>${cardInfo.summons_number}</p>
  </div>`
  return build;
}