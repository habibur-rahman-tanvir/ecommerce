import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Database connected');
  } catch (err) {
    console.error('Database error: ', err);
  }
};

export default connectDatabase;
