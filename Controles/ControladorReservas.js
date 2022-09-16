export class ControladorReservas{

    constructor(){}
    
    buscarReservaciones(request,response){
        response.send("Estoy buscando reservas desde el controlador")
    }
    
    buscarReservacionPorId(request,response){
        response.send("Estoy buscando una reservas por id")
    }
    
    registrarReservacion(request,response){
        response.send("Estoy agregando reserva desde el controlador")
    }
    
    editarReservaciones(request,response){
        response.send("Estoy editando reserva desde el controlador")
    }
    
    
    
}