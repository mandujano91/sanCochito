(function() {
    'use strict';

    angular
        .module('sancochito', [
            "ngRoute"
        ]).config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/templates/home.html",
                    resolve: {
                        "check": function($location, $rootScope) {
                            $rootScope.item = 1;
                            if ($(".navbar-toggler").is(":visible") && $("#navbarSupportedContent").is(":visible")) {
                                $(".navbar-toggler").click();
                            }
                            $(window).scrollTop(0);
                            // $("#menu").removeClass("bg-dark");
                            // $("#menu").removeClass("sombra");
                            $("#menu").addClass("bg-dark");
                            $("#menu").addClass("sombra");
                        }
                    }
                }).when("/menu", {
                    templateUrl: "views/templates/menu.html",
                    controller: "menuController",
                    controllerAs: "menu",
                    resolve: {
                        "check": function($location, $rootScope) {
                            $rootScope.item = 2;
                            if ($(".navbar-toggler").is(":visible") && $("#navbarSupportedContent").is(":visible")) {
                                $(".navbar-toggler").click();
                            }
                            $(window).scrollTop(0);
                            $("#menu").addClass("bg-dark");
                            $("#menu").addClass("sombra");
                        }
                    }
                })
        });

}());