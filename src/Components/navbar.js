import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email_id, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [validCreds, setvalidCreds] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var formType = "login";
  const changeForm = () => {
    formType = "register";
  };

  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, []);

  const login = (event) => {
    event.preventDefault();
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();

    urlencoded.append("email_id", email_id);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: headers,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://utility-gvlbfn7fea-el.a.run.app/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (JSON.parse(result).message == "Invalid Credentials") {
          console.log("invalid");
          setvalidCreds(false);
        } else {
          localStorage.setItem("user", result);
          localStorage.setItem("email_id", email_id);
          window.location.reload();
          navigate(`/Home`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        setvalidCreds(false);
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  var formType = "login";
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalReset"
        tabindex="-1"
        aria-labelledby="exampleModalLabelReset"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabelReset">
                {" "}
                Register
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="https://utility-gvlbfn7fea-el.a.run.app/register"
                method="post"
                oninput='confirm_password.setCustomValidity(confirm_password.value != password.value ? "Passwords do not match." : "")'
              >
                <div class="mb-3">
                  <label for="exampleInputEmail1Login" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    id="first_name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1Login" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="last_name"
                    name="last_name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1Login" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1Login1"
                    name="email_id"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1Login" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1Login1"
                    name="password"
                  />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalLogin"
        tabindex="-1"
        aria-labelledby="exampleModalLabelLogin"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabelLogin">
                {" "}
                Login{" "}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={login} method="post">
                <div class="mb-3">
                  <label for="exampleInputEmail1Login" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1Login"
                    name="email_id"
                    onChange={(e) => setEmailid(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1Login" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1Login"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <Button class="btn btn-primary" type="submit">
                    Login
                  </Button>
                  {validCreds == false ? (
                    <p style={{ color: "red" }}>invalid credentails</p>
                  ) : (
                    <br></br>
                  )}
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalReset"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SimulAny
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto"></ul>
            {!localStorage.getItem("user") ? (
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLogin"
              >
                Login
              </button>
            ) : (
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle btn btn-light"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {localStorage.getItem("email_id")}
                </a>
                <ul
                  style={{ width: "100px" }}
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" onClick={logout} href="#">
                      logout
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
