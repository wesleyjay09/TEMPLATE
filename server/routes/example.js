//const { PayloadTooLarge } = require('http-errors');

const Pool = require("pg").Pool;
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
        console.error(err.message)
    }
})
//route to post staff messages
router.post('/messages', async (req, res) => {
    try {
        const { message } = req.body;
        const newMessage = await pool.query("INSERT INTO messages(message) VALUES ($1)"  , [message]);
        res.json(newMessage)
    } catch (err) {
        console.error(err.message)
    }
})
//route to delete staff messages
router.delete('/messages/:id' , async(req, res) => {
    try {
        const { msg_id } = req.params;
        const deleteMessage = await pool.query("DELETE FROM messages WHERE msg_id = ($1)", [msg_id])
        res.json('message deleted')
    } catch (err) {
        console.error(err.message)
    }
})

//route to get all student messages
//route to post student messages
//route to delete student messages

//route to post like messages
// router.post('/', async(req, res) => {
//     try {
//         const {} = req.body
//     const newLike = await pool.query("INSERT INTO () VALUES ()", [])
//     res.json(newlike)
//     } catch (err) {
//         console.error(err.message)
//     }
// })





module.exports = router;