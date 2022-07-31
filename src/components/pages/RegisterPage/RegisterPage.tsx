import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
// icon
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// end icon
import { Account } from "../../../types/account.type";

// Backend
// end Backend

// actions
import * as registerAction from "../../../actions/register.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../reducers";
// end actions

type RegisterPageProps = {
  //
};
// 6.
const RegisterPage: React.FC<any> = () => {
  const registerReducer = useSelector((state: RootReducer) => state.registerReducer);
  const dispatch:any = useDispatch();
  const navGate = useNavigate();
  const style: SxProps<Theme> | any = {
    container: { minWidth: 120, maxWidth: 400, display: "block" },
    inline: { display: "flex", direction: "row", gap: 1 },
    arrowBtn: { fontWeight: "bold", fontSize: 10, boxShadow: "none" },
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

  const initialUser: Account = { username: "", password: "" };
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Box>dgbdvbg</Box>
          </Grid>
          <Grid item xs={6} md={8}>
            <Stack sx={style.container}>
              <Button
                sx={style.arrowBtn}
                startIcon={<KeyboardBackspaceIcon />}
                onClick={() => {
                  // กลับไปหน้าก่อนหน้า
                  navGate(-1);
                }}
              >
                Back
              </Button>
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
                onSubmit={async (value, { setSubmitting }) => {
                  dispatch(registerAction.register(value));
                }}
                initialValues={initialUser}
              >
                {(props) => regisForm(props)}
              </Formik>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RegisterPage;
