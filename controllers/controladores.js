
class Controlador{}

export function buscarTodos(request,response){

    try{
        response.status(200).json({
            mensaje:"Exito en la busqueda",
            data:[{nombre:"Manuela", edad: 22},{nombre:"Juan",edad:22 }],
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

export function buscarId(request,response){

    try{
        response.status(200).json({
            mensaje:"Exito en la busqueda de Id",
            data:[{id:1},{id:2 }],
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

export function insertar(request,response){
    try{
        response.status(200).json({
            mensaje:"Exito insertar",
            data:[{nombre:"Manuela", edad: 22},{nombre:"Juan",edad:22 }],
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
export function editar (request,response){
    try{
        response.status(200).json({
            mensaje:"Exito al editar",
            data:[{nombre:"Maria", edad: 21},{nombre:"David",edad:22 }],
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

export function eliminar(request,response){
    try{
        response.status(200).json({
            mensaje:"Exito Eliminado correctamente ",
            data:[{},{}],
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