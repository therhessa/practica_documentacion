//validar formulario, tenemos el camo nombre, mail y textarea
//validará los datos y mostrará un error en el caso que no se 
//introduzcan correctamente
$(document).ready(function() {
    $("#formu").validate({
    rules: {
    name : {
    required: true,
    minlength: 5
    },

    email: {
    required: true,
    email: true
    },
    comment: {
        required: true,
        minlength: 5
    
    },
    },
    messages : {
    name: {
    minlength: "Su nombre debe ser al menos de 5 caracteres"
    },

    email: {
    email: "El formato de su email debe ser: abc@domain.xxx"
    },
    comment: {
        minlength: "Debes introducir al menos 5 caracteres"
    
    }
    }
    });
    });
