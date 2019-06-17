window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").style.background ="black";
  } else {
    document.querySelector("nav").style.background = "transpaent";
  }
}