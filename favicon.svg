module.exports = function (err, req, res, next) {
  console.error('Erro:', err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor'
  });
};