import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";

const Contents = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <h2>This is the Contents Page</h2>
        <hr />
        <br />

        <button onClick={() => navigate("/Additems")}>
          <FontAwesomeIcon icon={faPlus} />
          &nbsp; Add Items
        </button>
        <br />
        <br />

        <button onClick={() => navigate("/Viewitems")}>
          <FontAwesomeIcon icon={faEye} /> &nbsp; View Items
        </button>
      </div>
    </div>
  );
};

export default Contents;
