import { Footer } from "./Containers/Footer";
import { Header } from "./Containers/Header";
import { MinicatProvider } from "./hooks/MinicartContext";
import { UserProvider } from "./hooks/UserContext";
import { Rotas } from "./Router";

function App() {
  return (
    <UserProvider>
      <MinicatProvider>
        <Header />
        <Rotas />
        <Footer />
      </MinicatProvider>
    </UserProvider>
  );
}

export default App;
