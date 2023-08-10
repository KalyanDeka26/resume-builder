import "./lib/mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT } from "./config/env";
import Resume from "./models/resume";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/resume", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.json({ message: "resume created successfully" });
  } catch (e: any) {
    if (e._message === "Resume validation failed") {
      return res.status(400).json({ message: "invalid body" });
    }
    console.log(e);
    res.status(500).json({ message: "could not process request" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening for requests on port ${PORT}`);
});
