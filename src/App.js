import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Events from './Components/Events/Events';
import Blog from './Components/Blog/Blog';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Login/Login';
import initializeAuthentication from './firebase/firebase-init';
import Register from './Components/Register/Register';
import Admins from './Components/Admins/Admins';

initializeAuthentication()
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/donation">
          <Donation></Donation>
        </Route>
        <Route path="/events">
          <Events></Events>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/admin">
          <Admins></Admins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
