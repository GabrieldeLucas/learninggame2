window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".top-header").style.backgroundColor = "rgba(48, 34, 129, 0.9)";
    document.querySelector(".top-header").style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.623)";
  } else {
    document.querySelector(".top-header").style.backgroundColor = "transparent";
    document.querySelector(".top-header").style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.2)";
  }
}