const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serves JS and CSS files from the public directory
app.use(express.static(__dirname + "/public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
