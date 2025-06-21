// App.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div>
        <h2>Welcome To My Assignment</h2>
        <hr />
        <br />
        <label>Click Here to Enter Our Page</label>
        <br />
        <br />
        <button onClick={() => navigate("/Contents")}>Click</button>
        
      </div>
    </div>
  );
};

export default App;
