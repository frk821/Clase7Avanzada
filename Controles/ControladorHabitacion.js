import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

constructor(){}

async buscarHabitaciones(request,response){
    let datosHabitacion = request.body
    let objetoServicioHabitacion = new ServicioHabitacion()

    try {
        response.status(200).json({
            "mensaje":"éxito en la respuesta",
            "datos":await objetoServicioHabitacion.buscarHabitaciones()
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error en la consulta "+error,
            "datos":null
        })
    }

    
    
}

async buscarHabitacionPorId(request,response){
    //response.send("Estoy buscando una habitación por id")
    let id=request.params.idHabitacion //recibo id de la peticion
    let objetoServicioHabitacion = new ServicioHabitacion()
    try {
        response.status(200).json({
            "mensaje":"éxito en la busqueda de la habitación "+id,
            "datos":await objetoServicioHabitacion.buscarHabitaciones(id)
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error en la busqueda de la habitación "+error,
            "datos":null
        })
    }
}

async registrarHabitacion(request,response){
    

    let datosHabitacion = request.body //obtengo datos del body
    console.log(datosHabitacion);
    let objetoServicioHabitacion = new ServicioHabitacion()
    try {
        
        if (datosHabitacion.numeroMaximoPersonas < 8) {

            await objetoServicioHabitacion.agregarHabitacionesEnBD(datosHabitacion)
            response.status(200).json({
                "mensaje":"éxito en el registro de la habitación",
                "datos":null
            })
        } else {
            response.status(400).json({
                "mensaje":"No cabe tanta gente",
                "datos":null
            })
        }
        
    } catch (error) {
        response.status(400).json({
            "mensaje":"error en el registro de la habtación "+error,
            "datos":null,
            "estado":false
        })
    }
}

async editarHabitacion(request,response){
    //response.send("Estoy editando desde el controlador")
    let id = request.params.id
    let datosHabitacion = request.body

    let objetoServicioHabitacion = new ServicioHabitacion()
    try {

        await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)

        response.status(200).json({
            "mensaje":"éxito editando "+id,
            "datos":null,
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error actualizando datos de la habitación "+error,
            "datos":null
        })
    }
}



}