import React from "react";

const Signup = () => {
  return (
    <>
      <div className="mx-2">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-primary ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <span className="fa fa-user-plus me-2"></span>Register
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Register Here
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-primary w-100 mb-3">
                  <span className="fa fa-google me-2"></span>Sign-up With
                  Google
                </button>
                <button className="btn btn-primary w-100 mb-3">
                  <span className="fa fa-facebook me-2"></span>Sign-up With
                  Facebook
                </button>

                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInput" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="#exampleInput"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="#exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="#exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="#exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="#exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
