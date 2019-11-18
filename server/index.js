import  express from 'express';
import  http from 'http';
import  SocketIO from 'socket.io';
import  cors from 'cors';
import  morgan from 'morgan';
import conexion from './connect/conexion';
import GlobalModel from './model/global';
import  routes from './routes/routes';
import '@babel/polyfill';
class Aplicacion{
    constructor(){
        this.app=express();
        this.config();
        this.http=http.createServer(this.app);
        this.socket=SocketIO(this.http);
        this.RunningSocket();
        this.routes();
    }
    routes(){
        //desabilita la cache
        this.app.disable('etag');
        this.app.use("/",routes);
    }
    config(){
        //this.app.set('PORT',6549||process.env.PORT);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }
    RunningSocket(){
        this.socket.on('connection',(socket)=>{
            // console.log("User conected id : "+socket.id);   
            //socket.emit('gretting',{message:'Hello friend'});
            socket.on('messageGlobal',async (data)=>{
               // const {apodo,msj}=data;
                //const longitud=await GlobalModel.find();
                const newmeesageglobal=await new GlobalModel(data);
                //const newmeesageglobal=await new GlobalModel({apodo,msj});
                await newmeesageglobal.save();

                socket.broadcast.emit('messageBroadcast',{status:"Running"});

                //  console.log(data,newmeesageglobal);
            });
        });
    }
    start(){
        this.http.listen(process.env.PORT || 5000,()=>{
           console.log('server is running'); 
        });
    }
}
new Aplicacion().start();