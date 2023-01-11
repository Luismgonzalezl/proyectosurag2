import {validarFormulario} from './validacionFormularioPacientes.js'

//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaGrupo,etiquetaCorreo,etiquetaTelefono,etiquetaCuota){
    
    let nombresPaciente=etiquetaNombre.value
    let documentoPaciente=etiquetaDocumento.value    
    let regimenPaciente=etiquetaRegimen.value
    let correoPaciente=etiquetaCorreo.value
    let grupoPaciente=etiquetaGrupo.value
    let telefonoPaciente=etiquetaTelefono.value
    let cuotaPaciente=etiquetaCuota.value
   
    
    //Debemos almacenar todos los valores del formulario en una sola variable
    //Objeto= almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioPacientes={
        nombre:nombresPaciente,
        documento:documentoPaciente,        
        regimen:regimenPaciente,
        correo:correoPaciente,
        grupo:grupoPaciente,
        telefono:telefonoPaciente,
        cuota:cuotaPaciente
    }
    
    validarFormulario(datosFormularioPacientes)
    
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

