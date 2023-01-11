import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Players.css";
import SearchBar from "../common/search/Search";

const Players = () => {
  const [data, setData] = useState("");
  const getAllData = () => {
    axios
      .get("http://localhost:3001/players")
      .then((response) => {
        console.log(response.data);
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();    
  }, []);

  return (
    <div>
      <div className="player-profile">
        <div className="flex-container">
          <div style={{ width: "100%", height: "100%" }}>
            <div className="card search">
              <div className="card-header">
                <h2>Search Player</h2>
              </div>
              <div className="card-body search-body">
                <SearchBar></SearchBar>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <div className="card profile">
              <div className="card-header">
                <img
                  className="profile_img"
                  src="https://www.realmadrid.com/img/vertical_380px/cristiano_550x650.jpg"
                  alt="Player"
                />

                <h1>
                  <p key={data.id}>
                    {data.first_name} {data.last_name}
                  </p>
                </h1>
              </div>
              <div className="card-body">
                <div style={{ marginBottom: "0.5rem" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>
                    Player ID: {data.id}
                  </h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>Club: {data.club}</h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>
                    Position: {data.position}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card details">
              <div className="card-header">
                <h3 style={{ marginBottom: "0" }}>General Information</h3>
              </div>
              <div className="card-body" style={{ paddingTop: "0.25rem" }}>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th width="30%">Full Name</th>
                      <td width="2%">:</td>
                      <td>
                        {data.first_name} {data.last_name}
                      </td>
                    </tr>
                    <tr>
                      <th width="30%">Nationality </th>
                      <td width="2%">:</td>
                      <td>{data.nationality}</td>
                    </tr>
                    <tr>
                      <th width="30%">Gender</th>
                      <td width="2%">:</td>
                      <td>{data.gender}</td>
                    </tr>
                    <tr>
                      <th width="30%">Current Club</th>
                      <td width="2%">:</td>
                      <td>{data.club}</td>
                    </tr>
                    <tr>
                      <th width="30%">Date of Birth</th>
                      <td width="2%">:</td>
                      <td>{data.dob?.split("T")[0]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="card" style={{ height: "388px" }}>
                <div className="card-header" style={{ marginBottom: "1rem" }}>
                  <h3>About</h3>
                </div>
                <div className="card-body" style={{ paddingRight: "0.25rem" }}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
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
