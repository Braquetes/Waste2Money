//GET ALL SCORE
router.get('/Score', (req, res) => {
    var sqlcommand = 'SELECT * FROM TB_SCORE';
    mysqlConnection.query(sqlcommand, (err, rows, fields) => {
      if(err) throw err;
      else {
        res.json(rows);
      }
    });
  });
  
  //GET ONE SCORE
  
  router.get('/Score/:id', (req, res) => {
  
    const {id} = req.params.id
  
    var sqlcommand = 'SELECT * FROM TB_SCORE WHERE ID_SCORE = ?';
    mysqlConnection.query(sqlcommand,[id], (err, rows, fields) => {
      if(err) throw err;
      else {
        res.json(rows);
      }
    });
  });
  
  //PUT SCORE
  
  router.put('/Score/:id', (req,res) => {
  
    const {id} = req.params.id
  
    let {puntuacion} = req.body
  
    var sqlcommand = UPDATE TB_CLIENTE SET PUNTUACION  = '${puntuacion}' WHERE ID_CLIENTE = ${id} ;
  
    mysqlConnection.query(sqlcommand, (err, rows, fields) => {
      if(err) throw err;
      else {
        res.json({status: 'Score Actualizado'});
      }
    }); 
  })
  
  //DELETE SCORE
  router.delete('/Score/:id',(req,res) =>{
    const {id} = req.params.id
  
    var sqlcommand = DELETE FROM TB_SCORE WHERE ID_SCORE = '${id}'
    mysqlConnection.query(sqlcommand, (err, rows, fields) => {
      if(err) throw err;
      else {
        res.json({status: 'SCORE Eliminado'});
      }
    });
  
  });