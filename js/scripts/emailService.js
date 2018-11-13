(function() {
    'use strict';

    angular
        .module('sancochito')
        .service('emailService', function($http) {
            let vm = this;

            vm.enviarCorreo = function(data) {
                    
                return $http({
                    method: 'POST',
                    url: "https://mail-san-cochito.herokuapp.com/enviarCorreo",
                    data: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });
            }

        });
})();