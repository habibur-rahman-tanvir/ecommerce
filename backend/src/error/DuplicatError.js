import AppError from './AppError.js';

class DuplicatError extends AppError {
  constructor(mongooseError) {
    super('Already exists', 409);
    const errors = Object.entries(mongooseError.keyValue).map(
      ([field, value]) => ({
        message: `${field} already exist`,
        field,
        value,
      }),
    );
    this.errors = errors;
  }
}

export default DuplicatError;
