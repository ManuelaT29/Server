//importo a mongoose encargado de crear la conexion
import mongoose from 'mongoose';

export async  function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito al conectar en la base de datos")
    }
    catch (error){
        console.log("Fallamos en la conexion en la BD" +error)
    }

}