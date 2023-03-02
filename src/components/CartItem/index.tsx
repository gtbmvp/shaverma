import { add, remove } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

import { orange } from "@mui/material/colors";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { ICartShaverma } from "../../types";

import styles from "./cartItem.module.scss";

const CartItem: React.FC<ICartShaverma> = (item) => {
  const dispatch = useDispatch();

  const { id, photo, title, price, count } = item;

  return (
    <li className={styles.item} key={id}>
      <div className={styles.image}>
        <img src={`img/${photo}`} alt="Shaverma" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.count}>
        <AddCircleOutlineIcon
          sx={{ color: orange[900] }}
          onClick={() => dispatch(add(item))}
        />
        <span>{count}</span>
        <RemoveCircleOutlineIcon onClick={() => dispatch(remove(id))} />
      </div>
      <span className={styles.price}>{price * count} ₽</span>
    </li>
  );
};

export default CartItem;
