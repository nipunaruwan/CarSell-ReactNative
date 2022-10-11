const express = require('express')
const app = express()
const router = express.Router()
app.use(express.json());

const User = require('../models/User_models')

router.get('/', (req, res) => {
    res.send('user get');
});

router.post('/', async (req, res) => {
    //res.send('user post method');
    const user = new User({
        name: req.body.name,
        Address: req.body.Address,
        Contact: req.body.Contact,
        Email: req.body.Email,
        password: req.body.password
    });
console.log(user.name);
    try{
        const response = user.save();
        res.json(response);
        // res.send(response);
    }catch (err) {
        res.send('Err: ' + err);
    }
});

router.delete('/', (req, res) => {
    res.send(req.query.id);
});

module.exports = router