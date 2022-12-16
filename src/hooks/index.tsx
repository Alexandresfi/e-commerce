import { ReactNode } from "react";
import { MinicatProvider } from "./MinicartContext";
import { ResultSearchProvider } from "./ResultSearch";
import { UserProvider } from "./UserContext";
interface ChildrenProps {
  children: ReactNode;
}
export function AppProvider({ children }: ChildrenProps) {
  return (
    <UserProvider>
      <MinicatProvider>
        <ResultSearchProvider>{children}</ResultSearchProvider>
      </MinicatProvider>
    </UserProvider>
  );
}
