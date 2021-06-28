//traeos el paquete
const { Router } = require("express");
//iniciazamos router
const router = Router();
//trtaer data
const {FetchData}=require('../lib/data')
//creacion  de los entpoint
router
    .get("/:id", (req, res) => {
        const {
            params: { id },
        } = req;
    
        var personaje= async function idPer(id){
            let v;
            v = await FetchData.getCharacter(id);
            return v;
          }
          console.log(personaje(id));
        res.json({
            msg:"El personaje buscado es",
            body: (async ()=>{
                personaje(id)
            })()
        });
    })
    .get("/users", (req, res) => {
        res.json({
            msg:"Lista de usuairios",
            body:data
        });
    })
    .get("/saludo", (req, res) => {
        const {
            query: { nombre, apellido },
        } = req;
        res.json({
            saludo: "mundo",
            nombre: nombre,
            apellido: apellido,
        });
    })
    .get("/saludo/:nombre", (req, res) => {
        const {
            params: { nombre },
        } = req;
        res.json({
            saludo: "mundo",
            nombre: nombre,
        });
    })
//Exportamos rutas
module.exports.RouterIndex = router;