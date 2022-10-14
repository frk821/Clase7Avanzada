import {modeloHabitacion} from '../Models/Modelohabitacion.js'

export class ServicioHabitacion{
    //Aqui programo metodos para cada una de las consultas
    //que quiero hacer en bd

    async buscarHabitaciones(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarHabitacionesPorId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregarHabitacionesEnBD(datos){
        let datosValidados=new modeloHabitacion(datos)
        return await datosValidados.save()
    }

    async editarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }

}