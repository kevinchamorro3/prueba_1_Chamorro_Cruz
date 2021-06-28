const express = require("express");
//genera una aplicacion express
const app = express();
//routas 
const {RouterIndex}=require('./routes/index')
app.use('/prueba1',RouterIndex)
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
