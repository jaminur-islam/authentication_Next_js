import React from "react";
import { providers, getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

const Login = () => {
  const dd = useSession();
  console.log(dd);
  return (
    <div>
      <h1> login </h1>
    </div>
  );
};

/* Login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
}; */

export default Login;
