import { Copyright, LockOutlined } from "@mui/icons-material";
import {Alert, Avatar, Box, Button,
  Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import {
  useContext
} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import {
  useState
} from "react";
import { useNavigate } from "react-router-dom";

function LoginFormRevamped() {
  const { loginUser, setAuthToken } = useContext(AuthContext);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let login: string = "", password: string = "";
    const data: FormData = new FormData(event.currentTarget);

    event.preventDefault();
    login = data.get('login')!.toString();
    password = data.get('password')!.toString();

    console.log({
      login,
      password
    });

    loginUser(login, password, formSubmitCallback);
  };

  const formSubmitCallback = (authToken: string | null) => {
    // if login was successful, navigate to home
    // if login was not successful, display error message
    console.log(authToken);
    setAuthToken(authToken);
    if (authToken != null) {
      setError(false);
      navigate('/');
      return;
    }
    setError(true);
  }

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {error && <Alert severity="error">Invalid credentials</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Username"
              name="login"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default LoginFormRevamped;