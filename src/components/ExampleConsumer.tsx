import { useStore } from "./StoreProvider";

const ExampleConsumer: React.FunctionComponent = () => {
  const { exampleStore } = useStore();

  return (
    <>
      {exampleStore.examples.map((example) => (
        <div>{example.id}</div>
      ))}
    </>
  );
};

export default ExampleConsumer;
