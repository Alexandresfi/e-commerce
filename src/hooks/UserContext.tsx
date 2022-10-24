import { useState, createContext, ReactNode, useContext } from "react";

export interface UserDataProps {
  id: number;
  username: string;
  firstName: string;
  image: string;
  token: string;
}

interface UserInfoData {
  userData: UserDataProps;
  loadUser: (data: UserDataProps) => void;
  logout: () => void;
}

interface ChildrenData {
  children: ReactNode;
}

const UserContext = createContext<UserInfoData>({} as UserInfoData);

export function UserProvider({ children }: ChildrenData) {
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps);

  const loadUser = async (data: UserDataProps) => {
    setUserData(data);
    await localStorage.setItem("ecommerceUser:userData", JSON.stringify(data));
  };

  const logout = async () => {
    await localStorage.removeItem("ecommerceUser:userData");
  };

  return (
    <UserContext.Provider value={{ userData, loadUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function UserData() {
  const context = useContext(UserContext);

  return context;
}
