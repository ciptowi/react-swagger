import React from "react";

const EditPlayer = () => {
  return (
    <>
      <div className="card mt-5 col-md-6 mx-auto">
        <div className="card-header text-center">
          <h5 className="card-title">Form Edit Player</h5>
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
                type="email"
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
            <div className="form-group">
              <label>Experience</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Experience"
              />
            </div>
            <div className="form-group">
              <label>Level</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Level"
              />
            </div>
            <div className="text-center">
              <button type="submt" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPlayer;
