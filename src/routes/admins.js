const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Admins
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM TB_ADMIN', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

//GET An Admin
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

// // // INSERT An User
// router.post('/', (req, res) => {
//   const {id, usuario, password, correo} = req.body;
//   // id must be 0 to create new row
//   const query = `
//     SET @ID_USUARIO = ?;
//     SET @USUARIO = ?;
//     SET @CONTRASEÑA = ?;
//     SET @CORREO = ?;
//     CALL userAddOrEdit(@ID_USUARIO, @USUARIO, @CONTRASEÑA, @CORREO);
//   `;
//   mysqlConnection.query(query, [id, usuario, password, correo], (err, rows, fields) => {
//     if(!err) {
//       res.json({status: 'User Saved'});
//     } else {
//       console.log(err);
//     }
//   });
// });

// // //  Update User
// router.put('/:id', (req, res) => {
//   const { usuario, password, correo } = req.body;
//   const { id } = req.params;
//   const query = `
//     SET @ID_USUARIO = ?;
//     SET @USUARIO = ?;
//     SET @CONTRASEÑA = ?;
//     SET @CORREO= ?;
//     CALL userAddOrEdit(@ID_USUARIO, @USUARIO, @CONTRASEÑA, @CORREO);
//   `;
//   mysqlConnection.query(query, [id, usuario, password, correo], (err, rows, fields) => {
//     if(!err) {
//       res.json({status: 'User Updated'});
//     } else {
//       console.log(err);
//     }
//   });
// });

module.exports = router;