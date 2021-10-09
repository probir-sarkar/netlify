const charToAscii = function (str) {
  var value = str.value;
  var i;
  var text = "";
  for (i = 0; i < value.length; i++) {
    text += str.value.charCodeAt(i) + ",";
  }
  return text;
};
const asciiToChar = function (str) {
  var array = new Array();
  var array = str.split(",");
  let text = "";
  for (i = 0; i < array.length; i++) {
    let arrayValue = array[i];
    if (isNaN(arrayValue) == true) {
      alert(arrayValue + "- is not a number");
      document.getElementById("demo").style.display = "none";
    } else if (arrayValue < 32 || arrayValue > 126) {
      alert(arrayValue + " - is not in range of ASCII");
      document.getElementById("demo").style.display = "none";
      break;
    } else {
      document.getElementById("demo").style.display = "";
      text += String.fromCharCode(arrayValue);
    }
  }
  return text;
};
function char() {
  document.getElementById("demo").style.display = "";
  var str = document.getElementById("id1");
  var a = "ASCII Code is == > <br> ";
  document.getElementById("demo").innerHTML = a + charToAscii(str).slice(0, -1);
}
function myFunction() {
  var str = document.getElementById("id1").value;
  var a = "Char is == > <br> ";
  document.getElementById("demo").innerHTML = a + asciiToChar(str);
}
function toggle() {
  document.getElementById("id1").value = "";
  document.getElementById("demo").style.display = "none";
  let btn = document.getElementById("btn1");
  let value = btn.value;
  if (value == "Char to Ascii") {
    btn.setAttribute("onclick", "myFunction()");
    btn.value = "Ascii to Char";
    document.getElementById("title").innerHTML = "ASCII to Char converter";
  } else {
    btn.setAttribute("onclick", "char()");
    btn.value = "Char to Ascii";
    document.getElementById("title").innerHTML = "Char to ASCII converter";
  }
}
