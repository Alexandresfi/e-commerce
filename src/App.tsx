import { Footer } from "./Containers/Footer";
import { Header } from "./Containers/Header";
import { UserProvider } from "./hooks/UserContext";
import { Rotas } from "./Router";

function App() {
  return (
    <UserProvider>
      <Header />
      <Rotas />
      <Footer />
    </UserProvider>
  );
}

export default App;
