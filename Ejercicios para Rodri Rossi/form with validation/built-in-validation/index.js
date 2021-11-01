"use strict";

/*VARIABLES AND CONSTANTS*/
const _FORM_ = document.getElementById("form");

const _FIELDS_ = [
    [document.getElementById("username"), UsernameFormatChecker],
    [document.getElementById("surname"), SurnameFormatChecker],
    [document.getElementById("email"), EmailFormatChecker],
    [document.getElementById("file"), CheckIfThereIsImage],
    [document.getElementById("message"), MessageFormatChecker]
]
const _FEEDBACK_ = document.getElementById("feedback");
const _COUNTER_ = document.getElementById("character-counter");
var message= "";


/*EVENTS*/
_FORM_.addEventListener("submit", (e)=>{

    if(ValidationFlow(_FIELDS_)){
        alert("Todos los datos fueron validados correctamente, enviamos!");
        location.reload();
    } else {
        e.preventDefault();
    }
    
});

_FIELDS_[4].addEventListener("keydown", ()=> {
    showTextSize(_FIELDS_[4].value);
});

/*FUNCTIONS*/
function ValidationFlow(values){
    let isValid = true; 
    for (let field of values){
        const [fieldValue, validationFunction] = field;
        if (! validationFunction(fieldValue.value)) {    
            isValid  = false;
            return isValid;
        }
    }
    return isValid;
}

function CheckIfNoEmptyEntries (value){
    if (value.length === 0){
        FeedbackContent("No puede haber campos vacíos");
        return false;
    } else {
        return true;
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
    if (CheckIfNoEmptyEntries(nombre)) {
        if(OnlyAllowLetters(nombre)){
            return true;
        } else {
            FeedbackContent("El campo Nombre solo admite caracteres de texto");
            return false;
        }
    }
}

function SurnameFormatChecker(apellido){
    if (CheckIfNoEmptyEntries(apellido)){
        if (OnlyAllowLetters(apellido)){
            return true;
        } else {
            FeedbackContent("El campo Apellidos solo admite caracteres de texto");
            return false;
        }     
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

function CheckIfThereIsImage(input){
    if (input.length > 0){
        return true;
    } else {
        FeedbackContent("Debe haber una imágen seleccionada");
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






