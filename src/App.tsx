import { AppProvider } from "./hooks";
import { Rotas } from "./Router";

function App() {
  return (
    <AppProvider>
      <Rotas />
    </AppProvider>
  );
}

export default App;
