const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Mnbvcdfghj01",
    database: "shoutout",
    host: "localhost",
    port: 5432
});




const router = require('express').Router();

const messages = ['message one','this is a cool site', 'these messages can only be seen by admin']

router.get('/', (req, res) => {
    res.json({data:'Admin'})
})
//wes
//route to get all staff messages
router.get('/messages/:role', async (req, res) => {
    try {
        const role = req.query.role;
        const getMessages = await pool.query("SELECT * FROM messages")
        res.json(getMessages.rows)
    } catch (err) {
        console.error(err.message)
    }
})
//route to post staff messages
router.post('/messages', async (req, res) => {
    try {
        const { message,role} = req.body;
        console.log(message)
        console.log(role)
        const newMessage = await pool.query("INSERT INTO messages(message,role,status,likes) VALUES ($1,$2,$3,$4)"  ,[message,role,true,0]);
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