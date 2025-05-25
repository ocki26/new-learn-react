import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
  const display = false;

  return display ? <Welcome /> : <Code />;
};
export default ConditionalComponent;
