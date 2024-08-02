const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log(`Server corriendo en 3030`);
});

app.get('/', (req, res) => {
    res.send('Pagina de inicio');
});

app.use(express.json());

const users = [
    { id: 1, nombre: "Gabriela", sexo: "f" },
    { id: 2, nombre: "Soledad", sexo: "f" },
    { id: 3, nombre: "Sergio", sexo: "m" }
];

app.post('/api/datos/', (req, res) => {
    let nombre = req.body.nombre;
    let sexo = req.body.sexo;
    res.send(`los datos recibidos por post son nombre: ${nombre} y sexo: ${sexo}`);
});

app.post('/api/users', (req, res) => {
    if (req.body.nombre === '' || req.body.sexo === '') {
        res.status(404).send('debe ingresar los datos correctamente');
    } else {
        const user = {
            id: users.length + 1,
            nombre: req.body.nombre,
            sexo: req.body.sexo
        };

        users.push(user);
        console.log(users);
    }
});


app.put('/api/users/:id', (req, res) => {
    const userFound = users.find(user => user.id === parseInt(req.params.id));

    if (!userFound) res.status(404).send('Usuario no encontrado');


    if (req.body.nombre === '' || req.body.sexo === '') {
        res.status(404).send('debe ingresar los datos correctamente');
    } else {
        const userUpdate = userFound;
        userUpdate.nombre = req.body.nombre,
            userUpdate.sexo = req.body.sexo;
    }


    console.log(users);
});

app.delete('/api/users/:id', (req, res) => {
    const userFound = users.find(user => user.id === parseInt(req.params.id));
    if (!userFound) res.status(404).send('Usuario no encontrado');
    users.splice(userFound.id - 1, 1);
    console.log(users);
});