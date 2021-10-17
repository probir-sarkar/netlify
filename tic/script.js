let humanCount = JSON.parse(sessionStorage.getItem("humanCount"));
let pcCount = JSON.parse(sessionStorage.getItem("pcCount"));
let drawCount = JSON.parse(sessionStorage.getItem("drawCount"));
let human = new Audio("human.wav");
let robot = new Audio("robot.wav");
robot.load();
human.load();
const disableBtn = () => {
  document
    .querySelectorAll("button.playBtn")
    .forEach((elem) => (elem.disabled = true));
};
const enableBtn = () => {
  document
    .querySelectorAll("button.playBtn")
    .forEach((elem) => (elem.disabled = false));
};
const toggle = (result) => {
  document.getElementById("result").innerHTML = result;
  document.getElementById("overlay").style.visibility = "visible";
  disableBtn();
};
const pass = (check) => {
  ck = idArrayInnerHtml;
  let [a, b, c, d, e, f, g, h, i] = [
    ck[0],
    ck[1],
    ck[2],
    ck[3],
    ck[4],
    ck[5],
    ck[6],
    ck[7],
    ck[8],
  ];
  if (
    (a == "X" && b == "X" && c == "X") ||
    (d == "X" && e == "X" && f == "X") ||
    (g == "X" && h == "X" && i == "X") ||
    (a == "X" && d == "X" && g == "X") ||
    (b == "X" && e == "X" && h == "X") ||
    (c == "X" && f == "X" && i == "X") ||
    (a == "X" && e == "X" && i == "X") ||
    (c == "X" && e == "X" && g == "X")
  ) {
    toggle("You pass");
    humanCount = humanCount + 1;
    sessionStorage.setItem("humanCount", JSON.stringify(humanCount));

    return true;
  } else if (
    (a == "O" && b == "O" && c == "O") ||
    (d == "O" && e == "O" && f == "O") ||
    (g == "O" && h == "O" && i == "O") ||
    (a == "O" && d == "O" && g == "O") ||
    (b == "O" && e == "O" && h == "O") ||
    (c == "O" && f == "O" && i == "O") ||
    (a == "O" && e == "O" && i == "O") ||
    (c == "O" && e == "O" && g == "O")
  ) {
    setTimeout(function () {
      toggle("Computer pass");
    }, 100);
    pcCount = pcCount + 1;
    sessionStorage.setItem("pcCount", JSON.stringify(pcCount));
  } else {
    let len = idArray.length;
    if (len == 0) {
      toggle("draw");
      drawCount = drawCount + 1;
      sessionStorage.setItem("drawCount", JSON.stringify(drawCount));
    } else if (check == "X") {
      setTimeout(function () {
        rand();
      }, 250);
    }
  }
};
const rand = () => {
  let len = idArray.length;
  if (len >= 1) {
    robot.play();

    let random = Math.floor(Math.random() * len);
    let ranBtn = idArray[random];
    let position = idArrayInnerHtml.indexOf(ranBtn.innerHTML);
    ranBtn.classList.remove("btn-info");
    ranBtn.className += " btn-danger";
    ranBtn.disabled = true;
    ranBtn.innerHTML = "O";
    idArrayInnerHtml.splice(position, 1, "O");
    remove(ranBtn);
    pass();
  }
};
const remove = (btn) => {
  let index = idArray.indexOf(btn);
  idArray.splice(index, 1);
};
const x = (btn) => {
  document.getElementById("result").innerHTML = "Playing....";
  human.play();
  btn.disabled = true;
  btn.classList.remove("btn-info");
  btn.className += " btn-success";
  let position = idArrayInnerHtml.indexOf(btn.innerHTML);
  idArrayInnerHtml.splice(position, 1, "X");
  btn.innerHTML = "X";
  btn.style.color = "black !important";
  remove(btn);
  pass("X");
};

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");

let idArray = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

let idArrayInnerHtml = [
  btn1.innerHTML,
  btn2.innerHTML,
  btn3.innerHTML,
  btn4.innerHTML,
  btn5.innerHTML,
  btn6.innerHTML,
  btn7.innerHTML,
  btn8.innerHTML,
  btn9.innerHTML,
];

btn1.onclick = () => x(btn1);
btn2.onclick = () => x(btn2);
btn3.onclick = () => x(btn3);
btn4.onclick = () => x(btn4);
btn5.onclick = () => x(btn5);
btn6.onclick = () => x(btn6);
btn7.onclick = () => x(btn7);
btn8.onclick = () => x(btn8);
btn9.onclick = () => x(btn9);

let refresh = document.querySelector("#refresh");
let reset = document.querySelector("#reset");

if (humanCount == null) {
  document.getElementById("humanCnt").innerHTML = "0";
} else {
  document.getElementById("humanCnt").innerHTML = humanCount;
}

refresh.onclick = () => {
  location.reload(false);
};
reset.onclick = () => {
  sessionStorage.clear();
  location.reload(true);
};
