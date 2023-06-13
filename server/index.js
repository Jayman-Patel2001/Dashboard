const express = require("express");
const app = express();
const { Server } = require("socket.io");

const http = require("http");
const server = http.createServer(app);

const bodyParser = require("body-parser");
app.use(bodyParser.text());

let data = [];

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connected to client");
  //! Call on machine metadata.......................................................................................
  app.post("/api/machine/metadata", async (req, res) => {
    data = eval(req.body);
    try {
      socket.broadcast.emit("metadata", data);
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  //! Call on machine detail data...................................................................................
  app.post("/api/machine/details/:id", async (req, res) => {
    const { id } = req.params;
    const data = eval(req.body);
    try {
      socket.broadcast.emit("md", data, id);
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  //! Call on machine overview data.................................................................................
  app.post("/api/machine/overview/:id", async (req, res) => {
    const { id } = req.params;
    const data = eval(req.body);
    try {
      socket.broadcast.emit("mo", data, id);
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  //! Call on machine overview bulk data.............................................................................
  app.post("/api/machine/bulk/overview", async (req, res) => {
    const data = eval(req.body);
    try {
      socket.broadcast.emit("mob", data);
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  //! Call on machine detail bulk data................................................................................
  app.post("/api/machine/details/:id", async (req, res) => {
    const data = eval(req.body);
    try {
      socket.broadcast.emit("mdb", data);
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
});

//! Listening to server............................................................................................
server.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});





