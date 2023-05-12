const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/biodata", (req, res) => {
  const {
    name,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat,
  } = req.query;

  const biodata = {
    name,
    tempatLahir,
    tanggalLahir,
    alamat,
  };

  res.json(biodata);
});

app.post("/biodata", (req, res) => {
  const {
    name,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat,
  } = req.body;

  const biodata = {
    name,
    tempatLahir,
    tanggalLahir,
    alamat,
  };

  res.json(biodata);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
