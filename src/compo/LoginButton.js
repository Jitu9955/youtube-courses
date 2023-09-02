import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";
import "./../Com/Hhead.css";
const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return isAuthenticated ? (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  ) : (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  );
};

export default LoginButton;
