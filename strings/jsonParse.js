"use strict";

form.string.addEventListener("click", function () {
  var out = form.out;
  if (!jsonobj.length) return;
  var tblstr = "<table>";
  tblstr += "<caption>Table Using HTML String</caption>";
  tblstr += "<tr>";
  for (var prop in jsonobj[0]) {
    tblstr += "<th>" + prop;
  }
  tblstr += jsonobj.reduce(function (s, x) {
    s += "<tr>";
    for (var _prop in x) {
      s += "<td>" + x[_prop];
    }
    return s;
  }, "");
  tblstr += "</table>";
  out.insertAdjacentHTML("beforeend", "<p>" + tblstr);
});