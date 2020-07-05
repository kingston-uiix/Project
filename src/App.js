import React from 'react';
import Navrbar from './Components/Navbar/Navbar'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Components/Search/Search'

function App() {
  return (
    <MuiThemeProvider>
    <div>
     <Navrbar/>
     <Search/>
     </div>
     </MuiThemeProvider>
  );
}

export default App;
