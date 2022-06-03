//Importamos el modelo de datos

import {modeloReserva}from '../models/reservaModelo.js'

 export class ServicioReserva {

    constructor(){}

    async buscarTodos(){

           let reservas = await modeloReserva.find()
           return reservas
       
    }

    async buscarId(id){
        
            let Reserva = await modeloReserva.findById(id)
            return Reserva

    }

    async registrar(datosPeticion){
        
            let reservaRegistar = new modeloReserva(datosPeticion)
            return (await reservaRegistar.save())

    }

    async editar(id,datos){
       
            return await modeloReserva.findByIdAndUpdate(id,datosPeticion)
            
    }

   async eliminar(id){
       
           return await modeloReserva.findOneAndDelete(id)
   }

}