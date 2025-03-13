!(function(e) {
    "use strict";
    if (
        (e(window).on("load", function() {
                e(".preloader").fadeOut(), e(".swiper-fade").addClass("fade-ani");
            }),
            e(".preloader").length > 0 &&
            e(".preloaderCls").each(function() {
                e(this).on("click", function(t) {
                    t.preventDefault(), e(".preloader").css("display", "none");
                });
            }),
            (e.fn.thmobilemenu = function(t) {
                var a = e.extend({
                        menuToggleBtn: ".th-menu-toggle",
                        bodyToggleClass: "th-body-visible",
                        subMenuClass: "th-submenu",
                        subMenuParent: "menu-item-has-children",
                        thSubMenuParent: "th-item-has-children",
                        subMenuParentToggle: "th-active",
                        meanExpandClass: "th-mean-expand",
                        appendElement: '<span class="th-mean-expand"></span>',
                        subMenuToggleClass: "th-open",
                        toggleSpeed: 400,
                    },
                    t
                );
                return this.each(function() {
                    var t = e(this);

                    function s() {
                        t.toggleClass(a.bodyToggleClass);
                        var s = "." + a.subMenuClass;
                        e(s).each(function() {
                            e(this).hasClass(a.subMenuToggleClass) &&
                                (e(this).removeClass(a.subMenuToggleClass),
                                    e(this).css("display", "none"),
                                    e(this).parent().removeClass(a.subMenuParentToggle));
                        });
                    }
                    t.find("." + a.subMenuParent).each(function() {
                        var t = e(this).find("ul");
                        t.addClass(a.subMenuClass),
                            t.css("display", "none"),
                            e(this).addClass(a.subMenuParent),
                            e(this).addClass(a.thSubMenuParent),
                            e(this).children("a").append(a.appendElement);
                    });
                    var n = "." + a.thSubMenuParent + " > a";
                    e(n).each(function() {
                            e(this).on("click", function(t) {
                                var s, n;
                                t.preventDefault(),
                                    (s = e(this).parent()),
                                    (n = s.children("ul")).length > 0 &&
                                    (s.toggleClass(a.subMenuParentToggle),
                                        n.slideToggle(a.toggleSpeed),
                                        n.toggleClass(a.subMenuToggleClass));
                            });
                        }),
                        e(a.menuToggleBtn).each(function() {
                            e(this).on("click", function() {
                                s();
                            });
                        }),
                        t.on("click", function(e) {
                            e.stopPropagation(), s();
                        }),
                        t.find("div").on("click", function(e) {
                            e.stopPropagation();
                        });
                });
            }),
            e(".th-menu-wrapper").thmobilemenu(),
            e(window).scroll(function() {
                e(this).scrollTop() > 500 ?
                    (e(".sticky-wrapper").addClass("sticky"),
                        e(".category-menu").addClass("close-category")) :
                    (e(".sticky-wrapper").removeClass("sticky"),
                        e(".category-menu").removeClass("close-category"));
            }),
            e(".scroll-top").length > 0)
    ) {
        var t = document.querySelector(".scroll-top"),
            a = document.querySelector(".scroll-top path"),
            s = a.getTotalLength();
        (a.style.transition = a.style.WebkitTransition = "none"),
        (a.style.strokeDasharray = s + " " + s),
        (a.style.strokeDashoffset = s),
        a.getBoundingClientRect(),
            (a.style.transition = a.style.WebkitTransition =
                "stroke-dashoffset 10ms linear");
        var n = function() {
            var t = e(window).scrollTop(),
                n = e(document).height() - e(window).height(),
                i = s - (t * s) / n;
            a.style.strokeDashoffset = i;
        };
        n(), e(window).scroll(n);
        jQuery(window).on("scroll", function() {
                jQuery(this).scrollTop() > 50 ?
                    jQuery(t).addClass("show") :
                    jQuery(t).removeClass("show");
            }),
            jQuery(t).on("click", function(e) {
                return (
                    e.preventDefault(),
                    jQuery("html, body").animate({
                        scrollTop: 0
                    }, 750), !1
                );
            });
    }
    e("[data-bg-src]").length > 0 &&
        e("[data-bg-src]").each(function() {
            var t = e(this).attr("data-bg-src");
            e(this).css("background-image", "url(" + t + ")"),
                e(this).removeAttr("data-bg-src").addClass("background-image");
        }),
        e("[data-bg-color]").length > 0 &&
        e("[data-bg-color]").each(function() {
            var t = e(this).attr("data-bg-color");
            e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
        }),
        e("[data-border]").each(function() {
            var t = e(this).data("border");
            e(this).css("--th-border-color", t);
        }),
        e("[data-mask-src]").length > 0 &&
        e("[data-mask-src]").each(function() {
            var t = e(this).attr("data-mask-src");
            e(this).css({
                    "mask-image": "url(" + t + ")",
                    "-webkit-mask-image": "url(" + t + ")",
                }),
                e(this).addClass("bg-mask"),
                e(this).removeAttr("data-mask-src");
        }),
        e(".th-slider").each(function() {
            var t = e(this),
                a = e(this).data("slider-options"),
                s = t.find(".slider-prev"),
                n = t.find(".slider-next"),
                i = t.find(".slider-pagination"),
                o = a.paginationType ? a.paginationType : "bullets",
                l = a.autoplay,
                r = {
                    slidesPerView: 1,
                    spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
                    loop: 0 != a.loop,
                    speed: a.speed ? a.speed : 1e3,
                    autoplay: l || {
                        delay: 6e3,
                        disableOnInteraction: !1
                    },
                    navigation: {
                        nextEl: n.get(0),
                        prevEl: s.get(0)
                    },
                    pagination: {
                        el: i.get(0),
                        type: o,
                        clickable: !0,
                        renderBullet: function(e, t) {
                            return (
                                '<span class="' +
                                t +
                                '" aria-label="Go to Slide ' +
                                (e + 1) +
                                '"></span>'
                            );
                        },
                    },
                    on: {
                        slideChange: function() {
                            setTimeout(function() {
                                d.params.mousewheel.releaseOnEdges = !1;
                            }, 500);
                        },
                        reachEnd: function() {
                            setTimeout(function() {
                                d.params.mousewheel.releaseOnEdges = !0;
                            }, 750);
                        },
                    },
                },
                c = JSON.parse(t.attr("data-slider-options"));
            c = e.extend({}, r, c);
            var d = new Swiper(t.get(0), c);
            e(".slider-area").length > 0 &&
                e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
        }),
        e("[data-ani]").each(function() {
            var t = e(this).data("ani");
            e(this).addClass(t);
        }),
        e("[data-ani-delay]").each(function() {
            var t = e(this).data("ani-delay");
            e(this).css("animation-delay", t);
        }),
        e("[data-slider-prev], [data-slider-next]").on("click", function() {
            var t = e(this).data("slider-prev") || e(this).data("slider-next"),
                a = e(t);
            if (a.length) {
                var s = a[0].swiper;
                s && (e(this).data("slider-prev") ? s.slidePrev() : s.slideNext());
            }
        }),
        (e.fn.activateSliderThumbs = function(t) {
            var a = e.extend({
                sliderTab: !1,
                tabButton: ".tab-btn"
            }, t);
            return this.each(function() {
                var t = e(this),
                    s = t.find(a.tabButton),
                    n = e('<span class="indicator"></span>').appendTo(t),
                    i = t.data("slider-tab"),
                    o = e(i)[0].swiper;
                if (
                    (s.on("click", function(t) {
                            t.preventDefault();
                            var s = e(this);
                            if (
                                (s.addClass("active").siblings().removeClass("active"),
                                    c(s),
                                    s.prevAll(a.tabButton).addClass("list-active"),
                                    s.nextAll(a.tabButton).removeClass("list-active"),
                                    a.sliderTab)
                            ) {
                                var n = s.index();
                                o.slideTo(n);
                            }
                        }),
                        a.sliderTab)
                ) {
                    o.on("slideChange", function() {
                        var e = o.realIndex,
                            t = s.eq(e);
                        t.addClass("active").siblings().removeClass("active"),
                            c(t),
                            t.prevAll(a.tabButton).addClass("list-active"),
                            t.nextAll(a.tabButton).removeClass("list-active");
                    });
                    var l = o.activeIndex,
                        r = s.eq(l);
                    r.addClass("active").siblings().removeClass("active"),
                        c(r),
                        r.prevAll(a.tabButton).addClass("list-active"),
                        r.nextAll(a.tabButton).removeClass("list-active");
                }

                function c(e) {
                    var t = e.position(),
                        a = parseInt(e.css("margin-top")) || 0,
                        s = parseInt(e.css("margin-left")) || 0;
                    n.css("--height-set", e.outerHeight() + "px"),
                        n.css("--width-set", e.outerWidth() + "px"),
                        n.css("--pos-y", t.top + a + "px"),
                        n.css("--pos-x", t.left + s + "px");
                }
            });
        }),
        e(".event-thumb").length &&
        e(".event-thumb").activateSliderThumbs({
            sliderTab: !0,
            tabButton: ".tab-btn",
        });
    var i = ".ajax-contact",
        o = '[name="email"]',
        l = e(".form-messages");

    function r() {
        var t = e(i).serialize();
        (function() {
            var t,
                a = !0;

            function s(s) {
                s = s.split(",");
                for (var n = 0; n < s.length; n++)
                    (t = i + " " + s[n]),
                    e(t).val() ?
                    (e(t).removeClass("is-invalid"), (a = !0)) :
                    (e(t).addClass("is-invalid"), (a = !1));
            }
            s(
                    '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
                ),
                e(o).val() &&
                e(o)
                .val()
                .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ?
                (e(o).removeClass("is-invalid"), (a = !0)) :
                (e(o).addClass("is-invalid"), (a = !1));
            return a;
        })() &&
        jQuery
            .ajax({
                url: e(i).attr("action"),
                data: t,
                type: "POST"
            })
            .done(function(t) {
                l.removeClass("error"),
                    l.addClass("success"),
                    l.text(t),
                    e(i + ' input:not([type="submit"]),' + i + " textarea").val("");
            })
            .fail(function(e) {
                l.removeClass("success"),
                    l.addClass("error"),
                    "" !== e.responseText ?
                    l.html(e.responseText) :
                    l.html(
                        "Oops! An error occured and your message could not be sent."
                    );
            });
    }

    function c(t, a, s, n) {
        e(a).on("click", function(a) {
                a.preventDefault(), e(t).addClass(n);
            }),
            e(t).on("click", function(a) {
                a.stopPropagation(), e(t).removeClass(n);
            }),
            e(t + " > div").on("click", function(a) {
                a.stopPropagation(), e(t).addClass(n);
            }),
            e(s).on("click", function(a) {
                a.preventDefault(), a.stopPropagation(), e(t).removeClass(n);
            });
    }

    function d(e) {
        return parseInt(e, 10);
    }
    e(i).on("submit", function(e) {
            e.preventDefault(), r();
        }),
        c(".popup-search-box", ".searchBoxToggler", ".searchClose", "show"),
        c(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"),
        c(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"),
        e(".popup-image").magnificPopup({
            type: "image",
            mainClass: "mfp-zoom-in",
            removalDelay: 260,
            gallery: {
                enabled: !0
            },
        }),
        e(".popup-video").magnificPopup({
            type: "iframe"
        }),
        e(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        }),
        (e.fn.sectionPosition = function(t, a) {
            e(this).each(function() {
                var s,
                    n,
                    i,
                    o,
                    l,
                    r = e(this);
                (s = Math.floor(r.height() / 2)),
                (n = r.attr(t)),
                (i = r.attr(a)),
                (o = d(e(i).css("padding-top"))),
                (l = d(e(i).css("padding-bottom"))),
                "top-half" === n
                    ?
                    (e(i).css("padding-bottom", l + s + "px"),
                        r.css("margin-top", "-" + s + "px")) :
                    "bottom-half" === n &&
                    (e(i).css("padding-top", o + s + "px"),
                        r.css("margin-bottom", "-" + s + "px"));
            });
        });
    if (
        (e("[data-sec-pos]").length &&
            e("[data-sec-pos]").imagesLoaded(function() {
                e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
            }),
            e(".filter-active").imagesLoaded(function() {
                if (e(".filter-active").length > 0) {
                    var t = e(".filter-active").isotope({
                        itemSelector: ".filter-item",
                        filter: "*",
                        masonry: {
                            columnWidth: ".filter-item"
                        },
                    });
                    e(".filter-menu-active").on("click", "button", function() {
                            var a = e(this).attr("data-filter");
                            t.isotope({
                                filter: a
                            });
                        }),
                        e(".filter-menu-active").on("click", "button", function(t) {
                            t.preventDefault(),
                                e(this).addClass("active"),
                                e(this).siblings(".active").removeClass("active");
                        });
                }
            }),
            e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
                function() {
                    var t = ".masonary-active, .woocommerce-Reviews .comment-list";
                    e(t).length > 0 &&
                        e(t).isotope({
                            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
                            filter: "*",
                            masonry: {
                                columnWidth: 1
                            },
                        }),
                        e('[data-bs-toggle="tab"]').on("shown.bs.tab", function(a) {
                            e(t).isotope({
                                filter: "*"
                            });
                        });
                }
            ),
            e(".counter-number").counterUp({
                delay: 10,
                time: 1e3
            }),
            e(".hover-item").hover(function() {
                e(this).addClass("item-active"),
                    e(this).siblings().removeClass("item-active");
            }),
            (e.fn.shapeMockup = function() {
                e(this).each(function() {
                    var t = e(this),
                        a = t.data("top"),
                        s = t.data("right"),
                        n = t.data("bottom"),
                        i = t.data("left");
                    t.css({
                            top: a,
                            right: s,
                            bottom: n,
                            left: i
                        })
                        .removeAttr("data-top")
                        .removeAttr("data-right")
                        .removeAttr("data-bottom")
                        .removeAttr("data-left")
                        .parent()
                        .addClass("shape-mockup-wrap");
                });
            }),
            e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
            e(".progress-bar").waypoint(
                function() {
                    e(".progress-bar").css({
                        animation: "animate-positive 1.8s",
                        opacity: "1",
                    });
                }, {
                    offset: "75%"
                }
            ),
            (e.fn.countdown = function() {
                e(this).each(function() {
                    var t = e(this),
                        a = new Date(t.data("offer-date")).getTime();

                    function s(e) {
                        return t.find(e);
                    }
                    var n = setInterval(function() {
                        var e = new Date().getTime(),
                            i = a - e,
                            o = Math.floor(i / 864e5),
                            l = Math.floor((i % 864e5) / 36e5),
                            r = Math.floor((i % 36e5) / 6e4),
                            c = Math.floor((i % 6e4) / 1e3);
                        o < 10 && (o = "0" + o),
                            l < 10 && (l = "0" + l),
                            r < 10 && (r = "0" + r),
                            c < 10 && (c = "0" + c),
                            i < 0 ?
                            (clearInterval(n),
                                t.addClass("expired"),
                                t.find(".message").css("display", "block")) :
                            (s(".day").html(o),
                                s(".hour").html(l),
                                s(".minute").html(r),
                                s(".seconds").html(c));
                    }, 1e3);
                });
            }),
            e(".counter-list").length && e(".counter-list").countdown(),
            e(".hero-2").length > 0 &&
            window.addEventListener("scroll", function() {
                let t = window.scrollY;
                e(".line").css("width", "calc(var(--size) - " + 0.1 * t + "px)");
            }),
            e(".tilt-active").tilt({
                maxTilt: 15,
                perspective: 1e3
            }),
            window.innerWidth > 767)
    ) {
        const e = [].slice.call(
                document.querySelectorAll(".overlay-direction .filter-item"),
                0
            ),
            t = {
                0: "top",
                1: "right",
                2: "bottom",
                3: "left"
            },
            a = ["in", "out"]
            .map((e) => Object.values(t).map((t) => `${e}-${t}`))
            .reduce((e, t) => e.concat(t)),
            s = (e, t) => {
                const {
                    width: a,
                    height: s,
                    top: n,
                    left: i,
                } = t.getBoundingClientRect(),
                    o =
                    e.pageX - (i + window.pageXOffset) - (a / 2) * (a > s ? s / a : 1),
                    l =
                    e.pageY - (n + window.pageYOffset) - (s / 2) * (s > a ? a / s : 1);
                return Math.round(Math.atan2(l, o) / 1.57079633 + 5) % 4;
            };
        class n {
            constructor(e) {
                (this.element = e),
                this.element.addEventListener("mouseover", (e) =>
                        this.update(e, "in")
                    ),
                    this.element.addEventListener("mouseout", (e) =>
                        this.update(e, "out")
                    );
            }
            update(e, n) {
                this.element.classList.remove(...a),
                    this.element.classList.add(`${n}-${t[s(e, this.element)]}`);
            }
        }
        e.forEach((e) => new n(e));
    }
    e(".color-switch-btns button").each(function() {
            const t = e(this),
                a = t.data("color");
            t.css("--theme-color", a),
                t.on("click", function() {
                    const t = e(this).data("color");
                    e(":root").css("--theme-color", t);
                });
        }),
        e("#thcolorpicker").on("input", function() {
            const t = e(this).val();
            var a;
            (a = t), e(":root").css("--theme-color", a);
        }),
        e(document).on("click", ".switchIcon", function() {
            e(".color-scheme").toggleClass("active");
        }),
        e("#ship-to-different-address-checkbox").on("change", function() {
            e(this).is(":checked") ?
                e("#ship-to-different-address").next(".shipping_address").slideDown() :
                e("#ship-to-different-address").next(".shipping_address").slideUp();
        }),
        e(".woocommerce-form-login-toggle a").on("click", function(t) {
            t.preventDefault(), e(".woocommerce-form-login").slideToggle();
        }),
        e(".woocommerce-form-coupon-toggle a").on("click", function(t) {
            t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
        }),
        e(".shipping-calculator-button").on("click", function(t) {
            t.preventDefault(),
                e(this).next(".shipping-calculator-form").slideToggle();
        }),
        e('.wc_payment_methods input[type="radio"]:checked')
        .siblings(".payment_box")
        .show(),
        e('.wc_payment_methods input[type="radio"]').each(function() {
            e(this).on("change", function() {
                e(".payment_box").slideUp(),
                    e(this).siblings(".payment_box").slideDown();
            });
        }),
        e(".rating-select .stars a").each(function() {
            e(this).on("click", function(t) {
                t.preventDefault(),
                    e(this).siblings().removeClass("active"),
                    e(this).parent().parent().addClass("selected"),
                    e(this).addClass("active");
            });
        }),
        e(".quantity-plus").each(function() {
            e(this).on("click", function(t) {
                t.preventDefault();
                var a = e(this).siblings(".qty-input"),
                    s = parseInt(a.val(), 10);
                isNaN(s) || a.val(s + 1);
            });
        }),
        e(".quantity-minus").each(function() {
            e(this).on("click", function(t) {
                t.preventDefault();
                var a = e(this).siblings(".qty-input"),
                    s = parseInt(a.val(), 10);
                !isNaN(s) && s > 1 && a.val(s - 1);
            });
        }),
        // window.addEventListener(
        //   "contextmenu",
        //   function (e) {
        //     e.preventDefault();
        //   },
        //   !1
        // ),
        (document.onkeydown = function(e) {
            return (
                123 != event.keyCode &&
                (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
                (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
                (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
                (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
                void 0
            );
        });
})(jQuery);