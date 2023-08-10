import mongoose from "mongoose";
import { MONGODB_URL } from "../config/env";

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch(console.error);
