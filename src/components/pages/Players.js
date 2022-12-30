import React from "react";
import "./Players.css";
import SearchBar from "../common/search/Search";
const Players = () => {
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
                <h1>Cristiano Ronaldo</h1>
              </div>
              <div className="card-body">
                <div style={{ marginBottom: "0.5rem" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>
                    Player ID: 321000001
                  </h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>Club: Free Agent</h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>Position: Striker</h4>
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
                      <td>125</td>
                    </tr>
                    <tr>
                      <th width="30%">Nationality </th>
                      <td width="2%">:</td>
                      <td>2020</td>
                    </tr>
                    <tr>
                      <th width="30%">Gender</th>
                      <td width="2%">:</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <th width="30%">Current Club</th>
                      <td width="2%">:</td>
                      <td>Group</td>
                    </tr>
                    <tr>
                      <th width="30%">Date of Birth</th>
                      <td width="2%">:</td>
                      <td>B+</td>
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
                    Cristiano Ronaldo dos Santos Aveiro GOIH ComM born 5
                    February 1985 is a Portuguese professional footballer who
                    plays as a forward and captains the Portugal national team.
                    He is currently a free agent. Widely regarded as one of the
                    greatest players of all time, Ronaldo has won five Ballon
                    d'Or awards[note 3] and four European Golden Shoes, the most
                    by a European player. He has won 34 trophies in his career,
                    including seven league titles, five UEFA Champions Leagues,
                    the UEFA European Championship and the UEFA Nations League.
                    Ronaldo holds the records for most appearances (183), goals
                    (140), and assists (42) in the Champions League, goals in
                    the European Championship (14), international goals (118),
                    and joint-most international appearances (196). He is one of
                    the few players to have made over 1,100 professional career
                    appearances, and has scored over 800 official senior career
                    goals for club and country. He is the only player to score
                    in five FIFA World Cup tournaments.
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
