const fs = require("fs");

module.exports = (app) => {
  // found at https://www.codegrepper.com/code-examples/javascript/javascript+generate+unique+id

  app.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(data);
  });

  app.post("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    req.body.id = Math.random().toString(36).substr(2, 16);
    data.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log("success")
    );
    res.send(data);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    let idToRemove = data.findIndex((ele) => ele.id === req.params.id);
    data.splice(idToRemove, 1);
    fs.writeFileSync("./db/db.json", JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log("success")
    );
    res.send(data);
  });
};
