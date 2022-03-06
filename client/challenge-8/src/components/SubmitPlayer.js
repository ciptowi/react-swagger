import { useState } from "react";

const SubmitPlayer = () => {
  const players = [];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    players.push({
      username: username,
      email: email,
      experience: experience,
    });
    console.log(players);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card mt-3 mx-auto">
            <div className="card-header text-center">
              <h5 className="card-title">Form Create a New Player</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Experience</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submt" className="btn btn-success">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6">
          <table className="table mt-3">
            <thead>
              <tr>
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
          -
        </div>
      </div>
    </div>
  );
};

export default SubmitPlayer;
