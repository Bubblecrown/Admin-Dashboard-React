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
        <label>Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="psw"
          // ดัก event ที่เกิดขึ้น -- value of input
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
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
