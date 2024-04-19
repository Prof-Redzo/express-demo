import express from "express";

const app = express();

const PORT = 3000;

app
.get("/", (req, res) => {
  res.send("test");
})
.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/hello2/:id", (req, res) => {
  console.log(req.params);
  res.send("hello2");
})

app.listen(PORT, () => {
  console.log(`App listenning on port ${PORT}`);
});