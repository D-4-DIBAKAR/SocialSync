import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      //  useNewUrlParser: true,
      //  useUnifiedTopology: true,
    });
    console.log("MongoDB database connection established successfully");
  } catch (error) {
    console.log("Error in Connecting to Database " + error);
  }
};

export default dbConnection;
