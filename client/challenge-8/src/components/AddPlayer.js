import React from "react";

function AddPlayer() {
  return (
    <>
      <div className="card mt-5 col-md-6 mx-auto">
        <div className="card-header text-center">
          <h5 className="card-title">Form Create a New Player</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
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
    </>
  );
}

export default AddPlayer;
