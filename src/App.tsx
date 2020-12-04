import { StoreProvider } from "./components/StoreProvider";
import createStore from "./dataLayer/stores/createStore";

const rootStore = createStore();

function App() {
  return (
    <StoreProvider value={rootStore}>
      <div className="App">Init</div>
    </StoreProvider>
  );
}

export default App;
