import { useEffect } from "react";
import axios from "axios";

function PlayerList() {
  // const [players, settPlayer] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const response = await axios.get("http://localhost:5000/api/players");
    console.log(response.data);
  };

  return (
    <div>
      <table className="table">
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
          <tr>
            <td>1</td>
            <td>Cipto</td>
            <td>cipto@gmail.com</td>
            <td>100</td>
            <td>2</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
