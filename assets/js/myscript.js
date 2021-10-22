$("#btn-up").hide();
let isClick = false;
$("body").scrollspy({ target: ".navbar", offset: 50 });
$("#btn-learn-more").click(function (e) {
  console.log(e);
  let id = "#tutorial";

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 70,
    },
    500,
    function () {}
  );
});
$(".to-top").click(function (e) {
  let id = "#header";

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 70,
    },
    500,
    function () {}
  );
});

$("#btn-readmore").click(function (e) {
  console.log(e);
  let id = "#about";
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

      setTimeout(() => {
        isClick = false;
      }, 50);
    }
  );
});
$("#carouselExampleControls").on("slide.bs.carousel", function () {
  let items = $(".carousel-item");
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element.className.search("active") !== -1) {
      if (i + 1 != items.length) {
        setContentCarousel(i + 1);
      } else {
        setContentCarousel(0);
      }
    }
  }
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
$("#carouselExampleControls").on("slide.bs.carousel", function () {
  let items = $(".carousel-item");
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element.className.search("active") !== -1) {
      if (i + 1 != items.length) {
        setContentCarousel(i + 1);
      } else {
        setContentCarousel(0);
      }
    }
  }
});

function setContentCarousel(index) {
  let contentCarousel = $(".wrapper-content-carousel");
  for (let i = 0; i < contentCarousel.length; i++) {
    const element = contentCarousel[i];
    element.className = "wrapper-content-carousel";
    if (i == index) {
      element.className += " active";
    }
  }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $imgNav = $("#img-navbar");
    $nav.toggleClass(
      "scrolled bg-white",
      $(this).scrollTop() > $nav.height()
    );
    if ($(this).scrollTop() > $nav.height()) {
      $imgNav.attr("src", "./assets/img/logo.svg");
    } else {
      $imgNav.attr("src", "./assets/img/logo.svg");
    }

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
});