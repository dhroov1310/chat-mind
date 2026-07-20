import React from "react";
import { Link } from "react-router-dom";
import MetaData from "../components/layouts/MetaData/Metadata";
import "./Homepage.css";

function HomePage() {
  return (
    <>
      <MetaData title="ChatMind | Home" />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#">
            <div className="navbar-logo">ChatMind</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HomePage;
