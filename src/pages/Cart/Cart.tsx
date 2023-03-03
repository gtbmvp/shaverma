import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart } from "../../store/slices/cartSlice";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import CartItem from "../../components/CartItem";

import emptycart from "../../assets/img/emptycart.webp";

import styles from "./cart.module.scss";

const Cart: React.FC = () => {
  const { items, totalCount, totalPrice } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  return (
    <main>
      <div className="container">
        {totalCount <= 0 ? (
          <div className={styles.empty}>
            <img src={emptycart} width={480} alt="пустая корзина" />
          </div>
        ) : (
          <div className={styles.cart}>
            <div className={styles.top}>
              <h1 className={styles.title}>Корзина</h1>
              <button
                className={styles.clear}
                onClick={() => dispatch(clearCart())}
              >
                Очистить корзину
                <DeleteIcon />
              </button>
            </div>
            <ul className={styles.list}>
              {items.map(
                (item) => item.count > 0 && <CartItem key={item.id} {...item} />
              )}
            </ul>
            <div className={styles.bottom}>
              <p>
                Всего шаверм: <span>{totalCount}</span> шт. на сумму:{" "}
                <span>{totalPrice}</span> рублей
              </p>
              <Button
                variant="contained"
                color="success"
                startIcon={<CreditCardIcon />}
              >
                Оплатить {totalPrice} ₽
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
