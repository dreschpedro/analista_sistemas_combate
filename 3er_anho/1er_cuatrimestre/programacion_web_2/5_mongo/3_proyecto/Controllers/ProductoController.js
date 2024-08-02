// Consulta por GET
const productoConsulta = (req, res) => {
   res.send(`Estas SOLICITANDO info de un producto por GET`);
};

// Consulta por POST
const productoIngreso = (req, res) => {
   res.send(`Estas ENVIANDO info de un producto por POST`);
};

// Consulta por PUT
const productoUpdate = (req, res) => {
   res.send(`Estas ACTUALIZANDO info de un producto por PUT`);
};

// Export
export {
   productoConsulta,
   productoIngreso,
   productoUpdate
};