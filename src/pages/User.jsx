import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [message, setMessage] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
        // console.log({ email: loginEmail, password: loginPassword })
      const response = await fetch("http://localhost:3001/api/byc-stores/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

     const data = await response.json();
     console.log(data)

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Try again.");
      }
      setMessage("Login successful!");
      localStorage.setItem("token", data.token);

      navigate("/"); // redirect to homepage
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <div className="container shadow user px-5 py-5">
        {message && (
          <div className="alert alert-info text-center">{message}</div>
        )}
        <div className="row">
            <div className="col-md-6">
                <h5 className='text-center mb-5' style={{fontWeight:"700"}}>Login</h5>
                <form onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label htmlFor="email">E-mail</label><br />
                        <input type="email" id='email' className='w-100 py-1' value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)} required style={{border:"1px solid #BD3A3A",
                          borderRadius:"5px"}}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input className='w-100 py-1' value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required style={{border:"1px solid #BD3A3A",borderRadius:"5px"}} type="password" />
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div className=''>
                            <input type="checkbox" />
                            Remember me
                        </div>
                        <small>forgot your password?</small>
                    </div>
                    <button type='submit' className='btn w-100 text-center mt-5' style={{backgroundColor:"#BD3A3A",color:"#fff",
                        fontWeight:"700"}}>LOGIN</button>
                </form> 
            </div>
            <div className="col-md-1 " style={{borderLeft:"2px solid #F1EEEE",height:"380px"}}></div>
            <div className="col-md-5">
               <h5 className='text-center mb-5' style={{fontWeight:"700"}}>Create your account</h5>
               <p>Create your customer account in just a few clicks! <br /> 
                  You can register using your e-mail address </p>
                  <button className='btn w-100 create' style={{fontWeight:"700",backgroundColor:"#BD3A3A",color:"#fff"}}>CREATE AN ACCOUNT VIA E-MAIL</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default User
