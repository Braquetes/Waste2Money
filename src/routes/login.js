const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

router.get('/', (req, res) => {
    res.end("hello from /login")
  });

router.post("/", (req,res) => {

    let correo =  req.body.correo
    let contraseña = req.body.contraseña 

    query = `SELECT * FROM TB_USER WHERE CORREO = '${correo}' AND CONTRASEÑA = '${contraseña}'`
   
    mysqlConnection.query(query, (err, rows, fields) => {
              if (!err) {
                  if( rows.length == 0)
                    res.json({status: "user not found"})

                res.json(rows[0]);
              } else {
                console.log(err);
                res.json({status: "query error"})
              }
    });
})

  module.exports = router;