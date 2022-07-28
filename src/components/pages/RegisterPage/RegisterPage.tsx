import { FormLabel } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navGate = useNavigate();
  const [account, setAccount] = useState({ username: "", password: "" });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(JSON.stringify(account));
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
            setAccount({
              // เอาข้อมูลทั้งหมดมาก่อน แล้วค่อยบอกว่าเราต้องการจะแก้ตัวไหน
              ...account,
              username: e.target.value,
            });
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
            setAccount({ 
              ...account, 
              password: e.target.value });
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
      <br />
      <span>debug: {JSON.stringify(account)}</span>
      <br />
    </div>
  );
};

export default RegisterPage;
