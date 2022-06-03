
import express from 'express'// importar express

//IMPORTANDO RUTAS
import { rutas } from '../routes/rutas.js'

// IMPORTAR LA FUNCION DE CONEXION
import { conectar } from '../database/conexion.js'

export class Servidor{
     
    constructor (){
        this.app = express() //atributo app
        this.conectarconBD()
        this.llamarAuxiliares()
        this.enrrutarpeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendidhhhhhhhhho ${process.env.PORT}`)
        })
    }

    enrrutarpeticiones(){
        this.app.use('/',rutas)  
    }

    llamarAuxiliares(){
        this.app.use(express.json())
    }

    conectarconBD(){
        conectar()
        
    }
}
