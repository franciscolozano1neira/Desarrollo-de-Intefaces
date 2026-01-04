// Espera a que todo el HTML esté cargado antes de ejecutar el JavaScript
document.addEventListener("DOMContentLoaded", iniciarPrograma)

// Función principal que arranca el programa
function iniciarPrograma() {

    // Validación del nombre cada vez que se escribe o se borra una letra
    document.getElementById("nombre").addEventListener("input", validarNombre)

    // Validación de la edad cada vez que se escribe o se borra
    document.getElementById("edad").addEventListener("input", validarEdad)

    // Validación del email cada vez que se escribe o se borra
    document.getElementById("email").addEventListener("input", validarEmail)

    // Validación del ciclo cuando se cambia la selección
    document.getElementById("ciclo").addEventListener("change", validarCiclo)

    // Validación del checkbox de aceptar condiciones
    document.getElementById("acepto").addEventListener("change", validarAceptarCondiciones)

    // Recogemos todas las casillas de módulos
    let casillasModulos = document.getElementsByName("modulos")

    // Añadimos el evento change a cada checkbox usando un for
    for (let i = 0; i < casillasModulos.length; i++) {
        casillasModulos[i].addEventListener("change", validarModulos)
    }

    // Botón que recarga la página
    document.getElementById("btnReload").addEventListener("click", recargarPagina)

    // Botón que limpia el formulario sin recargar
    document.getElementById("btnReset").addEventListener("click", limpiarFormulario)

    // Controla el envío del formulario
    document.getElementById("formMatricula").addEventListener("submit", enviarFormulario)
}

/*  VALIDACIONES  */

// Valida el campo nombre
function validarNombre() {
    var campoNombre = document.getElementById("nombre")
    var mensajeNombre = document.getElementById("msgNombre")
    var textoNombre = campoNombre.value.trim()

    // Muestra en consola lo que se va escribiendo
    console.log("Nombre actual:", textoNombre)

    // Comprueba que tenga al menos 2 caracteres
    if (textoNombre.length < 2) {
        mensajeNombre.textContent = "El nombre debe tener al menos 2 caracteres"
        mensajeNombre.style.color = "red"
        return false
    }

    // Comprueba que no empiece por un número que este lo he añadido aqui y no en la practica anterior por que 
    // pense que un nombre tampoco puede empexar por un numero 
    if (!isNaN(textoNombre[0])) {
        mensajeNombre.textContent = "El nombre no puede empezar por un número"
        mensajeNombre.style.color = "red"
        return false
    }

    // Si pasa todas las validaciones
    mensajeNombre.textContent = "Nombre correcto"
    mensajeNombre.style.color = "green"
    return true
}

// Valida el campo edad
function validarEdad() {
   var campoEdad = document.getElementById("edad")
    var mensajeEdad = document.getElementById("msgEdad")
    var valorEdad = Number(campoEdad.value)

    // Muestra la edad en la consola en tiempo real
    console.log("Edad actual:", campoEdad.value)

    // Comprueba que sea un número
    if (isNaN(valorEdad)) {
        mensajeEdad.textContent = "La edad debe ser un número"
        mensajeEdad.style.color = "red"
        return false
    }

    // Comprueba que esté entre 16 y 60
    if (valorEdad < 16 || valorEdad > 60) {
        mensajeEdad.textContent = "La edad debe estar entre 16 y 60"
        mensajeEdad.style.color = "red"
        return false
    }

    mensajeEdad.textContent = "Edad válida"
    mensajeEdad.style.color = "green"
    return true
}

// Valida el campo email
function validarEmail() {
    var campoEmail = document.getElementById("email")
    var mensajeEmail = document.getElementById("msgEmail")
    var textoEmail = campoEmail.value

    // Muestra el email en la consola
    console.log("Email actual:", textoEmail)

    // Comprueba longitud mínima
    if (textoEmail.length < 6) {
        mensajeEmail.textContent = "El email debe tener al menos 4 caracteres, un @ y un ."
        mensajeEmail.style.color = "red"
        return false
    }

    // Comprueba que tenga @ y .
    if (!textoEmail.includes("@") || !textoEmail.includes(".")) {
        mensajeEmail.textContent = "El email debe contener @ y ."
        mensajeEmail.style.color = "red"
        return false
    }

    // Comprueba que no sea del dominio Yahoo
    if (textoEmail.includes("yahoo.")) {
        mensajeEmail.textContent = "No se permiten emails de Yahoo"
        mensajeEmail.style.color = "red"
        return false
    }

    mensajeEmail.textContent = "Email correcto"
    mensajeEmail.style.color = "green"
    return true
}

// Valida que se haya seleccionado un ciclo
function validarCiclo() {
    var selectorCiclo = document.getElementById("ciclo")
    var mensajeCiclo = document.getElementById("msgCiclo")

    if (selectorCiclo.value === "") {
        mensajeCiclo.textContent = "Debes seleccionar un ciclo"
        mensajeCiclo.style.color = "red"
        return false
    }

    mensajeCiclo.textContent = "Ciclo correcto"
    mensajeCiclo.style.color = "green"
    return true
}

// Valida que haya al menos 2 módulos marcados
function validarModulos() {
    var casillasModulos = document.getElementsByName("modulos")
    var mensajeModulos = document.getElementById("msgMods")
    var contadorSeleccionados = 0

    // Recorremos las casillas con un for
    for (let i = 0; i < casillasModulos.length; i++) {
        if (casillasModulos[i].checked) {
            contadorSeleccionados++
        }
    }

    if (contadorSeleccionados < 2) {
        mensajeModulos.textContent = "Debes seleccionar al menos 2 módulos"
        mensajeModulos.style.color = "red"
        return false
    }

    mensajeModulos.textContent = "Módulos seleccionados correctamente"
    mensajeModulos.style.color = "green"
    return true
}

// Valida que se acepten las condiciones
function validarAceptarCondiciones() {
    var casillaAceptar = document.getElementById("acepto")
    var mensajeAceptar = document.getElementById("msgAcepto")

    if (!casillaAceptar.checked) {
        mensajeAceptar.textContent = "Debes aceptar las condiciones"
        mensajeAceptar.style.color = "red"
        return false
    }

    mensajeAceptar.textContent = "Checked"
    mensajeAceptar.style.color = "green"

    return true
}

/*  BOTONES  */

// Recarga la página
function recargarPagina() {
    location.reload()
}

// Limpia los mensajes del formulario
function limpiarFormulario() {
    setTimeout(limpiarMensajes, 10)
}

// Borra todos los mensajes de error o validación
function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".msg")
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].textContent = ""
    }
}

/*  ENVÍO  */

// Controla el envío del formulario
function enviarFormulario(evento) {
    evento.preventDefault()

    var camposIncorrectos = []

    // Se validan todos los campos
    if (!validarNombre()) camposIncorrectos.push("Nombre")
    if (!validarEdad()) camposIncorrectos.push("Edad")
    if (!validarEmail()) camposIncorrectos.push("Email")
    if (!validarCiclo()) camposIncorrectos.push("Ciclo")
    if (!validarModulos()) camposIncorrectos.push("Módulos")
    if (!validarAceptarCondiciones()) camposIncorrectos.push("Aceptar condiciones")

    // Si hay errores se muestra una alerta
    if (camposIncorrectos.length > 0) {
        alert(
            "Los siguientes campos no son válidos:\n- " +
            camposIncorrectos.join("\n- ")
        )
        return
    }

    // Si todo es correcto se muestra el resumen
    mostrarResumen()
}

/*  RESUMEN  */

// Muestra una página resumen con los datos del formulario
function mostrarResumen() {
    let nombreAlumno = document.getElementById("nombre").value
    let edadAlumno = document.getElementById("edad").value
    let emailAlumno = document.getElementById("email").value
    let cicloAlumno = document.getElementById("ciclo").value
    let observacionesAlumno = document.getElementById("obs").value

    let modulosSeleccionados = []
    let casillasModulos = document.getElementsByName("modulos")

    // Guardamos los módulos seleccionados
    for (let i = 0; i < casillasModulos.length; i++) {
        if (casillasModulos[i].checked) {
            modulosSeleccionados.push(casillasModulos[i].value)
        }
    }

    // Reemplaza el contenido de la página por el resumen
        document.body.innerHTML =
            "<h1>Documento resumen</h1>" +
            "<p><b>Alumno:</b> " + nombreAlumno + "</p>" +
            "<p><b>Edad:</b> " + edadAlumno + "</p>" +
            "<p><b>Email:</b> " + emailAlumno + "</p>" +
            "<p><b>Ciclo:</b> " + cicloAlumno + "</p>" +
            "<p><b>Módulos:</b> " + modulosSeleccionados.join(", ") + "</p>" +
            "<p><b>Observaciones:</b> " + observacionesAlumno + "</p>";

}
