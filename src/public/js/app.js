function inviteInput() {
  document.getElementById("error").innerHTML = "Mời bạn nhập dữ liệu";
}

function hasEmptyText(str) {
  if (str == "") {
    return true;
  }
  return false;
}

function hasBlankText(str) {
  if (str.search(" ") == -1) return false;
  return true;
}

function isNumber() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  //check num1 and num2 are numbers
  if (isNaN(num1) || hasEmptyText(num1) || hasBlankText(num1)) {
    document.getElementById("error").innerHTML =
      "Giá trị nhập ở ô <i><b>Số thứ nhất</b></i> không phải là số";
  } else if (isNaN(num2) || hasEmptyText(num2) || hasBlankText(num2)) {
    document.getElementById("error").innerHTML =
      "Giá trị nhập ở ô <i><b>Số thứ hai</b></i> không phải là số";
  } else {
    document.getElementById("error").innerHTML = "";
    return true;
  }
  return false;
}

function calc() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  //check empty text and blank text
  if (isNumber() == false) {
    return false;
  } else if (
    document.getElementById("radio-plus").checked == false &&
    document.getElementById("radio-minus").checked == false &&
    document.getElementById("radio-multiply").checked == false &&
    document.getElementById("radio-divide").checked == false
  ) {
    document.getElementById("error").innerHTML = "Vui lòng chọn phép tính!!!";
    return false;
  }

  if (document.getElementById("radio-plus").checked == true)
    document.getElementById("operator-name").value = "radio-plus";
  else if (document.getElementById("radio-minus").checked == true)
    document.getElementById("operator-name").value = "radio-minus";
  else if (document.getElementById("radio-multiply").checked == true)
    document.getElementById("operator-name").value = "radio-multiply";
  else if (document.getElementById("radio-divide").checked == true)
    document.getElementById("operator-name").value = "radio-divide";

  return true;
}
