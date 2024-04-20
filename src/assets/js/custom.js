import $ from 'jquery';

// Video-play-Start
var video = document.getElementById("video-play");
// Get the button
var btn = document.getElementById("myBtn");
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

// Video-play-End

// sidebar start

$("main .sidebar ul li a").on('click', function () {
  $("main .sidebar ul li a").not(this).removeClass("active");
  $(this).toggleClass("active");
});

// sidebar off

// sidebar mobile start

// $(".toggle i").on("click", function () {
//   alert(1)
//   $(".sidebar").toggleClass("open");
// });

$('body').on('click','.toggle i',function(){
  // alert();
  $(".sidebar").toggleClass("open");
});


$('body').on('click','main .close-toggle i',function(){
  // alert();
  $(".sidebar").removeClass("open");
});

// sidebar mobile start



$('.distribute_progress .progress-fill span').each(function () {
  var percent = $(this).html();
  $(this).parent().css('width', percent);
});
$(function () {
  // $( ".datepicker" ).datepicker();
});



//  pie chart
function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice " + sliceID + "'><span><i>%</span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("." + sliceID).css({
    "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
  });
  $("." + sliceID + " span").css({
    "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s" + dataCount + "-" + sliceCount;
  var maxSize = 179;
  if (sliceSize <= maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement + " span").each(function () {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for (var i = 0; i < listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "#7435F9",
    "#DE35F9",
    "#0C49A5",
    "#28AEF3",

  ];
  for (var i = 0; i < listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");

