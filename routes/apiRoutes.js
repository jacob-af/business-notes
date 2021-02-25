const fs = require("fs");
const uuid = require("uuid")

module.exports = (app) => {

  // Route: GET api/notes
  // Desc: returns contents of db.json
  app.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(data);
  });

  // Route POST api/notes
  // Desc: adds new note to array of notes,
  // updates db.json and returns new array
  app.post("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    // gives new note a random unique id
    req.body.id = uuid.v4();
    // adds note to array
    data.push(req.body);
    //update the db.json with new array
    fs.writeFileSync("./db/db.json", JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log("success")
    );
    //returns updated array
    res.send(data);
  });

  // Route: DELETE api/notes/:id
  // Desc: removes note with selected id from array
  // updates db.json and returns new array
  app.delete("/api/notes/:id", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    // finds index of note with selected id
    let idToRemove = data.findIndex((ele) => ele.id === req.params.id);
    // removes appropriate index
    data.splice(idToRemove, 1);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log("success")
    );
    res.send(data);
  });
};
