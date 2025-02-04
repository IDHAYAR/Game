let user={
    name:"Kendrick",
    age:30, 
    "is singer":true,
}
//console.log(user)

for(let key in user){
    console.log(key+":"+user[key]);
}
let array=[1,2,3,4,5,6]

for(let value of array){
    console.log(value);
}