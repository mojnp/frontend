import { useState } from "react";
import HeaderNavLink from "../HeaderNavLink";
import "./Signup.scss";
import axios from "axios";
import { useViewportSize } from "@mantine/hooks";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const { width } = useViewportSize()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post(
        "https://api.mojnovipazar.info/users/",
        {
          username: username,
          password: password,
          full_name: full_name,
          address: '',
          email: email,
          phone_number: phone_number,
          role: "string",
          status: "string",
          avatar: "string",
          premium: true,
          is_active: true,
          saved: [{}],
          liked: [{}],
          activity_log: [{}],
          viewed: [{}],
          shared: [{}],
          contributed: [{}],
          contribution_level: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(() => {
        alert("Data you entered is not valid!");
      });
  };

  return (
    <div className="main-signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="inputs-div">
          <div className={width <= 786 ? 'mobile-input-wrappers' : "input-wrappers"}>
            <input
              className="username"
              name="username"
              type="text"
              required
              pattern="/^[a-zA-Z0-9_]{3,16}$/"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className="full_name"
              type="text"
              required
              pattern="/^[a-zA-Z\s]{2,}$/ "
              placeholder="Fullname"
              onChange={(e) => {
                setFull_name(e.target.value);
              }}
            />
          </div>
          <div className={width <= 786 ? 'mobile-input-wrappers' : "input-wrappers"}>
            <input
              className="password"
              type="password"
              required
              pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="confirm-password"
              type="password"
              required
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmpassword === password) {
                  return;
                } else {
                  alert('Password and Confirm password do not match!')
                }
              }}
            />
          </div>
          <div className={width <= 786 ? 'mobile-input-wrappers' : "input-wrappers"}>
            <input
              className="email"
              type="text"
              required
              pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="phone_number"
              type="text"
              required
              pattern="/^[0-9]{10}$/"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhone_number(e.target.value);
              }}
            />
          </div>
          <input type="submit" onClick={handleSubmit} className="submit-btn" />
        </form>
        <div className="privacy">
          By clicking the Sign Up button, you agree to our{" "}
          <span>Terms and Condition</span> and <span>Privacy Policy</span>
        </div>
        <div className="toLogin">
          <p>Already registered?</p>
          <HeaderNavLink link="/login" textContent="Login" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
