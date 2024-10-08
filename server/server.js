import express from "express";
import cors from "cors";
import games from "./routes/games.js";

const PORT = process.env.VITE_PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/games", games);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});