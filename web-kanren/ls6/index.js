const img = document.getElementById("img");
img.addEventListener("mousedown", function (event) {
  this.src='https://i2.wp.com/yamagatayama.com/wp-content/uploads/2015/01/5a9b9de777aaf64eb519c3419488c95a.jpg?w=2000';
});
img.addEventListener("mouseup", function (event) {
  this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tateshinayama-fuyu.JPG/600px-Tateshinayama-fuyu.JPG';
});
