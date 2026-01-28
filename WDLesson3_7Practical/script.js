/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calcDist(){
   let x1= parseFloat(document.getElementById("x1").value); 
   let y1= parseFloat(document.getElementById("y1").value);   
   let x2= parseFloat(document.getElementById("x2").value);   
   let y2= parseFloat(document.getElementById("y2").value);   

   let d= Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2 - y1,2));
   let op= document.getElementById("output");
   op.innerHTML=`Distance between points (${x1},${y1}) and (${x2},${y2}) is ${d}`;
}



/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calcCI(){
   let p= parseFloat(document.getElementById("p").value); 
   let r= parseFloat(document.getElementById("rate").value);   
   let n= parseFloat(document.getElementById("n").value);   
   let t= parseFloat(document.getElementById("t").value);   

   let a= p*(Math.pow(1+(r/100)/n,n*t));
   let op= document.getElementById("out");
   op.innerHTML=`Your compound interest in ${n} years is ${a}`; 
}

//a.toFixed(2): rounds number 2 decimal places (ie if you have 3.145), it rounds to 3.15

