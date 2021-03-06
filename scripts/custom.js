$(document).ready(function () {
    function e() {
        var e = $("#page-content").height(),
            t = $("#page-content").width(),
            a = $(".cover-page-content").height() - 30,
            o = $(".cover-page-content").width();
        $(".cover-page").css("height", e), $(".cover-page").css("width", t), $(".cover-page-content").css("margin-left", o / 2 * -1), $(".cover-page-content").css("margin-top", a / 2 * -1);
        var s = $(window).width(),
            i = $(window).height(),
            r = -$(".cover-center").height() / 2,
            l = -$(".cover-center").width() / 2;
        $(".cover-screen").css("width", s), $(".cover-screen").css("height", i), $(".cover-screen .overlay").css("width", s), $(".cover-screen .overlay").css("height", i), $(".cover-center").css("margin-left", l), $(".cover-center").css("margin-top", r + 30), $(".cover-left").css("margin-top", r), $(".cover-right").css("margin-top", r)
    }

    function t() {
        var e = $("#page-content").height(),
            t = $("#page-content").width(),
            a = e - 220,
            o = a / 5,
            s = a / 4,
            i = a / 3,
            r = t / 5,
            l = t / 4,
            n = t / 3,
            c = o / 5,
            d = s / 4,
            p = i / 3;
        $(".five-rows a").css("height", o), $(".five-rows a").css("padding-top", o / 2 - c), $(".five-rows strong").css("margin-top", o / 2 - c), $(".four-rows a").css("height", s), $(".four-rows a").css("padding-top", s / 2 - d), $(".four-rows strong").css("margin-top", s / 2 - d), $(".three-rows a").css("height", i), $(".three-rows a").css("padding-top", i / 2 - p), $(".three-rows strong").css("margin-top", i / 2 - p), $(".five-columns a").css("width", r), $(".four-columns a").css("width", l), $(".three-columns a").css("width", n);
        var h = -1 * $(".home-intro").width(),
            m = -1 * $(".home-intro").height();
        $(".home-intro").css("margin-left", h / 2), $(".home-intro").css("margin-top", m / 2);
        var u = -1 * $(".home-outro").width(),
            v = -1 * $(".home-outro").height();
        $(".home-outro").css("margin-left", u / 2), $(".home-outro").css("margin-top", v / 2), $(".home-slide-icons a").find("strong").length > 0 && $(".home-slide-icons a i").css("pointer-events", "none"), $(".home-social a").hover(function () {
            $(this).addClass("hover-icon-effect")
        }, function () {
            $(this).removeClass("hover-icon-effect")
        }), $(".home-slide-icons a").hover(function () {
            $(this).find("i").addClass("hover-icon-effect"), $(this).find("strong").addClass("hover-icon-effect")
        }, function () {
            $(this).find("i").removeClass("hover-icon-effect"), $(this).find("strong").removeClass("hover-icon-effect")
        })
    }

    function a() {
        var e = $(window).width(),
            t = $(window).height();
        $(".map-fullscreen iframe").css("width", e), $(".map-fullscreen iframe").css("height", t)
    }
    $(function () {
        FastClick.attach(document.body)
    }), $(function () {
        $(".preload-image").lazyload({
            threshold: 100,
            effect: "fadeIn",
            container: $("#page-content-scroll")
        })
    }), $(".activate-tab-1").click(function () {
        $("#tab-2, #tab-3").slideUp(250), $("#tab-1").slideDown(250), $(".home-tabs a").removeClass("active-home-tab"), $(".activate-tab-1").addClass("active-home-tab")
    }), $(".activate-tab-2").click(function () {
        $("#tab-1, #tab-3").slideUp(250), $("#tab-2").slideDown(250), $(".home-tabs a").removeClass("active-home-tab"), $(".activate-tab-2").addClass("active-home-tab")
    }), $(".activate-tab-3").click(function () {
        $("#tab-1, #tab-2").slideUp(250), $("#tab-3").slideDown(250), $(".home-tabs a").removeClass("active-home-tab"), $(".activate-tab-3").addClass("active-home-tab")
    });
    var o = 270,
        s = 300,
        i = o - 40;
    if ($(".submenu, .sidebar-left, .sidebar-right").css("width", o), $(".sidebar-form").css("width", i), $(".sidebar-left .submenu").css({
            transform: "translateX(" + -1 * o + "px)",
            "-webkit-transform": "translateX(" + -1 * o + "px)",
            "-moz-transform": "translateX(" + -1 * o + "px)",
            "-o-transform": "translateX(" + -1 * o + "px)",
            "-ms-transform": "translateX(" + -1 * o + "px)"
        }), $(".sidebar-left").css({
            transform: "translateX(" + -1 * s + "px)",
            "-webkit-transform": "translateX(" + -1 * s + "px)",
            "-moz-transform": "translateX(" + -1 * s + "px)",
            "-o-transform": "translateX(" + -1 * s + "px)",
            "-ms-transform": "translateX(" + -1 * s + "px)"
        }), $(".sidebar-right .submenu").css({
            transform: "translateX(" + 1 * o + "px)",
            "-webkit-transform": "translateX(" + 1 * o + "px)",
            "-moz-transform": "translateX(" + 1 * o + "px)",
            "-o-transform": "translateX(" + 1 * o + "px)",
            "-ms-transform": "translateX(" + 1 * o + "px)"
        }), $(".sidebar-right").css({
            transform: "translateX(" + 1 * s + "px)",
            "-webkit-transform": "translateX(" + 1 * s + "px)",
            "-moz-transform": "translateX(" + 1 * s + "px)",
            "-o-transform": "translateX(" + 1 * s + "px)",
            "-ms-transform": "translateX(" + 1 * s + "px)"
        }), $(".sidebar-right .submenu").css({
            transform: "translateX(" + 1 * o + "px)",
            "-webkit-transform": "translateX(" + 1 * o + "px)",
            "-moz-transform": "translateX(" + 1 * o + "px)",
            "-o-transform": "translateX(" + 1 * o + "px)",
            "-ms-transform": "translateX(" + 1 * o + "px)"
        }), $(".open-left-sidebar").click(function () {
            return $(".sidebar-left").addClass("active-sidebar-box"), $(".sidebar-right").removeClass("active-sidebar-box"), $(".sidebar-tap-close").addClass("active-tap-close"), $("#page-content-scroll").addClass("stop-scroll"), !1
        }), $(".open-search-bar, .close-search-bar").click(function () {
            $(".header-search").toggleClass("active-search")
        }), $(".open-right-sidebar").click(function () {
            return $(".sidebar-right").addClass("active-sidebar-box"), $(".sidebar-left").removeClass("active-sidebar-box"), $(".sidebar-tap-close").addClass("active-tap-close"), $("#page-content-scroll").addClass("stop-scroll"), !1
        }), $(".sidebar-tap-close, .close-sidebar").click(function () {
            return $(".sidebar-left, .sidebar-right").removeClass("active-sidebar-box"), $(".sidebar-tap-close").removeClass("active-tap-close"), $("#page-content-scroll").removeClass("stop-scroll"), !1
        }), $(".open-submenu").click(function () {
            return $(this).parent().find(".submenu").toggleClass("active-submenu"), $(".sidebar-scroll").addClass("stop-scroll"), !1
        }), $(".active-item").addClass("active-submenu-history"), $(".close-submenu").click(function () {
            return $(".submenu").removeClass("active-submenu"), $(".open-submenu").removeClass("active-item"), $(".sidebar-scroll").removeClass("stop-scroll"), !1
        }), $(".submenu").hasClass("active-submenu")) {
        var r = $(".active-submenu").find("a").length;
        $(".active-submenu").addClass("active-submenu-" + r)
    }
    var l = $(".slider-wrapper img").height();
    $(".slider-wrapper").css("height", l - 12), setTimeout(function () {
            $(".slider-wrapper").css("height", "auto"), $(".coverpage-slider").owlCarousel({
                loop: !0,
                margin: 0,
                nav: !1,
                items: 1
            }), $(".homepage-cover-slider").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !1,
                items: 1
            }), $(".next-home-slider").click(function () {
                $(".homepage-cover-slider").trigger("next.owl.carousel")
            }), $(".prev-home-slider").click(function () {
                $(".homepage-cover-slider").trigger("prev.owl.carousel")
            }), $(".homepage-cover-slider").on("changed.owl.carousel", function (e) {
                var t = e.page.index;
                1 == t && ($(".home-main-icons").addClass("show-main-icons"), $(".homepage-cover-slider .owl-dots").addClass("show-main-icons")), (0 == t || 2 == t) && ($(".home-main-icons").removeClass("show-main-icons"), $(".homepage-cover-slider .owl-dots").removeClass("show-main-icons"))
            }), $(".text-slider").owlCarousel({
                autoplay: !0,
                autoplayTimeout: 3e3,
                loop: !0,
                margin: 10,
                nav: !1,
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    720: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            }), $(".news-slider").owlCarousel({
                autoplay: !0,
                autoplayTimeout: 4e3,
                loop: !0,
                margin: 10,
                nav: !1,
                items: 1,
                dots: !1
            }), $(".single-item").owlCarousel({
                autoplay: !0,
                autoplayTimeout: 4e3,
                loop: !0,
                margin: 10,
                nav: !0,
                dots: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            }), $(".home-next").click(function () {
                $(".single-item").trigger("next.owl.carousel")
            }), $(".home-prev").click(function () {
                $(".single-item").trigger("prev.owl.carousel")
            }), $(".double-item").owlCarousel({
                autoplay: !0,
                autoplayTimeout: 4e3,
                loop: !0,
                margin: 10,
                lazyLoad: !0,
                nav: !1,
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1e3: {
                        items: 2
                    }
                }
            }), $(".tripple-item").owlCarousel({
                autoplay: !0,
                autoplayTimeout: 4e3,
                loop: !0,
                margin: 10,
                lazyLoad: !0,
                nav: !1,
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1e3: {
                        items: 3
                    }
                }
            }), $(".store-slider, .product-slider").owlCarousel({
                loop: !0,
                margin: 10,
                nav: !1,
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1e3: {
                        items: 2
                    }
                }
            })
        }, .001), $(".switch-1").click(function () {
            return $(this).toggleClass("switch-1-on"), !1
        }), $(".switch-2").click(function () {
            return $(this).toggleClass("switch-2-on"), !1
        }), $(".switch-3").click(function () {
            return $(this).toggleClass("switch-3-on"), !1
        }), $(".switch, .switch-icon").click(function () {
            return $(this).parent().find(".switch-box-content").slideToggle(250), $(this).parent().find(".switch-box-subtitle").slideToggle(250), !1
        }), $(".toggle-title").click(function () {
            return $(this).parent().find(".toggle-content").slideToggle(250), $(this).find("i").toggleClass("rotate-toggle"), !1
        }), $(".accordion").find(".accordion-toggle").click(function () {
            $(this).next().slideDown(250), $(".accordion").find("i").removeClass("rotate-180"), $(this).find("i").addClass("rotate-180"), $(".accordion-content").not($(this).next()).slideUp(250)
        }), $("ul.tabs li").click(function () {
            var e = $(this).attr("data-tab");
            $("ul.tabs li").removeClass("active-tab"), $(".tab-content").slideUp(250), $(this).addClass("active-tab"), $("#" + e).slideToggle(250)
        }), $(".static-notification-close").click(function () {
            return $(this).parent().slideUp(250), !1
        }), $(".tap-dismiss").click(function () {
            return $(this).slideUp(250), !1
        }),
        function (e, t, a) {
            if (a in t && t[a]) {
                var o, s = e.location,
                    i = /^(a|html)$/i;
                e.addEventListener("click", function (e) {
                    for (o = e.target; !i.test(o.nodeName);) o = o.parentNode;
                    "href" in o && (o.href.indexOf("http") || ~o.href.indexOf(s.host)) && (e.preventDefault(), s.href = o.href)
                }, !1)
            }
        }(document, window.navigator, "standalone");
    var n = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return n.Android() || n.BlackBerry() || n.iOS() || n.Opera() || n.Windows()
        }
    };
    n.any() || ($(".show-blackberry, .show-ios, .show-windows, .show-android").addClass("disabled"), $("#page-content-scroll").css("right", "0px"), $(".show-no-detection").removeClass("disabled")), n.Android() && ($("head").append('<meta name="theme-color" content="#000000"> />'), $(".show-android").removeClass("disabled"), $(".show-blackberry, .show-ios, .show-windows").addClass("disabled"), $("#page-content-scroll, .sidebar-scroll").css("right", "0px")), n.BlackBerry() && ($(".show-blackberry").removeClass("disabled"), $(".show-android, .show-ios, .show-windows").addClass("disabled"), $("#page-content-scroll, .sidebar-scroll").css("right", "0px")), n.iOS() && ($(".show-ios").removeClass("disabled"), $(".show-blackberry, .show-android, .show-windows").addClass("disabled"), $("#page-content-scroll, .sidebar-scroll").css("right", "0px")), n.Windows() && ($(".show-windows").removeClass("disabled"), $(".show-blackberry, .show-ios, .show-android").addClass("disabled"), $("#page-content-scroll, .sidebar-scroll").css("right", "0px")), $(".gallery a, .show-gallery").swipebox();
    var c = $(window).width();
    768 > c && $(".gallery-justified").justifiedGallery({
        rowHeight: 80,
        maxRowHeight: 370,
        margins: 5,
        fixedHeight: !1
    }), c > 768 && $(".gallery-justified").justifiedGallery({
        rowHeight: 150,
        maxRowHeight: 370,
        margins: 5,
        fixedHeight: !1
    }), $(".adaptive-one").click(function () {
        return $(".portfolio-switch").removeClass("active-adaptive"), $(this).addClass("active-adaptive"), $(".portfolio-adaptive").removeClass("portfolio-adaptive-two portfolio-adaptive-three"), $(".portfolio-adaptive").addClass("portfolio-adaptive-one"), !1
    }), $(".adaptive-two").click(function () {
        return $(".portfolio-switch").removeClass("active-adaptive"), $(this).addClass("active-adaptive"), $(".portfolio-adaptive").removeClass("portfolio-adaptive-one portfolio-adaptive-three"), $(".portfolio-adaptive").addClass("portfolio-adaptive-two"), !1
    }), $(".adaptive-three").click(function () {
        return $(".portfolio-switch").removeClass("active-adaptive"), $(this).addClass("active-adaptive"), $(".portfolio-adaptive").removeClass("portfolio-adaptive-two portfolio-adaptive-one"), $(".portfolio-adaptive").addClass("portfolio-adaptive-three"), !1
    }), $(".reminder-check-square").click(function () {
        return $(this).toggleClass("reminder-check-square-selected"), !1
    }), $(".reminder-check-round").click(function () {
        return $(this).toggleClass("reminder-check-round-selected"), !1
    }), $(".checklist-square").click(function () {
        return $(this).toggleClass("checklist-square-selected"), !1
    }), $(".checklist-round").click(function () {
        return $(this).toggleClass("checklist-round-selected"), !1
    }), $(".tasklist-incomplete").click(function () {
        return $(this).removeClass("tasklist-incomplete"), $(this).addClass("tasklist-completed"), !1
    }), $(".tasklist-item").click(function () {
        return $(this).toggleClass("tasklist-completed"), !1
    }), $(".sitemap-box a").hover(function () {
        $(this).find("i").addClass("scale-hover")
    }, function () {
        $(this).find("i").removeClass("scale-hover")
    }), $(".map-text, .overlay").click(function () {
        $(".map-text, .map-fullscreen .overlay").addClass("hide-map"), $(".deactivate-map").removeClass("hide-map")
    }), $(".deactivate-map").click(function () {
        $(".map-text, .map-fullscreen .overlay").removeClass("hide-map"), $(".deactivate-map").addClass("hide-map")
    }), $("#page-content-scroll").on("scroll", function () {
        var e = $("#page-content-scroll")[0].scrollHeight,
            t = $(this).scrollTop() <= 150,
            a = $(this).scrollTop() >= 0,
            o = $(this).scrollTop() >= e - ($(window).height() + 100);
        1 == t ? $(".back-to-top-badge").removeClass("back-to-top-badge-visible") : 1 == a && $(".back-to-top-badge").addClass("back-to-top-badge-visible"), 1 == o && $(".back-to-top-badge").removeClass("back-to-top-badge-visible")
    }), $(".back-to-top-badge, .back-to-top").click(function (e) {
        e.preventDefault(), $("#page-content-scroll").animate({
            scrollTop: 0
        }, 250)
    });
    var d = new Date,
        p = d.getMonth() + 1,
        h = d.getDate();
    10 > p && (p = "0" + p), 10 > h && (h = "0" + h);
    var m = d.getFullYear() + "-" + p + "-" + h;
    $(".set-today").val(m), $(".adaptive-one").click(function () {
        return $(".portfolio-switch").removeClass("active-adaptive"), $(this).addClass("active-adaptive"), $(".portfolio-adaptive").removeClass("portfolio-adaptive-two portfolio-adaptive-three"), $(".portfolio-adaptive").addClass("portfolio-adaptive-one"), !1
    }), $(".adaptive-two").click(function () {
        return $(".portfolio-switch").removeClass("active-adaptive"), $(this).addClass("active-adaptive"), $(".portfolio-adaptive").removeClass("portfolio-adaptive-one portfolio-adaptive-three"), $(".portfolio-adaptive").addClass("portfolio-adaptive-two"), !1
    }), $(".adaptive-three").click(function () {
        return $(".portfolio-switch").removeClass("active-adaptive"), $(this).addClass("active-adaptive"), $(".portfolio-adaptive").removeClass("portfolio-adaptive-two portfolio-adaptive-one"), $(".portfolio-adaptive").addClass("portfolio-adaptive-three"), !1
    }), $(".show-wide-text").click(function () {
        return $(this).parent().find(".wide-text").slideToggle(200), !1
    }), $(".portfolio-close").click(function () {
        return $(this).parent().parent().find(".wide-text").slideToggle(200), !1
    }), $("body").append('<div class="share-bottom-tap-close"></div>'), $(".show-share-bottom, .show-share-box").click(function () {
        return $(".share-bottom-tap-close").addClass("share-bottom-tap-close-active"), $(".share-bottom").toggleClass("active-share-bottom"), !1
    }), $(".close-share-bottom, .share-bottom-tap-close").click(function () {
        return $(".share-bottom-tap-close").removeClass("share-bottom-tap-close-active"), $(".share-bottom").removeClass("active-share-bottom"), !1
    });
    var u = "";
    if ($(".filter-category").click(function () {
            $(".portfolio-filter-categories a").removeClass("selected-filter"), $(this).addClass("selected-filter"), u = $(this).attr("data-rel"), $(".portfolio-filter-wrapper").slideDown(250), $(".portfolio-filter-wrapper div").not("." + u).delay(100).slideUp(250), setTimeout(function () {
                $("." + u).slideDown(250), $(".portfolio-filter-wrapper").slideDown(250)
            }, 0)
        }), $("body").hasClass("has-cover")) {
        setTimeout(function () {
            function e() {
                var e = -$(".owl-dots").width() / 2;
                $(".owl-dots").css("position", "absolute"), $(".owl-dots").css("left", "50%"), $(".owl-dots").css("margin-left", e)
            }
            e()
        }, 1), t(), e(), a(), $(window).resize(function () {
            e(), t()
        }), $(".error-page-layout-switch").click(function () {
            $(".cover-page-content").toggleClass("unboxed-layout, boxed-layout"), e()
        })
    }
    $(function () {
        $(".countdown-class").countdown({
            date: "June 7, 2087 15:03:26"
        })
    }), $("#copyright-year")[0] && document.getElementById("copyright-year").appendChild(document.createTextNode((new Date).getFullYear())), $("#copyright-year-2")[0] && document.getElementById("copyright-year-2").appendChild(document.createTextNode((new Date).getFullYear()));
    var v = {
            bg: "#e74c3c",
            target: document.getElementById("myDivId"),
            id: "mynano"
        },
        f = new Nanobar(v);
    f.go(30), f.go(100), $(function () {
        $(".thumb-layout-page a").slice(0, 8).show(), $(".load-more-thumbs").click(function (e) {
            e.preventDefault(), $(".thumb-layout-page a:hidden").slice(0, 5).show(0), 0 == $(".thumb-layout-page a:hidden").length && $(this).hide()
        })
    }), $(function () {
        $(".card-large-layout-page .card-large-layout").slice(0, 2).show(), $(".load-more-large-cards").click(function (e) {
            e.preventDefault(), $(".card-large-layout-page .card-large-layout:hidden").slice(0, 2).show(0), 0 == $(".card-large-layout-page div:hidden").length && $(this).hide()
        })
    }), $(function () {
        $(".card-small-layout-page .card-small-layout").slice(0, 5).show(), $(".load-more-small-cards").click(function (e) {
            e.preventDefault(), $(".card-small-layout-page .card-small-layout:hidden").slice(0, 3).show(0), 0 == $(".card-small-layout-page a:hidden").length && $(this).hide()
        })
    })
});