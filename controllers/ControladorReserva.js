
 //IMPORTAR LOS SERVICIOS

 import {ServicioReserva} from '../services/ServicioReserva.js'
 import { ServicioHabitacion } from '../services/ServicioHabitacion.js'
 
 export class ControladorReserva {

    constructor(){ }

   async buscarTodos(request,response){
       console.log("hola")
       
        let servicio = new ServicioReserva() // se instancia la clase Servicio
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
        let servicio = new ServicioReserva() // se instancia la clase Servicio

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
    let servicio = new ServicioReserva() // se instancia la clase Servicio
    
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
      
    /*
       let servicio = new ServicioReserva();
       let serviciohabitacion = new ServicioHabitacion();
       let datosPeticion = request.body;

       try{
           let habitacion = await serviciohabitacion.buscarId(datosPeticion.id_hab);
           let fechaIngreso = new Date(datosPeticion.fechaIn);
           let fechaSalida= new Date(datosPeticion.fechaOut);

           let differrence = Math.abs(fechaSalida - fechaIngreso)
           let days = differrence / (1000 * 3600 * 24)
           let costo = days * habitacion.precio

           datosPeticion.costo  = costo
           let rp = await servicio.registrar(datosPeticion)
           response.status(200).json({
               mensaje: "Exito al agregar la reserva",
               data: rp,
               estado: true,
           });
       }catch(error){
           response.status(400).json({
               mensaje: "Upss! hubo un error " + error,
               data:[],
               estado: false,
           });
       }*/


    }

   async editar(request,response){

        let id = request.params.id
        let datosPeticion = request.body
        let servicio = new ServicioReserva() // se instancia la clase Servicio
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
      let servicio = new ServicioReserva() // se instancia la clase Servicio

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
