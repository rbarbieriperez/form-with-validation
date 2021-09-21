"use strict";

/*VARIABLES AND CONSTANTS*/
const _FORM_ = document.getElementById("form");
const _FIELDS_ = [
    document.getElementById("username"),
    document.getElementById("surname"),
    document.getElementById("email"),
    document.getElementById("message")
];
const _FEEDBACK_ = document.getElementById("feedback");
const _COUNTER_ = document.getElementById("character-counter");
var message= "";


/*EVENTS*/
_FORM_.addEventListener("submit", (e)=>{

    if(CheckIfNoEmptyEntries(_FIELDS_) && UsernameFormatChecker(_FIELDS_[0].value) && SurnameFormatChecker(_FIELDS_[1].value) && EmailFormatChecker(_FIELDS_[2].value) && MessageFormatChecker(_FIELDS_[3].value)){
        alert("Todos los datos fueron validados correctamente, enviamos!");
    } else {
        e.preventDefault();
    }
    
});

_FIELDS_[3].addEventListener("keydown", ()=> {
    showTextSize(_FIELDS_[3].value);
});

/*FUNCTIONS*/
function CheckIfNoEmptyEntries (value){
    for (let i = 0; i < value.length; i++){
        if (value[i].value.length === 0){
            FeedbackContent("No puede haber campos vacíos");
            return false;
        } else {
            return true;
        }
    }
   
    
}

function FeedbackContent(contenido){
    _FEEDBACK_.innerHTML = contenido;
}

function OnlyAllowLetters(cadena){
    let letters = /^[A-Za-z]+$/;
    
    if (cadena.match(letters)){
        return true;
    } else {
        return false;
    }
}

function UsernameFormatChecker(nombre){
    if(OnlyAllowLetters(nombre)){
        return true;
    } else {
        FeedbackContent("El campo Nombre solo admite caracteres de texto");
        return false;
    }
}

function SurnameFormatChecker(apellido){
    if (OnlyAllowLetters(apellido)){
        return true;
    } else {
        FeedbackContent("El campo Apellidos solo admite caracteres de texto");
        return false;
    }
}
function EmailFormatChecker (correo){   
    const expresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = expresion.test(correo);

    if (result){
        return true;
    } else {
        FeedbackContent("El campo Email debe tener el formato example@example.com");
        return false;
    }
}

function MessageFormatChecker(mensaje){
    if (mensaje.length > 0) {
        return true;
    } else {
        FeedbackContent("El campo mensaje no puede ser vacío");
        return false;
    }
}

function showTextSize(text){
    _COUNTER_.innerHTML = text.length + "/500";
}






