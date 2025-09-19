const app = require("./app");
const config = require("./app/config/index.js");

console.log("DEBUG config:", config);

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});