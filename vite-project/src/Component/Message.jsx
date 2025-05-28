import Fruit from "./Fruit";

const Message = () => {
  const HandelClick = () => {
    console.log("button click");
  };
  return (
    <>
      <div>
        <button onClick={HandelClick()}>click here to get a message</button>
      </div>
    </>
  );
};
export default Message;
