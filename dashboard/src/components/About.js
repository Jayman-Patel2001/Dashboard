import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import logo from "../assests/aboutImg.png";
// import "../styles/About.css";
import { NavLink } from "react-router-dom";
const { Content } = Layout;

const About = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "5rem",
          width: "100%",
          height: "100vh",
          background: "#021e39",
          minHeight: 280,
          color: "white",
        }}
      >
//         <div className="heading">
//           <h2>
//             We are
//             <NavLink className="electronLink" to="/">
//               Electron
//             </NavLink>
//           </h2>
//           <h3>Providing you with the real-time data analysis</h3>
//         </div>
//         <div className="aboutContent">
//           <img className="about-image" src={logo} alt="about" />
//           <div className="text-box">
//             <p>
//               At Electron, we want to provide you with data visualization:
//               <strong> Our data never sleeps</strong>.
//             </p>
//             <p>&nbsp;</p>
//             <p>
//               Companies want to keep the track of their data, performance of
//               their machines. Electron solves this problem by providing them
//               real time dashboard, from which they don't have to worry about
//               their data loss. From analysis to downtime, we check overall
//               performance of the machines and their connectivity.
//             </p>
//             <p>&nbsp;</p>
//             <p>
//               In corporate sector, we need <strong>data </strong>to make
//               accurate decisions. Electron provides a way to arrange this data
//               in a proper heirarchy. We are working under the guidance of
//               <a
//                 className="nutronLink"
//                 target="_blank"
//                 href="https://nutronsystems.com"
//               >
//                 Nutron
//               </a>
//               <span>.</span>
//             </p>
//           </div>
//         </div>
      </Content>
    </Layout>
  );
};

export default About;
