const express = require('express');
const app = express();
const cors = require('cors');
const authrouter = require("./router/auth-router");
const contactrouter = require("./router/contact_router");
const connectdb = require("./util/db");
const errorMiddleware = require('./middleware/error_middleware');
const Menteeroute = require('./router/Mentee-router');
// Cors options
const corsoptions = {
  origin: "http://localhost:5173", // Removed trailing slash
  methods: "GET,POST,PUT,DELETE,OPTIONS,PATCH,HEAD",
  credentials: true, // Corrected typo
}

app.use(cors(corsoptions));

// Use middleware to parse JSON bodies
app.use(express.json());

// Use the router for handling API routes
app.use("/api/auth", authrouter);
app.use("/api/form", contactrouter);
app.use("/api/data", Menteeroute);
app.use(errorMiddleware);

// Connect to the database and start the server
connectdb()
  .then(() => {
    app.listen(8000, function () {
      console.log("Server is running at http://localhost:8000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  });
