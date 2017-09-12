interface SuperHero{
    SuperName:string;
    RealName:string;
}

var Superman:SuperHero = {
    RealName: "Clark Kent",
    SuperName: "Super Man"
};

var employees:string[] = ["John", "Bobs", "Ana"];
var SuperHeroes:SuperHero[] = [];
SuperHeroes.push({
    RealName: "Mr. World Wide",
    SuperName: "PitBull"
});

let Samplet = 564;
if (true){
    let Samplet = 890;
}

var a = [5,6,7,8];

for(let x in a){
    document.write(x);
}

var strArray = a.map(String);

for(let y of strArray){
    document.write(y);
}

document.write(Superman.RealName + " is " + Superman.SuperName + "<br>");
document.write(employees.toString() + "<br>");
document.write(SuperHeroes[0].RealName + " is " + SuperHeroes[0].SuperName + "<br>");
document.write("Samplet is: " + Samplet);