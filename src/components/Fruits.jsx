import React from "react";
import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana"];
  const fruits = [
    { name: "Apple", price: 10, color: "red" },
    { name: "Mango", price: 7, color: "yellow" },
    { name: "Orange", price: 5, color: "orange" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            color={fruit.color}
          />
        ))}
      </ul>
    </div>
  );
}
