import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email required'],
    },
    password: {
      type: String,
      required: [true, 'Password required'],
      minLength: [8, 'Password length must be gratter then or equals 8 letter'],
      maxLength: [8, 'Password length must be less then or equals 32 letter'],
    },
  },
  {
    discriminatorKey: 'kind',
    versionKey: false,
    timestamps: true,
  },
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
