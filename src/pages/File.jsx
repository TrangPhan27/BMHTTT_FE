import React from "react";
import "./File.scss";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TableDashboard from "./TableDashboard";


function File() {
  return (
    <div className="Customer-container">
      <div className="allbox">
        <div className="labelbox">
          <p className="textlable">DANH SÁCH HỒ SƠ</p>
          <div className="searchbox">
            <input type="text" className="searchinput" />
          </div>
          {/* <div className="sortbox">
            <select name="cars" id="cars" className="sortinput">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div> */}
        </div>
        <div className="table">
          <TableDashboard />

        </div>
      </div>
    </div>
  );
}

export default File;
