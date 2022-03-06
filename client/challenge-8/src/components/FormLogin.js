import React from "react";

function FormLogin() {
  return (
    <>
      <div className="card col-4 d-inline text-center my-4">
        <h5>Form Login</h5>
        <form action="/auth/login" method="POST">
          <div className="form-group">
            <label for="username">Username</label>
            <br></br>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <br></br>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submt" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default FormLogin;
