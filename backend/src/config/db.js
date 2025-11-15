import mongoose from "mongoose";

const connectDB = async () => {
  if (process.env.NODE_ENV === "test") {
    console.log("Skipping DB connection in test mode");
    return;
  }

  await mongoose.connect(
    "mongodb+srv://siddharthareddy0227_db_user:zCRta0SHxnU8RGm1@cluster0.fseisep.mongodb.net/?appName=Cluster0"
  );
  console.log("MongoDB Connected");
};

export default connectDB;
