export class ControladorHabitacion{

constructor(){}

buscarHabitaciones(request,response){
    try {
        response.status(200).json({
            "mensaje":"éxito en la respuesta",
            "datos":"aqui van los datos de las habitaciones"
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error en la consulta "+error,
            "datos":null
        })
    }

    
    
}

buscarHabitacionPorId(request,response){
    //response.send("Estoy buscando una habitación por id")
    try {
        response.status(200).json({
            "mensaje":"éxito en la busqueda de la habitación",
            "datos":"aqui van los datos de la habitacion encontrada"
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error en la busqueda de la habitación "+error,
            "datos":null
        })
    }
}

registrarHabitacion(request,response){
    //response.send("Estoy agregando desde el controlador")
    try {
        response.status(200).json({
            "mensaje":"éxito en el registro de la habitación",
            "datos":"aqui van los datos de las habitacion registrada"
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error en el registro de la habtación "+error,
            "datos":null
        })
    }
}

editarHabitacion(request,response){
    //response.send("Estoy editando desde el controlador")
    try {
        response.status(200).json({
            "mensaje":"éxito actualizando la habitacion",
            "datos":"aqui van los datos de la habitacion actualizada"
        })
    } catch (error) {
        response.status(400).json({
            "mensaje":"error actualizando datos de la habitación "+error,
            "datos":null
        })
    }
}



}