const CartItem = ({ id, nombre, price, quantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{nombre}</h3>
        <p>Precio: ${quantity * price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={() => onRemove(id)}>Quitar</button>
    </div>
  );
};

export default CartItem;
