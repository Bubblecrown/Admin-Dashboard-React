import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  ListItem,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
// icon
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// end icon

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navGate = useNavigate();
  const style: SxProps<Theme> | any = {
    container: { minWidth: 120, maxWidth: 400, display: "block" },
    inline: { display: "flex", direction: "row", gap: 1 },
    // arrowBtn: { fontWeight: "bold", fontSize: 10, boxShadow:"none" },
  };
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
          Sign up
        </Button>
        <Button
          sx={{ mt: 1 }}
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
      <Container maxWidth="sm">
        <Stack sx={style.container}>
          {/* <Button
            sx={style.arrowBtn}
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => {
              // กลับไปหน้าก่อนหน้า
              navGate(-1);
            }}
          >
            Back
          </Button> */}
          <Typography sx={{ fontSize: 32 }}>Create an account</Typography>
          <Box sx={style.inline}>
            <Typography variant="subtitle1">Already have an account?</Typography>
            <Link
              variant="subtitle1"
              onClick={() => {
                navGate(-1);
              }}
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Log in
            </Link>
          </Box>
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
        </Stack>
      </Container>
    </div>
  );
};

export default RegisterPage;
