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

// class RealtimeService {
//   constructor() {
//     this.io = new Server(server, {
//       cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//       },
//     });

//     // this.machineMetadataRoom = "mt_data";
//     // this.machineDetailsRoomPrefix = "md_data";
//     // this.machineOverviewRoomPrefix = "mo_data";
//   }

//   listen(server) {
//     this.io.attach(server);

//     this.io.on("connection", (socket) => {
//       console.log(`New client connected with id: ${socket.id}`);

//       socket.on("disconnect", () => {
//         console.log("Client disconnected");
//       });
//     });
//   }

//   //? MetaData Function.............................................................................................
//   async postMetadata(metadata) {
//     //! Send metadata to the machine metadata room
//     this.io.emit("metadata", metadata);
//     return `Metadata received successfully ${metadata}`;
//   }

//   //? Detail Data Function.............................................................................................
//   async postDetailData(detailData, id) {
//     // const roomName = this.machineDetailsRoomPrefix + id;
//     //! Send detail data to the corresponding machine details room
//     this.io.emit("detail-data", detailData);
//     return `Metadata received successfully ${id}`;
//   }

//   //? Bulk Detail Data Function.............................................................................................
//   async postBulkMachineDetailData(detailDataList) {
//     for (const detailData of detailDataList) {
//       //   const roomName = this.machineDetailsRoomPrefix + detailData.machineId;
//       //! Send detail data to the corresponding machine details room
//       this.io.emit("detail-data", detailData);
//     }
//     return "Bulk machine detail data received successfully";
//   }

//   //? Overview Data Function.............................................................................................
//   async postOverviewData(overviewData, id) {
//     // const roomName = this.machineOverviewRoomPrefix + id;
//     //! Send overview data to the corresponding machine overview room
//     this.io.emit("overview-data", overviewData);
//     return "Machine overview data received successfully";
//   }

//   //? Bulk Overview Data Function.............................................................................................
//   async postBulkMachineOverviewData(overviewDataList) {
//     for (const overviewData of overviewDataList) {
//       //   const roomName = this.machineOverviewRoomPrefix + overviewData.machineId;
//       //! Send overview data to the corresponding machine overview room
//       this.io.emit("overview-data", overviewData);
//     }
//     return "Bulk machine overview data received successfully";
//   }
// }

// const realTimeService = new RealtimeService();


// //! Call on machine metadata.......................................................................................
// app.post("/api/machine/metadata", async (req, res) => {
//   const body = req.body;
//   try {
//     const result = await realTimeService.postMetadata(body);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// //! Call on machine detail data...................................................................................
// app.post("/api/machine/details/:id", async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   try {
//     const result = await realTimeService.postDetailData(body, id);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// //! Call on machine overview data.................................................................................
// app.post("/api/machine/overview/:id", async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   try {
//     const result = await realTimeService.postOverviewData(body, id);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// //! Call on machine overview bulk data.............................................................................
// app.post("/api/machine/bulk/overview", async (req, res) => {
//   const body = req.body;
//   try {
//     const result = await realTimeService.postBulkMachineOverviewData(body);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// //! Call on machine detail bulk data................................................................................
// app.post("/api/machine/details/:id", async (req, res) => {
//   const body = req.body;
//   try {
//     const result = await realTimeService.postBulkMachineDetailData(body);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });



