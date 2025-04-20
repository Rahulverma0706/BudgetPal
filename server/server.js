const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your MongoDB URI
mongoose.connect("YOUR_MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Transaction = mongoose.model("Transaction", {
  type: String,
  category: String,
  amount: Number,
  note: String,
  date: Date,
});

app.get("/transactions", async (req, res) => {
  const data = await Transaction.find().sort({ date: -1 });
  res.json(data);
});

app.post("/transactions", async (req, res) => {
  const newTx = new Transaction(req.body);
  await newTx.save();
  res.json(newTx);
});

app.delete("/transactions/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));
