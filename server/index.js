const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
//const userRouter = require("./routes/user.routes");
const dotenv = require('dotenv').config();
//let cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(express.static(__dirname));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const uri = `mongodb+srv://Taavet:qSjdPv6qKTYWFB88@cluster1.jjzwtcg.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e));

//app.use("/api/user", userRouter);
app.use("/api/user", require('./routes/user.routes'));
app.use('/api/notes', require('./routes/noteRoutes'));
//app.use(cors()); //inside cors(corsOptions)

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
});
