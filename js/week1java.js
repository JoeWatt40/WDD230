function modifyTime() {
    var t = new Date(document.lastModified);
    document.getElementById("time").innerHTML = t;
  }