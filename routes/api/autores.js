const router = require('express').Router();
const{ getAll, create, getAutorById } = require('../../models/autor.model');

router.get('/', async (req, res) => {

    try {
        const autores = await getAll();
        res.json(autores);
    } 
    catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {

    try {
        const result = await create (req.body);
        console.log(result)
        const autor = await getAutorById (result.insertId)
        res.json(autor)
        
    } 
    catch (error) {
        res.json({ fatal: error.message})    
    }
})





module.exports = router;
