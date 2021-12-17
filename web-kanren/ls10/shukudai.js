//マルチメディアコンテンツ
var target = null;
window.onload = function () {
  var drag = document.getElementById("image");
  var drop = document.getElementById("area");
  drag.addEventListener(
    "dragstart",
    function (e) {
      target = e.target;
    },
    false
  );
  drop.addEventListener(
    "dragover",
    function (e) {
      e.preventDefault();
    },
    false
  );
  drop.addEventListener(
    "drop",
    function (e) {
      e.preventDefault();
      e.target.appendChild(target);
    },
    false
  );
};

//geolocationAPI
if (navigator.geolocation) {
  alert("現在位置を取得することができます。");
  navigator.geolocation.getCurrentPosition(function (position) {
    var data = position.coords;
    var lat = data.latitude;
    var lng = data.longitude;
    document.getElementById("result").innerHTML =
      "<div>緯度：" + lat + "</div>" + "<div>経度：" + lng + "</div>";
  });
} else {
  alert("現在位置を取得できません。");
}
