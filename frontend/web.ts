import express from "express";

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(process.env.PORT || 8080);
