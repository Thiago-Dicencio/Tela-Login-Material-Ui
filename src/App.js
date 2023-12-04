import logo from './logo.svg';
import './App.css';

// Material UI imports
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import { Padding } from '@mui/icons-material';
import Login from './fmrCtrl/login';
import SignUp from './fmrCtrl/signup';

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Paper elevation={3} style={{ padding: "10px" }}>

      {checked ? (
      <Chip icon={<FaceIcon />} label="Login" color="primary" variant="outlined" />
    ) : (  

      <Chip icon={<LockIcon />} label="Sign up" color="primary" variant="outlined" />
    )}

      <br />

      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }} />
      

      <br />
      {checked ? <Login /> : <SignUp />}
      </Paper>
    </div>
  );
}

export default App;
