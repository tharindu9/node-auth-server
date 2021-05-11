const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/job.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "employee"
  });
 
  Role.create({
    id: 2,
    name: "employer"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
/*
  User.create({
      username: "employee_test",
      email: "employee@gmail.com",
      roles: ["employee"],
      password : "123456"
  });

  User.create({
    username: "admin_test",
    email: "admin@testgmail.com",
    roles: ["admin"],
    password : "123456"
  });

  User.create({
    username: "employer_test",
    email: "employer@gmail.com",
    roles: ["employer"],
    password : "123456"
  })
  */
}