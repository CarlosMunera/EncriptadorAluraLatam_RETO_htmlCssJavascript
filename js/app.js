let txtAreaDerecha = document.querySelector(".encriptador_derecha_textarea");
let txtAreaIzquierda = document.querySelector(".encriptador_izquierda_textarea");


/* imagen y mensajes izquierda */
var zonaResultado = document.querySelector(".encriptador_derecha")
var imagen = document.querySelector("#muneco")
var mensaje1 = document.querySelector("#mensaje1")
var mensaje2 = document.querySelector("#mensaje2")

let btnEncriptar = document.querySelector("#btnEncriptar");
let btnDesencriptar = document.querySelector("#btnDesencriptar");
let btnCopiarTexto = document.querySelector("#btnCopiarTexto");

var caracteres = ["e", "i", "a", "o", "u"];
var caracteresEncriptados = ["enter", "imes", "ai", "ober", "ufat"];


function mostrarMensaje() {
    if (txtAreaIzquierda.value === "") {
        console.log("Ningun Mensaje Encontrado");
        zonaResultado.classList.add("justificar");
        imagen.classList.remove("ocultar");
        mensaje1.classList.remove("ocultar");
        mensaje2.classList.remove("ocultar");
        btnCopiarTexto.classList.add("ocultar");
        txtAreaDerecha.classList.add("ocultar");
    } else {
        console.log("Mensaje Encontrado");
        zonaResultado.classList.remove("justificar");
        imagen.classList.add("ocultar");
        mensaje1.classList.add("ocultar");
        mensaje2.classList.add("ocultar");
        btnCopiarTexto.classList.remove("ocultar");
        txtAreaDerecha.classList.remove("ocultar");
    }
}

function formaterCadena(cadena) {
    console.log(cadena.value)
    cadena = cadena.value.toLowerCase();
    return cadena;
}

function encriptarMensaje() {
    if (txtAreaIzquierda.value != "") {
        texto = formaterCadena(txtAreaIzquierda);
        for (let i = 0; i <= caracteres.length; i++) {
            texto = texto.replaceAll(caracteres[i], caracteresEncriptados[i]);
            console.log(texto);
        }
        console.log(texto);
        txtAreaDerecha.value = texto;
    } else {
        alert("debes ingresar un texto a encriptar");
    }
}

function desencriptarMensaje() {
    if (txtAreaIzquierda.value != "") {
        let texto = txtAreaIzquierda.value;
        for (let i = 0; i <= caracteres.length; i++) {
            texto = texto.replaceAll(caracteresEncriptados[i], caracteres[i]);
            console.log(texto);
        }
        console.log(texto);
        txtAreaDerecha.value = texto;
    } else {
        alert("debes ingresar un texto a encriptar");
    }
}

function copiarTexto() {
    if (txtAreaDerecha.value != "") {
        console.log(navigator.clipboard.writeText(txtAreaDerecha.value));
        alert("Texto encriptado copiado al portapapeles");
    } else {
        alert("No se puede copiar el campo de texto esta vacío");
    }

}


txtAreaIzquierda.addEventListener('keyup', mostrarMensaje);
btnEncriptar.addEventListener('click', encriptarMensaje);
btnDesencriptar.addEventListener('click', desencriptarMensaje);
btnCopiarTexto.addEventListener("click", copiarTexto);