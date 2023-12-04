import React from 'react'

// Material UI Imports
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {

    //Password Field
  const [showPassword, setShowPassword] = React.useState(false);

  // Inputs
  const [emailInput, setemailInput] = useState();
  const [passwordInput, setpasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();

  // Input Errors
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  //Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // Validation for onBlur Email
  const handleEmail = () => {
    if(!isEmail(emailInput)){
      setemailError(true);
      return;
    }
    setemailError(false);
  }

  // Validation for onBlur Password
  const handlePassword = () => {
    if(!passwordInput || passwordInput.length < 5 || passwordInput.length > 20){
      setpasswordError(true);
      return;
    }
    setpasswordError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);
    
    if(emailError || !emailInput){
      setFormValid("Email is inValid. Please Re-Enter");
      return;
    }

    if(passwordError || !passwordInput){
      setFormValid("Password is set to 5 - 20 Characters. Please Re-Enter");
      return;
    }
    setFormValid(null);
    setSuccess("Form Submitted Successfully");

    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("RememberUser : " + rememberMe);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return (
        <div>
            <p>
            <TextField id="standard-basic" error={emailError} label="E-mail" value={emailInput} onChange={(event) => setemailInput(event.target.value)} onBlur={handleEmail} variant="standard" fullWidth size="small" />
            </p>

            <p>
        <FormControl sx={{ width: '100%' }} variant="filled">
          <InputLabel error={passwordError} htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            fullWidth error={passwordError}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput} onBlur={handlePassword} onChange={(event) => setpasswordInput(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          </p>

          <div align="left">
          <Checkbox
      onChange={(event) => setRememberMe(event.target.checked)}
      inputProps={{ 'aria-label': 'controlled' }} />{" "} Remember Me
          </div>

          <p>
          <Button onClick={handleSubmit} fullWidth variant="contained" startIcon={<LoginIcon />}>SIGN UP</Button>
          </p>

          <p>
            {formValid && (
              <Alert severity="error">{formValid}</Alert>
            )}

            {success && (
              <Alert severity="success">{success}</Alert>
            )}
          </p>
        </div>
    )
}