import AppError from '../error/AppError.js';

const roles = (roleArr) => async (req, res, next) => {
  if (!roleArr.includes(req.user.role)) {
    throw new AppError('Not allowed', 403);
  }
  next();
};

export default roles;
