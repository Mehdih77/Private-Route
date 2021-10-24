import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function PrivateRoute({ children, ...rest }) {

  // children >>> is the component we passed
  // ...rest >>> is other thing like path & exact and ...

  const location = useLocation();

  const { isAuthenticated } = useAuth();
  return (
    <Route {...rest}>

      {isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login", // we redirect user to login page
            state: {
              from: location, //! using it for save current location pathname, after user loged in, user will came back to this path
            },
          }}
        />
      )}
    </Route>
  );
}
