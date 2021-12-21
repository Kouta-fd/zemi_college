window.onload = function () {
  var uploadArea = document.getElementById("area");
  uploadArea.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.target.classList.add("drag");
  });
  uploadArea.addEventListener("dragleave", function (event) {
    event.target.classList.remove("drag");
  });
  // 追加のdropイベント
  uploadArea.addEventListener("drop", function (event) {
    event.preventDefault();
    var input = document.getElementById("file");
    input.files = event.dataTransfer.files; //取得したinputにDropしたファイルを突っ込む
  });
  //メモがローカルストレージにあるかを判断
  var strage = "";
  if (localStorage.getItem("strage") == null) {
    strage = "メモはありません。";
  } else {
    strage = localStorage.getItem("strage");
  }
  document.getElementById("memo").value = strage;
};
var memo = document.getElementById("memo");
//保存ボタン
document.getElementById("save").addEventListener("click", function (event) {
  var strage = memo.value;
  localStorage.setItem("strage", strage);
});
//削除ボタン
document.getElementById("clear").addEventListener("click", function (event) {
  localStorage.clear();
  memo.value = "";
});
