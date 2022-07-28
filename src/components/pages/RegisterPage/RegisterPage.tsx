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
            // รับค่าในลักษณะ object
            // ต้องใส่ password ให้ครบ แต่เราไม่ได้มีการป้อนค่าตรงนี้ เลยใช้เป็นค่าของ state ก่อนหน้า account.password
            // วิธีนี้ถ้ามี field สัก 20 field มันจะไม่ตอบโจทย์เพราะต้องมา เอาแต่ set ค่าก่อนหน้า
            setAccount({ username: e.target.value, password: account.password });
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
            setAccount({ username: account.username, password: e.target.value });
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
