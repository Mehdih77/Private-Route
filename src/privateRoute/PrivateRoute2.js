import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function PrivateRoute2({ component: Component, ...rest }) {
  
    const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}
