import {Grid, Paper} from "@mui/material";
import LoginForm from "./LoginForm";

function LoginPaper() {
  const paperStyle = {padding: 20};

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '50vh'}}
    >
      <Grid item xs={3}>
        <Paper elevation={10} style={paperStyle}>
          Sign in
          <LoginForm/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LoginPaper;