import mongoose from 'mongoose';

//DEFINIR EL ESQUEMA DE DATOS DE MI MODELO
const Schema = mongoose.Schema

//CONSTRUYO MI ESQUEMA DE DATOS
const Habitacion = new Schema({
     nombre:{
         type:String,
         required:true
     },

     precio:{
         type:Number,
         required:true
     },

     numeroPersona:{
         type:Number,
         required:true
     },

     foto:{
        type:String,
        required:true
     },

     id_hab: {
         type:String,
         required:true
     }

 })

 //CREO FINALMENTE EL MODELO DE DATOS

 export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)
