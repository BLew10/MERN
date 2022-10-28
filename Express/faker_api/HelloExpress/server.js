const { faker } = require('@faker-js/faker')

const express = require("express");
const app = express();
const port = 8000
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
  constructor() {
    this.password = faker.internet.password()
    this.email = faker.internet.email()
    this.phoneNumber = faker.phone.phoneNumber()
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this._id = faker.datatype.uuid()
  }
}

class Company {
  constructor() {
    this.address = `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} | Zipcode: ${faker.address.zipCode()} | Country: ${faker.address.country()}`
    this.name = faker.company.name()
    this._id = faker.datatype.uuid()
  }
}

// req is short for request
// res is short for response
app.get("/api/users", (req, res) => {
  res.json(allUsers);
});

app.get("/api/users/new", (req, res) => {
  res.json(new User);
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Company);
});

app.get("/api/user/company", (req, res) => {
  res.json([new User, new Company]);
});

// app.post("/api/users/new", (req, res) => {
//   // req.body will contain the form data from Postman or from React
//   console.log(req.body);
//   // we can push it into the users array for now...
//   // later on this will be inserted into a database
//   users.push(req.body);
//   // we always need to respond with something
//   res.json({ status: "ok" });
// });


// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));



/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
