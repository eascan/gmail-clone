import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon fontSize="large" />}>Compose</Button>
    </div>
  );
}

export default Sidebar;
