import RootStore from "./RootStore";
import ExampleStore from "./ExampleStore";
import Example from "../models/Example";

const createStore = (): RootStore => {
  const rootStore = new RootStore({
    exampleStore: new ExampleStore({
      examples: [new Example({})],
    }),
  });

  return rootStore;
};

export default createStore;
