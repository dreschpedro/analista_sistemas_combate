import mongoose from "mongoose";
const libroSchema= mongoose.Schema({
    nombre:{
        type:String,required:true,trim:true
    },
    autor:{
        type:String,required:true,trim:true
    },
  },
{
    timestamps:true
}
);
const Libro = mongoose.model('Libro', libroSchema);
export default Libro;