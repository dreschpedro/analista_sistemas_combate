import mongoose from "mongoose";

const ConectarDB = async () => {
   try {
      const conection = await mongoose.connect(process.env.CONEXION,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true
         });

      const url = `${conection.connection.host}: ${conection.connection.port}`;
      console.log(url);
   } catch (error) {
      console.log(`error: ${error.message}`);
      process.exit(1);
   }
}; 

export default ConectarDB;