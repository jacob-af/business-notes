const path = require("path");

module.exports = (app) => {

  // HTML route to server up notes.html
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // any and all routes not specified will go to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
