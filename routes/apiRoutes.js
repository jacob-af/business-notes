const fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(data);
  });

  app.post("/api/notes", (req, res) => {});
};
