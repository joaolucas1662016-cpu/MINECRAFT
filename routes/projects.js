const router = require('express').Router();
const auth = require('../middleware/auth');
const pool = require('../db/database');

router.get('/', auth, async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM projects WHERE user_id = $1',
    [req.user.id]
  );

  res.json(result.rows);
});

router.post('/', auth, async (req, res) => {
  const { name, type, data } = req.body;

  const result = await pool.query(
    `INSERT INTO projects (user_id, name, type, data)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [req.user.id, name, type, data]
  );

  res.json(result.rows[0]);
});

module.exports = router;