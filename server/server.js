import path from "path";
import fs from "fs";
import render from 'preact-render-to-string';
import App from "../src/App";
import express from "express";
import { h } from 'preact';


const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${render(<App />)}</div>`
      )
    );
  });
});

app.use(
  express.static(path.resolve(__dirname, "..", "dist"), { maxAge: "30d" })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
