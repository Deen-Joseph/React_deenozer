import React from "react";
import "./Players.css";
const Players = () => {
  return (
    <div>
      <div class="student-profile">
        <div class="flex-container">
       
          <div style={{width:'70%'}}>
            <div className="card profile">
              <div class="card-header">
                <img
                  class="profile_img"
                  // src="https://source.unsplash.com/600x300/?student"
                  alt="student dp"
                />
                <h3>Karupayya Swamy</h3>
              </div>
              <div class="card-body">
                <p style={{ marginBottom: "1.5rem" }}>
                  <strong style={{ paddingRight: "0.25rem" }}>
                    Student ID:
                  </strong>
                  321000001
                </p>
                <p style={{ marginBottom: "0" }}>
                  <strong style={{ paddingRight: "0.25rem" }}>Class:</strong>4
                </p>
                <p style={{ marginBottom: "0" }}>
                  <strong style={{ paddingRight: "0.25rem" }}>Section:</strong>A
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="card-header">
                <h3 style={{ marginBottom: "0" }}>
                  <i
                    class="far fa-clone"
                    style={{ paddingRight: "0.25rem" }}
                  ></i>
                  General Information
                </h3>
              </div>
              <div class="card-body" style={{ paddingTop: "0.25rem" }}>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <th width="30%">Roll</th>
                      <td width="2%">:</td>
                      <td>125</td>
                    </tr>
                    <tr>
                      <th width="30%">Academic Year </th>
                      <td width="2%">:</td>
                      <td>2020</td>
                    </tr>
                    <tr>
                      <th width="30%">Gender</th>
                      <td width="2%">:</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <th width="30%">Religion</th>
                      <td width="2%">:</td>
                      <td>Group</td>
                    </tr>
                    <tr>
                      <th width="30%">blood</th>
                      <td width="2%">:</td>
                      <td>B+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <div class="card">
                <div class="card-header bg-transparent border-0">
                  <h3 style={{ marginBottom: "0" }}>
                    <i
                      class="far fa-clone"
                      style={{ paddingRight: "0.25rem" }}
                    ></i>
                    Other Information
                  </h3>
                </div>
                <div class="card-body" style={{ paddingRight: "0.25rem" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    
  );
};

export default Players;
