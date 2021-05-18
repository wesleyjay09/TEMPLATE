const { PayloadTooLarge } = require('http-errors');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({data:'Admin'})
})

//wes
//route to get all staff messages
router.get('/messages', async (req, res) => {
    try {
        const getMessages = await pool.query("SELECT * FROM messages")
        res.json(getMessages.rows)
    } catch (err) {
        console.error(err)
    }
})
//route to post staff messages
//route to delete staff messages

//route to get all student messages
//route to post student messages
//route to delete student messages

//route to post like messages





module.exports = router;