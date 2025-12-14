import AppError from './AppError.js';

class ValidationError extends AppError {
  constructor(mongooseError) {
    super('Validation failed', 400);
    const errors = Object.values(mongooseError.errors).map((value) => ({
      message: value.message,
      field: value.path,
      value: value.value,
    }));
    this.errors = errors;
  }
}

export default ValidationError;
