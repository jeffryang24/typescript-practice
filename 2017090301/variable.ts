const DEF_PHI = 3.14159;
var MyName:string = "Jeffry";
var MyAge:number = 20;
var CanVote:boolean = true;
var Anything:any = "Dog";
Anything = 23;
var strToNum:number = parseInt("102");
var intToString:number = 35;

document.getElementById("tsStuff").innerHTML = "My name is " + MyName;
document.write("MyName is a " + typeof(MyName) + "<br>");
document.write("MyAge is a " + typeof(MyAge) + "<br>");
document.write("CanVote is a " + typeof(CanVote) + "<br>");
document.write("Anything is a " + typeof(Anything) + "<br>");
document.write("intToString is a " + typeof(intToString.toString()) + "<br>");