import {Button, FormControl, FormHelperText, TextField} from "@mui/material";
import React, {useState, useEffect} from "react";
import { request, setAuthToken } from "../../axiosHelper";

function LoginForm() {
  // FIXME: use Redux/props to bring-up the state up to the LoginPage
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("Username: " + username + " Password: " + password);
  })

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  }

  const submitLogin = (e: React.FormEvent) => {
    console.log('submitting form');
    request(
      'POST',
      'http://localhost:5000/register',
      {login: username, password: password, firstName: "Zakaria", lastName: "Ismail"}
    ).then((response: any) => {
      console.log(response.data);
      setAuthToken(response.data.token);
    }).catch((error: any) => {
      console.log(error);
    });
  }

  return (
    <div>
      <FormControl>
        <TextField label="Username" placeholder="Enter username" onChange={handleUsernameChange} fullWidth required/>
        <TextField label="Password" placeholder="Enter password" type="password" onChange={handlePasswordChange} fullWidth required/>
        <Button variant="contained" onClick={submitLogin}>Sign In</Button>
        <FormHelperText>We'll never share your credentials.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default LoginForm;