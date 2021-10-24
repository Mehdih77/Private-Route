import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Panel from "./components/Panel";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <>
      <ul className='navbar'>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/panel">Panel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>


        <PrivateRoute path="/panel">
          <Panel />
        </PrivateRoute>


        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
