var Superman = {
    RealName: "Clark Kent",
    SuperName: "Super Man"
};
var employees = ["John", "Bobs", "Ana"];
var SuperHeroes = [];
SuperHeroes.push({
    RealName: "Mr. World Wide",
    SuperName: "PitBull"
});
var Samplet = 564;
if (true) {
    var Samplet_1 = 890;
}
var a = [5, 6, 7, 8];
for (var x in a) {
    document.write(x);
}
var strArray = a.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var y = strArray_1[_i];
    document.write(y);
}
document.write(Superman.RealName + " is " + Superman.SuperName + "<br>");
document.write(employees.toString() + "<br>");
document.write(SuperHeroes[0].RealName + " is " + SuperHeroes[0].SuperName + "<br>");
document.write("Samplet is: " + Samplet);
