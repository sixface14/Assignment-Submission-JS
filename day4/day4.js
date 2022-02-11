//creating an array of objects
var stu=[
    { name:"Arumugam",
      dept:"CSE",
      age:20,
      gender:"Male"
    },
    {
        name:"Veera",
        dept:"Mech",
        age:21,
        gender:"Male"
    },
    {
        name:"Gomathi",
        dept:"ECE",
        age:22,
        gender:"Female"
    },
    {
        name:"Subbu",
        dept:"Civil",
        age:19,
        gender:"Male"
    },
    {
        name:"Gowtham",
        dept:"EEE",
        age:23,
        gender:"Male"
    }
];

console.log("Printing objects inside array using for loop");
for(var i=0;i<stu.length;i++)
{
    console.log(stu[i].name,"belongs to",stu[i].dept);

};

console.log("\nPrinting objects inside array using forEach loop");
stu.forEach(
    function(a,b)
    {
        console.log(a.name,"belongs to",a.dept);
    }
);




