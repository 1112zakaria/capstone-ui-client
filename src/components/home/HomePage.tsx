import { jwtDecode } from "jwt-decode";
import {
  useContext
} from "react";
import { AuthContext } from "../../providers/AuthProvider";

const HomePage = () => {
  const { authToken } = useContext(AuthContext);
  let loginName = null;

  if (authToken != null) {
    loginName = jwtDecode(authToken).iss;
  }
  console.log(loginName);
  return (
    <>
      <h1>Hello, this is the homepage.</h1>
      <h1>User's auth token: {`${authToken}`}</h1>
      <h1>User's login name: {`${loginName}`}</h1>

    </>
  );
}

export default HomePage;