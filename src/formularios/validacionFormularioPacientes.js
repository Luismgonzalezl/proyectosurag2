export function validarFormulario(datospaciente){
    //Referenias a etiquetas que quiero validar
    let etiquetaNombre=document.getElementById("nombrespaciente")
    let etiquetaDocumento=document.getElementById("documentopaciente")
    //let etiquetaRegistro=document.getElementById("registro")
    
    //console.log("estamos validando ...")
    //console.log(datos)

    //validemos 3 campos del formulario: nombres, documento y registro profesional
    let nombresPaciente=datospaciente.nombre
    let documentoPaciente=datospaciente.documento
    //let registroMedico=datos.registro

    //Agregar todos los caminos posibles para validar el formulario
    if(nombresPaciente=="" && documentoPaciente==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre y el documento son obligatorios',
          })
    }else if(nombresPaciente=="" && documentoPaciente!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if(nombresPaciente!="" && documentoPaciente==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }


}