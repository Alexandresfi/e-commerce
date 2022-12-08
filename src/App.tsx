import { MinicatProvider } from "./hooks/MinicartContext";
import { UserProvider } from "./hooks/UserContext";
import { Rotas } from "./Router";

function App() {
  return (
    <UserProvider>
      <MinicatProvider>
        <Rotas />
      </MinicatProvider>
    </UserProvider>
  );
}

export default App;
