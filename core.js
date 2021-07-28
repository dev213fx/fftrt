// Seperate trolls by coma 
var trollNick = "troll1,troll2,troll3";

var divs = document.getElementsByTagName("DIV");
var arr_del = new Array();
var arr_trolls = trollNick.split(",");

for (var t = 0; t < arr_trolls.length; t++) {
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id.startsWith("edit") && divs[i].textContent.includes(arr_trolls[t].trim())) {
      arr_del.push(divs[i].id);
    }
  }
}

for (var i = 0; i < arr_del.length; i++) {
  var rem = document.getElementById(arr_del[i]);
  if (rem) {
    rem.remove();
  }
}

console.log("Removed '" + trollNick + "' related posts count: " + arr_del.length);
