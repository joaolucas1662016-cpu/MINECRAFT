const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/plan', auth, async (req, res) => {
  const { type } = req.body;

  res.json({
    farm: `Farm de ${type} planejada`,
    efficiency: 'Alta'
  });
});

module.exports = router;