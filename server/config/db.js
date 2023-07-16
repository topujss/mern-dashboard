import { connect } from 'mongoose';

// mongodb connection
export const mongodbConnect = async () => {
  try {
    const dbCon = await connect(process.env.MONGO_URL);
    console.log(`MongoDb connected!`.bgGreen);
  } catch (error) {
    console.log(error.message);
  }
};
