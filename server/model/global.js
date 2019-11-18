//const mongoose=require('mongoose');
//const  Schema=mongoose.Schema; //OBTENER ESCHEMA
import  mongoose,{Schema} from 'mongoose';
// const TaskSchema=new Schema({
//     apodo:{type:String,required:true},
//     msj:{type:String,required:true}
// });

const TaskSchema=new Schema({
    apodo:{type:String,required:true},
    msj:{type:String,required:true},
    hora:{type:String,required:true}
});

/*
MONGOOSE  SIEMPRE POR DEFECTO ACEPTA COLECCIONES PLURALES  
    ADD {COLLECTION:"USER"}
const TaskSchema=new Schema({
    apodo:{type:String,required:true},
    msj:{type:String,required:true}
},{collection:"chat"});

*/
/*CREAR  SCHEMA*/
/*EXPORTAR MODELO*/ 

// const  {Schema}=mongoose;
// const  TaskSchema=new Schema({
//     title:{type:String,required:true},
//     description:{type:String,required:true}
// });
// PRODUCTOS ES LA COLLECTION Y TASKSCHEMA ES LA FORMA  O ESTRUCTURA QUE TIENE TU COLLECTION 
export default mongoose.model("chats",TaskSchema);
