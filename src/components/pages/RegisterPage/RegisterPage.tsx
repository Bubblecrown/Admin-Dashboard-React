import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navGate = useNavigate();
  const [account, setAccount] = useState({ username: "", password: "" });
  // const regisForm = (props: FormikProps<any>) => {
  //   return (
  //     <form onSubmit={props.handleSubmit}>
  //       <label>Username:</label>
  //       <br />
  //       <input
  //         type="text"
  //         id="username"
  //         name="username"
  //         onChange={props.handleChange}
  //         // value update initial value
  //         value={props.values.username}
  //       />
  //       <br />
  //       <label>Password:</label>
  //       <br />
  //       <input
  //         type="text"
  //         id="password"
  //         name="password"
  //         // ดัก event ที่เกิดขึ้น -- value of input
  //         onChange={props.handleChange}
  //         // value update initial value
  //         value={props.values.password}
  //       />
  //       <br />
  //       <br />
  //       {/* disable double submit */}
  //       <input type="submit" value="Submit" disabled={props.isSubmitting} />
  //     </form>
  //   );
  // };
  const regisForm = (props: FormikProps<any>) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <TextField
          type="text"
          id="username"
          name="username"
          label="Username"
          variant="standard"
          autoComplete="email"
          fullWidth
          onChange={props.handleChange}
          // value update initial value
          value={props.values.username}
        />
        <TextField
          sx={{ mt: 2 }}
          type="password"
          id="password"
          name="password"
          label="Password"
          variant="standard"
          autoComplete="email"
          fullWidth
          // ดัก event ที่เกิดขึ้น -- value of input
          onChange={props.handleChange}
          // value update initial value
          value={props.values.password}
        />
        <br />
        <br />
        {/* disable double submit */}
        <Button
          type="submit"
          value="Submit"
          variant="contained"
          disabled={props.isSubmitting}
          color="primary"
          fullWidth
        >
          Register
        </Button>
        <Button
        sx={{mt:1}}
          fullWidth
          variant="outlined"
          onClick={() => {
            // กลับไปหน้าก่อนหน้า
            navGate(-1);
          }}
        >
          Cancel
        </Button>
      </form>
    );
  };
  return (
    <div>
      <Box>
        <Card sx={{ minWidth: 175, maxWidth: 300 }}>
          <CardContent>
            <Typography sx={{ fontSize: 32 }}>Register</Typography>
            <Formik
              onSubmit={(value, { setSubmitting }) => {
                alert(JSON.stringify(value));
                setTimeout(() => {
                  // หลังจาก 2 วิ ค่อยให้เป็น false
                  // false = ไม่ disable = ไม่ห้ามกด
                  setSubmitting(false);
                }, 2000);
              }}
              initialValues={{ username: "", password: "" }}
            >
              {(props) => regisForm(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default RegisterPage;
