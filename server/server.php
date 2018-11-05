
<?php 	
	switch ($_GET["email"]) {
        case "enviar":
            $post_data = file_get_contents("php://input"); // obtiene datos enviados metodo POST
            $datos_correo = json_decode($post_data); 

            $to = "mandujano_cesar@hotmail.com";
            $subject = $datos_correo->asunto;
            $message = $datos_correo->mensaje;
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $headers .= "From: mandujanopower91@gmail.com" . "\r\n" ;
            $success = mail($to,$subject,$message,$headers);
            $response = Array();
            if ($success) {
                $response[] = array(
                    "message"=>"Correo electrónico enviado satisfactoriamente, pronto nos comunicaremos con usted.",
                    "estatus"=>true
                );
            }else{
                $response[] = array(
                    "message"=>"Ocurrio un error al enviar el correo electrónico.",
                    "estatus"=>false
                );
            }

            echo json_encode($response);
        break;
	}

?>