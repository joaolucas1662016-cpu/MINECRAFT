module.exports = function (requiredFields = []) {
  return (req, res, next) => {
    const missing = [];

    requiredFields.forEach(field => {
      if (!req.body[field]) {
        missing.push(field);
      }
    });

    if (missing.length > 0) {
      return res.status(400).json({
        error: 'Campos obrigatórios faltando',
        fields: missing
      });
    }

    next();
  };
};