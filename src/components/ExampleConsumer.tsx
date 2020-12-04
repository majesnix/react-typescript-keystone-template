import RootStore from "../dataLayer/stores/RootStore";
import useInject from "../hooks/useInject";

const ExampleConsumer: React.FunctionComponent = () => {
  const Store = ({ exampleStore }: RootStore) => ({
    exampleStore,
  });

  const { exampleStore } = useInject(Store);

  return (
    <>
      {exampleStore.examples.map((example) => (
        <div>{example.id}</div>
      ))}
    </>
  );
};

export default ExampleConsumer;
