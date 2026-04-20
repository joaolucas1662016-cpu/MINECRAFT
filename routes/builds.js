const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/generate', auth, async (req, res) => {
  const { type } = req.body;

  res.json({
    build: `Blueprint gerado para ${type}`,
    difficulty: 'Médio'
  });
});

module.exports = router;