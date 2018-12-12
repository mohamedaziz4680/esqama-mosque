$(function (){
	'use strict';
    $("body").niceScroll({
        cursorcolor:"#00b2f8",
        cursorwidth:"16px"
    });

    $(".audios .audios-list .card .play-list").niceScroll({
        cursorcolor:"#00b2f8",
        cursorwidth:"16px",
    });

    $(".videos .videos-playlist .playlist .list").niceScroll({
        cursorcolor:"#00b2f8",
        cursorwidth:"16px",
    });

    var scroll = new SmoothScroll('.header .navbar a[href*="#"]', {
        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        easing: 'easeInOutCubic', // Easing pattern to use
        customEasing: function (time) {

            // Function. Custom easing pattern
            // If this is set to anything other than null, will override the easing option above

            // return <your formulate with time as a multiplier>

            // Example: easeInOut Quad
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

        },

        // History
        updateURL: false, // Update the URL on scroll

        // Custom Events
        emitEvents: true // Emit custom events

    });

    $('.carousel').carousel({
      interval: 2000,
      pause: true
    });

    $('#hover-1').hover(function(){
        $('#menu-1').css('display','block');
    },function(){
        $('#menu-1').css('display','none');
    });
    $('#hover-2').hover(function(){
        $('#menu-2').css('display','block');
    },function(){
        $('#menu-2').css('display','none');
    });
    $('#hover-3').hover(function(){
        $('#menu-3').css('display','block');
    },function(){
        $('#menu-3').css('display','none');
    });
    $('#hover-4').hover(function(){
        $('#menu-4').css('display','block');
    },function(){
        $('#menu-4').css('display','none');
    });
});