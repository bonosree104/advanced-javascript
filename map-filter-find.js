const students = [
    {id:22, name: "tommo"},
    {id:33, name :"titu"},
    {id:44, name: "sohojuz"},
    {id:55, name: "salam"}
];
 
const names = students.map( s=> s.name);
console.log(names);

const ids = students.map( s=> s.id);
console.log(ids);

const bigger = students.filter( s=> s.id>40);
console.log(bigger);

const biggertwo = students.find( s=> s.id>40);
console.log(biggertwo);