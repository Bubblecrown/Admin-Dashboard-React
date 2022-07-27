import * as React from "react";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const navGate = useNavigate();
  return (
    <div>
      LoginPage
      <button
        onClick={() => {
          navGate('/register');
        }}
      >
        Register
      </button>
    </div>
  );
};

export default LoginPage;
