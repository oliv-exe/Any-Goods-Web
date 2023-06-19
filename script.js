// HOVER

var BAR = document.querySelector(".bar");
var QSN = document.querySelector(".qsn");
var NR = document.querySelector(".nr");
var NE = document.querySelector(".ne");
var timer;

QSN.addEventListener("mouseover", function() {
  clearTimeout(timer);
  BAR.style.right = "33.5vw";
  BAR.style.backgroundColor = "#111111"
});

QSN.addEventListener("mouseout", function() {
    timer = setTimeout(function() {
        BAR.style.backgroundColor = "#11111100"
    }, 1250);
});

NR.addEventListener("mouseover", function() {
  clearTimeout(timer);
  BAR.style.right = "19vw";
  BAR.style.backgroundColor = "#111111"
});

NR.addEventListener("mouseout", function() {
    timer = setTimeout(function() {
        BAR.style.backgroundColor = "#11111100"
    }, 1250);
});

NE.addEventListener("mouseover", function() {
  clearTimeout(timer);
  BAR.style.right = "5.25vw";
  BAR.style.backgroundColor = "#111111"
});

NE.addEventListener("mouseout", function() {
    timer = setTimeout(function() {
        BAR.style.backgroundColor = "#11111100"
    }, 1250);
});

// ARROW

var Arrow = document.querySelector(".arrow");

function checkScrollPosition() {
  
    if (window.scrollY > 200) {
        Arrow.style.display = "block";
    } else {
        Arrow.style.display = "none";
    }
}

window.addEventListener("scroll", function() {
    checkScrollPosition();
  });