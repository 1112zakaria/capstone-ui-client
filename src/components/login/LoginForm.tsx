import {Button, FormControl, FormHelperText, TextField} from "@mui/material";

function LoginForm() {

  return (
    <div>
      <FormControl>
        <TextField label="Username" placeholder="Enter username" fullWidth required/>
        <TextField label="Password" placeholder="Enter password" type="password" fullWidth required/>
        <Button variant="contained">Sign In</Button>
        <FormHelperText>We'll never share your credentials.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default LoginForm;