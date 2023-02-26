const express = require("express");
const collection = require("./mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

//getting data from login page
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  //checking user already exist or not
  try {
    const checkUser = await collection.findOne({ email: email });
    if (checkUser) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    console.log(e);
  }
});

//code for signup page
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const checkUser = await collection.findOne({ email: email });
    if (checkUser) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(8000, () => {
  console.log("port is running");
});
