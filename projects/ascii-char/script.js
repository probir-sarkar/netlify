function myFunction() {
  var str = document.getElementById("id1");
  var array = new Array();
  var value = str.value;
  var array = value.split(",");
  var i;
  var arrayValue1 = "";
  let arrayValue;
  let text = "";
  for (i = 0; i < array.length; i++) {
    arrayValue = array[i];
    text += String.fromCharCode(arrayValue);
    if (isNaN(arrayValue) == true) {
      alert(arrayValue + "- is not a number");
      document.getElementById("demo").style.display = "none";
    } else if (arrayValue < 32) {
      alert(arrayValue + " - is not in range of ASCII");
      document.getElementById("demo").style.display = "none";
      break;
    } else if (arrayValue > 126) {
      alert(arrayValue + " - is not in range of ASCII");
      document.getElementById("demo").style.display = "none";
      break;
    } else {
      document.getElementById("demo").style.display = "";
    }
  }
  var a = "Char is == > <br> ";
  document.getElementById("demo").innerHTML = a + text;
}
