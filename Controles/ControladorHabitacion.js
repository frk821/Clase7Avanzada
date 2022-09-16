export class ControladorHabitacion{

constructor(){}

buscarHabitaciones(request,response){
    response.send("Estoy buscando habitaciones desde el controlador")
}

buscarHabitacionPorId(request,response){
    response.send("Estoy buscando una habitación por id")
}

registrarHabitacion(request,response){
    response.send("Estoy agregando desde el controlador")
}

editarHabitacion(request,response){
    response.send("Estoy editando desde el controlador")
}



}