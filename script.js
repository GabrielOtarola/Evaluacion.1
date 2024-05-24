$(document).ready(function() {
    $("#formularioRegistro").submit(function(e) {
        e.preventDefault();
  
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        var correoElectronico = $("#correoElectronico").val();
        var contrasena = $("#contrasena").val();
        var confirmarContrasena = $("#confirmarContrasena").val();
        var isValid = true;
  
        // Validación de nombre
        if (nombre.length < 3) {
            $("#nombre").next(".error").text("El nombre debe tener al menos 3 caracteres").show();
            isValid = false;
        } else {
            $("#nombre").next(".error").hide();
        }
  
        // Validación de apellido paterno
        if (apellidoPaterno.length < 3) {
            $("#apellidoPaterno").next(".error").text("El apellido paterno debe tener al menos 3 caracteres").show();
            isValid = false;
        } else {
            $("#apellidoPaterno").next(".error").hide();
        }
  
        // Validación de apellido materno
        if (apellidoMaterno.length < 3) {
            $("#apellidoMaterno").next(".error").text("El apellido materno debe tener al menos 3 caracteres").show();
            isValid = false;
        } else {
            $("#apellidoMaterno").next(".error").hide();
        }
  
        // Validación de correo electrónico (básica)
        if (correoElectronico.indexOf("@") === -1 || correoElectronico.indexOf(".") === -1) {
            $("#correoElectronico").next(".error").text("El correo electrónico no es válido").show();
            isValid = false;
        } else {
            $("#correoElectronico").next(".error").hide();
        }
  
        // Validación de contraseña
        if (contrasena.length < 6) {
            $("#contrasena").next(".error").text("La contraseña debe tener al menos 6 caracteres").show();
            isValid = false;
        } else {
            $("#contrasena").next(".error").hide();
        }
  
        // Validación de confirmación de contraseña
        if (confirmarContrasena !== contrasena) {
            $("#confirmarContrasena").next(".error").text("Las contraseñas no coinciden").show();
            isValid = false;
        } else {
            $("#confirmarContrasena").next(".error").hide();
        }
  
        // Enviar el formulario si todas las validaciones son correctas
        if (isValid) {
            alert("Formulario enviado con éxito");
            this.submit();
        }
  
      });
    });