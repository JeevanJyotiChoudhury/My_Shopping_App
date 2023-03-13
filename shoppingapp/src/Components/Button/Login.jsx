import React from 'react'

const Login = () => {
  return (
    <>
 
 {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<span className="fa fa-sign-in me-2"></span>login
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login Here</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <button className="btn btn-primary w-100 mb-3">
         <span className="fa fa-google me-2"></span>Sign-in With Google
        </button>
        <button className="btn btn-primary w-100 mb-3">
         <span className="fa fa-facebook me-2"></span>Sign-in With Facebook
        </button>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
</form>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Login