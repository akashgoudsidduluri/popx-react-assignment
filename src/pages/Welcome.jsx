import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MobileContainer from "../components/MobileContainer";
function Welcome() {
  const navigate = useNavigate();
  
  return (
     <MobileContainer>
      <div className="welcome-page-content">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        <Button
          className="btn-primary"
          text="Create Account"
          onClick={() => navigate("/register")}
        />
        <Button
          text="Already Registered? Login"
          onClick={() => navigate("/login")}
          className="btn-secondary"
        />
      </div>
     </MobileContainer>
  );
}
export default Welcome;