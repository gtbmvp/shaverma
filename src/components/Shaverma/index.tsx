import styles from "./shaverma.module.scss";

import { orange, blueGrey } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

import { IShaverma } from "../../types";

const Shaverma: React.FC<IShaverma> = ({
  title,
  ingredients,
  energy,
  protein,
  fats,
  carbohydrates,
  price,
  photo,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageBox}>
        <DoneIcon
          className={styles.inCartIcon}
          sx={{ color: orange[900], fontSize: 54 }}
        />
        <Badge
          className={styles.badge}
          badgeContent={4}
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
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default Shaverma;
