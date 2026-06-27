import { useContext } from "react";
import UserContext from "./UserContext";  // ✅ Import the context

function User() {
  const name = useContext(UserContext);

  return <h1>Welcome {name}</h1>;
}

export default User;
