//day3 assignment -- loops
//program to print table of 5
console.log("Table of 5");
for (var i=5;i<=50;i+=5) 
{
    console.log(i);
}

// create variables holding 5 subject marks

var tam=99;
var eng=94;
var mat=100;
var che=98;
var phy=97;

// calculate percentage and grade

var per=(tam+eng+mat+che+phy)/5;
console.log("percentage=",per);

console.log("Grade belongs to");
if(per>=95 && per<=100)
{
    console.log("O Grade");
}
else if(per>95 && per<=85)
{
    console.log("A Grade");
}
else if(per>85 && per<=75)
{
    console.log("B Grade");
}
else if(per>75 && per<=65)
{
    console.log("C Grade");
}
else
{
    console.log("Fail");
}