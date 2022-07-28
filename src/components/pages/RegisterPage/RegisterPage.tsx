import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navGate = useNavigate();
  const [account, setAccount] = useState({ username: "", password: "" });
  const regisForm = (props: FormikProps<any>) => {
    return (
      <form
        onSubmit={
          props.handleSubmit
        }
      >
        <label>Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={props.handleChange}
          // value update initial value
          value={props.values.username}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="psw"
          // ดัก event ที่เกิดขึ้น -- value of input
          onChange={props.handleChange}
          // value update initial value
          value={props.values.password}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  };
  return (
    <div>
      <Formik
        onSubmit={(value, { setSubmitting }) => {
          alert(JSON.stringify(value));
        }}
        initialValues={{ username: "", password: "" }}
      >
        {(props) => regisForm(props)}
      </Formik>
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
