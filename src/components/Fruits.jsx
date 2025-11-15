import React from "react";

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
          <li key={fruit}>
            {fruit.name} ${fruit.price} {fruit.color}
          </li>
        ))}
      </ul>
    </div>
  );
}
