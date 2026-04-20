const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/chat', auth, async (req, res) => {
  const { message } = req.body;

  // Placeholder para OpenAI
  const reply = `IA Minecraft: ${message}`;

  res.json({ reply });
});

module.exports = router;