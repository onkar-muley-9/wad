const dbConnect = require("./mongodb");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/First", async (req, res) => {
  let result = await dbConnect();
  result = result.find().toArray();
  res.send(result);
});

app.post("/Second", async (req, res) => {
  let result = await dbConnect();
  result = await result.insertOne({
    name: "Abhijeet",
    Roll_no: 15,
    city: "Nagar",
  });
  res.send(result);
});

app.put("/Third", async (req, res) => {
  let result = await dbConnect();
  result = result.updateOne(
    { name: "Ashish" },
    { $set: { city: "Kasura Tribal Area" } }
  );
  res.send(result);
});

app.delete("/Fourth", async (req, res) => {
  let result = await dbConnect();
  result = result.deleteOne({ name: "Abhijeet" });
  res.send(result);
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
