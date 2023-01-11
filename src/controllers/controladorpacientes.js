//Importaciones
import {capturarDatos} from '../formularios/formularioPacientes.js'


// etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombrespaciente")
let etiquetaBoton=document.getElementById("botonenviopacientes")
let etiquetaDocumento=document.getElementById("documentopaciente")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaGrupo=document.getElementById("grupoingresos")
let etiquetaCorreo=document.getElementById("correopaciente")
let etiquetaTelefono=document.getElementById("telefonopaciente")
let etiquetaCuota=document.getElementById("cuota")

//detectar el evento de clic
etiquetaBoton.addEventListener("click", function(evento){
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaGrupo,etiquetaCorreo,etiquetaTelefono,etiquetaCuota)

})