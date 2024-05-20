import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-z9ztw5n-shard-00-00.pl9ivnh.mongodb.net:27017,ac-z9ztw5n-shard-00-01.pl9ivnh.mongodb.net:27017,ac-z9ztw5n-shard-00-02.pl9ivnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-v1ezes-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-todo`;
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database");
  });
};

export default Connection;
