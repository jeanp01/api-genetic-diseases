//1 importar express
const express = require("express");

// 2 constante que tendra todas las funcionalidades express
const app = express();

app.use(express.json()); // permitir poder obtener el body en formato json
app.use(express.urlencoded({ extended: true })); // permitir poder obtener el body en formato url-encoded

//definicion de funciones
const findAll = (req, res) => {
  return res.status(200).json({
    message: "method get - findAll",
  });
};

const createDiseases = (req, res) => {
  const disease = req.body;
  return res.status(201).json({
    message: "method post - create",
    data: disease,
  });
};

const searchDisease = (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    message: "method get - findOne",
    id: req.params.id,
  });
};

const updateDisease = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: "method patch - update",
    id,
  });
};

const deleteDisease = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    message: "method delete - delete",
    id,
  });
};

//3 definir el endpoint
//endpoint para buscar todas las enfermedades geneticas
app.get("/api/v1/genetic-diseases", findAll);
//endpoint para crear una enfermedad genetica
app.post("/api/v1/genetic-diseases", createDiseases);
//endpoint para buscar UNA enfermedad genetica
app.get("/api/v1/genetic-diseases/:id", searchDisease);
//enpoint para actualizar UNA enfermedad genetica
app.patch("/api/v1/genetic-diseases/:id", updateDisease);
//enpoint para eliminar UNA enfermedad genetica
app.delete("/api/v1/genetic-diseases/:id", deleteDisease);

//4 escuchar el servidor en un puerto
app.listen(3100, () => {
  console.log("servidor corriendo en el puerto: " + 3100);
});

//servidor local > direccion ip de loopback
//127.0.0.1 > localhost
//localhost: 3100
