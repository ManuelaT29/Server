import mongoose from 'mongoose';

//DEFINIR EL ESQUEMA DE DATOS DE MI MODELO
const Schema = mongoose.Schema

//CONSTRUYO MI ESQUEMA DE DATOS
const Reserva = new Schema({
     fechaIn:{
         type:Date,
         required:true
     },

     fechaOut:{
         type:Date,
         required:true
     },

    costo:{
         type:Number,
         required:true
     },

     idClientes:{
        type:String,
        required:true
     },

     numeroPersonas:{
        type:Number,
        required:true
     }

 })

 //CREO FINALMENTE EL MODELO DE DATOS

 export const modeloReserva=mongoose.model('reservas',Reserva)
