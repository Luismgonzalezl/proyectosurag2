import {validarFormulario} from './validacionFormularioMedico.js'

//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion, etiquetaFotografia){
    
    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistro.value
    let correoMedico=etiquetaCorreo.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcionMedico=etiquetaDescripcion.value
    let fotografiaMedico=etiquetaFotografia.value
    
    //Debemos almacenar todos los valores del formulario en una sola variable
    //Objeto= almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioMedico={
        nombres:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        registro:registroMedico,
        correo:correoMedico,
        sede:sedeMedico,
        horario:horarioMedico,
        descripcion:descripcionMedico,
        fotografia:fotografiaMedico
    }
    
    validarFormulario(datosFormularioMedico)
    
    //console.log(datosFormularioMedico)
    

    // console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)
    // console.log(registroMedico)
    // console.log(correoMedico)
    // console.log(sedeMedico)
    // console.log(horarioMedico)
    // console.log(descripcionMedico)
    // console.log(fotoMedico)
}

