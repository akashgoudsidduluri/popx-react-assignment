import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import MobileContainer from "../components/MobileContainer";
function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("yes");

  const handleRegister = () => {
    const user = { name, phone, email, password, company, agency };
    console.log(user);
    if (!name || !phone || !email || !password) {
      alert("Please fill all required fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/profile");
  };

  return (
    <MobileContainer>
      <div className="register-page">
        <h1>Create your<br/> PopX account</h1>

        <InputField
          label="Full Name"
          value={name}
          placeholder="Enter full name"
          onChange={(e) => setName(e.target.value)}
          
        />

        <InputField
          label="Phone number"
          value={phone}
          placeholder="Enter phone number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputField
          label="Email address"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          label="Company name"
          value={company}
          placeholder="Enter company name"
          onChange={(e) => setCompany(e.target.value)}
          required={false}
        />

        <div className="radio-section">
          <p>Are you an Agency?<span className="required">*</span></p>

          <div className="radio-group">
            <label>
              <input type="radio" checked={agency === "yes"} onChange={() => setAgency("yes")} />
              Yes
            </label>

            <label>
              <input type="radio" checked={agency === "no"} onChange={() => setAgency("no")} />
              No
            </label>
          </div>
        </div>

        <Button text="Create Account" onClick={handleRegister} className="primary-btn" />
      </div>
    </MobileContainer>
  );
}

export default Register;