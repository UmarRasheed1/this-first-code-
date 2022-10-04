var obj= { name: "umar ",
age: 24 , city: "pakpattan" }

function updatearry (val) { 
    val.city= "lahore"
    val.age= 23
    
}
console.log(obj.age);
console.log(obj.city)
updatearry(obj);
console.log(obj.age);
console.log(obj.city);