const Fruits = () => {
  const Fruits = [
    {
      name: "apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "banana",
      price: 7,
      emoji: "🍌",
    },
    {
      name: "mango",
      price: 12,
      emoji: "🥭",
    },
    {
      name: "coconut",
      price: 46,
      emoji: "🥥",
    },
  ];
  return (
    <>
      <div>
        <ul>
          HELLO{" "}
          {Fruits.map((fruits) => (
            <li key={fruits.name}>
              {fruits.emoji}
              {fruits.name} ${fruits.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Fruits;
