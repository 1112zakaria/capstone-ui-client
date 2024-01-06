import {
  useContext
} from "react";
import { AuthContext } from "../../providers/AuthProvider";

const HomePage = () => {
  const { authToken } = useContext(AuthContext);
  return (
    <>
      <h1>Hello, this is the homepage.</h1>
      <h1>User's auth token: {`${authToken}`}</h1>
    </>
  );
}

export default HomePage;