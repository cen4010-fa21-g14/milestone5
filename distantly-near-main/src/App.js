import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import Settings from "./pages/settings/Settings";
// import MenuIcon from '@mui/icons-material/Menu';
// import {Person, Agriculture } from '@mui/icons-material';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext} from "react";


function App() {

  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register />}
        </Route>
        <Route path="/search">
        {user ? <Search/> : <Login/>}
        </Route>
        <Route path="/settings/:_id">
        {user ? <Settings/> : <Login/>}
        </Route>
        <Route path="/profile/:username">
        {user ? <Profile/> : <Login/>}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
