const router = require('express').Router();
const Log = require('../db').import('../models/log');
const validateSession = require('../middleware/validate-session');



//GET ALL LOGS
router.get('/log/', (req, res) => {

    Log.findAll({ 
      
        where: { 
            owner: req.user.id
         }})

        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
        }))
    
})

// CREATE LOG
router.post('/log/create', validateSession, (req, res) => {

    const logFromRequest = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner: req.user.id


    }

    Log.create(logFromRequest)
        .then(log => res.status(200).json(log))
        .catch(err => res.json(req.errors))

})


// TO UPDATE, FIND ONE LOG BY NAME
router.get('/log/:id', (req, res) => {
  Log.findOne({ 
      
    where: { 
        id: req.params.id
     }})

    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({
        error: err
    }))

})

// UPDATE LOG INFO

router.put('/log/update/:id', (req, res) => {

  Log.update(req.body.log, { 
      where: { 
          id: req.params.id }})

    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})

//DELETE LOG


router.delete('/log/delete/:id', (req, res) => {

    Log.destroy({


    where: {
        id: req.params.id } } )

        .then(log => res.status(200).json(log))
        .catch(err => res.json({
            error: err
        }))
    
    })




module.exports = router;

