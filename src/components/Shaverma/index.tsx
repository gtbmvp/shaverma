import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { add, remove } from "../../store/slices/cartSlice";

import { orange, blueGrey } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

import { IShaverma } from "../../types";

import styles from "./shaverma.module.scss";

const Shaverma: React.FC<IShaverma> = (item) => {
  const {
    id,
    title,
    ingredients,
    energy,
    protein,
    fats,
    carbohydrates,
    price,
    photo,
  } = item;

  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    const newItem = { id, title, price, photo, count: 1 };
    dispatch(add(newItem));
  };

  return (
    <div className={styles.item}>
      <div className={styles.imageBox}>
        {cart[id]?.count > 0 && (
          <DoneIcon
            className={styles.inCartIcon}
            sx={{ color: orange[900], fontSize: 54 }}
          />
        )}

        <Badge
          className={styles.badge}
          badgeContent={cart[id]?.count}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: orange[900],
            },
          }}
        />

        <ul className={styles.info}>
          <li>
            <span>Состав:</span> {ingredients.join(", ")}
          </li>
          <li>
            <span>Ккал:</span> {energy}
          </li>
          <li>
            <span>Белки/жиры/углеводы:</span> {protein}/{fats}/{carbohydrates}
          </li>
        </ul>
        <img className={styles.image} src={`img/${photo}`} alt="Shaverma" />
      </div>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.content}>
        <div className={styles.price}>{price} ₽</div>
        {cart[id]?.count > 0 ? (
          <div className={styles.buttons}>
            <AddCircleOutlineIcon
              sx={{ color: orange[900] }}
              fontSize="large"
              onClick={handleAddClick}
            />
            <RemoveCircleOutlineIcon onClick={() => dispatch(remove(id))} />
          </div>
        ) : (
          <Button
            variant="text"
            sx={{
              color: orange[900],
              borderRadius: 25,
              ":hover": {
                backgroundColor: blueGrey[50],
              },
            }}
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddClick}
          >
            Добавить
          </Button>
        )}
      </div>
    </div>
  );
};

export default Shaverma;
