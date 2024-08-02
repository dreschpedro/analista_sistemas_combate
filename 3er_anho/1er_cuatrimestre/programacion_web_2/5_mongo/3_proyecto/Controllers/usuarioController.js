// imports
import Usuario from "../Models/Usuario_model.js";

// trae todos los registos
const listarUsuarios = async (req, res) => {
   const usuarios = await Usuario.find();
   res.json(usuarios);
};

// trae un usuario por ID / buascar
const obtenerUsuario = async (req, res) => {
   const id_usuario = req.params.id;
   const usuario = await Usuario.findById(id_usuario);
   res.json(usuario);
};

// registrar usuario
const registrarUsuario = async (req, res) => {

   try {
      const usuario = new Usuario(req.body); // registro usuario
      const usuarioAlmacenado = await usuario.save();
      res.json(usuarioAlmacenado);
   } catch (error) {
      console.log(error);
      const mensaje_error = 'Ocurrió un error al registrar el usuario';
      res.status(500).json({ error: + mensaje_error });
   }
};

// modifica registro
const modificarUsuario = async (req, res) => {
   const id_usuario = req.params.id;
   const usuario = await Usuario.findById(id_usuario);

   if (!usuario) res.send('El usuario no existe');

   usuario.nombre = req.body.nombre;
   usuario.apellido = req.body.apellido;

   res.json(usuario);
};

// Consulta por PUT
const eliminarUsuario = async (req, res) => {
   const id_usuario = req.params.id;

   const usuario = await Usuario.findById(id_usuario);

   usuario.deleteOne();
   res.send('Usuario Eliminado');
};

// Export
export {
   listarUsuarios,
   obtenerUsuario,
   registrarUsuario,
   modificarUsuario,
   eliminarUsuario
};