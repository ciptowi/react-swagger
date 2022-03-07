import React from "react";
import players from "./data/players.json";
import { Link } from "react-router-dom";

function PlayerJSON() {
  return (
    <div>
      <div className="text-center">
        <Link className="btn btn-outline-dark mt-3" to="/submit">
          Add a New Player
        </Link>
      </div>
      <table className="table mt-3">
        <thead>
          <tr className="bg-dark text-light">
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.experience}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerJSON;
