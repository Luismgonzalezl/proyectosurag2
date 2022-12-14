export function validarFormulario(datos){
    //Referenias a etiquetas que quiero validar
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    let etiquetaRegistro=document.getElementById("registro")
    
    //console.log("estamos validando ...")
    //console.log(datos)

    //validemos 3 campos del formulario: nombres, documento y registro profesional
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
    //let registroMedico=datos.registro

    //Agregar todos los caminos posibles para validar el formulario
    if(nombresMedico=="" && documentoMedico==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre y el documento son obligatorios',
          })
    }else if(nombresMedico=="" && documentoMedico!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if(nombresMedico!="" && documentoMedico==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }


}