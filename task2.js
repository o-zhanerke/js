function teksery(san) {
    oi_san = 78;
    if (san == oi_san) {
      return "Molodec";
    } else if (oi_san > san) {
      return "Senin sanyn kishi";
    } else {
      return "Senin sanyn ulken";
    }
  }
  
  var jauap = "";
  while (true) {
    var num = +prompt("San engiz");
    jauap = teksery(num);
    if (jauap == "Molodec") {
      alert("Zharaisyn");
      break;
    } else {
      alert(jauap);
    }
  }