//idHabitacion:String
//fechaEntrada:Date
//fechaSalida:Date
//numeroadultos:Number
//numeroninos:Number
//costoreserva:Number

import mongoose from 'mongoose';

//ESQUEMA DE DATOS ES UN ESTANDAR DONDE APARECEN SOLO LOS DATOS
//CON LOS QUE EL API VA A ATRABAJR
const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({

    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNinos:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:false,
        type:Number
    }
    
});

export const modeloReserva=mongoose.model('reservas',EsquemaReserva)