
 //IMPORTAR LOS SERVICIOS

 import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
 
 export class ControladorHabitacion {

    constructor(){ }

   async buscarTodos(request,response){
       console.log("hola")
       
        let servicio = new ServicioHabitacion() // se instancia la clase Servicio
        try{
            response.status(200).json({
                mensaje:"Exito en la busqueda",
                data:await servicio.buscarTodos(),
                estado: true
            })
    
        }catch(error){
            response.status(400).json({
                mensale:"Ups!"+error,
                data:[],
                estado:false
            })
        }
    }

   async  buscarId(request,response){

        let id = request.params.id//CAPTURO EL ID QUE LLEGA POR LA URL
        console.log("El id solicitado es: "+id)
        let servicio = new ServicioHabitacion() // se instancia la clase Servicio

        try{
            response.status(200).json({
                mensaje:"Exito en la busqueda de Id "+id,
                data:await servicio.buscarId(id),
                estado: true
            })
    
        }catch(error){
            response.status(400).json({
                mensale:"Ups!",
                data:[],
                estado:false
            })
        }
    }

   async  insertar(request,response){

         let datosPeticion=request.body
         console.log(datosPeticion)
         let servicio = new ServicioHabitacion() // se instancia la clase Servicio
         
        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito insertar",
                data:datosPeticion,
                estado: true
            })
    
        }catch(error){
            response.status(400).json({
                mensale:"Ups!",
                data:[],
                estado:false
            })
        }
    }

   async editar(request,response){

        let id = request.params.id
        let datosPeticion = request.body
        let servicio = new ServicioHabitacion() // se instancia la clase Servicio
        try {
            await servicio.editar(id.datosPeticion)
            response.status(200).json({
                mensaje:" Exito editando datos",
                data: null,
                estado:fa
            })
            
        } catch (error) {
           response.status(400).json({
                mensale:"Ups!",
                data:[],
                estado:false
            })  
        }
    }

  async  eliminar(request,response){
      let id = request.params.id
      let servicio = new ServicioHabitacion() // se instancia la clase Servicio

        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"Exito Eliminado correctamente ",
                data:null,
                estado:true
            })
    
        }catch(error){
            response.status(400).json({
                mensale:"Ups!",
                data:[],
                estado:false
            })
        }
    }
}
