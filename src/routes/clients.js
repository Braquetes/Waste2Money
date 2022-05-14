const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


// GET all Clientes
router.get('/', (req, res) => {
    var sqlcommand = 'SELECT * FROM TB_CLIENTE';
    mysqlConnection.query(sqlcommand, (err, rows, fields) => {
      if(err) throw err;
      else {
        res.json(rows);
      }
    });
});
  
//GET ONE CLIENTE
router.get('/:id', (req, res) => {
var {id} = req.params.id;
var sqlcommand = 'SELECT * FROM TB_CLIENTE WHERE ID_CLIENTE = ?';
mysqlConnection.query(sqlcommand,[id], (err, rows, fields) => {
    if(err) throw err;
    else {
    res.json(rows);
    }
});
});

// //POST CLIENTE
// router.post('/', (req, res) =>{
// const {nombre,telefono,direccion} = req.body
// var sqlcommand = INSERT INTO TB_CLIENTE(NOMBRE,TELEFONO,DIRECCION) VALUES '${nombre}', '${telefono}', '${direccion}';
// mysqlConnection.query(sqlcommand, (err, rows, fields) => {
//     if(err) throw err;
//     else {
//     sqlcommand = INSERT INTO TB_SCORE VALUES 0;
//     mysqlConnection.query(sqlcommand,(err,rows,fields)=>{
//         if(err) throw err;
//         else{
//         res.json({status: 'Cliente Insertado'});
//         }
//     })
//     }
// });
// });

// //UPDATE CLIENTE
// router.put('/:id', (req,res) =>{
// const {id} = req.params.id

// const {nombre,telefono,direccion} = req.body
// var sqlcommand = UPDATE TB_CLIENTE SET NOMBRE = '${nombre}', TELEFONO = '${telefono}', DIRECCION = '${direccion}' WHERE ID_CLIENTE = ${id} ;
// mysqlConnection.query(sqlcommand, (err, rows, fields) => {
//     if(err) throw err;
//     else {
//     res.json({status: 'Cliente Modificado'});
//     }
// });
// });

// //DELETE CLIENTE
// router.delete('/:id',(req,res) =>{
// const {id} = req.params.id

// var sqlcommand = DELETE FROM TB_CLIENTE WHERE ID_CLIENTE = '${id}'
// mysqlConnection.query(sqlcommand, (err, rows, fields) => {
//     if(err) throw err;
//     else {
//     res.json({status: 'Cliente Agregado'});
//     }
// });

// });

  module.exports = router;