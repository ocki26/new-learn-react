import Fruit from "./Fruit";
const Fruits = () => {
  const Fruits = [
    {
      name: "apple",
      price: 3,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "banana",
      price: 7,
      emoji: "🍌",
      soldout: true,
    },
    {
      name: "mango",
      price: 12,
      emoji: "🥭",
      soldout: false,
    },
    {
      name: "coconut",
      price: 4,
      emoji: "🥥",
      soldout: true,
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
              soldout={fruits.soldout}
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
