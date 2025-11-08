import { useAppContext } from "./../context/AppContext";

function Cart() {
  const { state, dispatch } = useAppContext();

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <>
      <h3>Cart Total: {state.cart.total}</h3>
      <button onClick={() => addToCart({ id: 1, name: "MacBook", price: 2000 })}>
        Add to Cart
      </button>
    </>
  );
}

export default Cart;