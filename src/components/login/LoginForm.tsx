import {Button, FormControl, FormHelperText, TextField} from "@mui/material";

function LoginForm() {

  return (
    <div>
      <FormControl>
        <TextField label="Username" />
        <TextField label="Password" />
        <Button variant="contained">Submit</Button>
        <FormHelperText>We'll never share your credentials.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default LoginForm;