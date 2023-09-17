$(document).ready(function () {
    // ========== MOBILE MENU START ============
    $('.mobile-toggle').click(function () {
        $('.header-center').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('scrollno');
    });
    $('.header_menu_close_icon , .overlay').click(function () {
        $('.header-center').removeClass('active');
        $('.overlay').removeClass('active');
        $('body,html').removeClass('scrollno');
    });
   // ========== MOBILE MENU END ============


    var anHeight = $('header').outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > anHeight) {
            $('header').addClass('header-scroll');
        } else {
            $('header').removeClass('header-scroll');
        }
    });

// =========== HEIGHT GET OF HEADER ==============
    let sam = () => {
        let head_height = document.getElementById("header").offsetHeight;
        let wrapper = document.getElementById("wrapper");
        wrapper.style.marginTop = head_height + "px";
    }
    sam();
    window.addEventListener("orientationchange", sam);
    window.addEventListener("resize", sam);

    //============== TESTIMONIAL SLIDER ================
    new Swiper('.review-main-slider', {
        loop: false,
        arrow:true, 
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween:15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        breakpoints: {
            1025: {
                slidesPerView: 2.98,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 10
            },
            426: {
                slidesPerView: 1.2,
            }
        }
    }); 

    AOS.init();

});
