import React from 'react'

const Contact = () => {
  return (
    <>
     
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center py-4 my-4">
              <h1>Have Some Questions..?</h1>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md 4 d-flex justify-content-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDDLDr2xs7awst6jZFbXSdlRMonbB3SrHUg&usqp=CAU" alt="message"
            height="500px" width="500px" />
            </div>
            <div className="col-md-6 my-5">
          <form >
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Susmita Mandal"/>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mb-3">Send Message</button>
          </form>
          </div>
          </div>
          
        </div>
      
    </>
  )
}

export default Contact