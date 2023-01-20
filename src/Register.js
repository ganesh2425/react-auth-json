import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();


  const isValidate =()=>{
    let isproceed = true;
    let errormessage= 'Please enter the value in ';
    if(id === null || id === ''){
        isproceed = false;
        errormessage += 'Username'
    }
    if(!isproceed){
        toast.warning(errormessage)
    }
    return isproceed;
  }

  const handleSubmit = (e) => {
    if (isValidate()){
    e.preventDefault();
    let regobj = {id,name,email,password,phone,address,gender,country};
    // console.log(regobj);

    fetch("http://localhost:3000/user",{
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regobj)
    }).then((res)=>{
        // toast.success('Registered Successfully')
        navigate("/login")
    }).catch((err)=>{
        // toast.error('Failed :' +err.message)
    })
}
  };

  return (
    <>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h2>User Registration</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="uae">UAE</option>
                      <option value="russia">Russia</option>
                      <option value="brazil">Brazil</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="app-check"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    ></input>
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="app-check"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <a className="btn btn-danger">Back</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
