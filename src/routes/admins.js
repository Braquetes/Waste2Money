const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

//  GET all Admins
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM TB_ADMIN', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

//  GET An Admin
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM TB_ADMIN WHERE ID_ADMIN = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

//  DELETE An Admin 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM TB_ADMIN WHERE ID_ADMIN = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Admin Deleted'});
    } else {
      console.log(err);
    }
  });
});

//  INSERT An Admin
router.post('/', (req, res) => {
  const {id, nombre, telefono, id_usuario} = req.body;
  // id must be 0 to create new row
  const query = `
    SET @ID_ADMIN = ?;
    SET @NOMBRE = ?;
    SET @TELEFONO = ?;
    SET @ID_USUARIO = ?;
    CALL adminAddOrEdit(@ID_ADMIN, @NOMBRE, @TELEFONO, @ID_USUARIO);
  `;

  mysqlConnection.query(query, [id, nombre, telefono, id_usuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'New Admin Saved'});
    } else {
      console.log(err);
    }
  });
});

//  Update Admin
router.put('/:id', (req, res) => {
  const {  nombre, telefono, id_usuario } = req.body;
  const { id } = req.params;
  const query = `
    SET @ID_ADMIN = ?;
    SET @NOMBRE = ?;
    SET @TELEFONO = ?;
    SET @ID_USUARIO = ?;
    CALL adminAddOrEdit(@ID_ADMIN, @NOMBRE, @TELEFONO, @ID_USUARIO);
  `;
  mysqlConnection.query(query, [id, nombre, telefono, id_usuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Admin Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;