const sub = document.getElementById("sub");
sub.style.color="blue";
sub.style.fontSize="150%";
sub.style.fontWeight="bold";

const img = document.getElementById("img");
img.addEventListener("mousedown", function (event) {
  this.src='https://cdn.osaka-info.jp/page_translation/content/c18279c6-2be3-11e8-871d-0af0cba29dd8.jpeg';
});
img.addEventListener("mouseup", function (event) {
  this.src='https://tk.ismcdn.jp/mwimgs/1/2/1140/img_12d8b440b2a6c5ab1011e935e8eba3251767265.jpg';
});
