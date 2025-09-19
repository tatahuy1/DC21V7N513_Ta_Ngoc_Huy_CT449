const app = express();
const contactRoutes = require("./app/routes/contact.route");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json ({message: "Welcome t contact book application"});

});
app.use("/api/contacts", contactRoutes);

module.exports = app;