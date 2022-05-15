const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

router.get('/correo/:correo', (req, res) => {
    const { correo } = req.params;

    // verificar disponibilidad de correo
    let q = `SELECT * FROM TB_USER WHERE CORREO='${correo}'`
  
    mysqlConnection.query( q, (err, rows, fields) => {
      if(!err){
          console.log(rows)
          if( rows.length > 0 ){
            res.json({status: "invalid"})
          }
          else{
            res.json({status: "valid"})
          }
  
      }
    })
  
  });
  
  



module.exports = router;