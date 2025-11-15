export default function Fruit({ name, price, color }) {
  return (
    <div>
      <li>
        {name} {price} {color}
      </li>
    </div>
  );
}
