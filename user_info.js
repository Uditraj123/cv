let name=sessionStorage.getItem("playername");
let points=sessionStorage.getItem("points");
let time_taken=sessionStorage.getItem("time");

/*console.log(name);
console.log(points);*/

document.querySelector(".name").innerHTML=name;
document.querySelector(".point").innerHTML=points;
document.querySelector(".time").innerHTML=time_taken;