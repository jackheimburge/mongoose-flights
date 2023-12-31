const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


//all routes start with '/'

//GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

//POST /flights/:id/tickets (addToFli)
router.post('/flights/:id/tickets', ticketsCtrl.create);

//DELETE /tickets/:id
router.delete('/tickets/:id', ticketsCtrl.delete)


module.exports = router;