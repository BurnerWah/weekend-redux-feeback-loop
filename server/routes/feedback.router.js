const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {})

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
