import express from 'express'// importar express

//IMPORTO LOS CONTROLADORES

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'


//ceramos el objeto para poder utilizar el controlador
let  controladorHabitacion = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()

//Una variable para almacennar
//La funcionalidad de express
//Que es la que me permite personalizar y separar Rutas
 export let rutas = express.Router()

//DEFINO MIS RUTAS

// RUTA CONTROLADORHABITACION
    rutas.get('/Api/v1/viernes',controladorHabitacion.buscarTodos)  
    rutas.get('/Api/v1/viernes/:id',controladorHabitacion.buscarId)  
    rutas.post('/Api/v1/viernes',controladorHabitacion.insertar)
 

// RUTA CONTROLADOR RESERVA
    rutas.get('/api/v1/reservas',controladorReserva.buscarTodos)  
    rutas.get('/api/v1/reservas/:id',controladorReserva.buscarId)  
    rutas.post('/api/v1/reservas',controladorReserva.insertar)
    