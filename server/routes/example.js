const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({data:'Admin'})
})

module.exports = router;