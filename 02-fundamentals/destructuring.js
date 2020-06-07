let superman = {
 name: 'Clark',
 lastname: 'Kent',
 power: "Flying",
 getName: function() {
  return `${this.name} ${this.lastname} -power: ${this.power}`
 }
};

//console.log(superman.getName());

let {name: firstname, lastname, power} = superman;

console.log(firstname, lastname, power)