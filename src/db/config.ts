import mongoose from "mongoose";
function DatabaseConnection() {
  mongoose.connect(process.env.DATABASE_URL as string).then(() => {
    console.log("Connected to MongoDB");
  });
}


export default DatabaseConnection;
