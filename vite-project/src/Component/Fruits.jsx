import Fruit from "./Fruit";
const Fruits = () => {
  const Fruits = [
    {
      name: "apple",
      price: 3,
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
      price: 4,
      emoji: "🥥",
    },
  ];
  return (
    <>
      <div>
        <ul>
          HELLO{" "}
          {Fruits.map((fruits) => (
            <Fruit
              key={fruits.name}
              name={fruits.name}
              price={fruits.price}
              emoji={fruits.emoji}
            />
            // <li key={fruits.name}>
            //   {fruits.emoji}
            //   {fruits.name} ${fruits.price}
            // </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Fruits;
