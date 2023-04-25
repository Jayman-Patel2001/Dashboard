import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeCard from "./components/HomeCard";
import About from "./components/About";
import Report from "./components/Report";
import Error from "./components/Error";
import MachineDetail from "./components/MachineDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import initial from "./components/InitialOverview";

const socket = io.connect("http://localhost:8000");

const App = () => {
  const [metaData, setMetaData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [overviewData, setOverviewData] = useState(initial);
  const [overviewBulkData, setOverviewBulkData] = useState([]);
  const [detailBulkData, setDetailBulkData] = useState([]);

  useEffect(() => {
    socket.on("metadata", (data, id) => {
      console.log("Metadata:", data);
      setMetaData(data);
    });

    socket.on("md", (data, id) => {
      console.log("Detail Data:", data);
      setDetailData(data);
    });
    socket.on("mo", (data, id) => {
      console.log("Overview Data:", data);
      setOverviewData(data);
    });
    socket.on("mob", (data) => {
      console.log("Overview Bulk Data:", data);
      setOverviewBulkData(data);
    });
    socket.on("mdb", (data) => {
      console.log("Detail Bulk Data:", data);
      setDetailBulkData(data);
    });
    return () => {
      socket.off("metadata");
      socket.off("md");
      socket.off("mo");
      socket.off("mob");
      socket.off("mdb");
    };
  }, [socket]);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCard data={overviewData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report data={detailData} />} />
          <Route
            path="machines/:machineId"
            element={<MachineDetail data={detailData} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
