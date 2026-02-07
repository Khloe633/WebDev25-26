// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */

function calcArea(){
  let l = parseInt(document.getElementById("l").value);
  let w = parseInt(document.getElementById("w").value);
  let msg="";
  let a = l * w;
  let output = document.getElementById("output");
  output.innerHTML=`The area of the rectangle is ${a}`;  
      if (l<= 0 || w<=0){
    msg="Inappropiate Measurement";
  }else{
    msg=`${a}`;  
  }
  output.innerHTML=`${msg}`;  
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let a = document.getElementById("animal").value;
  let e = document.getElementById("emotion").value;
  let op=document.getElementById("output");
  let image=""

  if (a=="Bear" && e=="Funny"){
    image="funnyBear.jpg";
  }
  if (a=="Cat" && e =="Funny"){
    image="funnyCat.jpg";
  }
  if (a =="Dog" && e =="Funny"){
    image="funnyDog.jpg";
  } 
  if (a =="Bear" && e =="Sad"){
    image="sadBear.jpg";
  }
  if (a =="Cat" && e =="Sad"){
    image="sadCat.jpg";
  }
  if (a =="Dog" && e =="Sad"){
    image="sadDog.jpg";
  }
    op.innerHTML= `<img src="${image}">`
  }