function baitap1() {
  // B1: Khai báo biến
  var n = 0;
  var sum = 0;
  // B2 cho vòng lặp luôn đúng chạy n tăng dần
  while (true) {
    n++
    //tổng =  tổng + n
    sum += n
    // Nếu tổng lớn hơn 1000 thì thoát vòng lặp
    if (sum > 10000) {
      break;
    }
  }
  // B3: Xuất kết quả ra màn hình
  document.getElementById("ketQua").style.display = "block"
  document.getElementById("result").innerHTML = `Số nguyên dương nhỏ nhất: ${n}`
}
function baiTap2() {
  //B1: Dom tới thẻ input để lấy dữ liệu nhập vào
  var n = +document.getElementById("txtNum").value
  var x = +document.getElementById("txtNum1").value
  // xét điều kiện đầu vào
  if (n < 0 || n == 0 || x < 0 || x == 0) {
    document.getElementById("display").style.display = "block"
    document.getElementById("xuatKQ").innerHTML = "nhập sai, nhập lại"
    return 0
  }else {
  var sum = 0
  // B2: chạy vòng lặp:
  for (var i = 1; i <= n; i++) {
    sum = sum + x ** i
  }
  // B3: xuất kết quả ra màn hình
  document.getElementById("display").style.display = "block"
  document.getElementById("xuatKQ").innerHTML = sum
  }
}

function baiTap3() {
  //B1: Dom tới thẻ input để lấy dữ liệu nhập vào
  var n = +document.getElementById("giaiThua").value
  // xét điều kiện đầu vào
  if (n < 0 || n == 0) {
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = "nhập sai, nhập lại"
    return 0
  } else {
    var tich = 1
    // B2: chạy vòng lặp tính tích từ 1 đến n
    for (var i = 1; i <= n; i++) {
      tich = tich * i
      //B3: xuất kết quả ra màn hình
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = tich
  }
}
}

function baiTap4() {
  //B1: Tạo biến count
  var count
  //B2: chạy vòng lặp nếu i <= 10
  for (var i = 1; i <= 10; i++) {
    // nếu i là số chẵn tạo thẻ div màu đỏ
    if (i % 2 == 0) {
      count += `<div class='red'></div>`
    }
    // nếu không phải số chẵn tạo thẻ div màu xanh
    else {
      count += `<div class='blue'></div>`
    }
    //B3: Xuất kết quả ra màn hình
    var display = document.getElementById("divEl")
    display.style.display = "block"
    display.innerHTML = count
  }

}