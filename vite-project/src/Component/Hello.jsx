const Hello = (props) => {
  const { name, message } = props;
  return (
    <>
      <input type="text" />
      <div>
        Hello {name}
        {message}
      </div>
    </>
  );
};
export default Hello;
