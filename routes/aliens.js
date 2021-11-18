const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

//return all the user
router.get('/', async(req, res) => {
        try {
            const aliens = await Alien.find()
            res.json(aliens)
        } catch (err) {
            res.send('Error: ' + err)
        }
    })
    //Get the user by the id
router.get('/:id', async(req, res) => {
        try {
            //params because we are getting the id by the url not by the response body
            const alien_by_id = await Alien.findById(req.params.id)
            res.json(alien_by_id)
        } catch (err) {
            res.send('Error: ' + err)
        }
    })
    //Create new user
router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        su: req.body.sub
    })

    try {
        const new_alien = await alien.save()
        res.json(new_alien)
    } catch (err) {
        res.send('Error:' + err)
    }
})

//Changing the user information
router.patch('/:id', async(req, res) => {
    try {
        const alien_in_context = await Alien.findById(req.params.id)
        alien_in_context.sub = req.body.sub
        const a1 = await alien_in_context.save()
        res.json(a1)
    } catch (err) {
        res.send('Error:' + err)
    }
})

//Deleting the user
router.delete('/:id', async(req, res) => {
    try {
        const alien_in_context = await Alien.findById(req.params.id)
        alien_in_context.sub = req.body.sub
            // .remove() was important here
        const a1 = await alien_in_context.remove()
        const all_aliens = await Alien.find()
            //returing all the aliens now
        res.json(all_aliens)
    } catch (err) {
        res.send('Error:' + err)
    }
})
module.exports = router