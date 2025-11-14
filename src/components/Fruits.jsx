import React from "react";

export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li kry={fruit}> {fruit} </li>
        ))}
      </ul>
    </div>
  );
}
