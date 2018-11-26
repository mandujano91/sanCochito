(function() {
    'use strict';

    angular
        .module('sancochito')
        .controller('menuController', function() {

            let vm = this;

            $(".nav-item").click(function(e) {
                e.preventDefault();
                $(this).parent().carousel($(this).data("slide"));
            });

            $('#imagen').on('hidden.bs.modal', function(e) {
                $("body").css("overflow-y", "auto");
            })

            vm.muestraImagen = (e,image) => {
                e.preventDefault();
                vm.imagen = image;
                $("body").css("overflow-y", "hidden");
            }

        });

}());