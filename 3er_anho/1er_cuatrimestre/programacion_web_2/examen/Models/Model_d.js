import mongoose from "mongoose";

const depaSchema = mongoose.Schema({
   codigo: {
      type: String,
      required: true,
      trim: true
   },
   localidad: {
      type: String,
      required: true,
      trim: true
   },
   propiedad: {
      type: String,
      required: true,
      trim: true
   },
   direccion: {
      type: String,
      required: true,
      trim: true
   },
   descripcion: {
      type: String,
      required: true,
      trim: true
   },
   precio: {
      type: String,
      required: true,
      trim: true
   },
},

   {
      timeStamp: true
   }
);

const Depa_model = mongoose.model('Depa', depaSchema);

export default Depa_model;
