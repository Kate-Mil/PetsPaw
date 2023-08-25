export const OrderBtns = ({ onClick }) => {
  const handleButtonClicked = order => {
    onClick(order);
  };

  const orders = ['ASC', 'DESC'];

  return (
    <ul>
      {orders.map(order => (
        <li key={order}>
          <button onClick={() => handleButtonClicked(order)}>{order}</button>
        </li>
      ))}
    </ul>
  );
};
