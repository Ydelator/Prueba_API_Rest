import  express  from "express";
import indexRoutes from './routes/index.routes.js'
import usuariosRoutes from "./routes/usuarios.rutas.js";

const app = express()
//const port = 5000
app.use(express.json())
app.use('/api',usuariosRoutes)
app.use(indexRoutes)

/*app.get('/', (req, res) => {
    res.send('Welcome')
})*/

app.use((req,res)=>{
    res.status(404).json({
        message:'Endpoint no encontrado'
    })
})

export default app