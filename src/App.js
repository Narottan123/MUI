import { AppBar, Button, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material";
import Form from "./components/Form";
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [value,setvalue]=useState(0);
  return (
    <>
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Logo</Typography>
          <Tabs sx={{marginLeft:"auto"}}>
            <Tab label="Home"/>
            <Tab label="About"/>
            <Tab label="Contact"/>
          </Tabs>
        </Toolbar>
      </AppBar>
      {/*<Typography variant="h3" sx={{color:"red"}}>MUI TUTORIAL</Typography>
      <Button variant="contained" color="success" sx={{padding:"20px"}} onClick={()=>alert('you clicked')}>Click Me</Button>
      <br/><br/>
      <TextField type="text" placeholder="name" variant="outlined"sx={{padding:"20px"}}/>
  <Form/>*/}
    </div>
    <div style={{marginTop:"100px"}}>
      <Cards/>
    </div>
    </>
    
  );
}

export default App;
