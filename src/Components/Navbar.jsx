import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            student app
          </Typography>
          {/* <Button color="inherit">Sg</Button>
          <Button color="inherit">View</Button> */}
          <Button>
                    <Link to ='/t' style={{color:'white'}}>Sign in</Link>
                </Button>
                    
                <Button>
                    <Link to ='/w' style={{color:'white'}}>View</Link>
                </Button>
                <Button>
                    <Link to ='/c' style={{color:'white'}}>StudentList</Link>
                </Button>
                              
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar