import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from 'react-icons/fi';

const User = () => {
    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState("");
    const [showSignup, setShowSignup] = useState(false)
    const [loginPassword, setLoginPassword] = useState("");
    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false)

const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("https://byc-ecommerce-backend.onrender.com/api/byc-stores/auth/login", {
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
      const redirectTo = localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin"); // clean up
      navigate(redirectTo); // redirect after login

    } catch (error) {
      setMessage(error.message);
    }
  };




   const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(
        "https://byc-ecommerce-backend.onrender.com/api/byc-stores/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: signupName,
            email: signupEmail,
            password: signupPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      setMessage("Account created successfully. Please login.");
      setShowSignup(false);

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
                        <div style={{ position: "relative" }}>
    <input id="password"
      className="w-100 py-1"
      value={loginPassword}
      onChange={(e) => setLoginPassword(e.target.value)}
      required
      type={showPassword ? "text" : "password"}
      style={{
        border: "1px solid #BD3A3A",
        borderRadius: "5px",
      }}
    />

    <span
      onClick={() => setShowPassword(!showPassword)}
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "#555"
      }}
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </span>
  </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3 '>
                        <div className='remember'>
                            <input type="checkbox" />
                            Remember me
                        </div>
                        <small className='remember'>forgot your password?</small>
                    </div>
                    <button type='submit' className='btn w-100 text-center mt-5 login' style={{backgroundColor:"#BD3A3A",color:"#fff",
                        fontWeight:"700"}}>LOGIN</button>
                </form> 
            </div>
            <div className="col-md-1 log-hr " style={{borderLeft:"2px solid #F1EEEE",height:"380px"}}></div>
            <div className="col-md-5 sign-up">
               <h5 className='text-center mb-4 sign-head' style={{fontWeight:"700"}}>Create your account</h5>
               <p className='sign-text'>Create your customer account in just a few clicks! <br /> 
                  You can register using your e-mail address </p>
                  {showSignup && (
                    <form onSubmit={handleSignup}>
                    <div className="mb-3">
                  <label htmlFor='fullName'>Full Name</label>
                  <input type="text" id="fullName" className="w-100 py-1" value={signupName}
                    onChange={(e) => setSignupName(e.target.value)} required
                    style={{ border: "1px solid #BD3A3A", borderRadius: "5px" }}/>
                </div>

                <div className="mb-3">
                  <label htmlFor='email'>E-mail</label>
                  <input type="email" id="email" className="w-100 py-1" value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)} required
                    style={{ border: "1px solid #BD3A3A", borderRadius: "5px" }} />
                </div>
                <div className="mb-4">
                  <label htmlFor='password'>Password</label>
                  <div style={{ position: 'relative'}}>
                  <input id="password" type={showPassword ? "text" : "password"} className="w-100 py-1" value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)} required
                    style={{ border: "1px solid #BD3A3A", borderRadius: "5px" }} />
                    <span onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#555"
                      }}> {showPassword ? <FiEyeOff/> : <FiEye/>}
                    </span>
                  </div>
                </div>
                <button type="submit" className="btn w-100"
                  style={{ 
                    backgroundColor: "#BD3A3A", color: "#fff", fontWeight: "700" 
                  }}>
                  SIGN UP
                </button>

                  </form>
                )}
                  {!showSignup && (
                    <button className='btn w-100 create' onClick={() => setShowSignup(true)} style={{fontWeight:"700",backgroundColor:"#BD3A3A",color:"#fff"}}>CREATE AN ACCOUNT VIA E-MAIL</button>
                  )}
            </div>
        </div>
      </div>
    </>
  )
}

export default User



