//import { SatelliteAlt } from "@mui/icons-material";
import {Copyright, LockOutlined } from "@mui/icons-material";
import {Alert, Avatar, Box, Button, Checkbox, Container,
  createTheme,
  CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import {
  useContext, useState
} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function RegisterForm() {
  const {registerUser, setAuthToken} = useContext(AuthContext);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    let firstName: string, lastName: string, password: string, login: string;

    event.preventDefault();
    firstName = data.get('firstName')!.toString();
    lastName = data.get('lastName')!.toString();
    login = data.get('login')!.toString();
    password = data.get('password')!.toString();

    console.log({
      firstName,
      lastName,
      login,
      password
    });
    
    registerUser(firstName, lastName, login, password, formSubmitCallback);

  };

  const formSubmitCallback = (authToken: string | null) => {
    setAuthToken(authToken);
    if (authToken != null) {
      setError(false);
      navigate('/');
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {error && <Alert severity="error">Username exists</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="Username"
                  name="login"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default RegisterForm;