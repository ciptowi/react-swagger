import { useEffect, useState } from "react";
import axios from "axios";

function PlayerList() {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const response = await axios.get("http://localhost:5000/api/players");
    // console.log(response.data.message);
    setPlayer(response.data.message);
  };

  return (
    <div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.experience}</td>
                <td>{player.lvl}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
