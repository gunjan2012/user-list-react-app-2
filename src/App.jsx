import React from "react";
import "./style/App.css";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <div className="container main-container">
      <UserTable />
    </div>
  );
};

export default App;
