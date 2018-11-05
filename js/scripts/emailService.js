(function() {
    'use strict';

    angular
        .module('sancochito')
        .service('emailService', function($http) {
            let vm = this;

            vm.enviarCorreo = function(data) {
                return $http({
                    method: 'POST',
                    url: "server/server.php?email=enviar",
                    data: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                });
            }

        });
})();