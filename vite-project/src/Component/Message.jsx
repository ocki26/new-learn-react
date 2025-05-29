import Fruit from "./Fruit";

const Message = () => {
  const HandelClick = () => {};
  return (
    <>
      <div>
        <button onClick={HandelClick()}>click here to get a message</button>
      </div>
    </>
  );
};
export default Message;
