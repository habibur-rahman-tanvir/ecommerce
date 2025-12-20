import AppError from './AppError.js';

class CastError extends AppError {
  constructor(mongooseError) {
    const message = `Invalid ${mongooseError.path}: ${mongooseError.value}`;
    super(message, 400);
    const err = [
      {
        name: mongooseError.name,
        path: mongooseError.path,
        value: mongooseError.value,
      },
    ];
    this.errors = err;
  }
}

export default CastError;
