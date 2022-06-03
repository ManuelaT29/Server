//Importamos el modelo de datos

import {modeloHabitacion}from '../models/habitacionModelo.js'

export class ServicioHabitacion {

    constructor(){}

    async buscarTodos(){

           let habitaciones = await modeloHabitacion.find()
           return habitaciones

    }

    async buscarId(id){
        
            let habitacion = await modeloHabitacion.findById(id)
            return habitacion
    }

    async registrar(datosPeticion){
      
            let habitacionRegistar = new modeloHabitacion(datosPeticion)
            return (await habitacionRegistar.save())

    }

    async editar(id,datos){
       
            return await modeloHabitacion.findByIdAndUpdate(id,datosPeticion)
    }

   async eliminar(id){
    
           return await modeloHabitacion.findOneAndDelete(id)
   }

}