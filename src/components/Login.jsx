import { useLayoutEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function Login() {
  
  const history = useHistory();
  const location = useLocation();
  const { signInWithEmailAndPassword, isAuthenticated, isPending } = useAuth();

  // from is saved in location state in "PrivateRoute"
  // after || >>reason >>>>> for default path
  const { from } = location.state || { from: { pathname: "/" } };

  useLayoutEffect(() => {
    if (isAuthenticated) {
      history.replace(from); //! if user loged in,, dont show the login page &&& also using replace for cant back to the login page
    }
  }, [from, history, isAuthenticated]);

  return (
    <>
      {isPending ? (
        <p className='pending'>Loading...</p>
      ) : (
        <button onClick={() => signInWithEmailAndPassword("7learn", 1)}>
          Login
        </button>
      )}
    </>
  );
}
