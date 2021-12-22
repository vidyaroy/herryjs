document.write("Hello World");
console.warn("this is warning")
console.log("Hello Vidya");
var a = 20;
var b = 30;
if (b > a) {
  document.write("Hello World! <br>");
}

var age = 20;

if (age >= 18 && age <= 22) {
  document.write("I am vidya roy <br>");
}

var ages = 15;
if (ages >=12 || ages <=10) {
  document.write("Congratulations <br>");
}

var c = 20;
if (c > 10) {
  document.write("I am right <br>");
}
else 
{
  document.write("I am wron <br>");
}

var x = 20;
var z;
(x == 20)? z="True" : z= "False";
document.write(z);


var day = 1;
switch(day) {
  case 0:
  document.write("Today is monday");
  break;
  case 1:
    document.write("Today is tuesday");
    break;
  case 3:
    document.write("today is wesday");
    default:
      document.write("valid date");  
}

var g = 20;
var j = 30;
if (j > g) {
  confirm("Do you agree?");
}

var v = 1;
while(v <= 10) {
  document.write("vidya" + "<br>");
  v++;
}

var n = 1;
do {
  document.write("do while" + "<br>");
  n++;
}
while (n <= 5); 

for(var a = 1; a <= 10; a++) {
  if(a === 3) {
    break;
  }
  document.write("Rahi" + "<br>");
}

for(var c = 1; c <= 5; c++) {
  for(var w= 1; w <= 5; w++) {
    document.write("maya" + "<br>"); 
  }
  document.write("flower" + "<br>");
}