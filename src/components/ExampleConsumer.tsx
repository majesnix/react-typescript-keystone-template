import { useStore } from "./StoreProvider";

const ExampleConsumer: React.FunctionComponent = () => {
  const { exampleStore } = useStore();

  return (
    <>
      {exampleStore.examples.map((example) => (
        <div key={example.id}>{example.header}</div>
      ))}
    </>
  );
};

export default ExampleConsumer;
