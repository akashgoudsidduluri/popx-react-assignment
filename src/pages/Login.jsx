import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import MobileContainer from "../components/MobileContainer";
function Login(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=>{
        const user=JSON.parse(localStorage.getItem("user"));
        if (!email || !password) {
            alert("Please enter credentials");
            return;
        }
        
        if(user && user.email===email && user.password===password) {
            navigate("/profile");
        }
        else{
            alert("Invalid Credentials");
        }
    };
    return (
         <MobileContainer>
            <div className="login-page">
                <h1>Signin to your PopX account</h1>
                <p>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,
                </p>
                <InputField
                label="Email Address"
                type="email"
                value={email}
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                required={false}
                />

                <InputField
                label="Password"
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required={false}
                />

                <Button
                text="Login"
                onClick={handleLogin}
                className={
                email && password? "primary-btn": "disabled-btn"}
                />
            </div>
         </MobileContainer>
    );
}
export default Login;