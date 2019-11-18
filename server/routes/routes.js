
import {Router} from 'express';
const  rutas=Router();
//const Task=require('../model/global');
import  Task from '../model/global';
rutas.get("/",(req,res,next)=>{
  res.send({message:"Status correcto"});
});
rutas.get("/viewmessages",async (req,resp,next)=>{
   let data=await Task.find();
  await  resp.json(data);
  
});
// rutas.post("/guardar",async(req,res,next)=>{
//     const {apodo,msj}=req.body;
//     const newchat=await new Task(req.body);
//     newchat.save(); 
//     res.json({message:"Se agrego correctamente"});

// });
 module.exports=rutas;