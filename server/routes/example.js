// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "wesleycoleman",
//     password:"" ,
//     database: "shoutout",
//     host: "localhost",
//     port: 5432
// });


const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const router = require('express').Router();

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
//route for specific cohort messages
router.get('/messages/:cohort', async (req, res) => {
    try {
        const { cohort_id } = req.body
        const getMessagesFromCohort = await pool.query("SELECT * FROM messages WHERE cohort_id = ($1)", [cohort_id])
    } catch (err) {
        console.error(err.message)
    }
})
//route for specific event
router.get('/messages/:event', async (req, res) => {
    try {
        const { event_id } = req.body
    const getMessagesByEvent = await pool.query("SELECT * FROM messages WHERE event_id = ($1)", [event_id])
    } catch (err) {
        console.error(err.message)
    }
    
})



//route to update message status (pending/accepted)
router.put('/messages', async (req, res) => {
    try {
        const { status, msg_id } = req.body
        const changeStatus = ("UPDATE messages SET (status = ($1) WHERE msg_id = ($2)", [status, msg_id])
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

//adding the user data to the users table
router.post('/users' , async(req, res) =>{
    try {
        const { gmail, firstname, lastname } = req.body;
        const newUser = await pool.query("INSERT INTO users(gmail, firstname, lastname) VALUES ($1, $2,$3)",[gmail,firstname, lastname])
    } catch (err) {
        console.error(err.message)
    }
})

//cohort routes
router.post('cohort', async(req, res) => {
    try {
        const {start_date, cohort_name, end_date} = req.body
        const newCohort = await pool.query("INSERT INTO cohort(start_date, cohort_name, end_date) VALUES ($1, $2, $3)", [start_date, cohort_name, end_date])
    } catch (err) {
        console.error(err.message)
    }
})

router.get('cohort', async(req, res) => {
    try {
        const newCohort = await pool.query("SELECT * FROM cohort")
    } catch (err) {
        console.error(err.message)
    }
})

router.delete('cohort', async(req, res) => {
    try {
        const { cohort_name } = req.body
        const deleteCohort = await pool.query('DELETE FROM cohort WHERE cohort_name = ($1)", [cohort_name]')
        res.json('Cohort deleted')
    } catch (err) {
        console.error(err.message)
    }
})

// routes for likes

router.post('/likes', async (req, res) => {
    try {
        const { likes_total } = req.body
        const newLike = await pool.query("INSERT INTO likes(likes_total) VALUES ($1)", [likes_total])
    } catch (err) {
        console.error(err.message)
    }
})

router.put('/likes', async (req, res) => {
    try {
        const { likes_total, msg_id } =  req.body
        const addLike = await pool.query("UPDATE likes SET likes_total = ($1) WHERE msg_id = ($2)", [likes_total, msg_id])
    } catch (err) {
        console.error(err.message)
    }
})

  

module.exports = router;