//=SMOOTH-SCROLL==============================================================================================================================================================

$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          500
        );
        return false;
      }
    }
  });
});

//=IBG====================================================================================================================================================

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();

//=ADAPTIVE-FUNCTIONS==============================================================================================================================================================

$(window).resize(function (event) {
  adaptive_function();
});
function adaptive_header(w, h) {
  const columnRight = $(".content__column_right");
  const linkBlock = $(".link-block__body");
  if (w <= 1100) {
    if (!linkBlock.hasClass("done")) {
      linkBlock.addClass("done").appendTo(columnRight);
    }
  } else {
    if (linkBlock.hasClass("done")) {
      linkBlock.removeClass("done").prependTo($(".content__link-block"));
    }
  }
}
function adaptive_function() {
  let w = $(window).outerWidth();
  let h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

//=SLICK-SLIDER===========================================================================================================================================================

$(document).ready(function () {
  $(".slider__body").slick({
    autoplay: true,
    infinite: true,
    // dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
      {
        breakpoint: 1250,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  });
});

//=FORMS-INPUT-TEXTAREA==============================================================================================================================================================

("use strict");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }

    function formAddError(input) {
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
    }

    function formRemoveError(input) {
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }

    //=email-test-function

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  }
});
