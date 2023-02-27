import "./Login.css";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import logo0 from "../pictures/logo1.jpg";
import logo1 from "../pictures/logo4.png";
import { useState } from "react";


export function Login() {
  const initialstate = {
    isSubmit: false,
    username: "",
    password: "",
  };
  const [formdata, setFormData] = useState(initialstate);
  const { username, password } = formdata;
  const [formdataErr, setFormDataErr] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setFormDataErr(null);
    setFormData({
      ...formdata,
      isSubmit: true,
    });
    
    setTimeout(() => {
      let error = formValidation();
      if (error) {
        setFormDataErr(error);
        setFormData({
          ...formdata,
          isSubmit: false,
        });
        return;
      } else {
        alert("Login Successfull successfully");
        
        setTimeout(() => {
          //backend api
          // handleComment();
          setFormData({
            ...formdata,
            isSubmit: false,
          });
          // console.log("got response at backend");
          
          navigate('/');
          setFormData({
            ...formdata,
            isSubmit: false,
            username: "",
            password: "",
          });
        }, 1000);
      }
    }, 2000);
  };

  // const handleComment = async () => {
  //   const data = await saveComment(formdata);
  //   console.log(data);
  // };

  const onChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const formValidation = () => {
    let error = false;
    if (username === "" || !/\S+@\S+\.\S+/.test(username)) {
      error = {
        field_id: "username",
        message: "Not valid username",
      };
      return error;
    }
    
    if (password === "" || password.length < 6 || !/(^\d{6}$)/.test(password)) {
      error = {
        field_id: "password",
        message: "password must contain $ and 0",
      };
      return error;
    }
  };
 
  
  return (
    <>
      <div className="centerA1">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className="txt_fieldA1">
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
            />

            <label>Username</label>
          </div>
          <div>
            {formdataErr && formdataErr.field_id === "username" ? (
              <p style={{ color: "red" }}>{formdataErr.message}</p>
            ) : null}
          </div>
          <div className="txt_fieldA1">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div>
            {formdataErr && formdataErr.field_id === "password" ? (
              <p style={{ color: "red" }}>{formdataErr.message}</p>
            ) : null}
          </div>
          <div className="passA1">Forgot Password?</div>
          <div>
            <input type="submit" value="Login" />
          </div>
          <div className="signup_linkA1">
            Not a member? <Link to="/Registration">Signup</Link>
          </div>
        </form>
      </div>
      <div>
        <div className="div5" style={{ marginTop: "32%" }}>
          <div style={{ height: "1.5vh" }} />
          <div style={{ display: "flex" }}>
            <div className="div1">
              <Link to="/">
                <img src={logo0} alt="" height="100%" width="100%" />
              </Link>
            </div>
            <div className="div1">
              <Link to="/">
                <img src={logo1} alt="" height="100%" width="100%" />
              </Link>
            </div>
          </div>
          <div style={{ height: "10vh" }} />
          {/*footer*/}
          <div className="div6">
            <div style={{ flex: 1 }}>
              <div className="f" style={{ height: "7vh" }}>
                <Link to="/about"> About Us</Link>
              </div>
              <div className="f" style={{ height: "7vh" }}>
                Our Team
              </div>
              <div className="f" style={{ height: "7vh" }}>
                <Link to="/contact"> Contact Us</Link>
              </div>
              <div style={{ height: "7vh" }}>© All copyright reserved 2022</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: "7vh" }}>Reach us</div>
              <div>
                <input
                  type="text"
                  placeholder="xyz@gmail.com"
                  style={{ height: "4vh", border: "solid", fontSize: "18px" }}
                />
                <button>&gt;</button>
                Subscribe to Newsletter
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
