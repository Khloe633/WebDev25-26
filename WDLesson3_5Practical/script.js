/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
let l= parseFloat(document.getElementById("length").value);
let w= parseFloat(document.getElementById("width").value);
let op= document.getElementById("output");
let A = l * w;
op.innerHTML= "Area is " +A;
}

function recPerimeter(){
let l= parseFloat(document.getElementById("length").value);
let w= parseFloat(document.getElementById("width").value);
let op= document.getElementById("output");
let P = 2 * (l + w);
op.innerHTML= "Perimeter is " +P;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
let r= parseFloat(document.getElementById("rad").value);
let op= document.getElementById("op");
let ar = pi * (r)**2;
op.innerHTML= "Area is " + ar;
}

function cirPerimeter(){
let r= parseFloat(document.getElementById("rad").value);
let op= document.getElementById("op");
let per = pi * 2 * r;
op.innerHTML= "Perimeter is " + per;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
let base= parseFloat(document.getElementById("b").value);
let height= parseFloat(document.getElementById("he").value);
let op= document.getElementById("o");
let area = 0.5 * (base*height)
op.innerHTML= "Area is " + area;
}

function triPerimeter(){
let s1= parseFloat(document.getElementById("s1").value);
let s2= parseFloat(document.getElementById("s2").value);
let s3= parseFloat(document.getElementById("s3").value);
let op= document.getElementById("o");
let perm = s1 + s2 + s3;
op.innerHTML= "Perimeter is " + perm;
}