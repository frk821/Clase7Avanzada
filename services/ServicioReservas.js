import {modeloReserva} from '../Models/ModeloReserva'

export class ServicioReserva{
    //Aqui programo metodos para cada una de las consultas
    //que quiero hacer en bd

    async buscarReservas(){
        let reservas=await modeloReserva.find()
        return habitaciones
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReserva.findById(id)
        return habitacion
    }

    async agregarReservaEnBD(datos){
        let datosValidadosReserva=new modeloReserva(datos)
        return await datosValidadosReserva.save()
    }

    async editarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

}