import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "./StoreProvider";

const ExampleConsumer: React.FunctionComponent = () => {
  const { exampleStore } = useStore();

  useEffect(() => {
    exampleStore.getExamples();
  }, []);

  return (
    <>
      {exampleStore.examples.map((example) => (
        <div key={example.id}>{example.header}</div>
      ))}
    </>
  );
};

export default observer(ExampleConsumer);
