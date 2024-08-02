const consultaUsuario = (req, res) => {
   res.send('Estoy en api usuario GET');
};

const ingresoUsuario = (req, res) => {
   res.send('Estoy en api usuario POST');
};

const modificacionUsuario = (req, res) => {
   res.send('Estoy en api usuario PUT');
};

export {
   consultaUsuario,
   ingresoUsuario,
   modificacionUsuario
};