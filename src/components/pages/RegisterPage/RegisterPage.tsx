import { FormLabel } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navGate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted");
        }}
      >
        <label>First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button
        onClick={() => {
          // กลับไปหน้าก่อนหน้า
          navGate(-1);
        }}
      >
        Back to login
      </button>
    </div>
  );
};

export default RegisterPage;
