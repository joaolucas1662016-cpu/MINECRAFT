const router = require('express').Router();
const auth = require('../middleware/auth');
const pool = require('../db/database');

router.post('/analyze', auth, async (req, res) => {
  const { items } = req.body;

  const suggestion = `Analise: você pode otimizar seu inventário (${items})`;

  res.json({ suggestion });
});

module.exports = router;