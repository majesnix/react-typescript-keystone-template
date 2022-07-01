import ExampleConsumer from "./components/ExampleConsumer";
import { StoreProvider } from "./components/StoreProvider";
import createStore from "./dataLayer/stores/createStore";

const rootStore = createStore();

function App() {
  return (
    <StoreProvider value={rootStore}>
      <ExampleConsumer />
    </StoreProvider>
  );
}

export default App;
