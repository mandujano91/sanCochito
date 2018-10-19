(function() {
    'use strict';

    angular
        .module('sancochito')
        .controller('scroll', function($location) {
            let vm = this;

            $(".navbar-toggler").on("click", function() {
                if ($location.path() === "/") {
                    if ($("#menu").offset().top < 56 && $(".navbar-toggler").attr('aria-expanded') == 'false') {
                        $("#menu").addClass("bg-dark");
                        $("#menu").addClass("sombra");
                        $("#logo").removeClass("tam-logo");
                        $("#logo").addClass("red-logo");
                    } else if ($("#menu").offset().top < 56 && $(".navbar-toggler").attr('aria-expanded') == 'true') {
                        $("#menu").removeClass("bg-dark");
                        $("#logo").addClass("tam-logo");
                        $("#logo").removeClass("red-logo");
                        $("#menu").removeClass("sombra");
                    }
                }
            });

            $(window).scroll(function() {
                if ($location.path() === "/") {
                    if ($("#menu").offset().top > 56) {
                        $("#menu").addClass("bg-dark");
                        $("#menu").addClass("sombra");
                        $("#logo").removeClass("tam-logo");
                        $("#logo").addClass("red-logo");
                    } else {
                        $("#menu").removeClass("bg-dark");
                        $("#logo").addClass("tam-logo");
                        $("#logo").removeClass("red-logo");
                        $("#menu").removeClass("sombra");
                    }
                } else {
                    if ($("#menu").offset().top > 56) {
                        $("#menu").addClass("bg-dark");
                        $("#menu").addClass("sombra");
                        $("#logo").removeClass("tam-logo");
                        $("#logo").addClass("red-logo");
                    } else {

                        $("#logo").addClass("tam-logo");
                        $("#logo").removeClass("red-logo");
                        $("#menu").removeClass("sombra");
                    }
                }
            });
        });

}());