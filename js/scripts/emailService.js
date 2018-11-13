(function() {
    'use strict';

    angular
        .module('sancochito')
        .service('emailService', function($http) {
            let vm = this;

            vm.enviarCorreo = function(data) {
                    console.log(data)
                // return $http({
                //     method: 'POST',
                //     url: "http://localhost:3000/enviarCorreo",
                //     data: {
                //         "mensaje":"hola"
                //     },
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }

                // });

                return $http.get("https://mail-san-cochito.herokuapp.com/prueba");
            }

        });
})();