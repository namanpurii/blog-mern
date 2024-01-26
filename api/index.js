const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();
const jwt = require("jsonwebtoken");

const secret = "qwertyuiop";
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// app.use()
mongoose.connect(
  "mongodb+srv://blog:<mongoatlaspassword>@cluster0.cjh9kwx.mongodb.net/"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, 10),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    const isValid = bcrypt.compareSync(password, userDoc.password);
    if (!isValid) throw new Error("Wrong Credentials");
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      //Sending a response with appropriate headers just for FYI
      res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.cookie("jwt", token).json('ok');
    });
  } catch (err) {
    res.status(401).json(err.message);
  }
});

app.get("/profile", (req, res)=>{
  res.json(req.cookies);
})
app.listen(4000, ()=>{
  console.log('Blog server running..')
});

