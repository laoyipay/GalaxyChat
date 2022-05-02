/*-----------------------------------------------------------------------------------


 ----------------------------------------------------------------------------------- */
// 01. Tooltip js
// 02. Background Image js
// 03. OwlCarousel js
// 04. Chitchat Loader js
// 05. Search js
// 06. Mute js
// 07. Button Effect js
// 08. Collapse Title js
// 09. Refresh Request information next & previous button
// 10 .Full Screen
// 11. Header fix
// 12. Tap on Top
// 13. Customizer
// 14  Footer responsive js
// 15  Pin box
// 16  Reminder
// 17  Set wallpaper onclick
// 18  Custom tab
// 19  Theme mode
// 20. Add claas to nav
// 21. Live chat
// 22. Toggle classes
// 23. ADD tO-DO LIST
// 24. Right sidebar
// 25. Sticker
// 26. Emoji
// 27. Profile open
// 28. Dropdown

(function ($) {
    "use strict";

    /*=====================
      01. Tooltip js
      ==========================*/
      tippy('.sidebar-main .icon-btn', {
        theme: 'tooltiprad',
        placement: 'right-end',
        arrow: false
    });
      tippy('.user-popup', {
        content: "Status",
        theme: 'gradienttooltip',
        placement: 'right-end',
        arrow: false
    });
      tippy('.calls  > li > .icon-btn', {
        placement: 'bottom-end',
        arrow: true
    });
      tippy('.clfooter a', {
        placement: 'top-end',
        arrow: true
    });
      tippy('.audiocall2 a', {
        placement: 'top-end',
        arrow: true
    });


    
    //   tippy('.videocall a', {
    //     placement: 'top-end',
    //     arrow: true
    // });

    /*=====================
      02. Background Image js
      ==========================*/
      $(".bg-top").parent().addClass('b-top');
      $(".bg-bottom").parent().addClass('b-bottom');
      $(".bg-center").parent().addClass('b-center');
      $(".bg_size_content").parent().addClass('b_size_content');
      $(".bg-img").parent().addClass('bg-size');
      $('.bg-img').each(function () {
        var el = $(this),
        src = el.attr('src'),
        parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'display': 'block'
        });
        el.hide();
    });

    /*=====================
      03. OwlCarousel js
      ==========================*/
      var owl_carousel_custom_recent = {
        init: function () {
            var recent = $('.recent-slider');
            recent.owlCarousel({
                items: 3,
                dots: false,
                loop: true,
                margin: 15,
                nav: false,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                responsive: {
                    768: {
                        items: 7
                    },
                    800: {
                        items: 7
                    },
                    801: {
                        items: 2
                    },
                    1366: {
                        items: 2
                    },
                    1600: {
                        items: 3
                    }
                }
            })
        }
    };
    owl_carousel_custom_recent.init();

    var owl_carousel_custom_testimonial = {
        init: function () {
            var recent = $('.testimonial-slider');
            recent.owlCarousel({
                items: 4,
                dots: false,
                loop: true,
                margin: 60,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1,
                        margin: 25,
                    },
                    575: {
                        items: 2,
                        margin: 25,
                    },
                    1070: {
                        items: 3,
                        margin: 25,
                    },
                    1600: {
                        items: 4
                    },
                }
            })
        }
    };
    owl_carousel_custom_testimonial.init();

    var owl_carousel_custom_price = {
        init: function () {
            var recent = $('.price-slider');
            recent.owlCarousel({
                items: 3,
                dots: false,
                loop: true,
                margin: 60,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1,
                        margin: 25,
                    },

                    601: {
                        items: 2,
                        margin: 25,
                    },
                    1070: {
                        items: 3,
                        margin: 25,
                    },
                    1600: {
                        items: 3
                    },
                }
            })
        }
    };
    owl_carousel_custom_price.init();

    var owl_carousel_custom_team = {
        init: function () {
            var recent = $('.team-slider');
            recent.owlCarousel({
                items: 2,
                dots: false,
                loop: true,
                margin: 20,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1
                    },
                    1199: {
                        items: 2
                    },
                }
            })
        }
    };
    owl_carousel_custom_team.init();

    var owl_carousel_custom_testimonial = {
        init: function () {
            var recent = $('.counter-slider');
            recent.owlCarousel({
                items: 4,
                dots: false,
                loop: true,
                margin: 60,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1,
                        margin: 25,
                    },
                    480: {
                        items: 2,
                        margin: 25,
                    },
                    575: {
                        items: 3,
                        margin: 25,
                    },
                    768: {
                        items: 4,
                        margin: 25,
                    },
                    1600: {
                        items: 4
                    },
                }
            })
        }
    };
    owl_carousel_custom_testimonial.init();

    /*=====================
         04. Chitchat Loder js
         ==========================*/
         $('.chitchat-loader').slideUp('slow', function () {
            $(this).remove();
        });

    /*=====================
         05. Search js
         ==========================*/
         $('.search').on('click', function (e) {
            $(this).siblings().toggleClass("open");
        });
         $('.close-search').on('click', function (e) {
            $(this).parent().parent().removeClass("open");
        });
         $('.search-right').on('click', function (e) {
            $(this).parent().parent().parent().parent().parent().parent().find(".form-inline").toggleClass("open");
        });
         $('.close-search').on('click', function (e) {
            $(this).parent().parent().removeClass("open");
        });

    /*=====================
         06. Mute js
         ==========================*/
         $('.mute').on('click', function (e) {
            $(this).children().toggleClass("off");
        });

    /*=====================
         07. Button Effect js
         ==========================*/
         $('.button-effect').on('click', function (e) {
            e.preventDefault();
            var self = $(this),
            wave = '.effect-wave',
            btnWidth = self.outerWidth(),
            x = e.offsetX,
            y = e.offsetY;
            self.prepend('<span class="effect-wave"></span>')
            $(wave)
            .css({
                'top': y,
                'left': x
            })
            .animate({
                opacity: '0',
                width: btnWidth * 2,
                height: btnWidth * 2
            }, 500, function () {
                self.find(wave).remove()
            })
        })

    /*=====================
         08. Collapse Title js
         ==========================*/
         $('.block-title').on('click', function (e) {
            e.preventDefault;
            var speed = 300;
            var thisItem = $(this).parent(),
            nextLevel = $(this).next('.block-content');
            if (thisItem.hasClass('open')) {
                thisItem.removeClass('open');
                nextLevel.slideUp(speed);
            } else {
                thisItem.addClass('open');
                nextLevel.slideDown(speed);
            }
        });

    /*=====================
         09. Refresh Request information next & previous button
         ==========================*/
         $('.refresh').on('click', function (e) {
            $(this).toggleClass('refreshed');
        });
         $('.req-info').on('click', function (e) {
            $(this).addClass('disabled');
        });
         $('.next').on('click', function (e) {
            $(this).parent().parent().siblings().addClass('open');
        });
         $('.previous').on('click', function (e) {
            $(this).parent().parent().parent().removeClass('open');
        });

         $('.chat-cont-toggle').on('click', function (e) {
            $('.chat-cont-setting ').toggleClass('open');
        });




    /*=====================
          10 .Full Screen
          ==========================*/

          $('.toggle-full-screen').on('click', function (e) {
            $('#videocall').toggleClass("active");
        })

    /*=====================
          11.Header fix
          ==========================*/
          $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 60) {
                $(".landing-header").addClass("fixed");
            } else {
                $(".landing-header").removeClass("fixed");
            }
        });
    /*=====================
      12.Tap on Top
      ==========================*/
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
      $('.tap-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*=====================
           13. Customizer
           ==========================*/
        
        //    $('.cog-click').on('click', function () {
        //     $('.setting-sidebar').css("right", "0px");
        // });
        //    $(".cog-close").on('click', function () {
        //     $('.setting-sidebar').css("right", "-400px");
        // });
        //    $(".theme-layout li").on('click', function () {
        //     $(".theme-layout li").removeClass('active');
        //     $(this).addClass("active");
        //     var themeLayout = $(this).attr("data-attr");
        //     $("body").attr("class", themeLayout);
        // });
        //    var body_event = $("body");
        //    body_event.on("click", ".rtl-setting", function () {
        //     $(this).toggleClass('rtl');
        //     $('body').removeClass('rtl');
        //     if ($('.rtl-setting').hasClass('rtl')) {
        //         $('.rtl-setting').text('LTR');
        //         $('body').addClass('rtl');
        //     } else {
        //         $('.rtl-setting').text('RTL');
        //     }
        //     return false;
        // });
        //    body_event.on("click", ".themes-content li", function () {
        //     $(this).addClass('active').siblings().removeClass('active');
        //     $color = $(this).attr("data-attr");
        //     $("#color").attr("href", "../assets/css/" + $color + ".css");
        //     return false;
        // });

    /*=====================
    14 footer responsive js
    ==========================*/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '768') {
        jQuery('.footer-title h3').append('<span class="according-menu"></span>');
        jQuery('.footer-title').on('click', function () {
            jQuery('.footer-title').removeClass('active');
            jQuery('.footer-contant').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.footer-contant').hide();
    } else {
        jQuery('.footer-contant').show();
    }
    /*=====================
        15. Pin box
        ==========================*/
        $('.ti-pin2').on('click', function () {
            $(this).parent().parent().parent().toggleClass('pined');
        });

    /*=====================
        16 Reminder
        ==========================*/
        $(".reminder-count li").on('click', function () {
            $('.reminder-count li').removeClass('active');
            $(this).addClass('active');
        });

        $('.Show-reminder').on('click', function (e) {
            $('.target-reminder-list').show(500);
            $('.Show-reminder').hide(0);
            $('.Hide-reminder').show(0);
        });
        $('.Hide-reminder').on('click', function (e) {
            $('.target-reminder-list').hide(500);
            $('.Show-reminder').show(0);
            $('.Hide-reminder').hide(0);
        });
        $('.toggle').on('click', function (e) {
            $('.target-reminder-list').toggle('slow');
        });

    /*=====================
        17 set wallpaper onclick
        ==========================*/
        $('.wallpaper li.bg-color').on('click', function () {
            var color = $(this).css('background-image');
            $(".wallpaper li").removeClass('active');
            $(this).addClass("active");
            $(".chitchat-main .messages").css({
                'background-image': color,
                'background-blend-mode': 'unset',
            });
        });
        $('.wallpaper li.bg-size').on('click', function () {
            var color = $(this).children(".bg-img").attr('src');
            $(".wallpaper li").removeClass('active');
            $(this).addClass("active");
            $(".chitchat-main .messages").css({
                'background-image': 'url(' + color + ')',
                'background-color': 'transparent'
            });
        });

    /*=====================
        18 custom tab
        ==========================*/
        $(".contact-log-main li , .call-log-main li").on('click', function () {
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        });
        $("#myTab1 li a").on('click', function () {
            var active_class = $(this).attr("data-to");
            $('.messages.custom-scroll').removeClass("active");
            $('#' + active_class).addClass("active");
        });
        $(".chat-tabs .nav-tabs li[data-to]").on('click', function () {
            $('.chitchat-main .tabto').removeClass("active");
            var active_class = $(this).attr("data-to");
            $('.' + active_class).addClass("active");
        });
        $(".sidebar-top  a").on('click', function () {
            $(".sidebar-top  a").removeClass("active");
            $(this).addClass("active");
            $('.dynemic-sidebar').removeClass("active");
            var active_class = $(this).attr("href");
            $('#' + active_class).addClass("active");
        });


    /*=====================
      22. toggle classes
      ==========================*/
      $('.mobile-sidebar').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.chat-main .chat-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.group-main .group-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.call-log-main .call-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.contact-log-main .contact-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });

      $('.mobile-back').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
        $('.main-nav').removeClass("on");
    });


      $('.chat-friend-toggle').on('click', function () {
        $('.chat-frind-content').toggle();
    });

      $('.gr-chat-friend-toggle').on('click', function () {
        $('.gr-chat-frind-content').toggle();
    });
      $('.msg-setting').on('click', function () {
        $(this).siblings('.msg-dropdown').toggle();
    });
      $(".favourite").on('click', function () {
        $(this).toggleClass("btn-outline-primary").toggleClass("btn-primary");
    });
      $(".edit-btn").on('click', function () {
        $(this).parent().parent().toggleClass("open");
    });

    /*=====================
        23. ADD tO-DO LIST
        ==========================*/

        $('.add').on('click', function (e) {
            var total_element = $(".element").length;
            var lastid = $(".element:last").attr("id");
            var split_id = lastid.split("_");
            var nextindex = Number(split_id[1]) + 1;
            var max = 100;
            if (total_element < max) {
                $(".element:last").after("<div class='element' id='div_" + nextindex + "'></div>");
                $("#div_" + nextindex).append("<form class='p-15'><div class='form-group' style='display :flex'><input type='checkbox' id='txt_" + nextindex + "'/><input type='text' class='m-l-15'/></div><div class='todo-buttons'><a class='badge badge-success font_label' href='#'' style='padding: 7px 12px'>Save</a><a class='badge badge-outline-primary font_label' href='#'' style='margin-left : 15px;padding: 7px 12px'>Cancel</a><span id='remove_" + nextindex + "' class='remove' style='margin-left : 40px'><i class='fa fa-trash' style='font-size : 20px'></i></span></div></form>");
            }
        });
        $('.todo-list').on('click', '.remove', function () {
            var id = this.id;
            var split_id = id.split("_");
            var deleteindex = split_id[1];
            $("#div_" + deleteindex).remove();
        });

        $('.trashbtn').on('click', function (e) {
            $(".todo-main-content .default-form").remove();
        });

    /*=====================
           24. right sidebar
           ==========================*/
           $(".app-list-ul  a").on('click', function () {
            $(".app-list-ul  a").removeClass("active");
            if ($(window).width() >= 1500) {
                $(".chitchat-main").removeClass("small-sidebar");
            }
            $(this).addClass("active");
            $('.apps-ul li').removeClass("active");
            var active_class = $(this).attr("href");
            $('#' + active_class).addClass("active");
        });

           $('.apps-toggle').on('click', function () {
            if (!$('body').hasClass('sidebar-active main-page menu-active'))
                $('body').toggleClass('sidebar-active main-page');
            $('body').removeClass('menu-active');
            $('.app-sidebar').toggleClass('active');
            $('.chitchat-main').toggleClass("small-sidebar");
        });



    /*=====================
           27. profile open close
           ==========================*/
           $('.menu-trigger, .close-profile').on('click', function (e) {
            $('body').toggleClass('menu-active'); //add class
            $('.app-sidebar').toggleClass('active'); //remove
            $('.chitchat-main').toggleClass("small-sidebar"); //remove
            if($( window ).width() <= 1440 ) {
                $('.chitchat-container').toggleClass('sidebar-overlap');
              $('.chitchat-main').addClass("small-sidebar"); //remove
          }
          if ($('body').hasClass('menu-active')) {
            $('body').addClass('sidebar-active main-page');
            $('.app-sidebar').removeClass('active');
            $('.chitchat-main').removeClass("small-sidebar");
        }

    });
    /*=====================
           28. dropdown
           ==========================*/

           $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
           $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
           $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
            $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        });

    /*=====================
        29. Sidebar setting
        ==========================*/

        $(".sidebar-setting .two-column").on('click', function () {
            $(".sidebar-setting li").removeClass('active');
            $(this).addClass("active");
            $('.theme-title .icon-btn').removeClass("btn-outline-light").removeClass("btn-outline-primary");
            $('.main-nav').removeClass("on");
        });
        $(".sidebar-setting .three-column").on('click', function () {
            $(".sidebar-setting li").removeClass('active');
            $(this).addClass("active");
            $('.theme-title .icon-btn').addClass("btn-outline-light").addClass("btn-outline-primary");
            $('.main-nav').addClass("on");
        });

    /*=====================
        Chat 
        ==========================*/



        function speak (text) {
            console.log("speak: ",text)
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = 1;
            utterance.rate = 1
            speechSynthesis.speak(utterance);
        }

        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        $('.submit').on('click', function() {
            //typingMessage();
            sendMessage();
        });
        $(window).on('keydown', function(e) {
            if (e.which == 13) {
                if(!e.target.value){
                    return false
                }
                //typingMessage();
                sendMessage();
                return false;
            }
        });

        $(".emojis-sub-contain ul li").click(function () {
            var number = $(this).html();            
            $("#setemoj").focus().val(function() {
               return this.value + number;
               $(".messages").animate({
                scrollTop: $(document).height()
            }, "fast");
           });
            $('#send-msg').removeClass('disabled').removeAttr("disabled")
        });

        
        $('#send-msg').addClass('disabled').attr("disabled", "disabled")
        $("#setemoj").keyup(function(e){
            if(!e.target.value){
                $('#send-msg').addClass('disabled').attr("disabled","disabled")
            } else {
                $('#send-msg').removeClass('disabled').removeAttr("disabled")
            }
        });

        function sendMessage() {
            console.log("showSentMessage called")
            var message = $('.message-input input').val();
            if($.trim(message) == '') {
                return false;
            }
            $('<li class="replies"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/1.jpg&quot;); background-size: cover; background-position: center center;"></div><div class="media-body"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + message + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
            
            $('.message-input input').val(null);

            $('.chat-main .active .details h6').html('<span>You : </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        };



        function showSentMessage(message,senderName) {
            console.log("showSentMessage called")

            if($.trim(message) == '') {
                return false;
            }

            // var message =  msg.msg;
            // var senderName = msg.sender;

            
           
            $('<li class="replies"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/1.jpg&quot;); background-size: cover; background-position: center center;"></div><div class="media-body"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + message + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));


            $('.chat-main .active .details h6').html('<span>You : </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
            
        };

        function showReplyMessage(replyContent,replyName, isBot) {

            var avatarUrl = ""
            console.log("isBot",isBot);
            if(isBot) {
                avatarUrl = "avtar/bot.png";
            } else {
                avatarUrl = "contact/2.jpg";
            }

          $('<li class="sent last typing-m"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/' + avatarUrl +';); background-size: cover; background-position: center center; display: block;"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" style="display: none;"></div><div class="media-body"> <div class="contact-name"> <h5>Josephin water</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5> <div class="type"> <div class="typing-loader"></div></div></h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
          $(".messages").animate({ scrollTop: $(document).height() }, "fast");   
          setTimeout(function() {
            $('.typing-m').hide(); 
            $('<li class="sent"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/' + avatarUrl +'); background-size: cover; background-position: center center; display: block;"></div><div class="media-body"> <div class="contact-name"> <h5>' + replyName +'</h5> <h6>01:35 AM</h6> <ul class="msg-box"> <li> <h5>' + replyContent + '</h5></li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");   
        }, 1000);
      }



    /*=====================
       25. Sticker
       ==========================*/
       $('.sticker-contain ul li').on('click', function (e) {
        var sticker = $(this).children().html();
        $('<li class="replies"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url("../assets/images/contact/1.jpg"); background-size: cover; background-position: center center;"></div><div class="media-body"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + sticker + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
        $('.chat-main .active .details h6').html('<span>You : </span>' + sticker);
        var test = $(this).height();
                $(".messages").animate({

            scrollTop: $(document).height()
        }, "fast");
        $(".sticker-contain").removeClass("open");
        $(".toggle-sticker").removeClass("active");
    });

    // Toggle sticker
    $('.toggle-sticker').on('click', function () {
        $(this).toggleClass("active");
        $('.sticker-contain').toggleClass("open");
        $('.emojis-contain').removeClass("open");
        $(".toggle-emoji").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
    });

    // Toggle emoji
    $('.toggle-emoji').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        $('.emojis-contain').toggleClass("open");
        $(".sticker-contain").removeClass("open");
        $(".toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
    });

    // Toggle poll
    $('.contact-poll').on('click', function (e) {
        $('.contact-poll-content').toggle();
        $('.emojis-contain').removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
    });

    // Outside click
    $(document).on('click', function (e) {
        var outside_space = $(".outside");
        if (!outside_space.is(e.target) &&
            outside_space.has(e.target).length === 0) {
            $(".sticker-contain").removeClass("open");
        $(".emojis-contain").removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
        $('.chat-frind-content').css('display', 'none');
    }
})

    $(".mode").on("click", function () {
        $('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
        $('body').toggleClass("dark");
    });       
    $(".mainnav").on("click", function () {
        $('.theme-title .icon-btn').toggleClass("btn-outline-light").toggleClass("btn-outline-primary");
        $('.main-nav').toggleClass("on");
    }); 
    
    $(".close-apps").on("click", function () {
        $('.apps-ul li').removeClass("active");
        $('.chitchat-main').addClass("small-sidebar");
    });

    $(".close-app").on("click", function () {
        $('body').removeClass("sidebar-active");
        $('.app-sidebar').removeClass("active");
    });
    
    $(".close-panel").on("click", function () {
        $('.dynemic-sidebar, .button-effect.active, sidebar-top .sidebar-top > li > a').removeClass("active");
        $('.recent-default').addClass("active");
    });
    
    $("body").on("click", ".colors li", function () {
        $(this).addClass('active').siblings().removeClass('active');
        var $color = $(this).attr("data-attr");
        $("#color").attr("href", "../assets/css/" + $color + ".css");
        return false;
    });




/*=====================
       26. Quantum Encrypted
==========================*/

const log = e => {
    document.getElementById('logs').innerHTML += `${e}<br/>`;
}

const alice = new Device('Alice_098');
const bob = new Device('Bob_098');

let bobLookup = null;
let aliceLookup = null;

async function initializeUsers() {
    await alice.initialize();
    await bob.initialize();
}

async function registerUsers() {
    await alice.register(); 
    await bob.register();
}

async function findUsers() {
    bobLookup = await alice.findUsers([bob.identity]);
    aliceLookup = await bob.findUsers([alice.identity]);
}

async function encryptAndDecrypt() {
    let aliceEncryptedText = await alice.authEncrypt(`Hello ${bob.identity}! How are you?`, bobLookup);
    await bob.authDecrypt(aliceEncryptedText, aliceLookup[alice.identity]);

    let bobEncryptedText = await bob.authEncrypt(`Hello ${alice.identity}! How are you?`, aliceLookup);
    await alice.authDecrypt(bobEncryptedText, bobLookup[bob.identity]);
}

async function cleanup() {
    await alice.cleanup();
    await bob.cleanup();
}

async function unregisterUsers() {
    await alice.unregister();
    await bob.unregister();
}


async function main() {
    console.log('* Testing main methods:');

    console.log('<br/>----- EThree.initialize -----');
    await initializeUsers();
    console.log('<br/>----- EThree.register -----');
    await registerUsers();
    console.log('<br/>----- EThree.findUsers -----');
    await findUsers();
    console.log('<br/>----- EThree.authEncrypt & EThree.authDecrypt -----');
    await encryptAndDecrypt();

    console.log('<br/>----- EThree.cleanup -----');
    await cleanup();
    console.log('<br/>----- EThree.unregister -----');
    await unregisterUsers();


    
}

main();






/*=====================
       27. Speech & Bot
==========================*/





// showInfo('info_start');
var processing = false;






//Crypto Price
function getCryptoPrice (symbol) {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://binance43.p.rapidapi.com/ticker/price?symbol=" + symbol + "USDT",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "binance43.p.rapidapi.com",
            "X-RapidAPI-Key": "7Yz9lOeBjfmsh8RtKFXErnn87HKgp1cxX6GjsnlMdMaPcHg2Mg"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        

        if (response != null  && response.price != null) {
            var replyText = "The price of " + symbol +" is $" + (Math.round(response.price * 100) / 100).toFixed(2);
            showReplyMessage(replyText,"Galaxy Bot",true);
            speak(replyText);
        }
    });
}


//Hot NFT project
function getHotNFT () {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://top-nft-collections-and-sales.p.rapidapi.com/collections/1d",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "top-nft-collections-and-sales.p.rapidapi.com",
            "X-RapidAPI-Key": "7Yz9lOeBjfmsh8RtKFXErnn87HKgp1cxX6GjsnlMdMaPcHg2Mg"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        

        if (response != null  && response.length > 0 ) {


            var topProjectText = "Top NFT Collection Today is following:";
            var allProjectInfo = "";

            showReplyMessage(topProjectText,"Galaxy Bot",true);
           
            for (let index = 0; index < 3; index++) {
                const project = response[index];
                console.log("project",project);
                var projectInfo =  project.collection_name + " Floor Price " + project.floor.substring(1) + " ETH ";
                showReplyMessage(projectInfo,"Galaxy Bot",true);
                allProjectInfo = allProjectInfo + " " +  projectInfo;
            }

           
            speak(topProjectText + " " + allProjectInfo);


      

            // var replyText = "The price of " + symbol +" is $" + (Math.round(response.price * 100) / 100).toFixed(2);
            // showReplyMessage(replyText,"Galaxy Bot");
            // speak(replyText);
        }
    });
}




function requestNPL(text){

    if (processing || text == null || text === "") return;

    processing = true;

    console.log("text",text);
    text = encodeURIComponent(text.trim());
    console.log("trimmed text",text);


    $.ajax({
        url: 'https://api.wit.ai/message?v=20220419&q=' + text,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer E6VQQX5W7HR2AAYYYHQC4G7XOAVTP4BM'
        },
        success: function (result) {
            processing = false;
            console.log("success");
            console.log(result);

            var intent = result.intents[0].name;
            var confinance = result.intents[0].confidence * 100;
            

            console.log("intenst",intent);
            console.log("intenst confinance",confinance);

            //speak("Test Speaking")

            if (intent == "price") {
                var coin = result.entities["coin:coin"][0].value;
                console.log("coin",coin);

                if (coin != null) {
                    getCryptoPrice(coin);
                }
                
                } else if (intent == "hotnft") {
                    getHotNFT();
                }


            

        },
        error: function (error) {
            processing = false;
            console.log("error");
            console.log(error);
        }
    });
}


var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
    upgrade();
} else {
    start_button.style.display = 'inline-block';
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
        recognizing = true;
        // showInfo('info_speak_now');
        start_img.src = 'https://google.com/intl/en/chrome/assets/common/images/content/mic-animate.gif';
    };

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            start_img.src = 'https://google.com/intl/en/chrome/assets/common/images/content/mic.gif';
            // showInfo('info_no_speech');
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            start_img.src = 'https://google.com/intl/en/chrome/assets/common/images/content/mic.gif';
            // showInfo('info_no_microphone');
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
                // showInfo('info_blocked');
            } else {
                // showInfo('info_denied');
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        start_img.src = 'https://google.com/intl/en/chrome/assets/common/images/content/mic.gif';
        if (!final_transcript) {
            // showInfo('info_start');
            return;
        }
        // showInfo('');
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            // range.selectNode(document.getElementById('final_span'));
            window.getSelection().addRange(range);
        }
        
    };

    recognition.onresult = function (event) {
        var interim_transcript = '';
        if (typeof (event.results) == 'undefined') {
            recognition.onend = null;
            recognition.stop();
            upgrade();
            return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        final_transcript.replace("mft", "NFT");
   
        console.log("final_transcript",final_transcript);
        requestNPL(final_transcript);
        showSentMessage(final_transcript,'');
        
        
    

        //requestNPL(final_transcript);
    };
}

function upgrade() {
    start_button.style.visibility = 'hidden';
    // showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
    return s.replace(first_char, function (m) { return m.toUpperCase(); });
}



function startButton(event) {
    console.log("load startButton ");
    if (recognizing) {
        recognition.stop();
        return;
    }
    final_transcript = '';
    recognition.lang = "en-US";
    console.log(" recognition.lang", recognition.lang);
    recognition.start();
    ignore_onend = false;
   
    start_img.src = 'https://google.com/intl/en/chrome/assets/common/images/content/mic-slash.gif';
    // showInfo('info_allow');
    showButtons('none');
    start_timestamp = event.timeStamp;
}


$( "#start_button" ).click(function(event) {
    console.log("click startButton ");
    startButton(event);
});

var current_style;
function showButtons(style) {
    if (style == current_style) {
        return;
    }
    current_style = style;

}










/*=====================
       26. Web3
==========================*/

if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("Metamask installed！ ",web3.currentProvider);
        
} else {
       // set the provider you want from Web3.providers
       web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s2.binance.org:8545/"));   
       console.log("web3",web3);
}

var myAddress= "";

const ethereumButton = document.querySelector('#connectWallet');

ethereumButton.addEventListener('click', () => {

    async function getAccount() {

        
        console.log(window.ethereum);
        console.log("web3",web3);

        var chainId = await ethereum.request({ method: 'eth_chainId' });

        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        console.log("Chian ID: ",chainId) // 97 
        

        if (chainId != "0x61" && chainId != "97") {
            alert("Please switch to BSC Testnet in Metamask");
            return;
        }


        console.log("accounts ",accounts);
        
        if (accounts != undefined && accounts.length > 0) {
            alert("You already connect with Metamask");
            myAddress = accounts[0];
        }
    }

    getAccount();

});



const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"friend_key","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"addFriend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"allMessages","outputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"msg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"allMessagesString","outputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"msg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pubkey","type":"address"}],"name":"checkUserExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"createAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"myAddress","type":"address"}],"name":"getMyFriendList","outputs":[{"components":[{"internalType":"address","name":"pubkey","type":"address"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct Chat.friend[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyFriendList2","outputs":[{"components":[{"internalType":"address","name":"pubkey","type":"address"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct Chat.friend[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pubkey","type":"address"}],"name":"getUsername","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"messageCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownAddress","type":"address"},{"internalType":"address","name":"friend_key","type":"address"}],"name":"readMessage","outputs":[{"components":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"msg","type":"string"}],"internalType":"struct Chat.message[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"friend_key","type":"address"},{"internalType":"string","name":"_msg","type":"string"}],"name":"sendMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}];
   
//合约地址
const address = '0x87c1FD283C5E08edBC3224e4365CC7B8b9b38747';

const contract = new web3.eth.Contract(abi, address);

$( "#send" ).click(function() {
    console.log('send Clicked!');

    //检查一下Metamask有没安装
    if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    } else {
        alert("Please install MetaMask");
        console.log('MetaMask is NOT installed!');
    }

    var walletAddress = $( "#walletAddress" ).val();
    var messageText = $( "#messageText" ).val();
    
    console.log("walletAddress:",walletAddress);
    console.log("messageText:",messageText);
    
    

    contract.methods.sendMessage(walletAddress,messageText).send({
            from: accounts[0],
            gas: 470000,
            gasPrice:0
    })


});



//Get Messsage
(async () => {


    //Get Messsage
    contract.methods.readMessage("0x83D341B01e86EF4e1987Be96F191d1b7F05d663E","0x1509dE665356b6ca3a909630cd4646B54D26711D").call((err, result) => { 
        console.log(" err",err) 
        console.log("result",result)
      
       

        for (let index = 0; index < result.length; index++) {
            const msgg = result[index];
            console.log("msgg",msgg);
            showSentMessage(msgg.msg,msgg.sender);
            
        }

    });



    contract.methods.getMyFriendList("0x83D341B01e86EF4e1987Be96F191d1b7F05d663E").call((err, result) => { 
        console.log(" getMyFriendList err",err) 
        console.log("getMyFriendList result",result)
      
       

        // for (let index = 0; index < result.length; index++) {
        //     const msgg = result[index];
        //     console.log("msgg",msgg);
        //     showSentMessage(msgg.msg);
            
        // }

    });



    


})();








})(jQuery);


