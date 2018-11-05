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
                            if ($("#navegacion").is(":visible") && $(".navbar-toggler").is(":visible")) {
                                $(".navbar-toggler").click();
                            }
                            $(window).scrollTop(0);
                            // $("#menu").removeClass("bg-dark");
                            // $("#menu").removeClass("sombra");
                            // $("#menu").addClass("bg-dark");
                            // $("#menu").addClass("sombra");
                        }
                    }
                }).when("/menu", {
                    templateUrl: "views/templates/menu.html",
                    controller: "menuController",
                    controllerAs: "menu",
                    resolve: {
                        "check": function($location, $rootScope) {
                            $rootScope.item = 2;
                            if ($("#navegacion").is(":visible") && $(".navbar-toggler").is(":visible")) {
                                $(".navbar-toggler").click();
                            }
                            $(window).scrollTop(0);
                            // $("#menu").addClass("bg-dark");
                            // $("#menu").addClass("sombra");
                        }
                    }
                }).when("/nosotros", {
                    templateUrl: "views/templates/nosotros.html",
                    resolve: {
                        "check": function($location, $rootScope) {
                            $rootScope.item = 3;
                            if ($("#navegacion").is(":visible") && $(".navbar-toggler").is(":visible")) {
                                $(".navbar-toggler").click();
                            }
                            $(window).scrollTop(0);
                            // $("#menu").addClass("bg-dark");
                            // $("#menu").addClass("sombra");
                        }
                    }
                }).when("/contacto", {
                    templateUrl: "views/templates/contacto.html",
                    controller: "emailController",
                    controllerAs: "email",
                    resolve: {
                        "check": function($location, $rootScope) {
                            $rootScope.item = 4;
                            if ($("#navegacion").is(":visible") && $(".navbar-toggler").is(":visible")) {
                                $(".navbar-toggler").click();
                            }
                            $(window).scrollTop(0);
                            // $("#menu").addClass("bg-dark");
                            // $("#menu").addClass("sombra");
                        }
                    }
                });
        });

}());