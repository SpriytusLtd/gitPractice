
n(){
var imageArea = $("#imageArea");
for(var i = 1; i <= 5; i++){
imageArea.append(
"<img src = 'images/view" + i + ".jpg'>");
}
$("#next").on("click", function(){
  if(parseInt(imageArea.css("left")) > -2000){
    imageArea.animate({
      "left" : "-=500px" }, "fast", "linear");
    }
  });
  $("#prev").on("click",function(){
    if(parseInt(imageArea.css("left")) < 0){
      imageArea.animate({
        "left" : "+=500px" }, "fast", "linear");
      }
  });
});

