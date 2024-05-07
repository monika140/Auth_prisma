
const express = require("express");
const routes = require("./routes/index.js");
const app = express();


//* Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  return res.send("hello");
});

// * Routes file
app.use(routes);

// server start
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
