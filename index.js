const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Node , i am Jamil Rayhan");
});

const users = [
  { id: 0, name: "abul mia", email: "abul@gmail.com", phone: "0123456789" },
  { id: 1, name: "babul mia", email: "babul@gmail.com", phone: "0123456789" },
  { id: 2, name: "kabul mia", email: "kabul@gmail.com", phone: "0123456789" },
  { id: 3, name: "dabul mia", email: "dabul@gmail.com", phone: "0123456789" },
  { id: 4, name: "habul mia", email: "habul@gmail.com", phone: "0123456789" },
  { id: 5, name: "cabul mia", email: "cabul@gmail.com", phone: "0123456789" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hello data", req.body);
  //   res.send(JSON.stringify(newUser));
  res.json(newUser);
});
// dynamic

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.get("/jamil", (req, res) => {
  res.send("yeas jamil rayhan");
});

app.listen(port, () => {
  console.log("express Localhost is ", port);
});
