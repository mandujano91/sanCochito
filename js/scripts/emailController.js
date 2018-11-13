(function() {
    'use strict';

    angular
        .module('sancochito')
        .controller('emailController', function(emailService, $scope) {

            let vm = this;

            vm.enviarCorreo = () => {
                if ($scope.formulario_correo.$valid) {
                    let data = {
                        asunto: vm.asunto,
                        mensaje: "<html>" +
                            "<head>" +
                            "<title>San Cochito</title>" +
                            "</head>" +
                            "<body>" +
                            "<p style='color:blue'> Nombre: " + "<span style='color:black'>" + vm.nombre + "</span>" + "</p>" +
                            "<p style='color:blue'> Teléfono: " + "<span style='color:black'>" + vm.telefono + "</span>" + "</p>" +
                            "<p style='color:blue'> Correo electónico: " + "<span style='color:black'>" + vm.correo + "</span>" + "</p>" +
                            "<p style='color:black'> Mensaje: " + vm.mensaje + "</p>" +
                            "</body>" +
                            "</html>"

                    }
                    vm.procesando = true;
                    emailService.enviarCorreo(data)
                        .then(function(response) {
                            console.log(response.data);
                            // vm.procesando = false;
                            // if (response.data.ok) {
                            //     swal(response.data, "", "success");
                            //     vm.asunto = "";
                            //     vm.telefono = "";
                            //     vm.nombre = "";
                            //     vm.correo = "";
                            //     vm.mensaje = "";
                            //     $scope.formulario_correo.$submitted = false;
                            // } else {
                            //     swal(response.data, "", "error");
                            // }
                        }).catch(function(response) {
                            // vm.procesando = false;
                            // alert(response.data.err)
                            console.log(response.data);
                        });

                }
            }

        });

}());