// imports
import Depa_model from "../Models/Model_d.js";

// trae todos los registos
const listarDepas = async (req, res) => {
   const depas = await Depa_model.find();
   res.json(depas);
};

const obtenerDepa = async (req, res) => {
   const id_Depa = req.params.id;
   const depa = await Depa_model.findById(id_Depa);
   res.json(depa);
};

// registrar depa
const registrar_depa = async (req, res) => {

   try {
      const departamento = new Depa(req.body); // registro Depa
      const DepaAlmacenado = await departamento.save();
      res.json(DepaAlmacenado);

   } catch (error) {
      console.log(error);

      const mensaje_error = 'Ocurrió un error al registrar el Depa';
      res.status(500).json({ error: + mensaje_error });
   }

};

// modifica registro
const modificarDepa = async (req, res) => {
   const id_Depa = req.params.id;
   const depa = await Depa_model.findById(id_Depa);

   if (!depa) res.send('El Depa no existe');

   depa.codigo = req.body.codigo;
   depa.localidad = req.body.localidad;
   depa.propiedad = req.body.propiedad;
   depa.direccion = req.body.direccion;
   depa.descripcion = req.body.descripcion;
   depa.precio = req.body.precio;

   const DepaAlmacenado = await depa.save(); // Guardar los cambios en la base de datos
   res.json(DepaAlmacenado);


   // codigo profe
   // const depa = await Depa_model.findById(req.params.id)

   // if (!depa) res.send("el depa no se encuentra")
   // depa.codigo = req.body.codigo;
   // depa.localidad = req.body.localidad;
   // depa.propiedad = req.body.propiedad;
   // depa.direccion = req.body.direccion;
   // depa.descripcion = req.body.descripcion;
   // depa.precio = req.body.precio

   // try {
   //    const depaAlmacenado = await depa.save();
   //    res.json(depaAlmacenado)
   // } catch (error) {
   //    console.log(error)
   // }
   // res.json(depa)
};

// Consulta por PUT
const eliminarDepa = async (req, res) => {
   const id_Depa = req.params.id;

   const depa = await Depa_model.findById(id_Depa);

   depa.deleteOne();
   res.send('Depa Eliminado');
};

// Export
export {
   listarDepas,
   obtenerDepa,
   registrar_depa,
   modificarDepa,
   eliminarDepa
};


   