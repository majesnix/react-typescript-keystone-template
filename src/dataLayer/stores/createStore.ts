import RootStore from "./RootStore";
import ExampleStore from "./ExampleStore";

const createStore = (): RootStore => {
  const rootStore = new RootStore({
    exampleStore: new ExampleStore({
      examples: [],
    }),
  });

  return rootStore;
};

export default createStore;
