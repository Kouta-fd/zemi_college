window.onload = function () {
  var uploadArea = document.getElementById("area");
  uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.target.classList.add("drag");
  });
  uploadArea.addEventListener("dragleave", (event) => {
    event.target.classList.remove("drag");
  });
  // 追加のdropイベント
  uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();
    var input = document.querySelectorAll('input[name="fileupload"]'); //好きなようにDOMを取得してください
    input[0].files = event.dataTransfer.files; //取得したinput[type=file]にDropしたファイルを突っ込む
    var file = document.getElementById("file").file[0];
    this.alert(file.size)
  });
};
