const btnsubmit = document.getElementById("btn-submit");
btnsubmit.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 10) + 1;
  const input = document.getElementById("input").value;
  document.getElementById("input").value = "";
  if (input < 1 || input > 10 || isNaN(input) || input==null) {
    document.getElementById("show-text").innerHTML = "Oops!";
    document.getElementById("show-input-number").innerHTML = "";
    document.getElementById("show-lucky-number").innerHTML = "Số bạn đã nhập không hợp lệ.";
    document.getElementById("show-remaining-turns").innerHTML = "Vui lòng kiểm tra lại.";
    showPopup();
  } else {
    let a = Number(localStorage.getItem("count"));
    console.log(a);
    let b = a + 1;
    localStorage.setItem("count", b);
    if (b <= 3) {
      if (input == random) {
        document.getElementById("show-text").innerHTML = "CHÚC MỪNG BẠN ĐÃ TRÚNG THƯỞNG";
        document.getElementById("show-input-number").innerHTML = "Số bạn đã chọn: " + input;
        document.getElementById("show-lucky-number").innerHTML = "Con số may mắn: " + random;
        document.getElementById("show-remaining-turns").innerHTML = "Số lượt chơi còn lại: " + (3-b);
    showPopup();
      } else {
        document.getElementById("show-text").innerHTML = "CHÚC BẠN MAY MẮN LẦN SAU";
        document.getElementById("show-input-number").innerHTML = "Số bạn đã chọn: " + input;
        document.getElementById("show-lucky-number").innerHTML = "Con số may mắn: " + random;
        document.getElementById("show-remaining-turns").innerHTML = "Số lượt chơi còn lại: " + (3-b);
    showPopup();
      }
    } else {
      document.getElementById("show-text").innerHTML = "RẤT TIẾC";
      document.getElementById("show-input-number").innerHTML = "";
      document.getElementById("show-lucky-number").innerHTML = "Bạn đã hết số lượt chơi.";
        document.getElementById("show-remaining-turns").innerHTML = "Vui lòng nhấn RESET để có thể chơi tiếp";
    showPopup();
      }
  }
});

//Event for Reset button
const btnreset = document.getElementById("btn-reset");
btnreset.addEventListener("click", function () {
  localStorage.clear();
  document.getElementById("show-text").innerHTML = "CHÚC MỪNG";
  document.getElementById("show-input-number").innerHTML = "";
  document.getElementById("show-lucky-number").innerHTML = "Bạn có thêm 3 lượt chơi mới";
        document.getElementById("show-remaining-turns").innerHTML = "";
  showPopup();
});


/*JS for Popup*/
const popup_container=document.getElementById("popup-container");

function showPopup() {
  popup_container.classList.add("show");
}

popup_container.addEventListener("click", function (event) {
  event.preventDefault();
  popup_container.classList.remove("show");
});