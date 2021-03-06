import { createContext, ReactElement, useState } from "react";
import { IUser, IUserContext } from "../type";

interface UserContextCompProps {
  children: ReactElement;
}

const UserContext = createContext<IUserContext>({} as IUserContext);
const UserContextComp = (props: UserContextCompProps) => {
  const loggedInUser = localStorage.getItem("user");
  const loggedInUserObj : IUser = loggedInUser ? JSON.parse(loggedInUser) : {};
  const [user, setUser] = useState<IUser>(loggedInUserObj);

  return <UserContext.Provider value={{ user, setUser }}>
    {props.children}
  </UserContext.Provider>
}

export { UserContextComp, UserContext };