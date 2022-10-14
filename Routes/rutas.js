import express from 'express'

import { ControladorHabitacion } from '../Controles/ControladorHabitacion.js'
let controlHabitacion = new ControladorHabitacion() //Usando el controlador

import { ControladorReservas } from '../Controles/ControladorReservas.js'
let controlReservas = new ControladorReservas()

export let rutasPersonalizadas = express.Router()

rutasPersonalizadas.get('/hoteles/habitaciones',controlHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hoteles/habitacion/:id',controlHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hoteles/habitacion',controlHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hoteles/habitacion/:id',controlHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hoteles/reservaciones',controlReservas.buscarReservaciones)
rutasPersonalizadas.get('/hoteles/reservacion/:id',controlReservas.buscarReservacionPorId)
rutasPersonalizadas.post('/hoteles/reservacion',controlReservas.registrarReservacion)
rutasPersonalizadas.put('/hoteles/reservacion',controlReservas.editarReservaciones)

