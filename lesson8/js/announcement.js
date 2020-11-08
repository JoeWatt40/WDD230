document.getElementById("name").focus();

var d = new Date();
var n = d.getDay();

if (n != 5) {
    document.getElementById("announcement").style.display = "none";
}