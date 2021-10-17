  function myFunction() {
      var table = document.getElementById('myTable');
      var rowCount = table.rows.length - 1;
      var row = table.insertRow(rowCount);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = '<input onblur="findFirst()" type="number" name="firstRow" class="firstRow">';
      cell2.innerHTML = '<input onblur="findSecond()" type="number" name="SecondRow" class="secondRow">';
      cell3.innerHTML = '<input onblur="findThird()" type="number" name="thirdRow" class="thirdRow">';
      cell4.innerHTML = '<input onblur="findFourth()" type="number" name="thirdRow" class="fourthRow">';
  }
  var total1;

  function findFirst() {
      var arr = document.getElementsByClassName('firstRow');
      var tot = 0;
      for (var i = 0; i < arr.length; i++) {
          if (parseFloat(arr[i].value)) tot += parseFloat(arr[i].value);
      }
      total1 = tot;
      document.getElementById('firstResult').innerHTML = tot;
  }
  var total2;

  function findSecond() {
      var arr = document.getElementsByClassName('secondRow');
      var tot = 0;
      for (var i = 0; i < arr.length; i++) {
          if (parseFloat(arr[i].value)) tot += parseFloat(arr[i].value);
      }
      total2 = tot;
      document.getElementById('secondResult').innerHTML = tot;
  }
  var total3;

  function findThird() {
      var arr = document.getElementsByClassName('thirdRow');
      var tot = 0;
      for (var i = 0; i < arr.length; i++) {
          if (parseFloat(arr[i].value)) tot += parseFloat(arr[i].value);
      }
      total3 = tot;
      document.getElementById('thirdResult').innerHTML = tot;
  }
  var total4;

  function findFourth() {
      var arr = document.getElementsByClassName('fourthRow');
      var tot = 0;
      for (var i = 0; i < arr.length; i++) {
          if (parseFloat(arr[i].value)) tot += parseFloat(arr[i].value);
      }
      total4 = tot;
      document.getElementById('fourthResult').innerHTML = tot;
  }

  function Function() {
      var arrTotal = [total1, total2, total3, total4];
      var sortTotal = [total1, total2, total3, total4];
      sortTotal.sort(function (a, b) {
          return b - a;
      });;
      // Conditions for First Person
      if (arrTotal[0] == sortTotal[0]) {
          document.getElementById('result1').innerHTML = 'First';
      } else if (arrTotal[0] == sortTotal[1]) {
          document.getElementById('result1').innerHTML = 'Second';
      } else if (arrTotal[0] == sortTotal[2]) {
          document.getElementById('result1').innerHTML = 'Third';
      } else if (arrTotal[0] == sortTotal[3]) {
          document.getElementById('result1').innerHTML = 'Fourth';
      }

      // Conditions for Second Person
      if (arrTotal[1] == sortTotal[0]) {
          document.getElementById("result2").innerHTML = "First";
      } else if (arrTotal[1] == sortTotal[1]) {
          document.getElementById("result2").innerHTML = "Second";
      } else if (arrTotal[1] == sortTotal[2]) {
          document.getElementById("result2").innerHTML = "Third";
      } else if (arrTotal[1] == sortTotal[3]) {
          document.getElementById("result2").innerHTML = "Fourth";
      }

      // Conditions for Third Person
      if (arrTotal[2] == sortTotal[0]) {
          document.getElementById("result3").innerHTML = "First";
      } else if (arrTotal[2] == sortTotal[1]) {
          document.getElementById("result3").innerHTML = "Second";
      } else if (arrTotal[2] == sortTotal[2]) {
          document.getElementById("result3").innerHTML = "Third";
      } else if (arrTotal[2] == sortTotal[3]) {
          document.getElementById("result3").innerHTML = "Fourth";
      }

      // Conditions for Fourth Person
      if (arrTotal[3] == sortTotal[0]) {
          document.getElementById("result4").innerHTML = "First";
      } else if (arrTotal[3] == sortTotal[1]) {
          document.getElementById("result4").innerHTML = "Second";
      } else if (arrTotal[3] == sortTotal[2]) {
          document.getElementById("result4").innerHTML = "Third";
      } else if (arrTotal[3] == sortTotal[3]) {
          document.getElementById("result4").innerHTML = "Fourth";
      }
  }