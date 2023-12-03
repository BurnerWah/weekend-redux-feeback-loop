const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

router.post('/', async (req, res) => {
  /** @type {FeedbackReq} */
  const feedback = req.body
  try {
    await pool.query({
      text: /*sql*/ `
        INSERT INTO "feedback" (
          "feeling",
          "understanding",
          "support",
          "comments"
        ) VALUES ($1, $2, $3, $4);
      `,
      values: [
        feedback.feeling,
        feedback.understanding,
        feedback.supported,
        feedback.comments,
      ],
    })
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
  console.log('testing')
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router
