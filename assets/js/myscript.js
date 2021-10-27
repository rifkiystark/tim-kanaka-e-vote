let isClick = false;
$("body").scrollspy({ target: ".navbar", offset: 50 });
$("#btn-continue").click(function (e) {
  console.log(e);
  let id = "#howtovote";

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 70,
    },
    500,
    function () { }
  );
});

$(".nav-link").click(function (e) {
  console.log(e);
  let id = e.target.hash;
  isClick = true;
  $(".nav-item").removeClass("active");
  $(".nav-item").each((i, elem) => {
    if (elem.children[0].attributes.href.nodeValue == id) {
      elem.className = "nav-item active";
    }
  });
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 70,
    },
    500,
    function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = id;
      setTimeout(() => {
        isClick = false;
      }, 50);
    }
  );
});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $imgNav = $("#img-navbar");
    $nav.toggleClass(
      "scrolled bg-white",
      $(this).scrollTop() > $nav.height()
    );


    if ($(this).scrollTop() < $nav.height() + 520) {
      $("#btn-up").hide();
    } else {
      $("#btn-up").show();
    }

    if (!isClick) {
      $(".nav-link").each((i, elem) => {
        if (elem.className.search("active") != -1) {
          $(".nav-item").removeClass("active");
          elem.parentElement.className += " active";
        }
      });
    }
  });

  let box = document.querySelector('.card-candidates');
  let width = box.offsetWidth;
  let height = box.offsetHeight;
  console.log(height)
  $("#cardCandidates").css("height", height);

  window.addEventListener("resize", function (event) {
    let box = document.querySelector('.card-candidates');
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    console.log(height)
    $("#cardCandidates").css("height", height);
  })
});