/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message,
      errors: err.errors,
      stack: err.stack,
      error: err,
    });
  }

  return res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.isOperational ? err.message : 'Something wrong!',
    errors: err.errors,
  });
};

export default errorHandler;
