/* eslint-disable no-unused-vars */
import ValidationError from '../error/ValidationError.js';
import DuplicatError from '../error/DuplicatError.js';
import CastError from '../error/CastError.js';

const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    err = new ValidationError(err);
  }

  if (err.name === 'CastError') {
    err = new CastError(err);
  }

  if (err.code === 11000) {
    err = new DuplicatError(err);
  }

  // Response section
  if (err.debug) {
    console.error(err);
  }

  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message,
      errors: err.errors,
      stack: err.stack,
      err,
    });
  }

  return res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.isOperational ? err.message : 'Something wrong!',
    errors: err.errors,
  });
};

export default errorHandler;
