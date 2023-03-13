import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="/">
            Susmita Collection
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="/" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"></i>
                login
              </a>
              <a href="/" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-2"></i>
                Register
              </a>
              <a href="/" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
