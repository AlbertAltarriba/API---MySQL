const router = require('express').Router();
const{ getAll, create, getPostById, getPostsByAutor } = require('../../models/post.model');

router.get('/', async (req, res) => {

    try {
        const posts = await getAll();
        res.json(posts);
    } 
    catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {

    try {
        const result = await create (req.body);
        const post = await getPostById (result.insertId)
        res.json(post)
        
    } 
    catch (error) {
        res.json({ fatal: error.message})    
    }
})

router.get('/autor/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const posts = await getPostsByAutor(id);
        res.json(posts);
    } 
    catch (error) {
        res.json({ fatal: error.message });
    }
});


module.exports = router;