function baitap1() {
  var n = 0;
  var sum = 0;
  while (true) {
    n++
    sum += n

    if (sum > 10000) {
      break;
    }
  }
  document.getElementById("ketQua").style.display = "block"
  document.getElementById("result").innerHTML = n
}
function baiTap2() {
  var n = +document.getElementById("txtNum").value
  var x = +document.getElementById("txtNum1").value
  var sum = 0
  for (var i = 1; i <= n; i++) {
    sum = sum + x ** i
  }
  document.getElementById("display").style.display = "block"
  document.getElementById("xuatKQ").innerHTML = sum
}

function baiTap3() {
  var n = +document.getElementById("giaiThua").value
  if (n < 0 || n == 0) {
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = "nhập sai, nhập lại"
  } else {
    var tich = 1
    for (var i = 1; i <= n; i++) {
      tich = tich * i
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = tich
  }
}
}

function baiTap4() {
  var count
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      count += `<div class='red'></div>`
    }
    else {
      count += `<div class='blue'></div>`
    }
    var display = document.getElementById("divEl")
    display.style.display = "block"
    display.innerHTML = count
  }

}