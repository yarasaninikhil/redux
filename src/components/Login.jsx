import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal"; // Import the modal component

const Login = () => {
  const navigate = useNavigate();
  const select = useSelector((state) => state.Storeslice.json.registration);
  const select1 = useSelector((state) => state.Storeslice.json.admin);

  const [state, setstate] = useState({
    user: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const found = select.find(
    (item) => item.email == state.user && item.password == state.password
  );
  const found1 = select1.find(
    (item) => item.user == state.user && item.password == state.password
  );

  function handlechange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  function handleclick() {
    if (found || found1) {
      setShowModal(true);
      setMessage("Login Successfully");
      setTimeout(() => {
        setShowModal(false);
        if (found) {
          navigate("/home");
        } else {
          navigate("/Admin");
        }
      }, 4000); // Show the modal for 4 seconds
    } else {
      alert("Details Not Found");
    }
  }

  return (
    <div className="detail">
      <h1 className="user">User Details</h1>
      <div className="login-d">
        <div>
          <label>User:</label>
          <input
            type="user"
            placeholder="User detail"
            value={state.user}
            name="user"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            value={state.password}
            name="password"
            onChange={handlechange}
          />
        </div>
        <button className="btn" onClick={handleclick}>
          Login
        </button>
      </div>
      <div className="login-et">
        <h3>You don't have an account?</h3>
        <p><Link to="/">Register</Link></p>
      </div>
      {showModal && <SuccessModal message={message} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Login;
