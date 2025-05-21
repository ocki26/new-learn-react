const Hello = (props) => {
  const { person } = props;
  console.log(person);
  return (
    <>
      <input type="text" />
      <div>
        Hello {person.name}
        {person.message}
        {person.seatNumber}
      </div>
    </>
  );
};
export default Hello;
