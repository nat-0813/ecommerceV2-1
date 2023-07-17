// importing node modules
const fs = require("fs");
const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3002;

app.use(express.json());

//using this middleware because I was getting the error that I could not fetch to the productsjson api endpoint because CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // front end server (react app)
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//storing mysql database information in connection variable
const connection = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "EcomProducts",
});
//establishing connection the database and logging if the connection was successful or not
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database!");
  }
});

//read all data from the mysql database
app.get("/jsondata", (req, res) => {
  const query = "SELECT * FROM products ";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
