import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5"  >
          Add a User
        </Typography>
        <form className={classes.form} noValidate   onSubmit={
          async (event) => {
            const token = localStorage.getItem('token');
            event.preventDefault();
             try 
            {
                const response = await fetch(`http://192.168.1.12:8000/api/register/?token=${token}&username=${email}&password=${pass}&role_id=1`, {
                    method: 'POST'
                });
    
                const result = await response.json();
                if (result.success) 
                {
                  alert("The user has been successfully added.");
                  
                } 
                else 
                {
                    console.log("error");
                    
                }
            } 
            catch (err) 
            {
                console.log('err', err)
                alert("Please, try again.");
            }  
       }

        }  >
          <TextField
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          onChange={(event)=>{
            setPass(event.target.value)
          }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
       
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}