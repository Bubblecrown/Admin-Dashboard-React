import { Box, Button, Container, Link, Stack, SxProps, TextField, Theme, Typography } from "@mui/material";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Account } from "../../../types/account.type";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const navGate = useNavigate();
  const style: SxProps<Theme> | any = {
    container: { minWidth: 120, maxWidth: 400, display: "block" },
    inline: { display: "flex", direction: "row", gap: 1, mt:1, mb:1 },
  };

  const loginForm = (props: FormikProps<Account>) => {
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
        {/* disable double submit */}
        
        <Button
        sx={{mt:2}}
          type="submit"
          value="Submit"
          variant="contained"
          disabled={props.isSubmitting}
          color="primary"
          fullWidth
        >
          Log in
        </Button>
        <Box sx={style.inline}>
          <Typography variant="subtitle1">Don't have an account?</Typography>
          <Link
            variant="subtitle1"
            onClick={() => {
              navGate("/register");
            }}
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            Sign up
          </Link>
        </Box>

      </form>
    );
  };
  const initialUser: Account = {username: "", password: ""}
  return (
    <div>
      <Container maxWidth="sm">
        <Stack sx={style.container}>
          <Typography sx={{ fontSize: 32 }}>Welcome back!</Typography>
          <Typography variant="subtitle1">Log in to your account to continue</Typography>
          <Formik
            onSubmit={(value, { setSubmitting }) => {
              alert(JSON.stringify(value));
              setTimeout(() => {
                // หลังจาก 2 วิ ค่อยให้เป็น false
                // false = ไม่ disable = ไม่ห้ามกด = กดได้
                setSubmitting(false);
              }, 2000);
            }}
            initialValues={initialUser}
          >
            {(props) => loginForm(props)}
          </Formik>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginPage;
