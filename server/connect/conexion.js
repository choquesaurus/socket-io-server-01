import mongoose from 'mongoose';
import {cadena} from '../configuration/config';
//const cadena="mongodb+srv://gouser2:1234@cluster0-bzauq.mongodb.net/ChatExample01?retryWrites=true&w=majority&authSource=admin";
mongoose.connect(cadena,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
.then(bd=>{
    console.log('db is connected');
})
.catch(err=>{
    console.log('error  ubicado : '+err);
});
export default mongoose;